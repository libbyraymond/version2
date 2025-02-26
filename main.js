// Intersection Observer to trigger animations when scrolling
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-and-caption-v, .image-and-caption-h');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.2,
        rootMargin: '-100px'
    });
    
    images.forEach(image => {
        observer.observe(image);
    });
});