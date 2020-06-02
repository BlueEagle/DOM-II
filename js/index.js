// Your code goes here
const funBusImage = document.querySelector('header img');
const imgs = document.querySelectorAll('img');
const body = document.querySelector('body');

window.addEventListener('load', e => {
  console.log('The page has loaded sucessfully!')
})

document.addEventListener('keydown', e => {
  alert('Stop pressing my buttons!');
})

document.addEventListener('select', e => {
  // let selected = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
  alert(e);
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
    open(e.target.src)
  })
})

// 2 more to go!

// double clicking text allows you to edit it
// hitting enter saves it