console.log("script loaded");

var storageKey = "portfolioSettings";
var settings = {
  theme: "light"
};

try {
  var savedValue = localStorage.getItem(storageKey);
  if (savedValue) {
    var savedSettings = JSON.parse(savedValue);
    if (savedSettings && savedSettings.theme === "dark") {
      settings.theme = "dark";
    }
  }
} catch (error) {
  settings = {
    theme: "light"
  };
}

var menuButton = document.getElementById("menuToggle");
var navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {
  navbar.classList.toggle("open");
});

var themeButton = document.getElementById("themeToggle");

if (settings.theme === "dark") {
  document.documentElement.className = "dark-theme";
  themeButton.textContent = "Light Theme";
} else {
  document.documentElement.className = "";
  themeButton.textContent = "Dark Theme";
}

themeButton.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark-theme");

  if (document.documentElement.classList.contains("dark-theme")) {
    settings.theme = "dark";
    themeButton.textContent = "Light Theme";
  } else {
    settings.theme = "light";
    themeButton.textContent = "Dark Theme";
  }

  localStorage.setItem(storageKey, JSON.stringify(settings));
});

var works = [
  {
    image: "assets/1.png",
    label: "MULTIMEDIA ARTS YEAR 2",
    title: "1st Semester Works"
  },
  {
    image: "assets/2.png",
    label: "DESIGN PROJECT",
    title: "Creative Study"
  },
  {
    image: "assets/YE.png",
    label: "PORTFOLIO PIECE",
    title: "Visual Artwork"
  }
];

var dynamicWorks = document.getElementById("dynamicWorks");

works.forEach(function (work) {
  dynamicWorks.innerHTML +=
    '<article class="projectcard imagecard">' +
      '<img src="' + work.image + '" alt="' + work.title + '">' +
      '<div class="projectinfo">' +
        "<p>" + work.label + "</p>" +
        "<h3>" + work.title + "</h3>" +
      "</div>" +
    "</article>";
});

var contactForm = document.getElementById("contactForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");
var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var nameValue = nameInput.value.trim();
  var emailValue = emailInput.value.trim();
  var messageValue = messageInput.value.trim();
  var isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  if (nameValue === "") {
    nameError.textContent = "Please enter your name.";
    isValid = false;
  }

  if (emailValue === "") {
    emailError.textContent = "Please enter your email.";
    isValid = false;
  } else if (emailValue.includes("@") === false || emailValue.includes(".") === false) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (messageValue === "") {
    messageError.textContent = "Please enter a message.";
    isValid = false;
  }

  if (isValid) {
    contactForm.reset();
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "Thank you! Your message has been sent.";
  }
});