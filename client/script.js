 window.onload = defaut();

function defaut() {
  warriordiv.classList.toggle('active');
  warriordiv.style.display = 'flex';
  thiefdiv.style.display = 'none';
    monkdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    wmdiv.style.display = 'none';

}


function sound(){
  var snd = new Audio('/clientmd/sounds/create.mp3')//wav is also supported
  snd.play()//plays the sound
}

function nextsound(){
  var snd = new Audio('/clientmd/sounds/next.mp3')//wav is also supported
  snd.play()//plays the sound
}



function redirect()
    {
    var url = "http://127.0.0.1:5501/clientmd/playercreation.html";
    window.location(url);
    }




    warriorpic.addEventListener('click', ()=> {
      warriordiv.classList.toggle('active');
      warriordiv.style.display = 'flex';
      thiefdiv.style.display = 'none';
      wmdiv.style.display = 'none';
      bmdiv.style.display = 'none';
      monkdiv.style.display = 'none';
  });

  thiefpic.addEventListener('click', ()=> {
    thiefdiv.classList.toggle('active');
    thiefdiv.style.display = 'flex';
    warriordiv.style.display = 'none';
    wmdiv.style.display = 'none';
      bmdiv.style.display = 'none';
      monkdiv.style.display = 'none';
});

monkpic.addEventListener('click', ()=> {
  monkdiv.classList.toggle('active');
  monkdiv.style.display = 'flex';
  warriordiv.style.display = 'none';
  wmdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
});

bmpic.addEventListener('click', ()=> {
  bmdiv.classList.toggle('active');
  bmdiv.style.display = 'flex';
  warriordiv.style.display = 'none';
  wmdiv.style.display = 'none';
    monkdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
});

wmpic.addEventListener('click', ()=> {
  wmdiv.classList.toggle('active');
  wmdiv.style.display = 'flex';
  warriordiv.style.display = 'none';
  monkdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
});