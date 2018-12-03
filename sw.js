console.log('Service Worker is registered.');

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('vw1').then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/data/restaurants.json',
                '/css/styles.css',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg'
            ]);
        })
    );
});
