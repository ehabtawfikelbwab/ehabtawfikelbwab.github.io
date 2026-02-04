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

function renderProjects() {
  const { list, pageSize } = PortfolioData.projects;

  const sortedList = [...list].reverse();
  const minYear = Math.min(...sortedList.map(p => p.year));
  const maxYear = Math.max(...sortedList.map(p => p.year));

  const slice = sortedList.slice(visibleProjects, visibleProjects + pageSize);
  visibleProjects += slice.length;

  slice.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";

    // Wrap content in a link if a project link exists
    const linkOpen = '';
    const linkClose = '';

    card.innerHTML = `
      ${linkOpen}
        <img src="${proj.img || 'pics/default.png'}" class="project-icon" alt="Screenshot of ${proj.name}"/>
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
      ${linkClose}
${proj.video ? `<button class="play-btn"><span class="play-icon">▶</span> Video</button>` : ""}
    `;

    const banner = document.createElement("div");
    banner.className = "banner";

    const bannerText = document.createElement("span");

    // Latest project → red + fire
    if (proj.year === maxYear) {
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
  "Hi, I'm <strong>Ehab Tawfik</strong>, a Game Developer from <strong>Egypt</strong>.<br>" +
  "With <strong>4 years of experience</strong> creating games for <strong>Android, iOS, and PC</strong>.<br>" +
  "My main tools are <strong>Unity</strong> and <strong>C#</strong>, and I also work with <strong>3D Modeling</strong>, <strong>2D Design</strong>, <strong>VFX</strong>, and <strong>SFX</strong>.<br>" +
  "I enjoy making games that are <strong>fun to play</strong>, <strong>look great</strong>, and <strong>run smoothly</strong>.<br>" +
  "I speak <strong>English</strong> and <strong>Arabic</strong>, and I’m always open to <strong>teamwork</strong> and <strong>learning new things</strong> to make better games.<br>";

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
