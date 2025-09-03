counter = 0;
document.getElementById("Heart").addEventListener("click", function(){
    counter++

    document.getElementById("heartCount").innerText = counter
})


function doCall(id){
    const coin =parseInt( document.getElementById(id).innerText)
        if(coin >20){
            alert("You click on the call button");
          const  Remaincoin = coin - 20
           document.getElementById(id).innerText = Remaincoin;
        }
        else{
            alert("You dont have enough coin!")
        }
  }

 document.getElementById("card-btn")
    .addEventListener("click", function(){
        doCall("coins");
    })
