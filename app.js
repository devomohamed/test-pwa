if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js')
    .then((reg)=>{
        console.log("file is register", reg);
    }).catch(e=>{
        console.log("Error",e);
    })
}