function startInteractionObserver() {
    // const crunchUi2 = 
    //     document.getElementById("crunchUi2");
    //     console.log(crunchUi2);

    const lightboxItemArray = 
        document.querySelectorAll('.lightbox');


    console.log(lightboxItemArray);

    const options = { 
        threshold: 0,
        rootMargin: "-100px",
    };
        
    const observer = 
        new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if(!entry.isIntersecting){

                    entry.target.classList.remove("focused");
                    return
                }
                entry.target.classList.add("focused");
            })
        }, options);
    
    lightboxItemArray.forEach(lightboxItem => {
        observer.observe(lightboxItem);
    })
}
