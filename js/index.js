// Your code goes here
const funBusImage = document.querySelector('header img');
const imgs = document.querySelectorAll('img');



document.addEventListener('keydown', e => {
  alert('Stop pressing my buttons!');
})

document.addEventListener('select', e => {
  console.log(e);
})

imgs.forEach(img => {
  img.addEventListener('mouseover', e => {
    img.classList.add('blueShadow');
  })
  
  img.addEventListener('mouseleave', e => {
    img.classList.remove('blueShadow');
  })

  img.addEventListener('wheel', e => {
    // debugger
    // alert(`It took you ${e.timeStamp}ms to find this feature.`);
    img.classList.toggle('fullRotate');
  })
})