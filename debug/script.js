        
        function getCPUUsage() {
            
            return Math.floor(Math.random() * 100);
        }

        
        let lastFrameTime = performance.now();
        let frameCount = 0;
        let fps = 0;

        function calculateFPS() {
            const currentTime = performance.now();
            frameCount++;

            if (currentTime - lastFrameTime >= 1000) { 
                fps = frameCount;
                frameCount = 0;
                lastFrameTime = currentTime;
            }
        }

       
        function updateOverlay() {
            const cpuUsage = getCPUUsage();
            const fpsRate = fps;

            document.getElementById('cpuUsage').textContent = `CPU Usage: ${cpuUsage}%`;
            document.getElementById('fpsRate').textContent = `FPS: ${fpsRate}`;
        }

        
        setInterval(calculateFPS, 1000 / 60); 
        setInterval(updateOverlay, 1000); 
    