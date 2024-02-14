document.querySelectorAll('.center-link').forEach(link => {
    link.addEventListener('click', scrollToCenter);
});

function scrollToCenter(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const yOffset = window.innerHeight / 2 - targetElement.clientHeight / 2;
        const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        const finalOffset = targetOffset - yOffset;

        window.scrollTo({
            top: finalOffset,
            behavior: 'smooth'
        });
    }
}
