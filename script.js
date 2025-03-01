document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('circle');
    const rect = document.querySelector('rect');
    const polygon = document.querySelector('polygon');

    
    circle.addEventListener('click', function() {
        circle.style.display = circle.style.display === 'none' ? 'block' : 'none';
    });

    
    rect.addEventListener('click', function() {
        rect.style.animationPlayState = rect.style.animationPlayState === 'paused' ? 'running' : 'paused';
    });

    
    polygon.addEventListener('click', function() {
        polygon.style.fill = polygon.style.fill === 'red' ? 'blue' : 'red';
    });
});
