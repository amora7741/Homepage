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

  address.innerHTML = '1234 Random Road <br> Random Town, California 12345';

  const phone = document.createElement('div');

  const phoneIcon = new Image();
  phoneIcon.src = phoneSvg;

  phone.appendChild(phoneIcon);

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '(555) 555-5555';

  phone.appendChild(phoneNumber);

  contactInfo.appendChild(contactMe);
  contactInfo.appendChild(getInTouch);
  contactInfo.appendChild(address);
  contactInfo.appendChild(phone);

  footer.appendChild(contactInfo);

  return footer;
}
