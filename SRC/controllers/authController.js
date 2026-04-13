
import { registerUsers } from "../models/authModels.js";
import { loginUser } from "../models/authModels.js";
import { hashThePassword } from "../services/authService.js";
import { checkHashedPassword} from "../services/authService.js"
import { generateToken } from "../services/authService.js";

//Export of data from login, receives requests (req) and sends respond (res)
export async function register(req, res){
    const {regUsername, regPassword} = req.body; //Body from frontend

    console.log("authController: username: ", regUsername);
    console.log("authController: password: ", regPassword);

    //const { data: registerUser } = await registerUsers(regUsername, regPassword);
    const hashPassword = await hashThePassword(regPassword);
    console.log("authController: hashPassword ", regPassword);

    const { data:registerUser} = await registerUsers(regUsername, hashPassword); //awaits answer from authModels.js

    console.log("authController: test delivery of database", registerUser)
    if(registerUser){
        console.log("authController: register: User registered");
        return res.json({success: true});
    }else{
        console.log("authController: register: User not registered")
        return res.json({success: false});
    }
}

export async function login(req, res){
    const {loginUsername, loginPassword} = req.body;

    console.log("authController: logUsername", loginUsername);
    console.log("authController: logPassword", loginPassword);

    const {data:logUser} = await loginUser(loginUsername, loginPassword);
    console.log("authController: logUser (info from database)", logUser);
    const checkPassword = await checkHashedPassword(loginPassword , logUser.Password);

    console.log(logUser);
    if(checkPassword.success === true){
        const tokenPayLoad = {
            sub: string(logUser.UserID),
            username: logUser.Username
        }

        const generateJWT = await generateToken(tokenPayLoad)
        console.log(generateJWT);

        return res.cookie("jwt", generateJWT, {
            httpOnly:true,
            secure:false,
            sameSite:"strict",
            maxAge: 1000*60
        })
        .json({
            success:true,
            user: 
            {
                id: tokenPayLoad.sub,
                username: tokenPayLoad.username
            },
        })

    }else {
        console.log("authController: user not logged inn");
        return res.json({ success: false});
    }
}

export async function verify(req, res){
    res.json({
        logIn:true,
        user: req.user
    })
}