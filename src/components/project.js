export default function createProject(color) {
  const project = document.createElement('div');
  project.className = 'project';

  const projectDisplay = document.createElement('div');
  projectDisplay.className = 'projectdisplay';
  projectDisplay.style.backgroundColor = color;

  projectDisplay.textContent = 'screenshot of project';

  project.appendChild(projectDisplay);

  return project;
}
