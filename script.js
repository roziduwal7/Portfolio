/* ══════════════════════════════════════════════════
   DATA CONSTANTS – Edit these to update the site
   ══════════════════════════════════════════════════ */

// ── Personal Info ──────────────────────────────────
const INFO = {
  name: "Rojina Duwal",
  firstName: "Rojina",
  lastName: "Duwal",
  title: "QA Engineer",
  email: "roziduwal1@gmail.com",
  linkedin: "https://www.linkedin.com/in/rojina-duwal/",
  facebook: "https://www.facebook.com/rozi.duwal",
  phone: null, // Add phone number string or leave null
  avatarUrl: null, // Add image URL or leave null for initials
  bio: "I am a QA Engineer with experience in both manual and automated testing. I specialize in ensuring software quality, identifying bugs, and improving system reliability. My goal is to help build high-quality software that provides a seamless user experience.",
  stats: [
    { num: "3+", label: "Projects" },
    { num: "2+", label: "Tools" },
    { num: "1", label: "Internship" },
  ]
};

// ── Navigation Links ──────────────────────────────
const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

// ── Skills ────────────────────────────────────────
const SKILLS = {
  technical: [
    {
      category: "Testing Types / Methods",
      icon: "🧪",
      tags: ["Manual Testing", "Automation Testing", "Functional Testing", "Regression Testing", "Smoke & Sanity Testing", "Integration Testing", "UAT", "API Testing"],
    },
    {
      category: "Tools / Frameworks",
      icon: "🛠",
      tags: ["Postman / REST API Testing", "JIRA / Bug Tracking"],
    },
    {
      category: "Programming / Scripting",
      icon: "💻",
      tags: ["HTML","CSS","JavaScript"],
    },
  ],
  soft: [
    "Attention to Detail",
    "Analytical Thinking",
    "Problem Solving",
    "Communication & Reporting",
    "Team Collaboration",
    "Time Management",
  ],
};

// ── Experience ────────────────────────────────────
const EXPERIENCE = [
  {
    role: "QA Intern",
    company: "Infotraid",
    period: "February 2026 – Present",
    duties: [
      "Assisted in manual and automation testing of web applications",
      "Created and executed test cases for functional and regression testing",
      "Reported bugs and tracked them using JIRA",
      "Collaborated with developers and QA team to improve software quality",
      "Gained experience with tools like Postman and JIRA",
    ],
  },
];

// ── Education ─────────────────────────────────────
const EDUCATION = [
  {
    degree: "Bachelor's in Information Technology (BIM)",
    school: "Bhaktapur Multiple Campus, Tribhuvan University",
    year: "Expected Graduation: 2026",
  },
];

// ── Projects ──────────────────────────────────────
const PROJECTS = [
  {
    name: "E-Commerce Website",
    role: "QA Engineer",
    description: "Tested a web-based e-commerce platform and reported bugs using JIRA.",
    responsibilities: [
      "Tested Admin and Customer modules",
      "Wrote Test Cases in Excel",
    ],
    tools: ["Postman", "JIRA", "Chrome DevTools"],
  },
  {
    name: "Attendance Management System (AMS)",
    role: "QA Engineer",
    description: "Managed testing for employee attendance and leave features.",
    responsibilities: [
      "Tested Admin and Employee modules",
      "Verified Monthly Attendance Overview chart",
      "Tested Leave Request functionality",
      "Checked Holiday calendar",
      "Performed API testing with Postman",
    ],
    tools: ["Postman", "JIRA", "Chrome DevTools"],
  },
  {
    name: "Restaurant Management System (RMS)",
    role: "Manual & API Tester",
    description: "Tested orders, dishes, add-ons, and bell requests.",
    responsibilities: [
      "Tested Order APIs",
      "Checked dish and add-on relationships",
      "Tested bell request creation",
      "Verified database error handling (400 vs 500 errors)",
      "Performed negative and edge case testing",
    ],
    tools: ["Postman", "JIRA"],
  },
];

/* ══════════════════════════════════════════════════
   RENDER FUNCTIONS
   ══════════════════════════════════════════════════ */

// ── Nav ──
function renderNav() {
  const ul = document.getElementById('navLinks');
  const mobile = document.getElementById('mobileMenu');
  NAV_LINKS.forEach(link => {
    ul.innerHTML += `<li><a href="${link.href}">${link.label}</a></li>`;
    mobile.innerHTML += `<a href="${link.href}" class="mobile-link">${link.label}</a>`;
  });
  // Hamburger toggle
  const ham = document.getElementById('hamburger');
  ham.addEventListener('click', () => mobile.classList.toggle('open'));
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
}

// ── About ──
function renderAbout() {
  const initials = INFO.firstName[0] + INFO.lastName[0];
  const avatarContent = INFO.avatarUrl
    ? `<img src="${INFO.avatarUrl}" alt="${INFO.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`
    : `<span class="avatar-placeholder">${initials}</span>`;

  const statsHTML = INFO.stats.map(s => `
    <div class="stat">
      <div class="stat-num">${s.num}</div>
      <div class="stat-lbl">${s.label}</div>
    </div>
  `).join('');

  document.getElementById('about').innerHTML = `
    <div class="hero-grid">
      <div class="hero-text">
        <div class="hero-badge">Available for Opportunities</div>
        <h1 class="hero-name">${INFO.firstName}<br><span class="accent">${INFO.lastName}</span></h1>
        <p class="hero-title">${INFO.title}</p>
        <p class="hero-bio">${INFO.bio}</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#contact">Get in Touch</a>
          <a class="btn btn-ghost" href="#projects">View Projects</a>
        </div>
        <div class="hero-stats">${statsHTML}</div>
      </div>
      <div class="hero-avatar">
        <div class="avatar-ring">
          <div class="avatar-inner">${avatarContent}</div>
        </div>
      </div>
    </div>
  `;
}

// ── Skills ──
function renderSkills() {
  const techCards = SKILLS.technical.map(cat => `
    <div class="skill-card reveal">
      <div class="skill-card-title">
        <div class="skill-card-icon">${cat.icon}</div>
        ${cat.category}
      </div>
      <div class="skill-tags">
        ${cat.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const softItems = SKILLS.soft.map(s => `
    <div class="soft-skill-item">${s}</div>
  `).join('');

  document.getElementById('skills').innerHTML = `
    <div class="section-label">Capabilities</div>
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      ${techCards}
      <div class="skill-card reveal">
        <div class="skill-card-title">
          <div class="skill-card-icon">🧠</div>
          Soft Skills
        </div>
        <div class="soft-skill-list">${softItems}</div>
      </div>
    </div>
  `;
}

// ── Experience ──
function renderExperience() {
  const items = EXPERIENCE.map(exp => `
    <div class="timeline-item reveal">
      <div class="exp-card">
        <div class="exp-header">
          <span class="exp-role">${exp.role}</span>
          <span class="exp-date">${exp.period}</span>
        </div>
        <div class="exp-company">@ ${exp.company}</div>
        <div class="exp-duties">
          ${exp.duties.map(d => `<div class="exp-duty">${d}</div>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('experience').innerHTML = `
    <div class="section-label">Career</div>
    <h2 class="section-title">Experience</h2>
    <div class="timeline">${items}</div>
  `;
}

// ── Education ──
function renderEducation() {
  const cards = EDUCATION.map(edu => `
    <div class="edu-card reveal">
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-school">${edu.school}</div>
      <div class="edu-year">${edu.year}</div>
    </div>
  `).join('');

  document.getElementById('education').innerHTML = `
    <div class="section-label">Academic</div>
    <h2 class="section-title">Education</h2>
    <div style="display:flex; flex-direction:column; gap:1rem;">${cards}</div>
  `;
}

// ── Projects ──
function renderProjects() {
  const cards = PROJECTS.map((p, i) => `
    <div class="project-card reveal">
      <div class="project-num">0${i+1}</div>
      <div class="project-role-badge">${p.role}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.description}</div>
      <div class="project-responsibilities">
        <div class="project-resp-title">Responsibilities</div>
        <div class="project-resp-list">
          ${p.responsibilities.map(r => `<div class="project-resp-item">${r}</div>`).join('')}
        </div>
      </div>
      <div class="project-tools">
        ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('projects').innerHTML = `
    <div class="section-label">Work</div>
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">${cards}</div>
  `;
}

// ── Contact ──
function renderContact() {
  const links = [
    { icon: '✉️', type: 'Email', value: INFO.email, href: `mailto:${INFO.email}` },
    { icon: '💼', type: 'LinkedIn', value: 'linkedin.com/in/rojina-duwal', href: INFO.linkedin },
    { icon: '📘', type: 'Facebook', value: 'facebook.com/rozi.duwal', href: INFO.facebook },
    ...(INFO.phone ? [{ icon: '📞', type: 'Phone', value: INFO.phone, href: `tel:${INFO.phone}` }] : []),
  ];

  const linkCards = links.map(l => `
    <a class="contact-link" href="${l.href}" target="_blank" rel="noopener noreferrer">
      <div class="contact-icon">${l.icon}</div>
      <div class="contact-detail">
        <span class="contact-type">${l.type}</span>
        <span class="contact-value">${l.value}</span>
      </div>
    </a>
  `).join('');

  document.getElementById('contact').innerHTML = `
    <div class="section-label">Let's Connect</div>
    <h2 class="section-title">Contact</h2>
    <div class="contact-grid">
      <div class="contact-info reveal">${linkCards}</div>
      <form class="contact-form reveal" id="contactForm" onsubmit="handleForm(event)">
        <div class="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="John Doe" required />
        </div>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="john@email.com" required />
        </div>
        <div class="form-group">
          <label>Message</label>
          <textarea placeholder="Tell me about your project or opportunity…" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary form-submit">Send Message →</button>
      </form>
    </div>
  `;
}

// ── Footer ──
function renderFooter() {
  document.getElementById('footer').innerHTML =
    `© ${new Date().getFullYear()} ${INFO.name} · Built with ❤️ · QA Engineer`;
}

// ── Form handler ──
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#059669';
  setTimeout(() => { btn.textContent = 'Send Message →'; btn.style.background = ''; e.target.reset(); }, 3000);
}

/* ══════════════════════════════════════════════════
   SCROLL REVEAL
   ══════════════════════════════════════════════════ */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ══════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════ */
renderNav();
renderAbout();
renderSkills();
renderExperience();
renderEducation();
renderProjects();
renderContact();
renderFooter();
initReveal();
