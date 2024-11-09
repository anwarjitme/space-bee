// const sliderContainer = document.getElementById("sliderContainer");
// let scrollAmount = 0;
let currentIndex = 0;

const slideLeft = () => {
  const sliderContainer = document.getElementById('sliderContainer');
  const totalCards = document.querySelectorAll('.slider__card').length;
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1; // Loop back to the last card
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust 320px to the width of your card
};

const slideRight = () => {
  const sliderContainer = document.getElementById('sliderContainer');
  const totalCards = document.querySelectorAll('.slider__card').length;
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first card
  }
  sliderContainer.style.transform = `translateX(-${currentIndex * 320}px)`; // Adjust 320px to the width of your card
};


function openModal(name, position, company, imageSrc) {
  let img=document.getElementsByClassName("slider__card-image")[0].src
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalPosition").innerText = position;
  document.getElementById("modalCompany").innerText = company;
  document.getElementById("modalImage").src = img;
  document.getElementById("modalImage").alt = `${name}, ${position} at ${company}`;

  // Show modal and move the slider down
  document.getElementById("modal").classList.add("modal--visible");
  document.querySelector(".slider").classList.add("slider--below-modal");
}

function closeModal() {
  // Hide modal and move the slider back up
  document.getElementById("modal").classList.remove("modal--visible");
  document.querySelector(".slider").classList.remove("slider--below-modal");
}

// function slideLeft() {
//   scrollAmount -= 200;
//   sliderContainer.scrollTo({
//     left: scrollAmount,
//     behavior: "smooth"
//   });
// }

// function slideRight() {
//   scrollAmount += 200; 
//   sliderContainer.scrollTo({
//     left: scrollAmount,
//     behavior: "smooth"
//   });
// }
