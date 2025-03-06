document.getElementById("button-card1").addEventListener("click",function(){
    wholeDonateNow("donation-amount-input")
    const div = document.createElement("div");
    div.classList.add("px-4", "py-5", "border-2", "border-gray-100", "rounded-lg");
    const currentDate = new Date();
    div.innerHTML = `
     <h1 class="font-bold"> ${getValueById("donation-amount-input")} Taka is Donated for flood at Noakhali, Bangladesh</h1>
     <p class="font-light text-xs">Date:
                    ${currentDate.toString()}
    </p>
    `
    document.getElementById("history-section").appendChild(div)

})


document.getElementById("button-card2").addEventListener("click",function(){
    wholeDonateNow("donation-amount-input2")
    const div = document.createElement("div");
    div.classList.add("px-4", "py-5", "border-2", "border-gray-100", "rounded-lg");
    const currentDate = new Date();
    div.innerHTML = `
     <h1 class="font-bold"> ${getValueById("donation-amount-input2")} Taka is Donated for Flood Relief in Feni, Bangladesh</h1>
     <p class="font-light text-xs">Date:
                    ${
                        currentDate.toString()}
    </p>
    `
    document.getElementById("history-section").appendChild(div)
})
document.getElementById("button-card3").addEventListener("click",function(){
    wholeDonateNow("donation-amount-input3")
    const div = document.createElement("div");
    div.classList.add("px-4", "py-5", "border-2", "border-gray-100", "rounded-lg");
    const currentDate = new Date();
    div.innerHTML = `
     <h1 class="font-bold"> ${getValueById("donation-amount-input3")} Taka is Donated for Injured in the Quota Movement, Bangladesh</h1>
     <p class="font-light text-xs">Date:
                    ${
                        currentDate.toString()}
    </p>
    `
    document.getElementById("history-section").appendChild(div)
})