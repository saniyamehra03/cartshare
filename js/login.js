const mobileInput = document.getElementById("mobile");
const joinBtn = document.getElementById("joinBtn");

joinBtn.addEventListener("click", function(){

    const mobileNumber = mobileInput.value.trim();
    if(mobileNumber === "")
    {
        alert("Please enter your mobile number.");
        return;
    }
     
    const mobilePattern = /^[0-9]{10}$/;
    if(!mobilePattern.test(mobileNumber))
    {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    alert("Login Successful!");
});
