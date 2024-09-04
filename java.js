document.querySelectorAll('.carta button').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const link = document.getElementById(targetId);
        if (link) {
            window.location.href = link.href;
        }
    });
});