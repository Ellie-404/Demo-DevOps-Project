
import { registerMachines } from "../models/machineModels.js";
import { getAllMachines } from "../models/machineModels.js";

export async function regMachine(req, res){
    const {machineName, serialNumb} = req.body; //Body from frontend

    console.log("machineController machineName: ", machineName);
    console.log("machineController serialNumb: ", serialNumb);

    const { data: registerMachine } = await registerMachines(machineName, serialNumb);

    console.log("machineController test delivery of database", registerMachine)
    if(registerMachine){
        console.log("machineController register: machine registered");
        return res.json({registerMachine});
    }else{
        console.log("machineController register: machine not registered")
        return res.json({success: false});
    }
}

export async function list(req, res){
    const {data:allMachines} = await getAllMachines();
    console.log("machineController get all machine info: ", allMachines);
    return res.json({allMachines});
}