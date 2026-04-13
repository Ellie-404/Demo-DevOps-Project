
async function register(){// This function should not run with anything else.
    const regUsername = document.getElementById("regUsername").value; 
    const regPassword = document.getElementById("regPassword").value;

    const regStatusMsg = document.getElementById("regStatus");

    console.log("username input: " + regUsername);
    console.log("password input:" + regPassword);

    if(!regUsername || !regPassword){
        console.log("Missing username or password...");
    }

    // can never run alone... needs a catch.
    try{    
        //authReq awaits a link and then sends over info/data to backend.
        const authReq = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({regUsername, regPassword})
        });

        const authRes = await authReq.json();
        console.log(authRes);

        if(authRes.success === true){
            regStatusMsg.textContent = "User registered";
            regStatusMsg.style.color = "green";
        }else{
            regStatusMsg.textContent = "User not registered";
            regStatusMsg.style.color = "red";
        }
    
    } catch(error){
        console.log("Try did not work...");
    }
}

async function authenticate(){// This function should not run with anything else.
    const loginUsername = document.getElementById("loginUsername").value; 
    const loginPassword = document.getElementById("loginPassword").value;

    const logStatusMsg = document.getElementById("loginStatus");

    console.log("username input: " + loginUsername);
    console.log("password input:" + loginPassword);

    if(!loginUsername || !loginPassword){
        console.log("Missing username or password...");
    }

    // can never run alone... needs a catch.
    try{    
        //authReq awaits a link and then sends over info/data to backend.
        const logReq = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({loginUsername, loginPassword})
        });

        const logRes = await logReq.json();
        console.log(logRes);

        if(logRes.success === true){

            window.location.href = "start"
            logStatusMsg.textContent = "success!";
            logStatusMsg.style.color = "green";
        }else{
            logStatusMsg.textContent = "Wrong username or password";
            logStatusMsg.style.color = "red";
        }
    
    } catch(error){
        console.log("Try did not work...");
    }
}

