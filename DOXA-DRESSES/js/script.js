/* ==========================================
   DOXA DRESSES - Interactive Micro-Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Add tactile touch response feedback for mobile devices
    const interactiveButtons = document.querySelectorAll('.tap-effect');

    interactiveButtons.forEach(button => {
        // Touch events for mobile responsiveness
        button.addEventListener('touchstart', () => {
            button.classList.add('is-active');
        }, { passive: true });

        button.addEventListener('touchend', () => {
            setTimeout(() => {
                button.classList.remove('is-active');
            }, 150);
        }, { passive: true });

        // Mouse click fallback for desktop preview testing
        button.addEventListener('mousedown', () => {
            button.classList.add('is-active');
        });

        button.addEventListener('mouseup', () => {
            setTimeout(() => {
                button.classList.remove('is-active');
            }, 150);
        });
    });

});