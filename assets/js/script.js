document.addEventListener('DOMContentLoaded', function () {
    const albumItems = document.querySelectorAll('.album .hover');

    albumItems.forEach(item => {
        item.addEventListener('click', function () {
            // Activa o desactiva el estado "hover" al hacer clic en móviles
            this.classList.toggle('active');
        });
    });
});
