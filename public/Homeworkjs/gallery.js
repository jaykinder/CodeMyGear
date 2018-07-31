var images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAp3jykUwsdXvF6HlTTl8d-eUo7xSLVj8_xmOQo2d8u0DiZEkZww',
  'https://i.pinimg.com/originals/e2/80/dd/e280dd8ac72b863179244397b69da5d8.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWuKKqqeDR-OkyIv8A0GJp0UazcfvC3r4gpM4yn_N0a4g9zgUMA',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GovHPkZa8oZJwzsZybqlU86Fu6PVyxrUPZEtdI7SCN_f2fpy'
];

// galleryBox is the div with a class of gallery
// find the div and set the variable to the DOM Element
var galleryBox = document.querySelector('.gallery');

// heroImage is setting up a template to be placed as your hero image
// we're using the images array and grabbing the first image (ie. 0th place)
var heroImage = `<img src="${images[0]}" />`;

// thumbs is a blank variable right now
// you need to:
  // loop through your images
  // make a template of an image tag
  // set the src of the img tag to the current image you're looping over
  // add that image to the thumbs variable (thumbs += template)
var thumbs = "";
images.forEach(function(image) {
   thumbs += `<img src="${image}" />`;
})

// find the hero div using querySelector()
// set the innerHTML to your heroImage template
var heroDiv = document.querySelector(".hero")
heroDiv.innerHTML = heroImage;


// find the thumbs div using querySelector()
// set the innerHTML to your thumbs template
var thumbsDiv = document.querySelector(".thumbs")
thumbsDiv.innerHTML = thumbs;

// add an event listener on the galleryBox div
// use a 'click' listener
// in the function that handles the click:
  // create a variable for a new image template
  // set the src of the image to the src of the thumbnail you clicked on (hint use event variable)
  // find the hero div with querySelector()
  // set the innerHTML of that div to be equal to your new hero template

galleryBox.addEventListener('click', function() {
  var image = event.target.src;
  var newImage = `<img src="${image}" />`;
  heroDiv.innerHTML = newImage;
})
