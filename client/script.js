window.onload = defaut();

function defaut() {
  warriordiv.classList.toggle('active');
  warriordiv.style.display = 'block';
  thiefdiv.style.display = 'none';
    monkdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    wmdiv.style.display = 'none';

}





function showdiv(){
  document.getElementById("image").style.visibility="visible";
  
}



setTimeout("showdiv()", 2000)






function show(){
  document.getElementById("startkey").style.visibility="visible";
}

setTimeout("show()", 3000)


function redirect()
    {
    var url = "http://127.0.0.1:5501/client/playercreation.html";
    window.location(url);
    }




    warriorpic.addEventListener('click', ()=> {
      warriordiv.classList.toggle('active');
      warriordiv.style.display = 'block';
      thiefdiv.style.display = 'none';
      wmdiv.style.display = 'none';
      bmdiv.style.display = 'none';
      monkdiv.style.display = 'none';

      // myDIV.style.transition = "width 1s ease-in-out 0s";
  });

  thiefpic.addEventListener('click', ()=> {
    thiefdiv.classList.toggle('active');
    thiefdiv.style.display = 'block';
    warriordiv.style.display = 'none';
    wmdiv.style.display = 'none';
      bmdiv.style.display = 'none';
      monkdiv.style.display = 'none';
    // myDIV.style.transition = "width 1s ease-in-out 0s";
});

monkpic.addEventListener('click', ()=> {
  monkdiv.classList.toggle('active');
  monkdiv.style.display = 'block';
  warriordiv.style.display = 'none';
  wmdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
  // myDIV.style.transition = "width 1s ease-in-out 0s";
});

bmpic.addEventListener('click', ()=> {
  bmdiv.classList.toggle('active');
  bmdiv.style.display = 'block';
  warriordiv.style.display = 'none';
  wmdiv.style.display = 'none';
    monkdiv.style.display = 'none';
    thiefdiv.style.display = 'none';


  // myDIV.style.transition = "width 1s ease-in-out 0s";
});

wmpic.addEventListener('click', ()=> {
  wmdiv.classList.toggle('active');
  wmdiv.style.display = 'block';
  warriordiv.style.display = 'none';
  monkdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
  // myDIV.style.transition = "width 1s ease-in-out 0s";
});


function nextPage() {
  console.log("Next Page");
  window.location.href =  "http://localhost:5500/client/playercreation.html";
}

document.addEventListener("keydown", function(event) {

  nextPage ();


})

