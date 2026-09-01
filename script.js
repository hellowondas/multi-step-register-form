     /*==== FORM DATA ====*/
let formData = {
  name: "",
  email: "",
  topics: []
};

     /*==== DOM SELECTIONS ====*/
const myName = document.getElementById("name");
const myEmail = document.getElementById("email");
const firstBtn = document.querySelector(".step-1 .btn button");
const secondBtn = document.querySelector(".step-2 .btn button");


     /*==== HELPER FUNCTIONS ====*/
function goToStep(stepNum) {
  const card1 = document.querySelector('.step-1')
  const card2 = document.querySelector('.step-2')
  const card3 = document.querySelector('.step-3')

  card1.hidden = true;
  card2.hidden = true;
  card3.hidden = true;

 /* show only card matching the current step */
  document.querySelector(`.step-${stepNum}`).hidden = false;

  /*update the step to the step yure on*/
  document.querySelector('.steps p').textContent = `Step ${stepNum} of 3`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === stepNum - 1);
  });
}

/* show user the summary of everything that was entered into the form*/
function displaySummary() {
  document.getElementById('display-name').textContent = formData.name;
  document.getElementById('display-email').textContent = formData.email;

  const topicsList = document.querySelector('.display-topics');

  topicsList.innerHTML = formData.topics.map(topic => `<li>${topic}</li>`).join("");
}


     /*==== CARD FUNCTIONS ====*/

/* function hides visibility when clicked */
function handleStep1() {
  /* remove whitespaces from strings */
  const nameVal = myName.value.trim();
  const emailVal = myEmail.value.trim();

  /* check if input is empty & if email is valid */
  if (!nameVal || !emailVal || !myEmail.checkValidity()) {
    return false;
  }

  formData.name = nameVal;
  formData.email = emailVal;
  goToStep(2);
}

/* convert checkbox id into readable text format and save in formData */
function handleStep2() {
  const checkedItems = document.querySelectorAll('input[name="topics"]:checked');

  if (checkedItems.length === 0) {
    console.log("Select at least one topic");
    return;
  }

  formData.topics = Array.from(checkedItems).map(item => {

    const getId = item.id;
    const wSpaces = getId.replace(/-/g, " ");
    const arrWords = wSpaces.split(" ");

    const capsWords = arrWords.map(word => {
      const firstWord = word.charAt(0).toUpperCase();
      const otherWord = word.slice(1);
      return firstWord + otherWord;
    });

    return capsWords.join(" ")
  });

  displaySummary();
  goToStep(3);
}


     /*==== EVENT LISTENERS ====*/

// Add event listener on the first button
firstBtn.addEventListener("click", handleStep1);
secondBtn.addEventListener("click", handleStep2);
