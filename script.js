document.addEventListener('DOMContentLoaded', function () {
    function toggleAnimation(animation) {
        if (animation.getAttribute('repeatCount') === 'indefinite') {
            animation.setAttribute('repeatCount', '0'); // Σταματάει την κίνηση (Freeze)
        } else {
            animation.setAttribute('repeatCount', 'indefinite'); // Ξεκινάει ξανά την κίνηση (Resume)
        }
    }

    // Αντικείμενο: Freeze και Resume του πρώτου τετραγώνου
    document.getElementById('square-group-1').addEventListener('click', function () {
        const square1Anim = document.getElementById('squareAnim1');
        toggleAnimation(square1Anim);
    });

    // Αντικείμενο: Εξαφάνιση του δεύτερου τετραγώνου
    document.getElementById('square-group-2').addEventListener('click', function () {
        const square2 = document.getElementById('square-2');
        if (square2.style.display === 'none') {
            square2.style.display = 'block'; // Επαναφορά του τετραγώνου
        } else {
            square2.style.display = 'none'; // Απόκρυψη του τετραγώνου
        }
    });

    // Δεν χρειάζεται να κάνεις τίποτα για τον κύκλο γιατί η κίνηση είναι συνεχής
});
