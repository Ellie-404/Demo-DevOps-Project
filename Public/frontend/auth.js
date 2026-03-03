
async function authentication(){// This function should not run with anything else.
    const username = document.getElementById("username").value; 

    console.log("username input: " + username);

    if(!username){
        console.log("Missing username...");
    }

    // can never run alone... needs a catch.
    try{    
        //authReq awaits a link and then sends over info/data to backend.
        const authReq = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers:{
                "content-type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({username})
        });
        
        const authRes = await authReq.json();
    
    } catch(error){
        console.log("Try did not work...");
    }
}

