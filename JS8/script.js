const mainPreview = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () =>{
        const large = thumb.src.replace("100/60" , "500/300");
        mainPreview = large;
    })
});
