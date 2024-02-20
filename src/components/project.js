export default function createProject(color) {
  const project = document.createElement('div');
  project.className = 'project';

  const projectDisplay = document.createElement('div');
  projectDisplay.className = 'projectdisplay';
  projectDisplay.style.backgroundColor = color;

  projectDisplay.textContent = 'screenshot of project';

  project.appendChild(projectDisplay);

  const projectInfo = document.createElement('div');
  projectInfo.className = 'projectinfo';

  const projectInfoHeader = document.createElement('div');
  projectInfoHeader.className = 'projectinfoheader';

  const projectName = document.createElement('h3');
  projectName.textContent = 'Project name';

  projectInfoHeader.appendChild(projectName);

  const icons = document.createElement('div');

  const githubIcon = new Image();

  githubIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';

  icons.appendChild(githubIcon);

  return project;
}
