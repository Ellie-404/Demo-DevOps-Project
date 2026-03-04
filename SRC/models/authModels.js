
import { supabase } from "../config/supabase.js";

export async function registerUsers(username){
    return await supabase
    .from("Users")
    .insert([{
        Username: username
    }])
    .select();
}