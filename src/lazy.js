const isIntersecting = entry => {
  // si esta a 100px de distancia del viewport haz algo
  return entry.isIntersecting; // true si está dentro del viewport
}

const action = (entry) => {
  const node = entry.target; // imagen que lo envia el intersectionObserver
  console.log('Soy un action');

  // unlisted la imagen para que cada vez que la imagen vuelva a estar en el viewport se vuelva realizar la acción
  observer.unobserve(node);
}

const observer = new IntersectionObserver(entries => {
  entries.filter(isIntersecting).forEach(action);
})

export const signImage = (image) => {
  observer.observe(image);
}