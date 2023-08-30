let i = 0;
let speed = 50;

let tech = ['Python', 'Javascript'];
let currentIndex = 0;

function typeWriter() {
  if (currentIndex < tech.length) {
    if (i < tech[currentIndex].length) {
      document.getElementById("demo").innerHTML += tech[currentIndex].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(function() {
        eraseText();
      }, speed * 3); 
    }
  }
}

function eraseText() {
  if (i >= 0) {
    let currentText = tech[currentIndex].substring(0, i);
    document.getElementById("demo").innerHTML = currentText;
    i--;
    setTimeout(eraseText, speed);
  } else {
    currentIndex = (currentIndex + 1) % tech.length;
    i = 0;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
