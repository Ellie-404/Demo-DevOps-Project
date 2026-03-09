
import { supabase } from "../config/supabase.js";

export async function registerUsers(regUsername, regPassword){
    return await supabase
    .from("Users")
    .insert([{
        Username: regUsername,
        Password: regPassword
    }])
    .select();
}