// index.js

function displayRamenDetails(ramen){
  const detailImageElement = document.querySelector('.detail-image')
  detailImageElement.src = ramen.image
  const nameElement = document.querySelector('.name')
  nameElement.textContent = ramen.name
  const restaurantElement = document.querySelector('.restaurant')
  restaurantElement.textContent = ramen.restaurant
  const ratingDisplayElement = document.getElementById('rating-display')
  ratingDisplayElement.textContent = ramen.rating
  const commentDisplayElement = document.querySelector('#comment-display')
  commentDisplayElement.textContent = ramen.comment
}

const handleClick = (ramen) => {
  img.addEventListener('click',() => {
    displayRamenDetails(ramen)
  })
};

const addSubmitListener = () => {
  const ramenForm = document.getElementById('new-ramen');
  console.log(ramenForm);
  ramenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    gatherFormInput();
  });
}

function gatherFormInput(){
  const nameElement = document.getElementById('new-name');
  const restaurantElement = document.getElementById('new-restaurant');
  const imgElement = document.getElementById('new-image');
  const ratingElement = document.getElementById('new-rating');
  const commentElement = document.getElementById('new-comment');

  const name = nameElement.value;
  const restaurant = restaurantElement.value;
  const img = imgElement.value;
  const rating = ratingElement.value;
  const comment = commentElement.value;

  const ramen = {
    name: name,
    restaurant: restaurant,
    comment: comment,
    image: img,
    rating: rating,
  };
  addRamenImageToMenu(ramen);
}

function addRamenImageToMenu(ramen){
  const img = document.createElement('img')
  img.src = ramen.image
  const menuElement = document.getElementById('ramen-menu')
  menuElement.appendChild(img)
  img.addEventListener('click', () => {
      displayRamenDetails(ramen)
  })
}

const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displayRamenDetails(data[0]);
    data.forEach((ramen) => {
      addRamenImageToMenu(ramen)
    })
    //getElementById("ramen-menu")
  });
}

const main = () => {
  displayRamens();
  addSubmitListener();
};

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
