import './App.css';
import AppRouter from './routes/AppRouter';
import React, { useEffect } from 'react';


const App: React.FC = () => {

  useEffect(() => {
      var canvas = document.getElementById("c") as HTMLCanvasElement;
      if (!canvas) {
        console.error('Canvas element not found!');
        return;
      }
      var matrix = canvas.getContext("2d");
      if (!matrix) {
        console.error('Unable to get canvas context!');
        return;
      }
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890".split("");
      var font_size = 17;
      var columns = canvas.width / font_size;
      var drops: number[] = [];

      for (var x = 0; x < columns; x++)
        drops[x] = 2;

      function draw() {
        matrix.fillStyle = "rgba(0, 0, 0, 0.05)";
        matrix.fillRect(0, 0, canvas.width, canvas.height);

        matrix.fillStyle = "#CE362B";
        matrix.font = font_size + "px arial";
        for (var i = 0; i < drops.length; i++) {
          var text = chinese[Math.floor(Math.random() * chinese.length)];
          matrix.fillText(text, i * font_size, drops[i] * font_size);

          if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
          drops[i]++;
        }
      }

      var interval = setInterval(draw, 35);

      return () => clearInterval(interval);
    }, []);

  return (
    <>
      <AppRouter/>
      <canvas id="c"></canvas>
    </>
  );
}

export default App;
