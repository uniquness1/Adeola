<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const canvas = ref(null);
let animationId = null;
let particles = [];
let edgeLightPosition = 0;

class Particle {
    constructor(canvasWidth, canvasHeight) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update(canvasWidth, canvasHeight) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(218, 197, 167, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const drawGrid = (ctx, width, height) => {
    const gridSize = 50;
    ctx.strokeStyle = 'rgba(218, 197, 167, 0.08)';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
};

const drawEdgeLight = (ctx, width, height) => {
    const speed = 3;
    const lightLength = 200;
    const perimeter = (width + height) * 2;

    edgeLightPosition += speed;
    if (edgeLightPosition > perimeter) {
        edgeLightPosition = 0;
    }

    let x, y, x2, y2;

    // Determine position on the perimeter
    if (edgeLightPosition < width) {
        // Top edge (left to right)
        x = edgeLightPosition;
        y = 0;
        x2 = Math.min(edgeLightPosition + lightLength, width);
        y2 = 0;
    } else if (edgeLightPosition < width + height) {
        // Right edge (top to bottom)
        x = width;
        y = edgeLightPosition - width;
        x2 = width;
        y2 = Math.min(edgeLightPosition - width + lightLength, height);
    } else if (edgeLightPosition < width * 2 + height) {
        // Bottom edge (right to left)
        x = width - (edgeLightPosition - width - height);
        y = height;
        x2 = Math.max(width - (edgeLightPosition - width - height + lightLength), 0);
        y2 = height;
    } else {
        // Left edge (bottom to top)
        x = 0;
        y = height - (edgeLightPosition - width * 2 - height);
        x2 = 0;
        y2 = Math.max(height - (edgeLightPosition - width * 2 - height + lightLength), 0);
    }

    // Draw multiple layers for more visibility
    // Outer glow
    ctx.strokeStyle = 'rgba(218, 197, 167, 0.3)';
    ctx.lineWidth = 8;
    ctx.shadowBlur = 25;
    ctx.shadowColor = 'rgba(218, 197, 167, 0.8)';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Inner bright line with gradient
    const gradient = ctx.createLinearGradient(x, y, x2, y2);
    gradient.addColorStop(0, 'rgba(218, 197, 167, 0)');
    gradient.addColorStop(0.5, 'rgba(218, 197, 167, 1)');
    gradient.addColorStop(1, 'rgba(218, 197, 167, 0)');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 4;
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgba(218, 197, 167, 1)';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    ctx.shadowBlur = 0;
};

const initCanvas = () => {
    if (!canvas.value) return;

    const ctx = canvas.value.getContext('2d');
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;

    const particleCount = Math.floor((canvas.value.width * canvas.value.height) / 15000);
    particles = [];

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.value.width, canvas.value.height));
    }

    animate(ctx);
};

const animate = (ctx) => {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    // Draw grid first (bottom layer)
    drawGrid(ctx, canvas.value.width, canvas.value.height);

    // Draw particles and connections
    particles.forEach(particle => {
        particle.update(canvas.value.width, canvas.value.height);
        particle.draw(ctx);
    });

    // Draw connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                ctx.strokeStyle = `rgba(218, 197, 167, ${0.15 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }

    // Draw edge light last (top layer)
    drawEdgeLight(ctx, canvas.value.width, canvas.value.height);

    animationId = requestAnimationFrame(() => animate(ctx));
};

const handleResize = () => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    initCanvas();
};

onMounted(() => {
    initCanvas();
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <canvas ref="canvas" class="fixed top-0 left-0 w-full h-full -z-10 bg-[#121212]" />
</template>

<style scoped>
canvas {
    pointer-events: none;
}
</style>