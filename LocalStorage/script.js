function submit(){
    const name = document.getElementById("fullName").value.trim()
    const email = document.getElementById("email").value.trim()
    const phoneNumber = document.getElementById("phoneNumber").value.trim()

    if(!name || !email || !phoneNumber){
        alert("all fields required");
        document.querySelectorAll("input").forEach((element) => (element.value = ""));
        return;
    }
    if(!validate())
    {
        return;
    }

    // const tempData = {
    //     Name: "fullName",
    //     email: "email",
    //     phone: "phoneNumber"
    // }

    const oldData = localStorage.getItem('Data');

    let tempdata = JSON.parse(oldData) || [];

    // if(!oldData){
    //     tempdata = []
    // } else {
    //     tempdata = JSON.parse(oldData);
    // }

    tempdata.push({
        Name: name,
        Email: email,
        Phone: phoneNumber,
    });

    const Data = JSON.stringify(tempdata)

    localStorage.setItem("Data", Data)
}

function reset(){
    document.querySelectorAll("input").forEach((element) => (element.value = ""));
}

function validate(){
    const name = document.getElementById("fullName").value.trim()
    const email = document.getElementById("email").value.trim()
    const phoneNumber = document.getElementById("phoneNumber").value.trim()
    let isValid = "true";
    document.querySelectorAll("input").forEach((element) => (element.value = ""));

    if(!/^[a-zA-Z]+$/.test(name) || name.length < 3)
    {
        document.getElementById("nameError").innerText = "Only aplhabets and spaces are allowed, Must be Atleast 3 characters"
        isValid = false;
    }
    // if(!/^[a-zA-Z]+@(gmai.com|yahoo.com|outlook.com|ricr.in)$/.test(email))
    // {
    //     document.getElementById("emailError").innerText = "Please Enter a valid Email";
    //     isValid = false;
    // }
    if(!/^[6-9]\d{9}$/.test(phoneNumber) || phoneNumber.length !==10)
    {
        document.getElementById("phoneError").innerText = "Please Enter a valid Indian Phone Number"
        isValid = false;
    }
    return isValid;
}