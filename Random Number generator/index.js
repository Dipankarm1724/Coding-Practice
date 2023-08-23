var collectNumber = document.getElementById("generateBtn");

collectNumber.addEventListener("click" , function (){

    var randomNumber = Math.floor((Math.random() *100 )+1);
    alert("Random Number: " + " " + randomNumber);
});

