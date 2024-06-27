const cards = document.querySelectorAll('.menu__item');
const leaf1 = document.querySelector('.leaf');
const leftPos = leaf1.offsetLeft;

const leaf2 = document.querySelector('.leaf-2');
const rightPos = leaf2.offsetLeft;

for (let card of cards) {
    card.addEventListener('mouseover', function () {
        card.style.backgroundColor = 'rgba(121, 200, 0, 0.4)';
        leaf1.style.transform = 'translateX(10px)';
        leaf2.style.transform = 'translateX(10px)';
    });
       
   
    card.addEventListener('mouseout', function () {
        card.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        leaf1.style.transform = 'translateX(0)';
        leaf2.style.transform = 'translateX(0)';
    });
    
}
