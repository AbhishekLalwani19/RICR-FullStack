function Input(char) {
    const question = document.getElementById("screen");
    if (char === "AC") {
      question.value = "";
    } else if (char === "=") {
      const result = eval(question.value)
      question.value = result;
      showalert(result);
    } else {
      question.value = question.value + char;
    }
  }
  
  function showalert(result){
      alert(result);
  }