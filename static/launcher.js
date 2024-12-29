const iframe = document.getElementById("proxyIframe");

    
        const encodedUrl = localStorage.getItem("url");

        if (encodedUrl) {
            const decodedUrl = decodeURIComponent(encodedUrl);
            iframe.src = decodedUrl;
        } else {
            console.error("No URL found in localStorage.");
        }

        function goBack() {
            iframe.contentWindow.history.back();
        }

        function goForward() {
            iframe.contentWindow.history.forward();
        }

        function reloadIframe() {
            iframe.contentWindow.location.reload();
        }

        function toggleFullscreen() {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { 
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { 
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { 
                iframe.msRequestFullscreen();
            }
        }