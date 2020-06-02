// Your code goes here

const funBusImage = document.querySelector('header img');
const imgs = document.querySelectorAll('img');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('nav a');


navItems.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
  })
})

window.addEventListener('load', e => {
  console.log('The page has loaded sucessfully!')
})

window.addEventListener('resize', e => {
  const genRandHex = () => {
    let num = Math.round(Math.random()*15)
    if (num === 10) return 'a'
    if (num === 11) return 'b'
    if (num === 12) return 'c'
    if (num === 13) return 'd'
    if (num === 14) return 'e'
    if (num === 15) return 'f'
    return num
  }
  let r = genRandHex();
  let g = genRandHex();
  let b = genRandHex();
  console.log(`${r}${g}${b}`);
  body.style.backgroundColor = `#${r}${g}${b}`
})

document.addEventListener('keydown', e => {
  alert('Stop pressing my buttons!');
})

document.addEventListener('select', e => {
  alert(e);
})

let blue = false
body.addEventListener('dblclick', e => {
  blue = !blue
  // if (blue) body.style.backgroundColor = 'skyblue';
  // else body.style.backgroundColor = 'white';
  if (blue) gsap.to("body", {duration: 2, backgroundColor: 'skyblue'})
  else gsap.to("body", {duration: 2, backgroundColor: 'white'})
})

funBusImage.addEventListener('contextmenu', e => {
  e.preventDefault();
  funBusImage.title = "You've activated the hover mode!";
  console.log(funBusImage.title);
})

imgs.forEach(img => {
  img.addEventListener('mouseover', e => {
    img.classList.add('blueShadow');
  })
  
  img.addEventListener('mouseleave', e => {
    img.classList.remove('blueShadow');
  })

  img.addEventListener('wheel', e => {
    e.preventDefault();
    img.classList.toggle('fullRotate');
  })

  img.addEventListener('dragend', e => {
    alert(`Image dragged to ${e.x}x ${e.y}y`);
  })

  img.addEventListener('dblclick', e => {
    e.stopPropagation();
    open(e.target.src)
  })
})