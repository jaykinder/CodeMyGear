
var images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAp3jykUwsdXvF6HlTTl8d-eUo7xSLVj8_xmOQo2d8u0DiZEkZww',
  'https://i.pinimg.com/originals/e2/80/dd/e280dd8ac72b863179244397b69da5d8.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWuKKqqeDR-OkyIv8A0GJp0UazcfvC3r4gpM4yn_N0a4g9zgUMA',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GovHPkZa8oZJwzsZybqlU86Fu6PVyxrUPZEtdI7SCN_f2fpy'
];

var galleryBox = document.querySelector('.gallery');
var heroImage = `<img src="${images[0]}" />`;

var thumbs = "";
images.forEach(function(image) {
   thumbs += `<img src="${image}" />`;
})

var heroDiv = document.querySelector(".hero")
heroDiv.innerHTML = heroImage;

var thumbsDiv = document.querySelector(".thumbs")
thumbsDiv.innerHTML = thumbs;


galleryBox.addEventListener('click', function() {
  var image = event.target.src;
  var newImage = `<img src="${image}" />`;
  heroDiv.innerHTML = newImage;
})
