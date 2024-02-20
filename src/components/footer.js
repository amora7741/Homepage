import phoneSvg from '../icons/phone.svg';
import emailSvg from '../icons/email.svg';

export default function renderFooter() {
  const footer = document.createElement('footer');

  const contactInfo = document.createElement('div');
  contactInfo.className = 'contactinfo';

  const contactMe = document.createElement('h2');
  contactMe.className = 'playfair';
  contactMe.textContent = 'Contact Me';

  const getInTouch = document.createElement('p');
  getInTouch.textContent =
    'Please get in touch if you think our work could be mutually beneficial!';

  const address = document.createElement('p');

  address.innerHTML = '1234 Random Road <br>Random Town, California 12345';

  const phone = document.createElement('div');
  phone.className = 'contactinfocontainer';

  const phoneButton = document.createElement('button');
  phoneButton.className = 'footer icon';

  const phoneIcon = new Image();
  phoneIcon.src = phoneSvg;

  phoneButton.appendChild(phoneIcon);

  phone.appendChild(phoneButton);

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '(555) 555-5555';

  phone.appendChild(phoneNumber);

  const email = document.createElement('div');
  email.className = 'contactinfocontainer';

  const emailButton = document.createElement('button');
  emailButton.className = 'footer icon';

  const emailIcon = new Image();
  emailIcon.src = emailSvg;

  emailButton.appendChild(emailIcon);

  email.appendChild(emailButton);

  const emailAddress = document.createElement('p');
  emailAddress.textContent = 'ashleywilliams.is.not.real@gmail.com';

  email.appendChild(emailAddress);

  const icons = document.createElement('div');
  icons.className = 'icons';

  const githubButton = document.createElement('button');
  githubButton.className = 'icon';

  const githubIcon = new Image();
  githubIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';

  githubButton.appendChild(githubIcon);

  icons.appendChild(githubButton);

  const linkedInButton = document.createElement('button');
  linkedInButton.className = 'icon';

  const linkedInIcon = new Image();
  linkedInIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg';

  linkedInButton.appendChild(linkedInIcon);

  icons.appendChild(linkedInButton);

  const xButton = document.createElement('button');
  xButton.className = 'icon';

  const xIcon = new Image();
  xIcon.src =
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg';

  xButton.appendChild(xIcon);

  icons.appendChild(xButton);

  contactInfo.appendChild(contactMe);
  contactInfo.appendChild(getInTouch);
  contactInfo.appendChild(address);
  contactInfo.appendChild(phone);
  contactInfo.appendChild(email);
  contactInfo.appendChild(icons);

  footer.appendChild(contactInfo);

  const headerImage = document.createElement('picture');

  return footer;
}
