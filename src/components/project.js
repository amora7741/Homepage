import openLink from '../icons/openlink.svg';

export default function createProject(color) {
  const project = document.createElement('div');
  project.className = 'project';

  const projectDisplay = document.createElement('div');
  projectDisplay.className = 'projectdisplay playfair';
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
  icons.className = 'icons';

  const githubButton = document.createElement('button');

  const githubIcon = new Image();
  githubIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';

  githubButton.appendChild(githubIcon);

  icons.appendChild(githubButton);

  const shareButton = document.createElement('button');

  const shareIcon = new Image();
  shareIcon.src = openLink;

  shareButton.appendChild(shareIcon);

  icons.appendChild(shareButton);

  projectInfoHeader.appendChild(icons);

  projectInfo.appendChild(projectInfoHeader);

  const projectDescription = document.createElement('p');

  projectDescription.textContent =
    'Short description of the project. Just a couple sentences will do.';

  projectInfo.appendChild(projectDescription);

  project.appendChild(projectInfo);

  return project;
}
