import React, { useEffect } from "react";
import CTAFormModal from "./CTAFormModal";

// Hero section component
const Hero: React.FC = () => {
  useEffect(() => {
    const svg = document.getElementById("neural-svg") as SVGSVGElement;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Initialize 25 animated nodes with position and velocity
    const nodes = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const maxDist = 300; // max distance for line connection
    const radius = 4; // circle radius

    // Animation loop
    function update() {
      svg.innerHTML = ""; // clear previous frame

      // Draw connecting lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const line = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "line"
            );
            line.setAttribute("x1", nodes[i].x.toString());
            line.setAttribute("y1", nodes[i].y.toString());
            line.setAttribute("x2", nodes[j].x.toString());
            line.setAttribute("y2", nodes[j].y.toString());
            line.setAttribute("stroke", "#3eeaed");
            line.setAttribute("stroke-opacity", "0.2");
            line.setAttribute("stroke-width", "1.5");
            svg.appendChild(line);
          }
        }
      }

      // Draw circles (nodes)
      nodes.forEach((n) => {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", n.x.toString());
        circle.setAttribute("cy", n.y.toString());
        circle.setAttribute("r", radius.toString());
        circle.setAttribute("fill", "#3eeaed");
        circle.setAttribute("fill-opacity", "0.8");
        svg.appendChild(circle);
      });

      // Update node positions and bounce at edges
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // Call next animation frame
      requestAnimationFrame(update);
    }

    // Start the animation
    update();
  }, []);

  return (
    <section className="hero" data-aos="zoom-in">
      {/* Animated SVG background */}
      <div className="neural-animated-bg">
        <svg id="neural-svg" preserveAspectRatio="xMidYMid slice" />
      </div>
      {/* Hero content overlay */}
      <div className="hero-content">
        <img src="/images/asrlogop.png" alt="ASR Logo" className="hero-logo" />
        <h1>Revolutionizing Glucose Monitoring</h1>
        <p className="subheadline">Accurate. Non-Invasive. Powered by AI.</p>
        <CTAFormModal />
      </div>
    </section>
  );
};

export default Hero;
