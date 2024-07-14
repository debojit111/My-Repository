const randomizePositionToBorder = () => {
  const link = document.getElementById('randomLink');
  
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  // Determine random position on either top, bottom, left, or right edge
  const randomPosition = Math.floor(Math.random() * 4);
  
  let randomLeft = 0;
  let randomTop = 0;
  
  switch(randomPosition) {
    case 0: // Top edge
      randomLeft = Math.random() * viewportWidth;
      randomTop = 0;
      break;
    case 1: // Bottom edge
      randomLeft = Math.random() * viewportWidth;
      randomTop = viewportHeight - link.offsetHeight;
      break;
    case 2: // Left edge
      randomLeft = 0;
      randomTop = Math.random() * viewportHeight;
      break;
    case 3: // Right edge
      randomLeft = viewportWidth - link.offsetWidth;
      randomTop = Math.random() * viewportHeight;
      break;
    default:
      break;
  }
  
  link.style.left = `${randomLeft}px`;
  link.style.top = `${randomTop}px`;
};

document.getElementById('randomLink').addEventListener('mouseenter', randomizePositionToBorder);
document.getElementById('randomLink').addEventListener('click', randomizePositionToBorder);
