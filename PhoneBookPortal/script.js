function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (!name || !email || !phone) {
        alert("All fields are required!");
        return;
    }

    const oldData = localStorage.getItem('Data');
    let tempdata = JSON.parse(oldData) || [];

    tempdata.push({
        Name: name,
        Email: email,
        Phone: phone,
    });

    localStorage.setItem("Data", JSON.stringify(tempdata));
    document.querySelectorAll("input").forEach(input => input.value = "");
    alert("Contact added successfully!");
}


function clearAll(){
    localStorage.removeItem("Data")
}

function getData(){
    const Data = localStorage.getItem('Data')
    const ConvertData = JSON.parse(Data);
    const list = document.getElementById("Data")

    ConvertData.forEach(element => {
        const d = document.createElement("div")

        list.innerHTML = `
        <!-- <table border="1" id="tabla" class="m-3">
                <tr>
                    <td>Name:</td>
                    <td>${element.name}</td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td>${element.email}</td>
                </tr>
                <tr>
                    <td>Email Address:</td>
                    <td>${element.phone}</td>
                </tr>
             </table> -->`;
       Data.appendChild(d) 
    });
}
getData()

