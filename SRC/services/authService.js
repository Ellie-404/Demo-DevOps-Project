
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export async function hashThePassword(regPassword){
    console.log("authService password in text", regPassword);

    try {
        return await bcrypt.hash(regPassword, 10);
    } catch (error){
        console.log("Hashing failed");
    }
}

export async function checkHashedPassword(loginPassword, hashedThePassword)
{
    console.log("authService login password", loginPassword);

    const validatePassword = await bcrypt.compare(loginPassword, hashedThePassword);

    if (!validatePassword)
    {
        return { success: false };
    }
    else
    {
        return { success: true };
    }
}


export async function generateToken(tokenPayLoad){

    try{
        const secret = process.env.JWT_SECRET;
        const expiresIn = process.env.JWT_EXPIRES;

        const token = jwt.sign(tokenPayLoad, secret, {expiresIn, audience: "app", issuer:"DEVOPS"});

        return token;

    }catch(error){
        throw error;
    }
}