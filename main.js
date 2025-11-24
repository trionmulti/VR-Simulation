document.addEventListener('DOMContentLoaded', () => {
    console.log('VR System Initialized');

    const logContainer = document.getElementById('message-log');
    const statusValue = document.getElementById('system-status-value');

    function addLog(message) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerText = `> ${message}`;
        logContainer.appendChild(entry);

        // Keep only last 5 logs
        if (logContainer.children.length > 5) {
            logContainer.removeChild(logContainer.firstChild);
        }
    }

    // Listen for VR actions
    window.addEventListener('vr-action', (e) => {
        const action = e.detail.action;

        switch (action) {
            case 'activate-system':
                statusValue.innerText = 'ONLINE';
                statusValue.style.color = '#0f0';
                statusValue.style.textShadow = '0 0 10px #0f0';
                addLog('System Core Activated');
                break;
            case 'toggle-lights':
                addLog('Lighting Configuration Updated');
                break;
            case 'access-data':
                addLog('Accessing Data Archives...');
                setTimeout(() => addLog('Data Download Complete'), 1000);
                break;
            default:
                addLog(`Unknown Command: ${action}`);
        }
    });

    // Initial log
    setTimeout(() => addLog('System Boot Sequence Initiated...'), 500);
    setTimeout(() => addLog('Awaiting User Input...'), 1500);
});
