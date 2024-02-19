import createProject from './project';

export default function renderMyWork() {
  const myWork = document.createElement('main');

  const header = document.createElement('h2');
  header.textContent = 'My work';
  header.className = 'playfair';

  myWork.appendChild(header);

  const projects = document.createElement('div');
  projects.className = 'projectgrid';

  for (let index = 0; index < 6; index++) {
    projects.appendChild(createProject('#fff'));
  }

  myWork.appendChild(projects);

  return myWork;
}
