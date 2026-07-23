const aboutText =
  "<p><strong>Game Developer</strong> with <strong>5+ years of experience</strong> creating games for <strong>Android</strong>, <strong>iOS</strong>, <strong>WebGL</strong>, and <strong>PC</strong>.</p>" +

  "<p>I specialize in <strong>Unity</strong> and <strong>C#</strong>, with hands-on experience in <strong>Gameplay Programming</strong>, <strong>Game Systems</strong>, <strong>Procedural Generation</strong>, <strong>Performance Optimization</strong>, <strong>3D Modeling</strong>, <strong>2D Design</strong>, <strong>VFX</strong>, and <strong>SFX</strong>.</p>" +

  "<p>I enjoy creating games that are <strong>fun</strong>, <strong>visually polished</strong>, and <strong>optimized for smooth performance</strong>, delivering high-quality experiences across multiple platforms.</p>";

const PortfolioData = {
  profile: {
    name: "Ehab Tawfik",
    title: "Senior Unity Developer",
    photo: "pics/CV_Photo.jpg",
    bio: aboutText,
    stats: [
      { label: "Shipped Games", value: 24 },
      { label: "Years Experience", value: "5+" },
      { label: "Platforms", value: "4" }
    ]
  },
  skills: [
    "Unity Engine",
    "C# / OPP",
    "Clean Code / Debugging / Problem solving",
    "Game Analytics SDKs",
    "Playable Ads",
    "Version control (Git)",
    "Cross-platform development (Android, ios, WebGL and PC)",
    "3D Modeling",
    "2D Design",
  ],
  experience: [
    {
      role: "Game Developer",
      company: "Sneet Games",
      period: "02/2024 - Present",
      achievements: [
        "Developing casual mobile games with a focus on gameplay, player experience, performance, and polish.",
        "Building gameplay systems, procedural levels, enemy AI, UI, progression, and mobile optimization using Unity and C#."
      ]
    },
    {
      role: "Game Developer",
      company: "Squid Gun Studio",
      period: "04/2022 - 01/2024",
      achievements: [
        "Worked remotely on mobile game development as part of a collaborative team.",
        "Contributed to gameplay mechanics, prototyping, level design, optimization, and visual polish."
      ]
    },
    {
      role: "Game Developer",
      company: "Game4Life Studio",
      period: "06/2021 - 03/2022",
      achievements: [
        "Worked remotely on mobile games in a collaborative production environment.",
        "Implemented gameplay features, improved projects, and supported publishing workflows."
      ]
    },
    {
      role: "Game Developer",
      company: "EtE Studio",
      period: "04/2020 - 05/2021",
      achievements: [
        "Independently developed mobile games using Unity and C#.",
        "Strengthened game design, gameplay systems, and player experience through continuous iteration."
      ]
    }
  ],
  projects: {
    pageSize: 6,
    list: [
      {
        name: "Avoid Bomb 3d",
        description: "Run, avoid enemies, and don’t let them pass you the bomb.",
        img: "pics/avoid-bomb.png",
        video: { url: "videos/Avoid_Bomb.mp4" },
        link: "https://avoid-boom.ar.aptoide.com/app",
        year: 2020
      },
      {
        name: "Avoid Falling",
        description: "Land on the correct platforms to stay safe and avoid falling.",
        img: "pics/avoid-falling.png",
        video: { url: "videos/Avoid_Falling.mp4" },
        link: "https://apkpure.com/avoid-falling/com.etestudio.avoidfalling",
        year: 2021
      },
      {
        name: "Bomber Race",
        description: "Race against opponents, dodge obstacles, and reach the finish line first.",
        img: "pics/bomber-race-3d.png",
        video: { url: "videos/Bomber_Race.mp4" },
        link: "https://apkpure.com/bomber-race-3d/com.EtEStudio.BomberRace",
        year: 2021
      },
      {
        name: "Champions of Dimensions",
        description: "Control 4 champions across 4 dimensions, defeat enemies, and protect each realm.",
        img: "pics/champions-of-dimensions.png",
        video: { url: "videos/Champions_of_Dimensions.mp4" },
        link: "https://apkpure.com/ar/champions-of-dimensions-hero/com.etestudio.CHOD",
        year: 2021
      },
      {
        name: "Flappy Doll 3D",
        description: "Guide your ragdoll through spinning blades—time it right to survive and win!",
        img: "pics/flappy-doll-3d.png",
        year: 2021
      },
      {
        name: "Builder Jumper 3D",
        description: "Jump on stones, break them quickly, and build your tower before your opponent does!",
        img: "pics/builder-jumper-3d.png",
        video: { url: "videos/Builder_Jumper_3D.mp4" },
        link: "https://apkpure.com/builder-jumper-3d/com.SneetGames.BuilderJumper",
        year: 2022
      },
      {
        name: "Painter Hand 3D",
        description: "Catch painting cubes and create your masterpiece!",
        img: "pics/painter-hand-3d.png",
        link: "https://apkpure.com/painter-hand-3d/com.SneetGames.painterhand",
        year: 2022
      },
      {
        name: "Engineer Ball",
        description: "Smash, sell, and build—keep the loop going to dominate!",
        img: "pics/engineer-ball.png",
        video: { url: "videos/Engineer_Ball.mp4" },
        link: "https://apkpure.com/engineer-ball/com.SneetGames.EngineerBall",
        year: 2022
      },
      {
        name: "Rolling Color 3d",
        description: "Collect color from your tank and roll around to paint everything in sight!",
        img: "pics/rolling-color-3d.png",
        link: "https://apkpure.com/rolling-color-3d/com.squidgun.rollingcolor3d",
        year: 2022
      },
      {
        name: "Move N Collect",
        description: "Start with one character, use your rope to collect more, and grow your chain as you move!",
        img: "pics/move-n-collect.png",
        link: "https://apkpure.com/move-n-collect/com.squidgun.movencollect",
        year: 2023
      },
      {
        name: "Paper Boy 3D",
        description: "Deliver papers to every home while avoiding obstacles and staying on route!",
        img: "pics/paper-boy-3d.jpg",
        video: { url: "videos/paper_boy.mp4" },
        link: "https://apkpure.com/paper-boy-3d/com.squidgun.paperboy3d",
        year: 2023
      },
      {
        name: "Luggage Packing 3D",
        description: "Fit all the items perfectly into the luggage and win!",
        img: "pics/luggage-packing-3d.png",
        video: { url: "videos/Luggage_Packing.mp4" },
        link: "https://apkpure.com/luggage-packing-3d/com.squidgun.luggagepacking3d",
        year: 2023
      },
      {
        name: "Makeup Decor 3D",
        description: "Arrange makeup items perfectly into boxes and shelves!",
        img: "pics/makeup-recognize.png",
        video: { url: "videos/Makeup_Decor.mp4" },
        link: "https://apkpure.com/makeup-decor-3d/com.squidgun.makeupdecor3d",
        year: 2023
      },
      {
        name: "Kiddog",
        description: "Switch between kid and dog, find keys, and rescue the hostages!",
        img: "pics/kiddog.png",
        video: { url: "videos/Kiddog.mp4" },
        link: "https://apkpure.com/kiddog/com.EtEStudio.Kiddog",
        year: 2024
      },
      {
        name: "Fill lord 3D",
        description: "Grab water from your side and navigate dangerous paths to fill the other side!",
        img: "pics/fill-lord-3d.png",
        video: { url: "videos/Fill_lord_3D.mp4" },
        link: "https://apkpure.com/fill-lord-3d/com.EtEStudio.FillLord",
        year: 2024
      },
      {
        name: "Fart Racing",
        description: "Race against opponents and use food-powered farts to blast shortcuts to victory!",
        img: "pics/fart-racing.png",
        video: { url: "videos/fart_racing_video.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.JustFart",
        year: 2024
      },
      {
        name: "Stack n' Cross",
        description: "Collect blocks to climb higher, dodge deadly obstacles, and reach the slide to advance!",
        img: "pics/StacknCross.jpg",
        video: { url: "videos/stack_n_cross_video.mp4" },
        link: "https://apkpure.com/stack-%E2%80%98n%E2%80%99-cross/com.SneetGames.StacknCross/download/0.7",
        year: 2025
      },
      {
        name: "Rope Guys",
        description: "Hold the rope, trip crowds, and run—timing is everything in this chaotic chase!",
        img: "pics/rope-guys.png",
        video: { url: "videos/rope_guys_video.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.RopeGuys",
        year: 2025
      },
      {
        name: "Epic Shot",
        description: "Control a precision bullet, ricochet through arenas, and take out enemies with perfect shots!",
        img: "pics/epic-shot.jpg",
        video: { url: "videos/epic_shot_video.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.epicshot",
        year: 2025
      },
      {
        name: "Safe Passage",
        description: "Navigate shared roads and intersections, timing every move perfectly to avoid collisions!",
        img: "pics/safe-passage.jpg",
        video: { url: "videos/safe_passage_video.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.SafePassage",
        year: 2025
      },
      {
        name: "Samurai Z",
        description: "Leap across rooftops, battle enemies, and complete missions with speed, precision, and strategy!",
        img: "pics/samurai-z.jpg",
        video: { url: "videos/samurai_z_video.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.SamuraiZ",
        playableUrl: "games/SamuraiZ",
        year: 2026
      },
      {
        name: "Lead the Way",
        description: "Rotate tiles to build roads and guide groups to their goals!",
        img: "pics/lead-the-way.jpg",
        video: { url: "videos/LTW_video.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.LeadtheWay",
        year: 2026
      },
      {
        name: "Turbo Up: Car & Plane",
        description: "Drive, collect wings, and transform into a plane to fly and win races against opponents.",
        img: "pics/turbo-up.jpg",
        video: { url: "videos/turbo_up.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.TurboUpCarPlaneRacing",
        year: 2026
      },
      {
        name: "Slide to Rise!",
        description: "Slide, smash enemies, stack higher, and clear every stage!",
        img: "pics/slide-to-rise.jpg",
        video: { url: "videos/Slide_To_Rise.mp4" },
        link: "https://play.google.com/store/apps/details?id=com.SneetGames.SlidetoRise",
        playableUrl: "games/SlideToRise",
        year: 2026
      }
    ]
  },
  contacts: [
    { type: "Email", icon: "fas fa-envelope", url: "mailto:ehabelbwab75@gmail.com" },
    { type: "LinkedIn", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/ehabtawfik" },
    { type: "GitHub", icon: "fab fa-github", url: "https://github.com/ehabtawfikelbwab" },
    { type: "Instagram", icon: "fab fa-instagram", url: "https://www.instagram.com/ehab_tawfik_7" },
    { type: "Facebook", icon: "fab fa-facebook", url: "https://www.facebook.com/DeveloperByte" },
    { type: "Whatsapp", icon: "fab fa-whatsapp", url: "https://api.whatsapp.com/send?phone=201018616456" }
  ]
};