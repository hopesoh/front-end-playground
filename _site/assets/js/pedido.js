(function () {
    const button = document.getElementById("no");

    const animateMove = (element, prop, pixels) =>
        anime({
            targets: element,
            [prop]: `${pixels}px`,
            easing: "easeOutCirc"
        });

    ["mouseover", "click"].forEach(function (el) {
        button.addEventListener(el, function (event) {
            const top = getRandomNumber(600 - this.offsetHeight);
            const left = getRandomNumber(1000 - this.offsetWidth);

            animateMove(this, "left", left).play();
            animateMove(this, "top", top).play();
        });
    });

    const getRandomNumber = (num) => {
        return Math.floor(Math.random() * (num + 1));
    };
})();