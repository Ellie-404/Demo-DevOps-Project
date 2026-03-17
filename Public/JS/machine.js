
async function regMachine(){// This function should not run with anything else.
    const machineName = document.getElementById("machineName").value; 
    const serialNumb = document.getElementById("serialNumb").value;

    console.log("machine name input: " + machineName);
    console.log("Serial number input:" + serialNumb);

    if(!machineName || !serialNumb){
        console.log("Missing Name or Serial...");
    }

    try{    
        //machineReq awaits a link and then sends over info/data to backend.
        const machineReq = await fetch("http://localhost:3000/api/machine/regMachine", {
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({machineName, serialNumb})
        });

        const machineRes = await machineReq.json();
        console.log(machineRes);

        if(machineRes.success === true){
            regStatusMsg.textContent = "User registered";
            regStatusMsg.style.color = "green";
        }else{
            regStatusMsg.textContent = "User not registered";
            regStatusMsg.style.color = "red";
        }
    
    } catch(error){
        console.log("Try did not work...");
    }
}
