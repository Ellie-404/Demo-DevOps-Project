
async function register(){// This function should not run with anything else.
    const regUsername = document.getElementById("regUsername").value; 
    const regPassword = document.getElementById("regPassword").value;

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
    
    } catch(error){
        console.log("Try did not work...");
    }
}

