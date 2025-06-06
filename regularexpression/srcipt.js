function Submit() {
    const nm = document.getElementById("name").value;
    const em = document.getElementById("email").value;
    const dob = document.getElementById("date").value;
    const pass = document.getElementById("password").value;
    const ph = document.getElementById("phone").value;
    console.log(nm, em, dob, pass, ph);

    // if(!/^[A-Za-z\s]+$/.test(nm) && nm.length > 2){
    //     console.log("correct")
    // }
    // else{
    //     console.log("Wrong")
    // }
}