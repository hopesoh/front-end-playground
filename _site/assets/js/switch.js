(function () {

    const container = document.getElementsByClassName('container')[0];
    document.getElementById('toggler').addEventListener('change', (event) => {
        if (event.target.checked) {
            container.setAttribute('data-theme', 'dark');
            document.getElementById("imageId").src= "assets/images/dark_footer.png";
        } else {
            container.removeAttribute('data-theme');
            document.getElementById("imageId").src= "assets/images/footer.png";
        }
    });

})();