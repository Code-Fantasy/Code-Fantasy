//section 1
const waterdull = document.getElementById('waterdull');
const earthdull = document.getElementById('earthdull');
const firedull = document.getElementById('firedull');
const windull = document.getElementById('winddull');
const watercolor = document.getElementById('watercolor');
const earthcolor = document.getElementById('earthcolor');
const firecolor = document.getElementById('firecolor');
const windcolor = document.getElementById('windcolor');

// Set default display for section 1
function setDefault1() {
    watercolor.classList.add('active');
    watercolor.style.display = 'block';
    waterdull.style.display = 'none';
    earthcolor.style.display = 'none';
    firecolor.style.display = 'none';
    windcolor.style.display = 'none';
}

// Section 1 event listeners
waterdull.addEventListener('click', () => {
    watercolor.classList.toggle('active');
    watercolor.style.display = 'block';
    waterdull.style.display = 'none';
    earthcolor.style.display = 'none';
    firecolor.style.display = 'none';
    windcolor.style.display = 'none';
    earthdull.style.display = 'block';
    firedull.style.display = 'block';
    winddull.style.display = 'block';
});

earthdull.addEventListener('click', () => {
    earthcolor.classList.toggle('active');
    earthcolor.style.display = 'block';
    earthdull.style.display = 'none';
    watercolor.style.display = 'none';
    firecolor.style.display = 'none';
    windcolor.style.display = 'none';
    waterdull.style.display = 'block';
    firedull.style.display = 'block';
    winddull.style.display = 'block';
});

firedull.addEventListener('click', () => {
    firecolor.classList.toggle('active');
    firecolor.style.display = 'block';
    firedull.style.display = 'none';
    watercolor.style.display = 'none';
    earthcolor.style.display = 'none';
    windcolor.style.display = 'none';
    waterdull.style.display = 'block';
    earthdull.style.display = 'block';
    winddull.style.display = 'block';
});

winddull.addEventListener('click', () => {
    windcolor.classList.toggle('active');
    windcolor.style.display = 'block';
    winddull.style.display = 'none';
    watercolor.style.display = 'none';
    earthcolor.style.display = 'none';
    firecolor.style.display = 'none';
    waterdull.style.display = 'block';
    earthdull.style.display = 'block';
    firedull.style.display = 'block';
});

// section 2
const waterdull2 = document.getElementById('waterdull2');
const earthdull2 = document.getElementById('earthdull2');
const firedull2 = document.getElementById('firedull2');
const windull2 = document.getElementById('winddull2');
const watercolor2 = document.getElementById('watercolor2');
const earthcolor2 = document.getElementById('earthcolor2');
const firecolor2 = document.getElementById('firecolor2');
const windcolor2 = document.getElementById('windcolor2');

// Set default display for section 2
function setDefault2() {
    watercolor2.classList.add('active');
    watercolor2.style.display = 'block';
    waterdull2.style.display = 'none';
    earthcolor2.style.display = 'none';
    firecolor2.style.display = 'none';
    windcolor2.style.display = 'none';
}

// Section 2 event listeners
waterdull2.addEventListener('click', () => {
    watercolor2.classList.toggle('active');
    watercolor2.style.display = 'block';
    waterdull2.style.display = 'none';
    earthcolor2.style.display = 'none';
    firecolor2.style.display = 'none';
    windcolor2.style.display = 'none';
    earthdull2.style.display = 'block';
    firedull2.style.display = 'block';
    winddull2.style.display = 'block';
});

earthdull2.addEventListener('click', () => {
    earthcolor2.classList.toggle('active');
    earthcolor2.style.display = 'block';
    earthdull2.style.display = 'none';
    watercolor2.style.display = 'none';
    firecolor2.style.display = 'none';
    windcolor2.style.display = 'none';
    waterdull2.style.display = 'block';
    firedull2.style.display = 'block';
    winddull2.style.display = 'block';
});

firedull2.addEventListener('click', () => {
    firecolor2.classList.toggle('active');
    firecolor2.style.display = 'block';
    firedull2.style.display = 'none';
    watercolor2.style.display = 'none';
    earthcolor2.style.display = 'none';
    windcolor2.style.display = 'none';
    waterdull2.style.display = 'block';
    earthdull2.style.display = 'block';
    winddull2.style.display = 'block';
});

winddull2.addEventListener('click', () => {
    windcolor2.classList.toggle('active');
    windcolor2.style.display = 'block';
    winddull2.style.display = 'none';
    watercolor2.style.display = 'none';
    earthcolor2.style.display = 'none';
    firecolor2.style.display = 'none';
    waterdull2.style.display = 'block';
    earthdull2.style.display = 'block';
    firedull2.style.display = 'block';
});

// Call the default functions to set initial display
setDefault1();
setDefault2();

/////// Test Drag and Drop////

