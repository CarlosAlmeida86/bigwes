const anchors = document.querySelectorAll('.item a');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        event.currentTarget.querySelector('img').classList.toggle('large');
    });
});
