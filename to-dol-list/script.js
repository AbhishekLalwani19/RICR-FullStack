function addNewTask() {

    const newtask = document.getElementById("taskinput");

    if (newtask.value.trim()) 
    {
      const a = document.createElement("li");
      a.classList.add("py-2");

      const s = document.createElement("span");
      s.innerText = newtask.value.trim();
  
      const b = document.createElement("button");
      b.classList.add("btn", "btn-danger", "mx-4" ,"my-1");
      b.innerText = "X Delete";

      a.appendChild(s);
      a.appendChild(b);

      b.onclick = () => {
        a.remove();
      };
      
      document.getElementById("taskList").appendChild(a);
      newtask.value = "";
    }
    else 
    {
      alert("No Task Added");
      newtask.value = "";
    }
  }