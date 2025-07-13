document.addEventListener('DOMContentLoaded', function() {
    // Loader
    window.addEventListener('load', function() {
        const loader = document.querySelector('.loader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500);
    });

    // Audio Toggle
    const audioToggle = document.getElementById('audioToggle');
    const ambientAudio = document.getElementById('ambientAudio');
    let isAudioPlaying = false;

    // Try to autoplay audio with user interaction
    document.body.addEventListener('click', function initAudio() {
        if (!isAudioPlaying) {
            ambientAudio.volume = 0.3;
            ambientAudio.play().then(() => {
                isAudioPlaying = true;
                audioToggle.textContent = 'SOUND: ON';
            }).catch(error => {
                console.log('Audio playback failed:', error);
            });
        }
        document.body.removeEventListener('click', initAudio);
    }, { once: true });

    audioToggle.addEventListener('click', function() {
        if (isAudioPlaying) {
            ambientAudio.pause();
            audioToggle.textContent = 'SOUND: OFF';
        } else {
            ambientAudio.play();
            audioToggle.textContent = 'SOUND: ON';
        }
        isAudioPlaying = !isAudioPlaying;
    });

    // Navigation Scroll Effect
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animations
    gsap.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1.5
    });

    gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 2
    });

    gsap.to('.hero-scroll', {
        opacity: 1,
        duration: 1,
        ease: 'power2.inOut',
        delay: 3
    });

    // Chapter Sections Animations
    gsap.utils.toArray('.chapter').forEach((chapter, i) => {
        gsap.from(chapter.querySelector('.chapter-title'), {
            scrollTrigger: {
                trigger: chapter,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from(chapter.querySelector('.chapter-text'), {
            scrollTrigger: {
                trigger: chapter,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.3
        });

        gsap.from(chapter.querySelectorAll('.stat-item'), {
            scrollTrigger: {
                trigger: chapter,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
            delay: 0.6
        });

        if (chapter.querySelector('.chapter-image')) {
            gsap.from(chapter.querySelector('.chapter-image'), {
                scrollTrigger: {
                    trigger: chapter,
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                },
                opacity: 0,
                x: 100,
                duration: 1.5,
                ease: 'power3.out'
            });
        }
    });

    // Match Highlight Animations
    gsap.utils.toArray('.match-highlight').forEach((match, i) => {
        gsap.from(match.querySelectorAll('.match-venue, .match-date'), {
            scrollTrigger: {
                trigger: match,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1
        });

        gsap.from(match.querySelector('.match-title'), {
            scrollTrigger: {
                trigger: match,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
        });

        gsap.from(match.querySelector('.match-result'), {
            scrollTrigger: {
                trigger: match,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.4
        });

        gsap.from(match.querySelectorAll('.player-stat'), {
            scrollTrigger: {
                trigger: match,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            delay: 0.6
        });

        gsap.from(match.querySelector('.match-desc'), {
            scrollTrigger: {
                trigger: match,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.8
        });

        // Parallax effect for background
        gsap.to(match.querySelector('.match-bg'), {
            scrollTrigger: {
                trigger: match,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            scale: 1,
            ease: 'none'
        });
    });

    // Finale Section Animations
    const finale = document.querySelector('.finale');
    if (finale) {
        gsap.from(finale.querySelectorAll('.finale-venue, .finale-date'), {
            scrollTrigger: {
                trigger: finale,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1
        });

        gsap.from(finale.querySelector('.finale-title'), {
            scrollTrigger: {
                trigger: finale,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.2
        });

        gsap.from(finale.querySelector('.finale-result'), {
            scrollTrigger: {
                trigger: finale,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.4
        });

        gsap.from(finale.querySelectorAll('.player-stat'), {
            scrollTrigger: {
                trigger: finale,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.1,
            delay: 0.6
        });

        gsap.from(finale.querySelector('.finale-desc'), {
            scrollTrigger: {
                trigger: finale,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.8
        });

        // Video parallax effect
        gsap.to(finale.querySelector('.finale-video'), {
            scrollTrigger: {
                trigger: finale,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            },
            scale: 1.1,
            ease: 'none'
        });
    }

    // Legacy Section Animations
    const legacy = document.querySelector('.legacy');
    if (legacy) {
        gsap.from(legacy.querySelector('.legacy-title'), {
            scrollTrigger: {
                trigger: legacy,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from(legacy.querySelectorAll('.legacy-stat'), {
            scrollTrigger: {
                trigger: legacy,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.2,
            delay: 0.3
        });

        gsap.from(legacy.querySelector('.legacy-quote'), {
            scrollTrigger: {
                trigger: legacy,
                start: 'top 70%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            delay: 0.6
        });
    }

    // Footer Animation
    const footer = document.querySelector('.main-footer');
    if (footer) {
        gsap.from(footer.querySelectorAll('*'), {
            scrollTrigger: {
                trigger: footer,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1
        });
    }

    // Dynamic Background Intensity on Scroll
    gsap.utils.toArray('.match-highlight, .finale').forEach(section => {
        const overlay = section.querySelector('.match-overlay, .finale-overlay');
        if (overlay) {
            gsap.to(overlay, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true
                },
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                ease: 'none'
            });
        }
    });
});

// Best Performers Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Section header animation
    gsap.to('.section-title', {
        scrollTrigger: {
            trigger: '#performers',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.to('.section-subtitle', {
        scrollTrigger: {
            trigger: '#performers',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // Player cards animation
    gsap.utils.toArray('.player-card').forEach((card, i) => {
        gsap.to(card, {
            scrollTrigger: {
                trigger: '#performers',
                start: 'top 60%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            delay: i * 0.15
        });
    });
    
    // Hover animations
    document.querySelectorAll('.player-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.03,
                y: -10,
                boxShadow: '0 15px 40px rgba(236,28,36,0.3)',
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(this.querySelector('.player-image'), {
                scale: 1.08,
                filter: 'brightness(1.1)',
                duration: 0.6,
                ease: 'power2.out'
            });
            
            gsap.to(this.querySelector('.card-accent'), {
                width: 6,
                background: 'linear-gradient(to bottom, #EC1C24, #FF6B6B)',
                duration: 0.3
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                y: 0,
                boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(this.querySelector('.player-image'), {
                scale: 1,
                filter: 'brightness(0.9)',
                duration: 0.6,
                ease: 'power2.out'
            });
            
            gsap.to(this.querySelector('.card-accent'), {
                width: 4,
                background: '#EC1C24',
                duration: 0.3
            });
        });
    });
    
    // Preload images
    const playerImages = [
        'kohli-batting.jpg',
        'hazlewood-bowling.jpg',
        'salt-fielding.jpg',
        'sharma-batting.jpg',
        'bhuvi-bowling.jpg',
        'stadium-bg.jpg'
    ];
    
    playerImages.forEach(img => {
        new Image().src = img;
    });
});