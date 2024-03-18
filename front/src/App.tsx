import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    var canvas = document.getElementById("c");
    if (!canvas) {
      console.error('Canvas element not found!');
      return;
    }
    var matrix = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890".split("");
    var font_size = 18;
    var columns = canvas.width / font_size;
    var drops = [];

    for (var x = 0; x < columns; x++)
      drops[x] = 1;

    const colors = ['#CE362B']; // Exemple de couleurs

    function draw() {
      for (var i = 0; i < drops.length; i++) {
        var text = chinese[Math.floor(Math.random() * chinese.length)];
        var color = colors[Math.floor(Math.random() * colors.length)]; // Sélection aléatoire
        matrix.fillStyle = color; // Utilisation de la couleur sélectionnée
        matrix.fillText(text, i * font_size, drops[i] * font_size);
      }
      matrix.fillStyle = "rgba(0, 0, 0, 0.05)";
      matrix.fillRect(0, 0, canvas.width, canvas.height);
      matrix.font = font_size + "px arial";

      for (var i = 0; i < drops.length; i++) {
        var text = chinese[Math.floor(Math.random() * chinese.length)];
        matrix.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > canvas.height && Math.random() > 0.985)
          drops[i] = 0;
        drops[i]++;
      }
    }

    var interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <canvas id="c"></canvas>
      {/* Reste du composant */}
    </>
  );
}

export default App;
