var modal = document.getElementById('imageModal');

var images = document.querySelectorAll('.design-grid-item img');
var modalImg = document.getElementById("fullSizeImage");
var container = document.querySelector('.container');

images.forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
    container.classList.add('blur');
  });
});

var span = document.getElementsByClassName("close")[0];

span.addEventListener('click', function() {
  modal.style.display = "none";
  container.classList.remove('blur');
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) { 
    modal.style.display = "none";
    container.classList.remove('blur');
  }
});