
import { registerUsers } from "../models/authModels.js";
import { loginUser} from "../models/authModels.js";
import { hashThePassword } from "../services/authService.js";

//Export of data from login, receives requests (req) and sends respond (res)
export async function register(req, res){
    const {regUsername, regPassword} = req.body; //Body from frontend

    console.log("authController username: ", regUsername);
    console.log("authController password: ", regPassword);

    //const { data: registerUser } = await registerUsers(regUsername, regPassword);
    const hashPassword = await hashThePassword(regPassword);

    console.log("authController hashPassword ", regPassword);

    const { data:registerUser} = await
    registerUser(regUsername, hashPassword); //awaits answer from authModels.js

    console.log("authController test delivery of database", registerUser)
    if(registerUser){
        console.log("authController register: User registered");
        return res.json({success: true});
    }else{
        console.log("authController register: User not registered")
        return res.json({success: false});
    }
}

export async function login(req, res){
    const {logUsername, logPassword} = req.body;

    console.log("authController logUsername", logUsername);
    console.log("authController logPassword", logPassword);

    const {data:logUser} = await loginUser(logUsername, logPassword);
    console.log("authController logUser (info from database)", logUser);

    if(logUser){
        console.log("authController user logged inn");
        return res.json({ success: true});
    }else {
        console.log("authController user not logged inn");
        return res.json({ success: false});
    }
}