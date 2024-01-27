let inputField1 = document.getElementById("inputField1");
let inputField2 = document.getElementById("inputField2");
let inputField3 = document.getElementById("inputField3");
let inputField4 = document.getElementById("inputField4");
let inputField5 = document.getElementById("inputField5");
let inputField6 = document.getElementById("inputField6");
let dialogueBox = document.getElementById("dialogueBox");

let submitBtn = document.getElementsByClassName("btn-success");
submitBtn = submitBtn[0];

let calculatorSubmit = document.getElementById("calculatorSubmit");
let comparerSubmit = document.getElementById("comparerSubmit");
let eightBallSubmit = document.getElementById("eightBallSubmit");
let helloSubmit = document.getElementById("helloSubmit");
let madLibSubmit = document.getElementById("madLibSubmit");
let numReverseSubmit = document.getElementById("numReverseit");
let oddEvenSubmit = document.getElementById("oddEvenSubmit");
let restaurantSubmit = document.getElementById("restaurantSubmit");
let alphaReverseSubmit = document.getElementById("alphaReverseSubmit");
let timeSubmit = document.getElementById("timeSubmit");

async function ApiFetch(
  api,
  param1,
  param2 = "",
  param3 = "",
  param4 = "",
  param5 = "",
  param6 = ""
) {
  param1 = encodeURIComponent(param1);
  if (param2) param2 = "/" + encodeURIComponent(param2);
  if (param3) param3 = "/" + encodeURIComponent(param3);
  if (param4) param4 = "/" + encodeURIComponent(param4);
  if (param5) param5 = "/" + encodeURIComponent(param5);
  if (param6) param6 = "/" + encodeURIComponent(param6);
  param1 = "/" + param1;
  const promise = await fetch(
    "https://leoapis.azurewebsites.net/" +
      api +
      param1 +
      param2 +
      param3 +
      param4 +
      param5 +
      param6
  );
  const data = await promise.text();
  if (data) {
    dialogueBox.textContent = data;
  } else {
    dialogueBox.textContent = "Please fill in all fields";
  }
}

switch (submitBtn.id) {
  case "calculatorSubmit":
    calculatorSubmit.addEventListener("click", () => {
      ApiFetch("SumCalculator", inputField1.value, inputField2.value);
    });
    break;
  case "comparerSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("NumComparer", inputField1.value, inputField2.value);
    });
    break;
  case "eightBallSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("Magic8Ball", inputField1.value, inputField2.value);
    });
    break;
  case "helloSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("SayHello", inputField1.value);
    });
    break;
  case "madLibSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch(
        "MadLib",
        inputField1.value,
        inputField2.value,
        inputField3.value,
        inputField4.value,
        inputField5.value,
        inputField6.value
      );
    });
    break;
  case "eightBallSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("ReverseItNum", inputField1.value);
    });
    break;
  case "oddEvenSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("OddOrEven", inputField1.value);
    });
    break;
  case "restaurantSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("RestaurantPicker", inputField1.value);
    });
    break;
  case "alphaReverseSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("ReverseItAlpha", inputField1.value);
    });
    break;
  case "numReverseit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("ReverseItNum", inputField1.value);
    });
    break;
  case "timeSubmit":
    submitBtn.addEventListener("click", () => {
      ApiFetch("TimeAwoken", inputField1.value, inputField2.value);
    });
    break;
  default:
    console.log("Failed");
    break;
}
