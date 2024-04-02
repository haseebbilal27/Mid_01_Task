const container = document.querySelector('.container');
const image = document.querySelector('.image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const thumbnails = document.querySelectorAll('.thumbnail');


let currentIndex = 0;

// Function of NextImage
function nextImage() {
    currentIndex++;
    if (currentIndex >= thumbnails.length) {
        currentIndex = 0; 
    }
    showImage(currentIndex);
}


function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = thumbnails.length - 1; 
    }
    showImage(currentIndex);
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);


showImage(currentIndex);
