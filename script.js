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
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam").innerText;
    const number = card.querySelector(".ServiceNo").innerText;
    return { title, number };
}


function doCall(button, coinId) {
    const coin = parseInt(document.getElementById(coinId).innerText);


    const card = button.closest(".card");

    const { title, number } = getServiceInfo(card);

    if (coin >= 20) {
        alert("Calling " + title + " " + number);
        const remainCoin = coin - 20;
        document.getElementById(coinId).innerText = remainCoin;
    } else {
        alert("You don't have enough coin!");
    }
}

document.getElementById("card-btn").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "National Emergency Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});


document.getElementById("card-btn1").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Police Helpline Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam1").innerText;
    const number = card.querySelector(".ServiceNo1").innerText;
    return { title, number };
}


document.getElementById("card-btn2").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam2").innerText;
    const number = card.querySelector(".ServiceNo2").innerText;
    return { title, number };
}

document.getElementById("card-btn3").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam3").innerText;
    const number = card.querySelector(".ServiceNo3").innerText;
    return { title, number };
}


document.getElementById("card-btn4").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam4").innerText;
    const number = card.querySelector(".ServiceNo4").innerText;
    return { title, number };
}

document.getElementById("card-btn5").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam5").innerText;
    const number = card.querySelector(".ServiceNo5").innerText;
    return { title, number };
}

document.getElementById("card-btn6").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam6").innerText;
    const number = card.querySelector(".ServiceNo6").innerText;
    return { title, number };
}

document.getElementById("card-btn7").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam7").innerText;
    const number = card.querySelector(".ServiceNo7").innerText;
    return { title, number };
}

document.getElementById("card-btn8").addEventListener("click", function () {
    doCall(this, "coins");
     const history = {
        name: "Fire Service Number",
        number: "999",
        date: new Date().toLocaleTimeString()
    };

    Callhostory.push(history);
    HistoryList(); 
});
function getServiceInfo(card) {
    const title = card.querySelector("#ServiceNam8").innerText;
    const number = card.querySelector(".ServiceNo8").innerText;
    return { title, number };
}


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