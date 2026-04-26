// script.js – Scroll animation and Robot Background logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Observer (for fade-in elements)
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const fadeElems = document.querySelectorAll('.fade-in');
    fadeElems.forEach(el => revealObserver.observe(el));

    // 2. Section Observer (for changing robot background)
    const sections = document.querySelectorAll('section');
    const layers = {
        'hero': document.getElementById('layer-hero'),
        'about': document.getElementById('layer-mid'),
        'ai-vision': document.getElementById('layer-mid'),
        'future': document.getElementById('layer-bottom'),
        'goals': document.getElementById('layer-bottom'),
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        let maxVisible = 0;
        let activeSectionId = null;

        // Find the section that takes up the most space in the viewport
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > maxVisible) {
                maxVisible = entry.intersectionRatio;
                activeSectionId = entry.target.id;
            }
        });

        if (activeSectionId && layers[activeSectionId]) {
            // Hide all layers
            Object.keys(layers).forEach(key => {
                if (layers[key]) layers[key].classList.remove('active');
            });
            // Show the active layer
            layers[activeSectionId].classList.add('active');
        }
    }, {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9]
    });

    sections.forEach(sec => sectionObserver.observe(sec));
});


    // 3. Robot Fleeing Logic
    const robotsOuter = document.querySelectorAll(".robot-inner");
    robotsOuter.forEach(robot => {
        robot.addEventListener("mouseenter", function() {
            if (!this.classList.contains("scared")) {
                this.classList.add("scared");
                // Robot disappears, then comes back after 2.5 seconds!
                setTimeout(() => {
                    this.classList.remove("scared");
                }, 2500);
            }
        });
    });

