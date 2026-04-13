
import { supabase } from "../config/supabase.js";

export async function registerMachines(machineName, serialNumb){
    return await supabase
    .from("Machines")
    .insert([{
        Machine_name: machineName,
        Serial: serialNumb
    }])
    .select();
}

export async function getAllMachines(){
    return await supabase
        .from("Machines")
        .select("*");
}