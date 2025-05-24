// Image modal viewer
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

const photos = document.querySelectorAll(".photo");
photos.forEach(photo => {
    photo.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = photo.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
