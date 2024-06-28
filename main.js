document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Modal functionality for contact form
const contactModal = document.getElementById("contact-modal");
const contactBtn = document.getElementById("contact-button");
const contactSpan = contactModal.getElementsByClassName("close-button")[0];

contactBtn.onclick = function() {
  contactModal.style.display = "block";
}

contactSpan.onclick = function() {
  contactModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === contactModal) {
      contactModal.style.display = "none";
  }
}

// Modal functionality for project details
const projectModal = document.getElementById("project-modal");
const projectSpan = projectModal.getElementsByClassName("close-button")[0];

projectSpan.onclick = function() {
  projectModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === projectModal) {
      projectModal.style.display = "none";
  }
}

// Project data (Example projects)
const projects = [
  {
      title: "3D model",
      description: "Een 3D model van mijn bureau. Gemaakt met adobe environment en Blender",
      image: "assets/bureau-3dModel.png",
      details: "Een project gemaakt aan met het gebruik van adobe environment en blender. Het doel van dit project was om een omgeving te creeren die ik uiteindelijk van plan wass toe te voegen aan mijn website met volledige functionaliteit. Hiermee zou ik de gebruiker van mijn site op een avontuur brengen in een omgeving waar ik mij vaak bevind."
  },
  {
      title: "The silver key",
      description: "Een mockup uitdaging die mijn vaardigheden met illustrator en photoshop toont.",
      image: "/assets/boek-silverkey.png",
      details: "Dit project was een manier om mijn vaardigheden rondom adobe apps te verbeteren. Ik heb hierbij een hele hoop verschillende technieken en programma's moeten gebruiken om uiteindelijk op een product te komen dat professioneel uitstraalde."
  },
  {
      title: "Fitness poster",
      description: "Een poster om een groep jonge studenten aan te sporen tot aktie.",
      image: "assets/fitness-buddy-poster.png",
      details: "Dit was een kleine side project dat volgens mij een van mijn grootste keerpunten was wat betreft designer vaardigheden. Hier heb ik alles moeten gebruiken wat ik heb geleerd en dan nog meer."
  },
  {
      title: "Persoonlijke logo 1.0",
      description: "De logo die ik had gemaakt voor mijn eerste portfolio versie",
      image: "assets/Mago-logo.png",
      details: "Dit was een logo voor mijn eerste portfolio en het was niks speciaals. Vandaar de 1.0, maar het was wel mijn eerste stap naar het personaliseren van mijn projecten en heeft een pad gemaakt voor mijn toekomstige projecten."
  },
  {
      title: "Persoonlijke logo 2.0",
      description: "De huidige logo van mijn portfolio.",
      image: "assets/Mag-o-med_logo.png",
      details: "De huidge logo en de logo waar ik het meeste tijd in heb gestoken. Dit is iets wat volgens mij het meeste overeenkomt met mijn persoonlijkheid en uitstraling. Waarbij het eerste ontwerp luid en scherp was is dit ontwerp meer luchtig en relaxed. Iets wat ik wil vertonen aan de gene die mijn site bezoekt."
  },
  {
      title: "Podcast advertisement",
      description: "De logo voor mijn eigen podcast",
      image: "assets/Sportcast-logo.png",
      details: "Dit is een logo die ik had gemaakt voor een podcast waar ik aan heb bijgedragen. Het is iets wat een goed voorbeeld geeft van het onderwerp en niet te ver gaat in het design aspect."
  }
  
];

// Function to render projects
function renderProjects() {
  const gallery = document.getElementById("projects-gallery");
  gallery.innerHTML = '';
  projects.forEach((project, index) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");
      projectCard.innerHTML = `
          <img src="${project.image}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <button onclick="showProjectDetails(${index})">Meer Details</button>
      `;
      gallery.appendChild(projectCard);
  });
}

// Function to show project details in modal
function showProjectDetails(index) {
  const project = projects[index];
  const projectDetails = document.getElementById("project-details");
  projectDetails.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.details}</p>
  `;
  projectModal.style.display = "block";
}

// Initial render
renderProjects();

// Copy email and phone number to clipboard
document.getElementById('copy-email').addEventListener('click', () => {
  const emailText = document.getElementById('email-text').textContent;
  navigator.clipboard.writeText(emailText).then(() => {
      alert('Email gekopieerd naar klembord.');
  });
});

document.getElementById('copy-phone').addEventListener('click', () => {
  const phoneText = document.getElementById('phone-text').textContent;
  navigator.clipboard.writeText(phoneText).then(() => {
      alert('Telefoonnummer gekopieerd naar klembord.');
  });
});
