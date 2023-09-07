const members=["Kalpa07","Aditi34","Rohan_11"];
const emails=["Kalpa07@gmail.com","Aditi34@gmail.com","Rohan_11@gmail.com"];

let i=0;

function validate1()
{
    var user= document.getElementById("username");
    var email=document.getElementById("username");
    var pass=document.getElementById("password");
    if(email.value=="")
    {
        alert("You have not entered Username or Email-Id");
        return false;
    }
    else if(pass.value == "")
    {
        alert("You have not entered Password");
        return false;
    }
    else if(user.value != "")
    {
        let flag=0;
        for (i = 0; i < members.length; i++) 
        {
            if(members[i] == user.value)
            {
                flag=1;
                return true;
            }  
            if(emails[i] == email.value)
            {
                flag=1;
                return true;
            }  
        }
        
       
        if(flag==0)
        {
            alert("Invalid Username or Email-Id");
            return false;
   
        }
    }
    else
    {
        return true;
    }


}





function validate2()
{
    var user= document.getElementById("username");
    var email=document.getElementById("email");
    var em=/([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,10})(.[a-z]{2,10})?/;
    var pass=document.getElementById("password");
    //var p=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%&?]).*$/;
    var repass=document.getElementById("repassword");
    if(user.value == "")
    {
        alert("Invalid Username");
        return false;
    }
    else if(email.value == "")
    {
        alert("Invalid Email-Id");
        return false;
    }
    else if(em.test(email.value) == false)
    {
        alert("Invalid Email");
        return false;
    }
    else if(pass.value == "")
    {
        alert("Enter a Strong Password");
        return false;
    }

    else if(pass.value.length<8 ||pass.value.length>15)
    {
        alert("Length of the password must be between 8 and 15 characters ")
    }
    else if(repass.value != pass.value)
    {
        alert("Password does not match");
        return false;
    }
    else
    {
        alert("Username :"+user.value+""
        +"Email-Id :"+email.value
        +"Password :"+pass.value);


        return true;
    }
}