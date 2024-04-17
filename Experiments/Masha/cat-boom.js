let cat = document.querySelector(".menu__cat");
let x = 80;
// console.log(cat);
cat.onclick = function () {
    // if (moveX > 6) moveX = 0.8;
    console.log("click");

    x += 40;
    cat.style.width = x + 'px';
    cat.style.backgroundSize = x + 'px 110px';

    if (cat.offsetWidth > 300) {
        console.log("BOOM!");
        document.querySelector(".page-wrapper").classList.add("boom");
        cat.style.opacity = '0';
    }
}