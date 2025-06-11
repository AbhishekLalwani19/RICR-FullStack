let data = JSON.parse(localStorage.getItem("Data")) || [];
const List = document.getElementById("Data");

const table = document.createElement("table");
table.className = "table table-bordered table-striped";
List.appendChild(table);

const thead = document.createElement("thead");
thead.innerHTML = `
  <tr class="table-dark">
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Action</th>
  </tr>`;
table.appendChild(thead);
const tbody = document.createElement("tbody");
table.appendChild(tbody);

data.forEach((Element, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td class="border w-25">${Element.Name}</td>
    <td class="border w-25">${Element.Phone}</td>
    <td class="border w-25">${Element.Email}</td>
    <td class="border text-center">
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    </td>
  `;

  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
    data.splice(index, 1);
    localStorage.setItem("Data", JSON.stringify(data));
  });

  tbody.appendChild(row);
});

function clearAll() {
    if (confirm("Are you sure you want to delete all contacts?")) {
        localStorage.removeItem("Data");
        document.getElementById("Data").innerHTML = `
            <p class="text-danger text-center fs-4">All contacts have been cleared.</p>
        `;
    }
}

