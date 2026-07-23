/* =========================================
   1. GLOBAL STATE & CONFIGURATION
========================================= */
let visibleProjects = 0;
const projectsContainer = document.getElementById("projects-container");

/* =========================================
   2. INITIALIZATION
========================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Add Load More button logic
  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.innerText = "Load More";
  loadMoreBtn.id = "load-more-projects";
  loadMoreBtn.className = "btn-game"; 
  loadMoreBtn.style.padding = "12px 30px";
  loadMoreBtn.onclick = () => renderProjects(false);
  
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.appendChild(loadMoreBtn);
  }

  // Initialize the portfolio rendering
  init();
}); 

function init() {
  renderProfileInfo();
  renderProfileStats();
  renderExperience();
  renderSkills();
  renderContacts();
  renderProjects(); 
  initReveal();
}

function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: stop observing if you only want it to animate once
        // observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });
  
  reveals.forEach(r => observer.observe(r));
  
  // Trigger immediately for elements already in view
  setTimeout(() => {
    reveals.forEach(r => {
      const rect = r.getBoundingClientRect();
      if(rect.top < window.innerHeight) {
        r.classList.add('active');
      }
    });
  }, 100);
}

/* =========================================
   3. RENDER FUNCTIONS
========================================= */
function renderProfileInfo() {
  const aboutEl = document.getElementById("about-text");
  if (aboutEl && PortfolioData.profile) {
    aboutEl.innerHTML = PortfolioData.profile.bio;
  }
}

function renderProfileStats() {
  const container = document.getElementById("profile-stats");
  if (!container || !PortfolioData.profile.stats) return;

  const gameCount = PortfolioData.projects ? PortfolioData.projects.list.length : 24;

  container.innerHTML = PortfolioData.profile.stats.map(stat => {
    const val = stat.label === "Shipped Titles" ? gameCount + "+" : stat.value;
    return `
      <div class="stat-item">
          <span class="stat-val">${val}</span>
          <span class="stat-lab">${stat.label}</span>
      </div>
    `;
  }).join("");
}

function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container || !PortfolioData.experience) return;

  container.innerHTML = PortfolioData.experience.map(exp => `
    <div class="experience-card">
      <div class="exp-company">
        <h3>${exp.company}</h3>
      </div>
      <p class="exp-header">${exp.role}</p>
      <ul>
        ${exp.achievements.map(ach => `<li>${ach}</li>`).join("")}
      </ul>
      <div class="exp-date-container">
        <span class="exp-date">${exp.period}</span>
      </div>
    </div>
  `).join("");
}

function renderSkills() {
  const skillsList = document.getElementById("skills-list");
  if (!skillsList || !PortfolioData.skills) return;
  
  skillsList.innerHTML = "";
  PortfolioData.skills.forEach(skill => {
    const skillEl = document.createElement("div");
    skillEl.className = "skill-item";
    skillEl.innerText = skill;
    skillsList.appendChild(skillEl);
  });
}

function renderContacts() {
  const contactsList = document.getElementById("contacts-list");
  if (!contactsList || !PortfolioData.contacts) return;
  
  contactsList.innerHTML = "";
  PortfolioData.contacts.forEach(contact => {
    const a = document.createElement("a");
    a.href = contact.url;
    a.target = "_blank";
    a.title = contact.type;
    a.innerHTML = `<i class="${contact.icon}"></i>`;
    contactsList.appendChild(a);
  });
}

function renderProjects(resetVisible = false) {
  if (resetVisible) {
    visibleProjects = 0;
    projectsContainer.innerHTML = "";
  }

  const { list, pageSize } = PortfolioData.projects;

  // Keep original order: latest first visually
  const sortedList = [...list].reverse(); 
  const latestProject = sortedList[0]; 

  const slice = sortedList.slice(visibleProjects, visibleProjects + pageSize);
  visibleProjects += slice.length;

  // Determine min and max years for color lerp
  const years = sortedList.map(p => p.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  slice.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${proj.img || 'pics/default.png'}" class="project-icon" alt="Screenshot of ${proj.name}"/>
      <h3>${proj.name}</h3>
      <p>${proj.description}</p>

      <div class="project-actions">
        ${proj.playableUrl ? `
          <a class="btn-game" href="${proj.playableUrl}" target="_blank" onclick="if(window.openGameModal) { event.preventDefault(); openGameModal('${proj.playableUrl}', '${proj.name.replace(/'/g, "\\'")}'); }">
            <i class="fas fa-play"></i> Play
          </a>
        ` : ""}
        ${proj.video ? `
          <button class="btn-game play-btn" type="button">
            <i class="fas fa-video"></i> Watch
          </button>
        ` : ""}
        ${proj.link ? `
          <a class="btn-game" href="${proj.link}" target="_blank">
            <i class="${isPlayStoreLink(proj.link) ? 'fab fa-google-play' : 'fas fa-link'}"></i> ${isPlayStoreLink(proj.link) ? 'Store' : 'Link'}
          </a>
        ` : ""}
        ${proj.github ? `
          <a class="btn-game" href="${proj.github}" target="_blank">
            <i class="fab fa-github"></i> Link
          </a>
        ` : ""}
      </div>
    `;

    const banner = document.createElement("div");
    banner.className = "banner";
    const bannerText = document.createElement("span");

    // Latest project -> Red banner
    if (proj === latestProject) {
      bannerText.textContent = "Latest";
      card.classList.add("latest-project");
      banner.style.backgroundColor = "#e53935";
    } else {
      // Lerp between Red (#e53935) and Dark Purple (#240750)
      const t = (proj.year - minYear) / (maxYear - minYear);
      banner.style.backgroundColor = lerpColor("#e53935", "#240750", 1 - t);
      bannerText.textContent = proj.year;
    }

    banner.appendChild(bannerText);
    card.appendChild(banner);

    const playBtn = card.querySelector(".play-btn");
    if (playBtn && proj.video) {
      playBtn.onclick = () => openVideoModal(proj.video.url, proj.video.aspect);
    }

    projectsContainer.appendChild(card);
  });

  const btn = document.getElementById("load-more-projects");
  if (btn) {
    if (visibleProjects >= sortedList.length) {
      btn.style.display = "none";
    } else {
      btn.style.display = "inline-block";
    }
  }
}

/* =========================================
   4. HELPER UTILITIES
========================================= */
function isPlayStoreLink(url) {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url, window.location.href);
    return parsedUrl.hostname === "play.google.com" ||
           parsedUrl.hostname.endsWith(".play.google.com");
  } catch {
    return url.toLowerCase().includes("play.google.com");
  }
}

function lerpColor(a, b, t) {
  const hex = c => parseInt(c, 16);
  const toHex = n => n.toString(16).padStart(2, "0");

  const r = Math.round(hex(a.slice(1, 3)) * (1 - t) + hex(b.slice(1, 3)) * t);
  const g = Math.round(hex(a.slice(3, 5)) * (1 - t) + hex(b.slice(3, 5)) * t);
  const bl = Math.round(hex(a.slice(5, 7)) * (1 - t) + hex(b.slice(5, 7)) * t);

  return `#${toHex(r)}${toHex(g)}${toHex(bl)}`;
}
