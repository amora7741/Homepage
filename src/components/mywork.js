import createProject from './project';

export default function renderMyWork() {
  const colors = [
    '#991b1b',
    '#818cf8',
    '#16a34a',
    '#e879f9',
    '#f59e0b',
    '#38bdf8',
  ];
  const myWork = document.createElement('main');

  const header = document.createElement('h2');
  header.textContent = 'My work';
  header.className = 'playfair';

  myWork.appendChild(header);

  const projects = document.createElement('div');
  projects.className = 'projectcontainer';

  for (let index = 0; index < 6; index++) {
    projects.appendChild(createProject(colors[index]));
  }

  myWork.appendChild(projects);

  return myWork;
}
