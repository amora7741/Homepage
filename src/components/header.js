import largeheaderImg from '../images/header_large.jpg';
import smallheaderImg from '../images/header_small.jpg';

export default function renderHeader() {
  const header = document.createElement('header');

  const profileContainer = document.createElement('div');
  profileContainer.className = 'profilecontainer';

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

  profileContainer.appendChild(headerImage);

  const aboutBox = document.createElement('div');

  header.appendChild(profileContainer);

  return header;
}
