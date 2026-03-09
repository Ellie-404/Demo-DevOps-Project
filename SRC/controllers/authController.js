
import { registerUsers } from "../models/authModels.js";

//Export of data from login
export async function login(req, res){
    const {username, password} = req.body; //Body from frontend

    console.log("authController username: ", username);
    console.log("authController password: ", password);

    const { data: registerUser } = await registerUsers(username, password);

    console.log("authController testing transport of database ", registerUser);
}


