let str = "";

let sum = 0;
function display(num) {
  if (num == "ac") {
    str = "";
    document.getElementById("input").value = str;
  } else if (num == "del") {
    str = str.slice(0, str.length - 1);
    // console.log(str);
    document.getElementById("input").value = str;
  } else if (num == "=") {
    try {
      str = eval(str);
      document.getElementById("input").value = str;
      str = str.toString();
    } catch (err) {
      document.getElementById("input").value = "Syntax Error!";
    }

    // console.log(str, typeof str);
  } else {
    str = str + num;
    document.getElementById("input").value = str;
  }

  // console.log(array);

  // input_display(num);
}
