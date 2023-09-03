use std::{thread,process::{Command,Stdio}};

fn main() {
    let  mut handle = thread::spawn(||{
        let command =Command::new("yarn")
        .args(["--cwd","./backend/","dev"])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("ls command failed to start");
    let output = command
    .wait_with_output()
    .expect("failed to wait on child");
        println!("{:?}",String::from_utf8(output.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    let  mut sec_handle = thread::spawn(||{
        let command =Command::new("sudo")
        .args(["yarn","--cwd","./localnas/","dev"])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("ls command failed to start");
    let output = command
    .wait_with_output()
    .expect("failed to wait on child");
        println!("{:?}",String::from_utf8(output.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    
    // let ecode = child.wait()
    //                  .expect("failed to wait on child");
    
    // first();
     println!("Hello");
     handle.join().unwrap();
     sec_handle.join().unwrap();
}