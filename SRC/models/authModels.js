
import { supabase } from "../config/supabase.js";

export async function registerUsers(username, password){
    return await supabase
    .from("Users")
    .insert([{
        Username: username,
        Password: password
    }])
    .select();
}