const aboutText =
    "Hi, I'm <strong>Ehab Tawfik</strong>, a Game Developer from <strong>Egypt</strong>.<br>" +
    "With <strong>4 years of experience</strong> creating games for <strong>Android, iOS, and PC</strong>.<br>" +
    "My main tools are <strong>Unity</strong> and <strong>C#</strong>, and I also work with <strong>3D Modeling</strong>, <strong>2D UI/UX Design</strong>, <strong>VFX</strong>, and <strong>SFX</strong>.<br>" +
    "I enjoy making games that are <strong>fun to play</strong>, <strong>look great</strong>, and <strong>run smoothly</strong>.<br>" +
    "I speak <strong>English</strong> and <strong>Arabic</strong>, and I’m always open to <strong>teamwork</strong> and <strong>learning new things</strong> to make better games.<br>";

// Function to type the text with HTML tags correctly handled
const typeText = (elementId, text, delay) => {
    const element = document.getElementById(elementId);
    element.innerHTML = '';  // Clear the element before typing

    let index = 0;
    let currentText = '';

    // Function to handle typing with HTML tags
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];  // Add the next character
            element.innerHTML = currentText;  // Update the element with the current text

            index++;
        } else {
            clearInterval(typingInterval);  // Stop the typing once the text is fully typed
        }
    }, delay);
};

// Start the typing animation
typeText('about-text', aboutText, 1);


const projects = [
    {
        title: "Avoid Bomb 3d",
        description: "(EtE Studio).",
        img: "pics/avoid-bomb.png",
        link: "https://drive.google.com/file/d/1F8xfwdr--N-L3BLoTPMaoXARBzMv7o_8/view",
        year: 2019
    },
    {
        title: "Free Kill",
        description: "(EtE Studio).",
        img: "pics/free-kill.png",
        link: "https://drive.google.com/file/d/1EDeF7EtFXi8ajr9_ckbjbFjP2_j5asHb/view",
        year: 2019
    },
    {
        title: "Avoid Falling",
        description: "(EtE Studio).",
        img: "pics/avoid-falling.png",
        link: "https://drive.google.com/file/d/196Gg4s8mef-oykG2MbbAU-_Omv1lB5Ca/view",
        year: 2020
    },
    {
        title: "Bomber Race",
        description: "(EtE Studio).",
        img: "pics/bomber-race-3d.png",
        link: "https://drive.google.com/file/d/1c-IFZdaWrD4ZA162cWarU22QI1Hyev8O/view",
        year: 2020
    },
    {
        title: "Champions of Dimensions",
        description: "Remote (Game 4 life).",
        img: "pics/champions-of-dimensions.png",
        link: "https://drive.google.com/file/d/1bsEpX6kJt6wqvS6Av-5T6RqDZwv54PZT/view",
        year: 2020
    },
    {
        title: "Flappy Doll 3D",
        description: "(Sneet Games).",
        img: "pics/flappy-doll-3d.png",
        link: "https://drive.google.com/file/d/1lpE6NzVTIfbK0hDOCAkm2WUBSX-mHmln/view",
        year: 2021
    },
    {
        title: "Builder Jumper 3D",
        description: "(Sneet Games).",
        img: "pics/builder-jumper-3d.png",
        link: "https://drive.google.com/file/d/1n16GHb2rP5OxGLIDcNrhRuKQizX5Ugsu/view",
        year: 2021
    },
    {
        title: "Painter Hand 3D",
        description: "(Sneet Games).",
        img: "pics/painter-hand-3d.png",
        link: "https://drive.google.com/file/d/10qDQTSCnSoi9VSDGkaTMmH5zXY4kIKrE/view",
        year: 2021
    },
    {
        title: "Engineer Ball",
        description: "(Sneet Games).",
        img: "pics/engineer-ball.png",
        link: "https://drive.google.com/file/d/1xRIzch0Ozy3Vt8ZH2ZhtxmpUu2A3r6ec/view",
        year: 2022
    },
    {
        title: "Rolling Color 3d",
        description: "Remote (Squid Gun).",
        img: "pics/rolling-color-3d.png",
        link: "https://drive.google.com/drive/folders/1lgWWDbGhHvLEp2XLEFztd5E33r9bVWLI",
        year: 2022
    },
    {
        title: "Move N Collect",
        description: "Remote (Squid Gun).",
        img: "pics/move-n-collect.png",
        link: "https://drive.google.com/drive/folders/1BLGSmJMHhH9GgojbZFunwXpl5uNFwjTG",
        year: 2022
    },
    {
        title: "Paper Boy 3D",
        description: "Remote (Squid Gun).",
        img: "pics/paper-boy-3d.jpg",
        link: "https://drive.google.com/file/d/122IrPn6eqH_hfPiuumQ65UMAyv8I6coC/view",
        year: 2023
    },
    {
        title: "Luggage Packing 3D",
        description: "Remote (Squid Gun).",
        img: "pics/luggage-packing-3d.png",
        link: "https://drive.google.com/file/d/1ZzFRFDIx1n1Hl2uJPhR0UuiCteT72k4Q/view",
        year: 2023
    },
    {
        title: "Makeup Decor 3D",
        description: "Remote (Squid Gun).",
        img: "pics/makeup-recognize.png",
        link: "https://drive.google.com/file/d/1DLrNMyLOIKoBbtPLP_levjVxzokTI4qD/view",
        year: 2023
    },
    {
        title: "Kiddog",
        description: "(Sneet Games).",
        img: "pics/kiddog.png",
        link: "https://drive.google.com/file/d/1341wN6B251A8dseBAzI9xVB-bFdWwQZr/view",
        year: 2024
    },
    {
        title: "Fill lord 3D",
        description: "(Sneet Games).",
        img: "pics/fill-lord-3d.png",
        link: "https://drive.google.com/file/d/1bIuF8gAxpKo8CCGlSDWzqFymdpRRtJXQ/view",
        year: 2024
    }
    ,
    {
        title: "Fart Racing",
        description: "(Sneet Games).",
        img: "pics/fart-racing.png",
        link: "https://www.youtube.com/shorts/-G4UhzjZFi4",
        year: 2024
    }
    ,
    {
        title: "Stack n' Cross",
        description: "(Sneet Games).",
        img: "pics/StacknCross.jpg",
        link: "https://www.youtube.com/shorts/J8whtDyGG0o",
        year: 2025
    }
    ,
    {
        title: "Rope Guys",
        description: "(Sneet Games).",
        img: "pics/rope-guys.png",
        link: "https://www.youtube.com/shorts/0Xmmlyv7Rx4",
        year: 2025
    }
    ,
    {
        title: "Epic Shot",
        description: "(Sneet Games).",
        img: "pics/epic-shot.jpg",
        link: "https://youtube.com/shorts/LXi4Oa-0Sbs",
        year: 2025
    }
];

const skills = [
    "Unity Engine",
    "C# / OPP",
    "Clean Code",
    "Game physics",
    "Version control (Git)",
    "Cross-platform development (iOS, Android and PC)",
    "3D Modeling",
    "2D Design",
    "VFX Design",
    "SFX Design",
];

const projectsContainer = document.getElementById("projects-container");

projects.reverse();

// Sort projects by year in descending order
projects.sort((a, b) => b.year - a.year);

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <img src="${project.img}" alt="${project.title}" class="project-image">
        <h3>${project.title} (${project.year})</h3>
        <p>${project.description}</p>
    `;
    card.addEventListener("click", () => {
        window.open(project.link, "_blank");
    });
    projectsContainer.appendChild(card);
});


const skillsList = document.getElementById("skills-list");
skills.forEach(skill => {
    const skillItem = document.createElement("span");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});


// Get the container where the sections will be added
const contactsContainer = document.getElementById("contacts-list");

// Contacts data
const contacts = [
    {
        title: "WhatsApp",
        icon: '<i class="fab fa-whatsapp"></i>',
        link: "https://wa.me/201018616456"
    },
    {
        title: "Skype",
        icon: '<i class="fab fa-skype"></i>',
        link: "skype:live:.cid.2520f4c8c75d6d6d"
    },
    {
        title: "Linkedin",
        icon: '<i class="fab fa-linkedin"></i>',
        link: "https://www.linkedin.com/in/ehabtawfik"
    },
    {
        title: "Email",
        icon: '<i class="fas fa-envelope"></i>',
        link: "mailto:ehabelbwab75@gmail.com"
    },
    {
        title: "Facebook",
        icon: '<i class="fab fa-facebook"></i>',
        link: "https://www.facebook.com/profile.php?id=100011343223035"
    }
];

contacts.forEach(contact => {
    const link = document.createElement("a");
    link.href = contact.link;
    link.className = "contact-link";
    link.title = contact.title;
    link.innerHTML = contact.icon;
    contactsContainer.appendChild(link);
});