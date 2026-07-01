let visibleProjects = 0;
const projectsContainer = document.getElementById("projects-container");

// Render Skills
const skillsList = document.getElementById("skills-list");
PortfolioData.skills.forEach(skill => {
  const skillEl = document.createElement("div");
  skillEl.className = "skill-item";
  skillEl.innerText = skill;
  skillsList.appendChild(skillEl);
});

// Render Contacts as circles
const contactsList = document.getElementById("contacts-list");
PortfolioData.contacts.forEach(contact => {
  const a = document.createElement("a");
  a.href = contact.url;
  a.target = "_blank";
  a.title = contact.type; // Add tooltip for accessibility
  a.innerHTML = `<i class="${contact.icon}"></i>`; // icon only
  contactsList.appendChild(a);
});


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

function renderProjects() {
  const { list, pageSize } = PortfolioData.projects;

  // Keep original order
  const sortedList = [...list].reverse(); // latest first visually
  const latestProject = sortedList[0]; // treat first as latest

  const slice = sortedList.slice(visibleProjects, visibleProjects + pageSize);
  visibleProjects += slice.length;

  // Determine min and max years for color lerp
  const years = sortedList.map(p => p.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  slice.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";

    const linkOpen = '';
    const linkClose = '';

    card.innerHTML = `
      ${linkOpen}
        <img src="${proj.img || 'pics/default.png'}" class="project-icon" alt="Screenshot of ${proj.name}"/>
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
      ${linkClose}

      ${(proj.video || proj.link) ? `
        <div class="project-actions">
          ${proj.video ? `
            <button class="play-btn" type="button" aria-label="Watch video" title="Watch video">
              <img src="pics/video-icon.png" class="video-icon" alt="" aria-hidden="true">
            </button>
          ` : ""}

          ${proj.link ? `
            <a class="store-btn" href="${proj.link}" target="_blank" rel="noopener noreferrer"
               aria-label="${isPlayStoreLink(proj.link) ? 'Open on Play Store' : 'Open project link'}"
               title="${isPlayStoreLink(proj.link) ? 'Open on Play Store' : 'Open project link'}">
              <img
                src="${isPlayStoreLink(proj.link) ? 'pics/play-store-icon.png' : 'pics/url-icon.png'}"
                alt=""
                aria-hidden="true">
            </a>
          ` : ""}
        </div>
      ` : ""}
    `;

    const banner = document.createElement("div");
    banner.className = "banner";

    const bannerText = document.createElement("span");

    // Latest project → red + fire
    if (proj === latestProject) {
      bannerText.textContent = "Latest";
      card.classList.add("latest-project");
      banner.style.backgroundColor = "#e53935";
    } else {
      // lerp between red (#e53935) and dark purple (#240750)
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

  if (visibleProjects >= list.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Lerp function
function lerpColor(a, b, t) {
  const hex = c => parseInt(c, 16);
  const toHex = n => n.toString(16).padStart(2, "0");

  const r = Math.round(hex(a.slice(1, 3)) * (1 - t) + hex(b.slice(1, 3)) * t);
  const g = Math.round(hex(a.slice(3, 5)) * (1 - t) + hex(b.slice(3, 5)) * t);
  const bl = Math.round(hex(a.slice(5, 7)) * (1 - t) + hex(b.slice(5, 7)) * t);

  return `#${toHex(r)}${toHex(g)}${toHex(bl)}`;
}



// Load More button
const loadMoreBtn = document.createElement("button");
loadMoreBtn.innerText = "Load More";
loadMoreBtn.id = "load-more-projects";
loadMoreBtn.onclick = renderProjects;
document.getElementById("projects").appendChild(loadMoreBtn);

renderProjects();

const aboutText =
  "Hello, My name is <strong>Ehab Tawfik</strong>, a Game Developer " +
  "with <strong>5 years of experience</strong> creating games for <strong>Android, iOS, WebGL, and PC</strong>.<br>" +
  "My main tools are <strong>Unity</strong> and <strong>C#</strong>, Also I have experience with <strong>3D Modeling</strong>, <strong>2D Design</strong>, <strong>VFX</strong>, and <strong>SFX</strong>.<br>" +
  "I enjoy making games that are <strong>fun to play</strong>, <strong>look great</strong>, and <strong>run smoothly on devices</strong>.<br>";

function typeTextHTML(elementId, htmlText, delay = 20) {
  const element = document.getElementById(elementId);
  element.innerHTML = aboutText;
  let index = 0;
  let buffer = '';
  let tagBuffer = '';
  let inTag = false;

  // const interval = setInterval(() => {
  //   const char = htmlText[index];

  //   if (char === '<') inTag = true;

  //   if (inTag) {
  //     tagBuffer += char;
  //     if (char === '>') {
  //       buffer += tagBuffer;
  //       tagBuffer = '';
  //       inTag = false;
  //     }
  //   } else {
  //     buffer += char;
  //   }

  //   element.innerHTML = buffer;

  //   index++;
  //   if (index >= htmlText.length) clearInterval(interval);
  // }, delay);
}

// Start typing animation
typeTextHTML('about-text', aboutText, 1); 
