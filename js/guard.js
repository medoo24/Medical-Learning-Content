/**
 * Intelligent Anti-Inspect & Anti-Debugging Guard
 * 
 * This script implements an "intelligent lock" that instantly freezes the browser
 * if Developer Tools are opened, without ruining the UX (right-click, highlight) 
 * for normal users.
 */
(function() {
    // 1. Console Tampering
    // Overwrite all console methods to silently fail and trigger a clear
    const methods = ["log", "debug", "info", "warn", "error", "dir", "dirxml", "trace", "profile", "table"];
    methods.forEach(method => {
        console[method] = function() {
            // If they try to execute a console command, clear it immediately
            setTimeout(console.clear.bind(console));
        };
    });

    // Protect the guard functions from being printed via .toString()
    const protectFn = function(fn) {
        fn.toString = function() { return "function() { [native code] }"; };
        return fn;
    };

    // 2. The "Debugger Loop" Trap (The Instant Lock)
    const debuggerLock = protectFn(function() {
        const start = new Date().getTime();
        
        // This statement is completely ignored by the browser IF DevTools is closed.
        // If DevTools is open, the browser instantly halts execution here, locking the UI.
        debugger; 
        
        const end = new Date().getTime();
        
        // 3. Performance Timing Detection
        // If execution from start to end took more than 100ms, the debugger caught it
        // (meaning DevTools is open and they had to click "Resume" or it paused).
        if (end - start > 100) {
            // Punish them by wiping the DOM and stopping the app
            document.body.innerHTML = \`
                <div style="display:flex; justify-content:center; align-items:center; height:100vh; background-color:#0f172a; color:#ef4444; font-family:system-ui, sans-serif; text-align:center; padding: 2rem;">
                    <div>
                        <h1 style="font-size:3rem; margin-bottom:1rem;">⚠️ Unauthorized Inspection</h1>
                        <p style="font-size:1.2rem; color:#cbd5e1;">Developer tools and code inspection are restricted on this clinical dashboard.</p>
                        <p style="font-size:1rem; color:#64748b; margin-top:2rem;">Please close your Developer Tools and refresh the page to continue.</p>
                    </div>
                </div>
            \`;
            
            // Attempt to stop further document parsing/loading
            if (window.stop) {
                window.stop();
            }
        }
    });

    // Run the trap aggressively (every 500ms)
    // We don't run it too fast (e.g. 1ms) to avoid lagging the actual app for normal users
    setInterval(debuggerLock, 500);

    // Initial check on load
    debuggerLock();
})();
