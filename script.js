// ==================== FLYING HEARTS ====================
function createFlyingHeart() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.className = 'flying-heart';

    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💝', '💘', '💞', '💟'];
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + '%';

    const duration = 5 + Math.random() * 4;
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';

    const size = 2 + Math.random() * 2;
    heart.style.fontSize = size + 'rem';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + 2) * 1000);
}

function startHeartAnimation() {
    // Create initial burst
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            createFlyingHeart();
        }, i * 200);
    }

    // Continuous creation - more frequently!
    setInterval(() => {
        createFlyingHeart();
    }, 400);
}

// ==================== HEART RAIN ====================
function createRainHeart() {
    const rainContainer = document.getElementById('heartRainContainer');
    const heart = document.createElement('div');
    heart.className = 'rain-heart';

    const heartEmojis = ['💕', '💖', '💗', '💓', '💝'];
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + '%';

    const duration = 4 + Math.random() * 3;
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';

    rainContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + 2) * 1000);
}

function startHeartRain() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createRainHeart();
        }, i * 300);
    }

    setInterval(() => {
        createRainHeart();
    }, 600);
}

// ==================== RANDOM HEART EXPLOSIONS ====================
function createHeartExplosion(x, y) {
    const explosionContainer = document.getElementById('heartExplosionContainer');

    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.textContent = ['❤️', '💖', '💕', '💗'][Math.floor(Math.random() * 4)];
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = (1.5 + Math.random() * 1) + 'rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';

        const angle = (i / 12) * Math.PI * 2;
        const distance = 80 + Math.random() * 120;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        heart.style.animation = 'burstHeart 1.5s ease-out forwards';
        heart.style.setProperty('--burst-x', tx + 'px');
        heart.style.setProperty('--burst-y', ty + 'px');

        explosionContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }
}

// Random explosions across screen
function startRandomExplosions() {
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createHeartExplosion(x, y);
    }, 3000);
}

// ==================== SHIMMER PARTICLES ====================
function createShimmer() {
    const shimmerContainer = document.getElementById('shimmerContainer');
    const shimmer = document.createElement('div');
    shimmer.className = 'shimmer';
    shimmer.textContent = '✨';

    shimmer.style.left = Math.random() * 100 + '%';
    shimmer.style.top = Math.random() * 100 + '%';

    const tx = (Math.random() - 0.5) * 300;
    const ty = (Math.random() - 0.5) * 300;
    shimmer.style.setProperty('--shimmer-x', tx + 'px');
    shimmer.style.setProperty('--shimmer-y', ty + 'px');

    const duration = 6 + Math.random() * 4;
    shimmer.style.animationDuration = duration + 's';
    shimmer.style.animationDelay = Math.random() * 2 + 's';

    shimmerContainer.appendChild(shimmer);

    setTimeout(() => {
        shimmer.remove();
    }, (duration + 2) * 1000);
}

function startShimmerAnimation() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createShimmer();
        }, i * 250);
    }

    setInterval(() => {
        createShimmer();
    }, 800);
}

// ==================== CONFETTI HEARTS ====================
function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const confetti = document.createElement('div');
    confetti.className = 'confetti-heart';

    const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💝', '💘', '💞'];
    confetti.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    confetti.style.left = Math.random() * 100 + '%';

    const duration = 3 + Math.random() * 2;
    confetti.style.animationDuration = duration + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, (duration + 2) * 1000);
}

function startConfettiAnimation() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 400);
    }

    setInterval(() => {
        createConfetti();
    }, 1000);
}

// ==================== FLOATING PARTICLES ====================
function createParticle() {
    const particlesContainer = document.getElementById('particles');
    const particle = document.createElement('div');
    particle.className = 'particle';

    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';

    const tx = (Math.random() - 0.5) * 300;
    const ty = (Math.random() - 0.5) * 300;
    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');

    const duration = 10 + Math.random() * 5;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = Math.random() * 3 + 's';

    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, (duration + 3) * 1000);
}

function startParticleAnimation() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 150);
    }

    setInterval(() => {
        createParticle();
    }, 400);
}

// ==================== FLOATING BUBBLES ====================
function createBubble() {
    const bubblesContainer = document.getElementById('bubblesContainer');
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    const size = 40 + Math.random() * 100;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    bubble.style.left = Math.random() * 100 + '%';

    const drift = (Math.random() - 0.5) * 250;
    bubble.style.setProperty('--bubble-drift', drift + 'px');

    const duration = 7 + Math.random() * 5;
    bubble.style.animationDuration = duration + 's';
    bubble.style.animationDelay = Math.random() * 2 + 's';

    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, (duration + 2) * 1000);
}

function startBubbleAnimation() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createBubble();
        }, i * 350);
    }

    setInterval(() => {
        createBubble();
    }, 900);
}

// ==================== CLICK EFFECTS ====================
document.addEventListener('click', (e) => {
    // Create heart explosion at click
    createHeartExplosion(e.clientX, e.clientY);

    // Extra shimmer burst
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const shimmer = document.createElement('div');
            shimmer.textContent = '✨';
            shimmer.style.position = 'fixed';
            shimmer.style.left = e.clientX + 'px';
            shimmer.style.top = e.clientY + 'px';
            shimmer.style.fontSize = '1.5rem';
            shimmer.style.pointerEvents = 'none';
            shimmer.style.zIndex = '1001';
            shimmer.style.animation = 'burstHeart 1s ease-out forwards';

            const angle = (i / 8) * Math.PI * 2;
            const distance = 60 + Math.random() * 60;
            shimmer.style.setProperty('--burst-x', Math.cos(angle) * distance + 'px');
            shimmer.style.setProperty('--burst-y', Math.sin(angle) * distance + 'px');

            document.body.appendChild(shimmer);

            setTimeout(() => shimmer.remove(), 1000);
        }, i * 50);
    }
});

// ==================== MOUSE TRAIL ====================
let mouseMoving = false;

document.addEventListener('mousemove', (e) => {
    if (mouseMoving) return;

    mouseMoving = true;

    if (Math.random() > 0.6) {
        const trailHeart = document.createElement('div');
        trailHeart.textContent = ['💖', '💕', '✨'][Math.floor(Math.random() * 3)];
        trailHeart.style.position = 'fixed';
        trailHeart.style.left = e.clientX + 'px';
        trailHeart.style.top = e.clientY + 'px';
        trailHeart.style.fontSize = '1.2rem';
        trailHeart.style.pointerEvents = 'none';
        trailHeart.style.zIndex = '999';
        trailHeart.style.opacity = '0';
        trailHeart.style.animation = 'fadeOut 1.2s ease-out forwards';

        document.body.appendChild(trailHeart);

        setTimeout(() => {
            trailHeart.remove();
        }, 1200);
    }

    setTimeout(() => {
        mouseMoving = false;
    }, 30);
});

// ==================== ANIMATIONS STYLES ====================
const style = document.createElement('style');
style.textContent = `
    @keyframes burstHeart {
        0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(var(--burst-x), var(--burst-y)) scale(1.8) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-40px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ==================== VIDEO HANDLING ====================
function handleVideoOrientation() {
    const bgVideo = document.getElementById('bgVideo');
    const centerVideo = document.querySelector('.center-video');

    if (bgVideo) {
        bgVideo.play().catch(e => console.log('Background video autoplay blocked:', e));
    }
    if (centerVideo) {
        centerVideo.play().catch(e => console.log('Center video autoplay blocked:', e));
    }
}

// ==================== AUDIO HANDLING ====================
function handleAudio() {
    const bgAudio = document.getElementById('bgAudio');
    const audioControl = document.getElementById('audioControl');
    const audioIcon = audioControl ? audioControl.querySelector('.audio-icon') : null;
    const audioText = audioControl ? audioControl.querySelector('.audio-text') : null;

    let audioStarted = false;

    // Hide button by default
    if (audioControl) {
        audioControl.classList.add('hidden');
    }

    if (!bgAudio) return;

    // Set audio properties for best autoplay chance
    bgAudio.volume = 0.8;
    bgAudio.loop = true;

    // Strategy 1: Try direct play immediately
    const tryDirectPlay = () => {
        return bgAudio.play().then(() => {
            console.log('🎵 SUCCESS: Music playing immediately!');
            audioStarted = true;
            return true;
        }).catch(err => {
            console.log('Direct play failed:', err.message);
            return false;
        });
    };

    // Strategy 2: Try muted play then unmute
    const tryMutedPlay = () => {
        bgAudio.muted = true;
        return bgAudio.play().then(() => {
            console.log('🎵 Playing muted, attempting unmute...');
            setTimeout(() => {
                bgAudio.muted = false;
                console.log('🎵 Unmuted! Music should be playing now.');
                audioStarted = true;
            }, 100);
            return true;
        }).catch(err => {
            console.log('Muted play failed:', err.message);
            bgAudio.muted = false;
            return false;
        });
    };

    // Strategy 3: Wait for any interaction
    const setupInteractionPlay = () => {
        const autoPlayOnInteraction = (event) => {
            if (!audioStarted) {
                bgAudio.muted = false;
                bgAudio.play().then(() => {
                    console.log('🎵 Music started on user interaction!');
                    audioStarted = true;

                    // Show brief confirmation
                    if (audioControl) {
                        audioControl.classList.remove('hidden');
                        audioControl.classList.add('playing');
                        if (audioIcon) audioIcon.textContent = '🎵';
                        if (audioText) audioText.textContent = 'Nhạc đang phát';

                        setTimeout(() => {
                            audioControl.classList.add('hidden');
                        }, 2000);
                    }

                    // Remove all listeners
                    removeAllListeners();
                }).catch(err => {
                    console.log('Interaction play failed:', err);
                });
            }
        };

        const removeAllListeners = () => {
            document.removeEventListener('click', autoPlayOnInteraction);
            document.removeEventListener('touchstart', autoPlayOnInteraction);
            document.removeEventListener('touchend', autoPlayOnInteraction);
            document.removeEventListener('keydown', autoPlayOnInteraction);
            document.removeEventListener('mousemove', autoPlayOnInteraction);
            document.removeEventListener('scroll', autoPlayOnInteraction);
        };

        // Listen for ANY user interaction
        document.addEventListener('click', autoPlayOnInteraction, { once: true });
        document.addEventListener('touchstart', autoPlayOnInteraction, { once: true });
        document.addEventListener('touchend', autoPlayOnInteraction, { once: true });
        document.addEventListener('keydown', autoPlayOnInteraction, { once: true });
        document.addEventListener('mousemove', autoPlayOnInteraction, { once: true });
        document.addEventListener('scroll', autoPlayOnInteraction, { once: true });
    };

    // Execute strategies in sequence
    const executeStrategies = async () => {
        // Try 1: Direct play
        let success = await tryDirectPlay();
        if (success) return;

        // Wait a bit
        await new Promise(resolve => setTimeout(resolve, 100));

        // Try 2: Muted then unmute
        success = await tryMutedPlay();
        if (success) return;

        // Wait a bit more
        await new Promise(resolve => setTimeout(resolve, 200));

        // Try 3: One more direct attempt
        success = await tryDirectPlay();
        if (success) return;

        // Last resort: Setup interaction listeners
        console.log('⚠️ Autoplay blocked by browser. Music will play on first interaction.');
        setupInteractionPlay();
    };

    // Start the process
    executeStrategies();

    // Also try on window load as backup
    window.addEventListener('load', () => {
        if (!audioStarted) {
            setTimeout(() => {
                tryDirectPlay().then(success => {
                    if (!success) {
                        tryMutedPlay();
                    }
                });
            }, 500);
        }
    });
}

// ==================== INITIALIZE ALL EFFECTS ====================
window.addEventListener('load', () => {
    console.log('🎉 Initializing all heart effects...');

    // Start video
    handleVideoOrientation();

    // Start audio
    handleAudio();

    // Start all heart effects
    startHeartAnimation();
    startHeartRain();
    startConfettiAnimation();
    startShimmerAnimation();
    startParticleAnimation();
    startBubbleAnimation();
    startRandomExplosions();

    // Initial heart burst
    setTimeout(() => {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createFlyingHeart();
                if (i % 2 === 0) createRainHeart();
                if (i % 3 === 0) createConfetti();
            }, i * 80);
        }
    }, 500);

    // Random screen explosions
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createHeartExplosion(x, y);
            }, i * 600);
        }
    }, 1500);

    console.log('💖 All effects initialized! Enjoy the hearts! 💖');
});
