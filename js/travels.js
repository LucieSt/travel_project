const containers = document.querySelectorAll('.image-content');
const images = document.querySelectorAll('.image');

containers.forEach(container => {
   
    const image = container.querySelector('.image');

    container.addEventListener('mouseover', () => {
        image.classList.add('opacity');    
    });

    container.addEventListener('mouseleave', () => {
        image.classList.remove('opacity');
    });
});