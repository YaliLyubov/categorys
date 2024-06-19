const cards = document.querySelectorAll('.menu__item');
const leaf1 = document.querySelector('.leaf');
const leftPos = leaf1.offsetLeft;

const leaf2 = document.querySelector('.leaf-2');
const rightPos = leaf2.offsetLeft;

for (let card of cards) {
    card.addEventListener('mouseover', function () {
        card.style.backgroundColor = 'rgba(121, 200, 0, 0.4)';
        leaf1.style.animation = "steps 500ms ease";
    });
       
   
    card.addEventListener('mouseout', function () {
        card.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        leaf2.style.left = rightPos + 10 + 'px';
    });
    
}
// cards.forEach((card) => {
//     card.addEventListener('mouseover', function () {
//         card.style.backgroundColor = 'rgba(121, 200, 0, 0.4)';
//         // leaf1.style.left = leftPos + 10 + 'px';
//         leaf1.classList.add('move');
//     });
       
   
//     card.addEventListener('mouseout', function () {
//         card.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
//         leaf2.style.left = rightPos + 10 + 'px';
//     });
// })