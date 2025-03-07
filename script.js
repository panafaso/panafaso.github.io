document.addEventListener('DOMContentLoaded', function () {
    function toggleAnimation(animation) {
        if (animation.getAttribute('repeatCount') === 'indefinite') {
            animation.setAttribute('repeatCount', '0'); 
        } else {
            animation.setAttribute('repeatCount', 'indefinite'); 
        }
    }

    document.getElementById('square-group-1').addEventListener('click', function () {
        const square1Anim = document.getElementById('squareAnim1');
        toggleAnimation(square1Anim);
    });

    
    document.getElementById('square-group-2').addEventListener('click', function () {
        const square2 = document.getElementById('square-2');
        if (square2.style.display === 'none') {
            square2.style.display = 'block';
        } else {
            square2.style.display = 'none'; 
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");

    circle.addEventListener("click", function () {
        this.classList.toggle("clicked");
    });
});
