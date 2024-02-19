import largeheaderImg from '../images/header_large.jpg';
import smallheaderImg from '../images/header_small.jpg';

export default function renderHeader() {
  const header = document.createElement('header');

  const profileContainer = document.createElement('div');
  profileContainer.className = 'profilecontainer';

  const profiledisplay = document.createElement('div');
  profiledisplay.className = 'profiledisplay';

  const headerImage = document.createElement('picture');

  const headerLarge = document.createElement('source');
  headerLarge.srcset = largeheaderImg;
  headerLarge.media = '(min-width: 935px)';

  const headerSmall = document.createElement('source');
  headerSmall.srcset = smallheaderImg;
  headerSmall.media = '(max-width: 935px)';

  headerImage.appendChild(headerLarge);
  headerImage.appendChild(headerSmall);

  const defaultHeader = new Image();
  defaultHeader.src = largeheaderImg;

  headerImage.appendChild(defaultHeader);

  profiledisplay.appendChild(headerImage);

  const profilename = document.createElement('h1');
  profilename.className = 'playfair';
  profilename.textContent = 'Ashley Williams';

  profiledisplay.appendChild(profilename);

  profileContainer.appendChild(profiledisplay);

  const aboutBox = document.createElement('div');
  aboutBox.className = 'aboutbox';

  const aboutHeader = document.createElement('h2');
  aboutHeader.className = 'playfair';
  aboutHeader.textContent = 'About me';

  aboutBox.appendChild(aboutHeader);

  const aboutDescription = document.createElement('p');
  aboutDescription.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  aboutBox.appendChild(aboutDescription);

  const icons = document.createElement('div');
  icons.className = 'icons';

  const githubIcon = new Image();
  githubIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';

  icons.appendChild(githubIcon);

  const linkedInIcon = new Image();
  linkedInIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg';

  icons.appendChild(linkedInIcon);

  const xIcon = new Image();

  xIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg';

  icons.appendChild(xIcon);

  aboutBox.appendChild(icons);

  profileContainer.appendChild(aboutBox);

  header.appendChild(profileContainer);

  return header;
}
