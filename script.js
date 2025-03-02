document.addEventListener('DOMContentLoaded', function() {
    const squareAnim = document.getElementById('squareAnim');
    const circleAnim = document.getElementById('circleAnim');
    const starAnim = document.getElementById('starAnim');

    function toggleAnimation(animation) {
        if (animation.getAttribute('repeatCount') === 'indefinite') {
            animation.setAttribute('repeatCount', '0'); // Freeze
        } else {
            animation.setAttribute('repeatCount', 'indefinite'); // Resume
        }
    }

    document.getElementById('square-group').addEventListener('click', function() {
        toggleAnimation(squareAnim);
    });

    document.getElementById('circle-group').addEventListener('click', function() {
        toggleAnimation(circleAnim);
    });

    document.getElementById('star-group').addEventListener('click', function() {
        toggleAnimation(starAnim);
    });
});
