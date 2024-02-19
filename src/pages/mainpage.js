import renderHeader from '../components/header';
import renderMyWork from '../components/mywork';

export default function renderMain() {
  const body = document.querySelector('body');

  body.appendChild(renderHeader());
  body.appendChild(renderMyWork());
}
