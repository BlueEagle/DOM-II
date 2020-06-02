// Your code goes here
const funBusImage = document.querySelector('header img');
const imgs = document.querySelectorAll('img');



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
    window.open(e.target.src)
  })
})

// 3 more to go!

// double clicking text allows you to edit it
// hitting enter saves it