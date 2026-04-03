const projects = [
  {
    title: "Better Budget",
    url: "https://github.com/aabdulk862/BetterBudget",
    badge: "Professional Training",
    badgeClass: "project-badge--training",
    description: "Full-stack envelope budgeting app where users allocate money to virtual envelopes and track spending in real time. Includes secure auth, admin controls, and cloud deployment on AWS.",
    tags: ["Spring Boot", "React", "TypeScript", "PostgreSQL", "Docker", "AWS"]
  },
  {
    title: "Kafka Learning Platform",
    url: "https://github.com/aabdulk862/learn-kafka",
    badge: "Personal Projects",
    badgeClass: "project-badge--personal",
    description: "Open-source reference project covering Kafka producer/consumer patterns, transactional messaging, Kafka Streams, Avro schemas, and real-world patterns like event sourcing and CQRS.",
    tags: ["Spring Boot", "Kafka", "Avro", "Docker", "Java 17"]
  },
  {
    title: "Learn Angular 18",
    url: "https://learn-angular18.netlify.app/",
    badge: "Personal Projects",
    badgeClass: "project-badge--personal",
    description: "Interactive learning resource demonstrating Angular 18 fundamentals — standalone components, signal-based reactivity, new control flow syntax, reactive forms, and dependency injection.",
    tags: ["Angular 18", "TypeScript", "Signals", "RxJS"]
  },
  {
    title: "Expense Reimbursement System",
    url: "https://github.com/aabdulk862/Expense-Reimbursement-System",
    badge: "Professional Training",
    badgeClass: "project-badge--training",
    description: "Built during professional training at Revature. Full-stack app with role-based access control, approval workflows, and secure auth — designed to mirror real enterprise reimbursement flows.",
    tags: ["Spring Boot", "React", "PostgreSQL", "REST API", "RBAC"]
  }
];

const groupOrder = ["Personal Projects", "Professional Training"];

function renderProjectCard(project) {
  const featuredStyle = project.featured ? ' style="border: 1.5px solid var(--accent);"' : "";
  const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");

  return `
    <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card"${featuredStyle}>
      <div class="project-thumb">
        <i class="fas fa-code"></i>
      </div>
      <div class="project-body">
        <div class="project-title">${project.title}</div>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">${tagsHtml}</div>
      </div>
      <span class="project-link-icon"><i class="fas fa-external-link-alt"></i></span>
    </a>`;
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const grouped = {};
  for (const project of projects) {
    (grouped[project.badge] ??= []).push(project);
  }

  container.innerHTML = groupOrder
    .filter(group => grouped[group])
    .map(group => `
      <div class="project-group">
        <h3 class="project-group-title">${group}</h3>
        <div class="projects-grid">
          ${grouped[group].map(renderProjectCard).join("")}
        </div>
      </div>`)
    .join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
