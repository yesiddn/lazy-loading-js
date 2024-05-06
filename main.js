const loadImageBtn = document.querySelector('#load-image');
const imageContainer = document.querySelector('#image-container');

async function getUrl() {
  const response = await fetch('https://source.unsplash.com/random/640x480');
  const url = response.url;
  console.log(url);
  return url;
}

async function createImage() {
  const img = document.createElement('img');
  const url = getUrl();
  img.src = await url;
  img.alt = 'Unsplash Image';
  imageContainer.appendChild(img);
}

loadImageBtn.addEventListener('click', createImage);
