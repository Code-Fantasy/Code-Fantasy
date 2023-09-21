function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
  }


  const startfight = document.getElementById('startfight')
  startfight.addEventListener('click', ()=>{
    location.href = "fight.html";
  })
