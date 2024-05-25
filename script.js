document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");

  const questions = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "I'll be sad Babu😢",
    "I'll be more sad Meri Sona😢",
    "I'll be very sad Meri Jaan😢",
    "I'll be very very sad 😢",
    "Maybe we can talk about it?",
    "I am not going to ask again! 😡",
    "Ok now this is hurting my feelings! 😭",
    "You are now just being mean! 😭",
    "Why are you doing this to me? 😭",
    "Please give me a chance! 🙏",
    "Please Babu Meri Sona 🥰",
    "I'll be very Sad  na 😢",
    "Man Jao Na Babu Pilij Babu",
  ];

  let questionIndex = 0;

  yesButton.addEventListener("click", function () {
    responseMessage.innerText = `😘💖,I Love youuuuu Babu 😘😘 Meri sona❤️ Babu ${this.style.breakAfter}
      ❤💘😍🥰😘Meri Piyari Babu🥰❤💘🧡🌹🌹`;
    responseMessage.style.color = "#14199b";
    noButton.style.display = "none";
  });

  noButton.addEventListener("click", function () {
    noButton.innerText = questions[questionIndex];
    questionIndex = (questionIndex + 1) % questions.length;
  });
});
