
import { supabase } from "../config/supabase.js";

export async function registerUsers(regUsername, hashPassword){
    return await supabase
    .from("Users")
    .insert([{
        Username: regUsername,
        Password: hashPassword
    }])
    .select();
}

export async function loginUser (loginUsername, logPassword){
    return await supabase
    .from("Users")
    .select("UserID, Username, Password")
    .eq("Username", logUsername)
    .single();
}