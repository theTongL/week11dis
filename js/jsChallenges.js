//Color of the Day: Tangerine

// Challenge 01
// let check = document.querySelector("#subscribe");
// check.addEventListener("click", function(){
//     if (check.checked){
//         document.querySelector("#emailDiv").style.display = "block";
//     }
//     else{
//         document.querySelector("#emailDiv").style.display = "none";
//     }
// });

// Challenge 02
let home = document.querySelector("#home");
let checkbox = document.querySelector("#sameAddress");
let bill = document.querySelector("#bill");
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        home.value = bill.value;
        home.disabled = true;
    } else {
        home.value = "";
        home.disabled = false;
    }
  });