const mobileInput = document.getElementById("mobile");
const joinBtn = document.getElementById("joinBtn");
const roomCodeInput = document.getElementById("roomCode");
const createRoomBtn = document.getElementById("createRoomBtn");

joinBtn.addEventListener("click", function(){
      console.log("Join Room button clicked");

    const mobileNumber = mobileInput.value.trim();
    const roomCode = roomCodeInput.value.trim();
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

    if(roomCode ===""){
        alert("Please enter the room code.");
        return;
    }

    localStorage.setItem("mobileNumber", mobileNumber);
    localStorage.setItem("roomCode", roomCode);

    console.log("Mobile:", localStorage.getItem("mobileNumber"));
    console.log("Room:", localStorage.getItem("roomCode"));

    alert("Joined Room Successfully!");

    window.location.href = "cart.html";
});
createRoomBtn.addEventListener("click" , function(){
    console.log("Create Room button clicked");

    const mobileNumber = mobileInput.value.trim();

    if(mobileNumber=== ""){
        alert("Please enter your mobile number.");
        return;
    }

    const mobilePattern = /^[0-9]{10}$/;

    if (!mobilePattern.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const roomCode = Math.random()
    .toString(36)
    .substring(2,8)
    .toUpperCase();
     
    localStorage.setItem("mobileNumber", mobileNumber);
    localStorage.setItem("roomCode", roomCode);

    console.log("Mobile:", localStorage.getItem("mobileNumber"));
    console.log("Room:", localStorage.getItem("roomCode"));
       
    alert("Room Created Successfully!\nRoom Code: " + roomCode);

    window.location.href = "cart.html";
})
