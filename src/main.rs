// #[allow(unused_variables)]
use std::{thread::{self, JoinHandle},process::{Command,Stdio}};
use std::io::stdin;
use serde::{Deserialize, Serialize};
use std::path::Path;
// use std::process::exit;
use std::fs::File;
use std::io::prelude::*;

#[derive(Serialize, Deserialize)]
struct Configuration {
    // configured: bool,
    path: String
}




fn backend_api()-> JoinHandle<()>{
    let api_thread = thread::spawn(||{
        let command1 =Command::new("yarn")
        .args(["--cwd","/usr/share/localnas/backend/","dev"])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("Backend failed to start!");
    let api_output = command1
    .wait_with_output()
    .expect("Failed Error!");
        println!("{:?}",String::from_utf8(api_output.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    return api_thread;
}

fn website()-> JoinHandle<()>{
    let website_thread = thread::spawn(||{
        let command2 =Command::new("sudo")
        .args(["yarn","--cwd","/usr/share/localnas/localnas","start"])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("command failed to start");
    let website_output = command2
    .wait_with_output()
    .expect("failed to wait on child");
        println!("{:?}",String::from_utf8(website_output.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    return website_thread;
}

fn fmgr(path: String)-> JoinHandle<()>{
    let fmgr_thread: JoinHandle<()> = thread::spawn(move||{
        let command3 =Command::new("node")
        .args(["/usr/share/localnas/backend/fmgr.mjs",&path])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("command failed to start");
    let fmgr_output = command3
    .wait_with_output()
    .expect("failed to wait on child");
        println!("{:?}",String::from_utf8(fmgr_output.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    return fmgr_thread;
}

fn run_server(path: String){
    backend_api();
    fmgr(path);
    let web_handle = website();
    web_handle.join().unwrap();
}

fn write_config(path:&Path,content:&String){
    let mut file = File::create(&path).expect("Error in creating file!!");
    file.write_all(content.as_bytes()).expect("Error writing the file!!");
}

fn read_json_typed(raw_json: &str) -> Configuration {
    let parsed: Configuration = serde_json::from_str(raw_json).unwrap();
    return parsed
    
}
fn main() {
    let path = Path::new("./.server_conf.json");
    let mut dir_path = String::new();


    if path.exists() {
        println!("Server Configured!");
        let mut readed_config:String =  String::from("");
        let mut file = File::open(path).expect("msg");
        file.read_to_string(&mut readed_config).expect("msg");
        let config = read_json_typed(&readed_config);
        println!("{}",config.path);
        dir_path = config.path;
    }else{
        println!("Give path for the NAS:");
        stdin().read_line(&mut dir_path).expect("Error");
        dir_path.pop();
        let config = Configuration {path: String::from(&dir_path) };
        let json = serde_json::to_string(&config).unwrap();
        write_config(&path, &json);
    };
    let server = thread::spawn(move||{
        run_server(dir_path);
    });
    
    server.join().unwrap();
}

