document.getElementById("button-history").addEventListener("click",function(){
    document.getElementById("card1").classList.add("hidden");
    document.getElementById("card2").classList.add("hidden");
    document.getElementById("card3").classList.add("hidden");
    document.getElementById("history-section").classList.remove("hidden");

    document.getElementById("button-history").classList.add("bg-button");
    document.getElementById("button-donation").classList.remove("bg-button");
    




})


document.getElementById("button-donation").addEventListener("click",function(){
    document.getElementById("history-section").classList.add("hidden")
    document.getElementById("card1").classList.remove("hidden")
    document.getElementById("card2").classList.remove("hidden")
    document.getElementById("card3").classList.remove("hidden")
    document.getElementById("button-donation").classList.add("bg-button");
    document.getElementById("button-history").classList.remove("bg-button");


})


