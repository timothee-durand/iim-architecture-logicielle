// Home.tsx
import React, { useEffect } from 'react';

const Home: React.FC = () => {

    useEffect(() => {
        const canvas = document.getElementById("c") as HTMLCanvasElement;
        if (!canvas) {
          console.error('Canvas element not found!');
          return;
        }
        const matrix = canvas.getContext("2d");
        if (!matrix) {
          console.error('Unable to get canvas context!');
          return;
        }
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        const chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890".split("");
        const font_size = 16;
        const columns = canvas.width / font_size;
        const drops: number[] = [];
    
        for (let x = 0; x < columns; x++)
          drops[x] = 1;
    
        function draw() {
            if(!matrix) return;
          matrix.fillStyle = "rgba(0, 0, 0, 0.05)";
          matrix.fillRect(0, 0, canvas.width, canvas.height);
    
          matrix.fillStyle = "#CE362B"; 
          matrix.font = font_size + "px arial";
          for (let i = 0; i < drops.length; i++) {
            const text = chinese[Math.floor(Math.random() * chinese.length)];
            matrix.fillText(text, i * font_size, drops[i] * font_size);
    
            if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
              drops[i] = 0;
            drops[i]++;
          }
        }
    
        const interval = setInterval(draw, 35);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div>
      <h1>Bienvenue sur la page d'accueil</h1>
      <p>Ceci est la page d'accueil de notre application.</p>
      
      <canvas id="c"></canvas>
    </div>
  );
}

export default Home;
