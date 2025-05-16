// projects.js
const projects = [
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    link: "https://example.com/weather"
  },
  {
    title: "Todo List",
    description: "A simple todo list with localStorage support.",
    link: "https://example.com/todo"
  }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;

  container.appendChild(card);
});


fetch('/api/projects')
.then(res => res.json())
.then(data => {
    const container = document.getElementById('projects');
    data.forEach(project => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        container.appendChild(div);
    });
});