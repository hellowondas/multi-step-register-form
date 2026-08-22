const myName = document.getElementById("name");
const myEmail = document.getElementById("email");
const firstBtn = document.querySelector(".step-1 .btn button");

/* this handles hidden & visiblity of the cards when continue is clicked */
function handleContinue() {
  const nameVal = myName.value.trim();
  const emailVal = myEmail.value.trim();

  if (nameVal === "" || emailVal === "") {
    return false;
  }
  if (!myEmail.checkValidity()) {
    return false;
  }

  toggleCards();
}


function toggleCards() {
  const card1 = document.querySelector(".step-1");
  const card2 = document.querySelector(".step-2");

  card1.hidden = true;
  card2.hidden = false;
}

// Add event listener on the first button 
firstBtn.addEventListener("click", handleContinue);


document.querySelector(".steps p").textContent = "Steps 2 of 3";
document.querySelectorAll(".dot")[0].classList.remove(".active");
document.querySelectorAll(".dot")[0].classList.add(".active");