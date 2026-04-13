
async function verifyLogIn(){
    try {
        const verification = await fetch ("http://localhost:3000/api/auth/verify", {
            method:"GET",
            credentials: "include"
        })

        console.log(verification.status);

        if (verification.status !== 200)
        {
            window.location.href = "/";
        }
    } catch (error) {
        console.log("verification failed");
    }
}

async function logOut1(){
    try{
        const logOut = await fetch("http://localhost:3000/api/auth/logOut", {
            method: "GET",
            credentials:"include"
        })

        if(logOut.status === 200){
            verifyLogIn();
        }
    }catch(error){
        console.log("log out failed")
    }
}

document.addEventListener("DOMContentLoaded", verifyLogIn);