import renderHeader from '../components/header';

export default function renderMain() {
  const body = document.querySelector('body');

  body.appendChild(renderHeader());
}
