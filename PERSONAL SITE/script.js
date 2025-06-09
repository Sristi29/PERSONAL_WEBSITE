const projects = [
  {
    image: "hh.png",
    title: "HOTEL BOOKING WEBSITE",
    description: "Full-stack MERN platform using Node.js, Express, MongoDB, React – implemented secure user authentication, Stripe payment gateway, and admin dashboards. Practiced API development and responsive frontend integration <br><br>  TOOLS-->MongoDB,CSS,JS,React.js Node.js",
    link: "https://github.com/Sristi29/Hotel-Booking"
  },
  {
    image: "currency.png",
    title: "CURRENCY CONVERTOR",
    description: "Designed a responsive web application using HTML, CSS, and JavaScript to convert currencies in real-time using a public exchange rate API. Features include user input validation, dropdown currency selection, and dynamic conversion results.<br><br> TOOLS-->HTML,CSS,JS,API",
    link: "https://github.com/Sristi29/CurrencyConvertor"
  },
  {
    image: "ss.png",
    title: "SCHEDULING ALGORITHM",
    description: "Implemented FCFS, SRTN, and Round Robin scheduling algorithms, improving task completion time by 25%.<br><br>TOOLS-->C++,Algorithm",
    link: "https://github.com/Sristi29/-sheduling-algorithm"
  }
];


const slider = document.getElementById("slider");

projects.forEach(project => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  slide.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <h2 class="project-title">${project.title}</h2>
    <div class="project-info">
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    </div>
  `;
  slider.appendChild(slide);
});

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  updateSlider();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  updateSlider();
});

document.querySelectorAll('a[href^="#popup-kickoff"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const popup = document.querySelector(targetId);
    if (popup) {
      popup.style.display = "block";
      document.body.style.overflow = "hidden"; 
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#popup-kickoff"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const popup = document.querySelector(targetId);
      if (popup) {
        popup.style.display = "block";
        document.body.style.overflow = "hidden"; 
      }
    });
  });

  document.querySelectorAll(".close-popup").forEach(btn => {
    btn.addEventListener("click", function () {
      const popup = this.closest(".popup");
      if (popup) {
        popup.style.display = "none";
        document.body.style.overflow = ""; 
      }
    });
  });
});


updateSlider();
