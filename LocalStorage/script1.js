function getData(){
    const Data = localStorage.getItem('Data')
    const ConvertData = JSON.parse(Data);
    const list = document.getElementById("Data")

    ConvertData.forEach(element => {
        const d = document.createElement("div")

        list.innerHTML = `
        <div class="d-flex">
            <label for="fullName" class="w-25">Full Name:</label>
            <span id="name">${element.Name}</span>
        </div>
        <div class="d-flex">
            <label for="email" class="w-25">Email:</label>
            <span id="email">${element.Email}</span>
        </div>
        <div class="d-flex">
            <label for="phoneNumber" class="w-25">Phone Number:</label>
            <span id="number">${element.Phone}</span>
        </div>`;
       appendChild(d) 
    });
}
getData()
