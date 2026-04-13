
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
            regStatusMsg.textContent = "Machine registered";
            regStatusMsg.style.color = "green";
        }else{
            regStatusMsg.textContent = "Machine not registered";
            regStatusMsg.style.color = "red";
        }
    
    } catch(error){
        console.log("Try did not work...");
    }
    fetchMachineInfo();
}

async function fetchMachineInfo(){
    try{
        const allMachineReq = await fetch("http://localhost:3000/api/machine/list");
        const allMachineRes = await allMachineReq.json();
        console.log(allMachineRes);

        const machineDiv = document.getElementById("machineDiv");
        machineDiv.innerHTML ='';

        allMachineRes.allMachines.forEach(machine => {
            const machineElement = document.createElement("div");
            machineElement.className = "machines";
            machineElement.innerHTML = 
            `
                <p>MachineName: ${machine.Machine_name}</p>
                <p>SerialNumb: ${machine.Serial}</p>
                <p>MachineID: ${machine.machineID}</p>
            `;
            machineDiv.appendChild(machineElement);
        });

    }catch (error){
        console.log("Failed to get Machine info...")
    }
}

document.addEventListener("DOMContentLoaded", fetchMachineInfo);
