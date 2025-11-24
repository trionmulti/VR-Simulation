/* global AFRAME */

AFRAME.registerComponent('clickable', {
    schema: {
        action: {type: 'string', default: ''}
    },
    init: function () {
        var el = this.el;
        var data = this.data;

        el.addEventListener('mouseenter', function () {
            el.setAttribute('scale', {x: 1.1, y: 1.1, z: 1.1});
            // Show hint
            const hint = document.getElementById('interaction-hint');
            if(hint) {
                hint.innerText = "Click to Interact";
                hint.style.opacity = 1;
            }
        });

        el.addEventListener('mouseleave', function () {
            el.setAttribute('scale', {x: 1, y: 1, z: 1});
            // Hide hint
            const hint = document.getElementById('interaction-hint');
            if(hint) {
                hint.style.opacity = 0;
            }
        });

        el.addEventListener('click', function () {
            // Emit event globally or handle specific action
            if (data.action) {
                el.emit(data.action);
                console.log('Action triggered:', data.action);
                
                // Also dispatch a custom DOM event for the HUD to pick up
                window.dispatchEvent(new CustomEvent('vr-action', { detail: { action: data.action } }));
            }
        });
    }
});

AFRAME.registerComponent('screen-display', {
    schema: {
        defaultColor: {type: 'color', default: '#111'},
        activeColor: {type: 'color', default: '#00ff00'},
        targetEvent: {type: 'string', default: ''}
    },
    init: function () {
        var el = this.el;
        var data = this.data;
        var isActive = false;

        if (data.targetEvent) {
            el.sceneEl.addEventListener(data.targetEvent, function () {
                isActive = !isActive;
                el.setAttribute('material', 'color', isActive ? data.activeColor : data.defaultColor);
                
                // Optional: Play sound or animate
            });
        }
        
        // Listen for direct clicks if it's also clickable
        el.addEventListener('click', function() {
             // Toggle state locally if clicked directly (optional, depends on design)
             // For now, we rely on the event system
        });
    }
});
