
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