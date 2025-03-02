document.addEventListener('DOMContentLoaded', function () {
    function toggleAnimation(animation) {
        if (animation.hasAttribute('data-paused')) {
            animation.beginElement(); // Ξεκινάει ξανά
            animation.removeAttribute('data-paused');
        } else {
            animation.endElement(); // Σταματάει
            animation.setAttribute('data-paused', 'true');
        }
    }

    // Αντικείμενο: Freeze και Resume του πρώτου τετραγώνου
    document.getElementById('square1-group').addEventListener('click', function () {
        const square1Anim = document.getElementById('square1Anim');
        toggleAnimation(square1Anim);
    });

    // Αντικείμενο: Εξαφάνιση του δεύτερου τετραγώνου
    document.getElementById('square2-group').addEventListener('click', function () {
        const square2 = document.getElementById('square2');
        if (square2.style.display === 'none') {
            square2.style.display = 'block'; // Επαναφορά του τετραγώνου
        } else {
            square2.style.display = 'none'; // Απόκρυψη του τετραγώνου
        }
    });

    // Αντικείμενο: Συνεχής κίνηση του κύκλου
    // Δεν χρειάζεται toggle για τον κύκλο, καθώς αυτός κινείται συνέχεια
});
