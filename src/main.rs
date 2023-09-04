// #[allow(unused_variables)]
use std::{thread,process::{Command,Stdio}};

fn main() {
    let handle = thread::spawn(||{
        let command1 =Command::new("yarn")
        .args(["--cwd","./backend/","dev"])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("command failed to start");
    let output1 = command1
    .wait_with_output()
    .expect("failed to wait on child");
        println!("{:?}",String::from_utf8(output1.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    let sec_handle = thread::spawn(||{
        let command2 =Command::new("sudo")
        .args(["yarn","--cwd","./localnas/","dev"])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("command failed to start");
    let output2 = command2
    .wait_with_output()
    .expect("failed to wait on child");
        println!("{:?}",String::from_utf8(output2.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    let third_handle = thread::spawn(||{
        let command3 =Command::new("node")
        .args(["./backend/fmgr.mjs"])
        // .arg("")
        .stdout(Stdio::piped())
        .spawn()
        .expect("command failed to start");
    let output3 = command3
    .wait_with_output()
    .expect("failed to wait on child");
        println!("{:?}",String::from_utf8(output3.stdout));
    // println!("status: {}", String::from(&output.stdout.take().unwrap()));

    });
    //  handle.join().unwrap();
    match handle.join() {
        Ok(_result) => {
            match sec_handle.join() {
                Ok(_result) => {
                    third_handle.join().unwrap();
                    // handle success case with result
                },
                Err(_) => {
                    // handle error case
                }
            };
            // handle success case with result
        },
        Err(_) => {
            // handle error case
        }
    };
     
     
}