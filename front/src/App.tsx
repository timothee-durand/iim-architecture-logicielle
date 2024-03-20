import './App.css';
import AppRouter from './routes/AppRouter';
import React, { useEffect } from 'react';

/**
 * Main application component.
 * @returns {React.FC} The rendered component
 */
const App: React.FC = () => {
    useEffect(() => {
        // Get the canvas element
        const canvas = document.getElementById("c") as HTMLCanvasElement;
        if (!canvas) {
            console.error('Canvas element not found!');
            return;
        }
        // Get the 2D rendering context for the canvas
        const matrix = canvas.getContext("2d")!;
        if (!matrix) {
            console.error('Unable to get canvas context!');
            return;
        }
        // Set the canvas dimensions to fill the window
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        // Define the characters to be used in the matrix effect
        const chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
        const font_size = 17;
        const columns = canvas.width / font_size;
        const drops: number[] = [];

        // Initialize the drops array
        for (let x = 0; x < columns; x++)
            drops[x] = 2;

        /**
         * Function to draw the matrix effect on the canvas
         */
        function draw() {
            // Set the fill style and fill the canvas
            matrix.fillStyle = "rgba(0, 0, 0, 0.05)";
            matrix.fillRect(0, 0, canvas.width, canvas.height);

            // Set the fill style and font for the characters
            matrix.fillStyle = "#CE362B";
            matrix.font = font_size + "px arial";
            // Draw each character
            for (let i = 0; i < drops.length; i++) {
                const text = chinese[Math.floor(Math.random() * chinese.length)];
                matrix.fillText(text, i * font_size, drops[i] * font_size);

                // Reset the drop back to the top randomly to keep the effect going
                if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        }

        // Start the draw function at an interval
        const interval = setInterval(draw, 35);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Render the router and the canvas
    return (
        <>
            <AppRouter/>
            <canvas id="c"></canvas>
        </>
    );
}

export default App;