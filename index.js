const projects = [
  {
    name: "NeuroEvolution Flappy Bird",
    description: "Flappy Bird clone in p5.js powered by neuroevolution.",
    repo: "https://github.com/crudybagger/NeuroEvolution-Flappy-Bird",
    demo: "https://crudybagger.github.io/flappy/",
    tags: ["JavaScript", "Machine Learning", "Frontend"]
  },
  {
    name: "TODO Challenge (Frontend)",
    description: "CTF-style TODO app frontend built for practical web security exploration.",
    repo: "https://github.com/crudybagger/TODO-challenge-frontend",
    demo: "https://todo-eta-flame.vercel.app/",
    tags: ["JavaScript", "Security", "Frontend"]
  },
  {
    name: "TODO Challenge (Backend)",
    description: "Backend companion service for TODO challenge workflows and API scenarios.",
    repo: "https://github.com/crudybagger/TODO-challenge-backend",
    tags: ["JavaScript", "Backend", "API"]
  },
  {
    name: "ToDo Server",
    description: "TypeScript backend service for full-stack TODO workflows.",
    repo: "https://github.com/crudybagger/ToDo-server",
    tags: ["TypeScript", "Backend", "API"]
  },
  {
    name: "ToDo Client",
    description: "TypeScript client application for task management workflows.",
    repo: "https://github.com/crudybagger/ToDo-client",
    tags: ["TypeScript", "Frontend"]
  },
  {
    name: "Tic-Tac-Toe Multiplayer",
    description: "Multiplayer tic-tac-toe app with a dedicated websocket server.",
    repo: "https://github.com/crudybagger/tic-tac-toe",
    tags: ["TypeScript", "Frontend", "Realtime"]
  },
  {
    name: "Tic-Tac-Toe Server",
    description: "WebSocket game server handling realtime multiplayer interactions.",
    repo: "https://github.com/crudybagger/tic-tac-toe-server",
    tags: ["TypeScript", "Backend", "Realtime"]
  },
  {
    name: "Highlighter",
    description: "Chrome extension to highlight text with custom color controls.",
    repo: "https://github.com/crudybagger/Highlighter",
    demo: "https://crudybagger.github.io/Highlighter/",
    tags: ["JavaScript", "Chrome Extension", "Frontend"]
  },
  {
    name: "BlockChain",
    description: "Customizable SHA-256 blockchain API implementation.",
    repo: "https://github.com/crudybagger/BlockChain",
    demo: "https://crudybagger.github.io/BlockChain/",
    tags: ["Node.js", "Backend", "JavaScript"]
  },
  {
    name: "Find the Cat",
    description: "Audio-driven browser game to locate an invisible cat.",
    repo: "https://github.com/crudybagger/find-the-cat",
    demo: "https://crudybagger.github.io/find-the-cat/",
    tags: ["JavaScript", "Frontend", "Game"]
  },
  {
    name: "Sequence Game",
    description: "15-tile game built in React with solving mechanics.",
    repo: "https://github.com/crudybagger/sequence-game",
    demo: "https://sequence-game.vercel.app/",
    tags: ["React", "Frontend", "Game"]
  },
  {
    name: "DCF in OMNeT++",
    description: "Distributed Coordination Function implementation for CSMA/CA simulations.",
    repo: "https://github.com/crudybagger/DCF",
    tags: ["C++", "Systems", "Networking"]
  }
];

const filterContainer = document.getElementById("project-filters");
const projectGrid = document.getElementById("project-grid");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const sectionLinks = document.querySelectorAll(".nav-link");
const revealItems = document.querySelectorAll(".reveal");

const filters = ["All", ...new Set(projects.flatMap((project) => project.tags))];
let selectedFilter = "All";

function createFilterButtons() {
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.textContent = filter;
    button.setAttribute("aria-pressed", String(filter === selectedFilter));
    if (filter === selectedFilter) button.classList.add("active");

    button.addEventListener("click", () => {
      selectedFilter = filter;
      document.querySelectorAll(".filter-btn").forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      renderProjects();
    });

    filterContainer.appendChild(button);
  });
}

function projectCard(project) {
  const wrapper = document.createElement("article");
  wrapper.className = "project-card";

  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const demoButton = project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener">Live</a>` : "";

  wrapper.innerHTML = `
    <div class="project-top">
      <h3>${project.name}</h3>
    </div>
    <p>${project.description}</p>
    <div class="project-tags">${tags}</div>
    <div class="project-actions">
      <a href="${project.repo}" target="_blank" rel="noopener">GitHub</a>
      ${demoButton}
    </div>
  `;

  return wrapper;
}

function renderProjects() {
  projectGrid.innerHTML = "";
  const visibleProjects = selectedFilter === "All"
    ? projects
    : projects.filter((project) => project.tags.includes(selectedFilter));

  visibleProjects.forEach((project) => projectGrid.appendChild(projectCard(project)));
}

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open", !expanded);
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveSection() {
  const offset = window.scrollY + 110;
  let currentId = "";

  sections.forEach((section) => {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  });

  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));
window.addEventListener("scroll", updateActiveSection, { passive: true });

createFilterButtons();
renderProjects();
updateActiveSection();
