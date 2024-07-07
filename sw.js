
const casheName = "DEV HUB-v1";


self.addEventListener('install',(installEvent)=>{
console.log("service worker Installation",installEvent);
    // caches.open(casheName).then(cashe=>{
    //     cashe.
    // }).catch(err=>{
    //     console.log("Error: " , err);
    // })
})
 
self.addEventListener('activate',(activateEvent)=>{
console.log("service worker activateEvented",activateEvent);
})

self.addEventListener('fetch',(fetchEvent)=>{
console.log("service worker fetchEvent",fetchEvent);
})