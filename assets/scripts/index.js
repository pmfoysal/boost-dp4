document.querySelector('button').addEventListener('click', function () {
   const color = generateColor();
   document.body.style.backgroundColor = color;
   document.querySelector('h2').innerHTML = color;
});

function generateColor() {
   const hue = Math.floor(Math.random() * 360);
   const saturation = Math.floor(Math.random() * 100);
   const lightness = Math.floor(Math.random() * 100);

   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
