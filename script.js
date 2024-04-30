// Get galleryWrapper
var galleryWrapper = document.getElementById('gallery-wrapper');

// Get Back Button
var back = document.getElementById('back');

// Get Next Button
var next = document.getElementById('next');





// onCLick for Next Button
next.addEventListener("click" , function(){
    galleryWrapper.scrollLeft = 900;
    galleryWrapper.style.scrollBehavior = "smooth";
});


back.addEventListener("click" , function(){
    galleryWrapper.scrollLeft = -900;
})




// function Built In ==== method
// Regular Functio === Mine Function
// Anonymous Function