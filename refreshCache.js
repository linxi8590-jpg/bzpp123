
        // Function to refresh cache
        function refreshCache() {
            if (caches) {
                caches.keys().then(function(cacheNames) {
                    cacheNames.forEach(function(cacheName) {
                        caches.delete(cacheName);
                    });
                });
            }
            window.location.reload();
        }
    