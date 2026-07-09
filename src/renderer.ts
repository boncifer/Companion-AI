import './index.css';

// @ts-ignore
// @ts-ignore


const app = document.getElementById('app')!;
const selection = document.getElementById('selection')!;

let isDragging = false;

let startX = 0;
let startY = 0;

let selectionRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

app.addEventListener('mousedown', (e) => {
  isDragging = true;

  startX = e.clientX;
  startY = e.clientY;

  selection.style.display = 'block';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const left = Math.min(startX, e.clientX);
  const top = Math.min(startY, e.clientY);
  const width = Math.abs(e.clientX - startX);
  const height = Math.abs(e.clientY - startY);

  selection.style.left = `${left}px`;
  selection.style.top = `${top}px`;
  selection.style.width = `${width}px`;
  selection.style.height = `${height}px`;
  selectionRect = {
  x: left,
  y: top,
  width,
  height,
};
});

app.addEventListener('mouseup', () => {
  if (!isDragging) return;

  isDragging = false;
  console.log(selectionRect);

  // @ts-ignore
window.companion.captureScreen().then((result: any) => {
  console.log(result);
  alert(JSON.stringify(result));
});

  // selection.style.display = 'none';
});