
import bcrypt from "bcryptjs";

export async function hashThePassword(regPassword){
    console.log("authService password in tekst", regPassword);

    try {
        return await bcrypt.hash(regPassword, 10);
    } catch (error){
        console.log("Hashing failed");
    }
}