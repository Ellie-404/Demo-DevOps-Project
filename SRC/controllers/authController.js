
import { registerUsers } from "../models/authModels.js";

//Export of data from login
export async function login(req, res){
    const username = req.body; //Body from frontend

    console.log("authController username: ", username);

    const { data: registerUser } = await registerUsers(username);

    console.log("authController testing transport of database ", registerUser);
}


