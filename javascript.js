/* -------- ABOUT TAB SWITCH -------- */
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  element.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

/* -------- MOBILE MENU -------- */
let menu = document.getElementById("menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelectorAll(".navbar a").forEach(link => {
  link.onclick = () => {
    navbar.classList.remove("active");
  };
});

/* -------- TYPING EFFECT -------- */
const roles = ["Web Developer", "Data Analyst"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  }

  let speed = isDeleting ? 80 : 120;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

document.getElementById("contactForm").addEventListener("submit", function (e) {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
    if (name === "") {
        alert(" Please enter your name");
        e.preventDefault();
        return;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        alert(" Please enter a valid email address");
        e.preventDefault();
        return;
    }

    // Message validation
    if (message === "") {
        alert(" Please enter your message");
        e.preventDefault();
        return;
    }

    // If everything is valid → Formspree will submit
});

