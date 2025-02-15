

// NAVBAR START
// Smooth Scroll for Nav Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after clicking a link
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('open');
    mobileMenu.style.height = '0';
  });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    mobileMenu.style.height = '0';
  } else {
    mobileMenu.classList.add('open');
    mobileMenu.style.height = '200px'; // Adjust based on content
  }
});
//NAVBAR END

// gsap.from('.section-heading', {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '.section-heading',
//     start: 'top 80%',
//   },
// });



const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01 AI ML CODE FUTURE DATA ".split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

// Slower speed by increasing interval time
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)"; // Lower opacity
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(32, 201, 172, 0.7)"; // Teal color with transparency
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    if (Math.random() > 0.92) continue; // Reduce text density

    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 80); // Increased interval time for slower effect



const dayNightBackground = document.getElementById('day-night-background');

function setDayNightTheme() {
  const now = new Date();
  const hours = now.getHours();

  // Daytime (6 AM to 6 PM)
  if (hours >= 6 && hours < 18) {
    // Add Sun
    const sun = document.createElement('div');
    sun.classList.add('sun');
    dayNightBackground.appendChild(sun);
  } 
  // Nighttime (6 PM to 6 AM)
  else {
    // Add Moon
    const moon = document.createElement('div');
    moon.classList.add('moon');
    dayNightBackground.appendChild(moon);

    // Add Stars
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      dayNightBackground.appendChild(star);
    }
  }
}

setDayNightTheme();



const heroName = document.getElementById('hero-name');
const tagline = document.getElementById('hero-tagline');

const nameText = "Muhammad Saad";
const taglineText = "Creative Developer & Designer";

let nameIndex = 0;
let taglineIndex = 0;

function typeWriter() {
  if (nameIndex < nameText.length) {
    heroName.innerHTML += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeWriter, 100);
  } else if (taglineIndex < taglineText.length) {
    tagline.innerHTML += taglineText.charAt(taglineIndex);
    taglineIndex++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();


const particleContainer = document.getElementById('particle-container');

// Three.js Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
particleContainer.appendChild(renderer.domElement);

// Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 500;
const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02,
  color: 0xFFD700, // Golden color
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

camera.position.z = 5;

// Animation Loop
function animateai() {
  requestAnimationFrame(animateai);
  particlesMesh.rotation.x += 0.001;
  particlesMesh.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animateai();

// 3D Tilt Effect
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    card.style.transform = `
      perspective(1000px)
      rotateX(${y * 10}deg)
      rotateY(${x * 10}deg)
      scale(1.05)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  });
});
const projects = [
  {
    title: "Weather forecast",
    description: " forecast for the weather station",
    image: "/images/weather.PNG",
    tech: ["Html","Css", "Bootstrap", "Javascript", "Api", "Live"],
    link: "https://saad-weatherapp.netlify.app/"
  },
  {
    title: "Quizz App",
    description: "Dynamic Quizz App",
    image: "/images/QuizApp.PNG",
    tech: ["Html", "Bootstrap", "Javascript", "Live"],
    link: "https://saad-quizzapp.netlify.app/"
  },
  {
    title: "E Commerce Design",
    description: "responsive E Commerce Design ",
    image: "/images/ecommerce.PNG",
    tech: ["Html", "Bootstrap", "Css", "Live"],
    link: "https://saad-ecommerce-design.netlify.app/"
  },
  {
    title: "Social Memory Share",
    description: "Colleboration with our team to make this entire website",
    image: "/images/socialMemoryShare.PNG",
    tech: ["Javascript", "Css", "Api", "Supabase", "Html"],
    link: "https://social-memory-share-reminex-alphateam.netlify.app/"
  },
  {
    title: "Todolist App",
    description: "Todolist App with search functionality.",
    image: "/images/todolist.PNG",
    tech: ["Html", "Bootstrap", "Javascript", "Live"],
    link: "https://saad-todolistapp.netlify.app/"
  },
  {
    title: "Hackathon Project ",
    description: "A landing page with best design.",
    image: "/images/hackathon.PNG",
    tech: ["Html", "Css", "Bootstrap"],
    link: "https://saad-smithackathon.netlify.app/"
  },

  // Add more projects here
];

const projectsContainer = document.querySelector('#projects .grid');

projects.forEach(project => {
  const projectCard = `
    <div class="project-card glassmorphic-card p-6 relative overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div class="project-image mb-4">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg">
      </div>
      <h3 class="text-2xl font-poppins font-bold mb-2">${project.title}</h3>
      <p class="text-sm opacity-80 mb-4">${project.description}</p>
      <div class="tech-stack flex space-x-2 mb-4">
        ${project.tech.map(tech => `<span class="tech-icon" data-tooltip="${tech}">${getTechIcon(tech)}</span>`).join('')}
      </div>
      <a href="${project.link}" class="live-preview-btn w-full py-2 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all">
        Live Preview
      </a>
    </div>
  `;
  projectsContainer.innerHTML += projectCard;
});

function getTechIcon(tech) {
  const icons = {
    "React": "⚛️",
    "Tailwind CSS": "🎨",
    "Css": "🎨",
    "Node.js": "🛠️",
    "Html": "🏗️",
    "Javascript":"⚙️",
    "Bootstrap":"🟣",
    "Api":"🔗",
    "Live":"🚀",
    "Supabase":"🛢️",
    
    // Add more mappings
  };
  return icons[tech] || "💻";
}






//SKILLS SECTION START
// Animate Progress Bars on Scroll


const skills = [
    { name: "HTML", icon: '<i class="fa-brands fa-html5"></i>', percent: 95 },
    { name: "CSS", icon: '<i class="fa-brands fa-css3-alt"></i>', percent: 90 },
    { name: "JavaScript", icon: '<i class="fa-brands fa-js"></i>', percent: 85 },
    { name: "React", icon: '<i class="fa-brands fa-react"></i>', percent: 50 },
    { name: "Tailwind CSS", icon: '<i class="fa-solid fa-palette"></i>', percent: 75 },
    { name: "Bootstrap", icon: '<i class="fa-brands fa-bootstrap"></i>', percent: 85 },
    { name: "Supabase", icon: '<i class="fa-solid fa-database"></i>', percent: 70 },
    { name: "VS Code", icon: '<i class="fa-solid fa-code"></i>', percent: 90 },
    { name: "Git", icon: '<i class="fa-brands fa-git"></i>', percent: 80 },
    { name: "GitHub", icon: '<i class="fa-brands fa-github"></i>', percent: 90 },
    { name: "TypeScript", icon: '🔷', percent: 65 },
   // Add more skills here
  ];
  
  const skillsContainer = document.querySelector('#skills .grid');
  
  skills.forEach(skill => {
    const skillCard = `
      <div class="skill-card text-center">
        <div class="progress-circle relative w-24 h-24 mx-auto mb-4">
          <svg class="w-full h-full" viewBox="0 0 36 36">
            <path class="text-dark-2" stroke-width="2" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="text-teal" stroke-width="2" stroke-dasharray="0, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <span class="absolute inset-0 flex items-center justify-center text-lg font-bold">${skill.percent}%</span>
        </div>
        <div class="skill-icon text-4xl mb-2">${skill.icon}</div>
        <h3 class="text-xl font-poppins font-bold">${skill.name}</h3>
      </div>
    `;
    skillsContainer.innerHTML += skillCard;
  });

  
const skillCards = document.querySelectorAll('.skill-card');

const animateProgressBars = () => {
  skillCards.forEach(card => {
    const progressCircle = card.querySelector('.progress-circle path:last-child');
    const progressText = card.querySelector('.progress-circle span');
    const targetPercent = parseInt(progressText.textContent);

    let currentPercent = 0;
    const animation = setInterval(() => {
      if (currentPercent >= targetPercent) {
        clearInterval(animation);
      } else {
        currentPercent++;
        progressText.textContent = `${currentPercent}%`;
        progressCircle.style.strokeDasharray = `${currentPercent}, 100`;
      }
    }, 20);
  });
};

// Trigger on Scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

observer.observe(document.getElementById('skills'));


//SKILLS SECTION END



//CONTACT SECTION

  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        showMessage("Message sent successfully!", "success");
        contactForm.reset();
      } else {
        showMessage("Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      showMessage("An error occurred. Please try again.", "error");
    }
  });

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `mt-4 text-center ${type}`;
    formMessage.classList.remove("hidden");

    setTimeout(() => {
      formMessage.classList.add("hidden");
    }, 3000);
  }


// CONTACT SECTION END


const certifications = [
  {
    name: "Responsive Web Design",
    verifyLink: "https://www.freecodecamp.org/certification/SaadShoaib/responsive-web-design"
  },
  {
    name: "Web Development",
    verifyLink: "https://www.sololearn.com/certificates/CC-F2PFNQGY"
  },
  {
    name: "Tech for everyone",
    verifyLink: "https://www.sololearn.com/certificates/CC-KXCIEBW3"
  },
  {
    name: "Javascript Essential 1 ",
    verifyLink: "https://heyzine.com/flip-book/6ac624b005.html"
  },
  {
    name: "Learn Javascript",
    verifyLink: "https://codeliber.com/certificates/m75xrnrwkr9r"
  },
  // Add more certifications here
];

const certificationsContainer = document.querySelector('#certifications .grid');

certifications.forEach(cert => {
  const certificationCard = `
    <div class="certification-card glassmorphic-card p-6 text-center">
      <h3 class="text-2xl font-poppins font-bold mb-4">${cert.name}</h3>
      <button 
        onclick="window.open('${cert.verifyLink}', '_blank')" 
        class="verify-btn w-full py-2 bg-teal text-white font-bold rounded-lg hover:bg-teal-dark transition-all"
      >
        Verify
      </button>
    </div>
  `;
  certificationsContainer.innerHTML += certificationCard;
});

// CERTIFICATION SECTION END

