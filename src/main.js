import { signImage } from './lazy.js';

const loadImageBtn = document.querySelector('#load-image');
const imageContainer = document.querySelector('#image-container');

async function getUrl() {
  const response = await fetch('https://source.unsplash.com/random/640x480');
  const url = response.url;
  return url;
}

async function createImage() {
  const img = document.createElement('img');
  const url = await getUrl();
  signImage(img);

  img.src = url;
  img.alt = 'Unsplash Image';
  imageContainer.appendChild(img);
}

loadImageBtn.addEventListener('click', createImage);
