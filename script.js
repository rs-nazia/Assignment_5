counter = 0;
const Callhostory = []
function HeartCounter(id)
{
    counter++
    document.getElementById(id).innerText = counter
}

document.getElementById("Heart").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart1").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart2").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart3").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart4").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart5").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart6").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart7").addEventListener("click", function(){
    HeartCounter("heartCount")
})
document.getElementById("Heart8").addEventListener("click", function(){
    HeartCounter("heartCount")
})


//=== Call button functionality start here



function doCall(id) {
    const coin = parseInt(document.getElementById(id).innerText);

    if (coin > 20) {
        alert("Calling " + title + " " + Number);
        const Remaincoin = coin - 20;
        document.getElementById(id).innerText = Remaincoin;
    } else {
        alert("You don't have enough coin!");
    }
}

const title = document.getElementById("ServiceNam").innerText;
const Number = document.querySelector(".ServiceNo").innerText;

document.getElementById("card-btn").addEventListener("click", function () {
    doCall("coins");

    const history = {
        name: "Police Helpline Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});

//===History list functionality start here




function HistoryList() {
    const History_Container = document.getElementById("HistoryContainer");
    History_Container.innerHTML = "";

    for (const history of Callhostory) {
        const Div = document.createElement("div");
        Div.innerHTML = `
            <div class="flex justify-between items-center bg-gray-100 rounded-lg p-3 mb-4">
                <div>
                    <h2 class="text-[18px] font-semibold">${history.name}</h2>
                    <p>${history.number}</p>
                </div>
                <div>
                    <h2 class="text-[12px] font-normal">${history.date}</h2>
                </div>
            </div>
        `;
        History_Container.appendChild(Div);
    }
}

//===Copy button Functionality start here


function getCopy(id){
    const CopyText = document.getElementById(id).innerText
    navigator.clipboard.writeText(CopyText)
}


copyCount = 0;
function CopyCounter(id)
{
    copyCount++
    document.getElementById(id).innerText = copyCount

}

document.getElementById("itemToCopy").addEventListener("click", function(){
    CopyCounter("copyitem_number");
    getCopy("CopiedItem")
})