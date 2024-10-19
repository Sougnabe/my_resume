const links = document.querySelector('a')
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = 'blue';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
    })
});