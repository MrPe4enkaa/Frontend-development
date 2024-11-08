document.addEventListener('DOMContentLoaded', () => {
    function Animation(e) {
        const element = e;
        gsap.fromTo(element, {
            y: 50,
            opacity: 0,
            duration: 0.8
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8
        });
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                Animation(entry.target);
                observer.unobserve(entry.target);
            };
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.h').forEach(element => {
        observer.observe(element);
    });
    document.querySelectorAll('.smallH').forEach(element => {
        observer.observe(element);
    });
    document.querySelectorAll('.p').forEach(element => {
        observer.observe(element);
    });
    document.querySelectorAll('#background').forEach(element => {
        observer.observe(element);
    });
});
