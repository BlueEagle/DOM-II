// Your code goes here
const funBusImage = document.querySelector('header img');

funBusImage.addEventListener('mouseover', e => {
  funBusImage.classList.add('blueShadow');
})

funBusImage.addEventListener('mouseleave', e => {
  funBusImage.classList.remove('blueShadow');
})