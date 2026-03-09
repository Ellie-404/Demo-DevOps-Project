
import { registerUsers } from "../models/authModels.js";

//Export of data from register
export async function register(req, res){
    const {regUsername, regPassword} = req.body; //Body from frontend

    console.log("authController username: ", regUsername);
    console.log("authController password: ", regPassword);

    const { data: registerUser } = await registerUsers(regUsername, regPassword);

    console.log("authController testing transport of database ", registerUser);
}


