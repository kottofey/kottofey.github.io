let descriptions = [
    "Милашная Мяу",
    "Блестящее кошачье чудо",
    "Знакомьтесь, это - кошечка Мурка!",
    "Наш кот — вампир?",
    "Апрель апрель звенит капель!",
    "Сердце Чебурашки",
    "Когда захотелось снять про Чебурашку на радужном фоне",
    "Гарри Поттер",
    "Гарри Коттер и кубок вкусняшек",
    "Гарри Коттер и колбасный камень",
    "Гарри Коттер и орден Котика",
];

let previews = document.querySelectorAll(".album__image-preview");
let photoDescription = document.querySelector(".album__description");
let album = document.querySelector('.album');


//Собираем превьюшки
let previewURLs = {};
for (let i = 0; i < previews.length; i++) {
    previewURLs[i] = previews[i].querySelector("img, source").src;
}

let createClickHandler = function (preview, url, description) {
    let newTag;
    let newTagSrc;

    preview.addEventListener('click', function () {
        let bigPicture = document.querySelector(".album__big-picture");

        console.log(bigPicture.tagName);

        // готовим теги для большой картинки и видоса
        if (preview.children[0].tagName === "IMG") {

            newTag = document.createElement("img");
            newTag.classList.add('album__big-picture');
            newTag.src = url;

            album.replaceChild(newTag, bigPicture);
        } else {
            newTag = document.createElement("video");
            newTag.classList.add('album__big-picture');
            newTagSrc = document.createElement("source");
            newTagSrc.type = "video/mp4";
            newTagSrc.src = url;

            newTag.loop = true;
            newTag.playsInline = true;
            newTag.muted = true;
            newTag.preload = "metadata";
            newTag.autoplay = true;
            newTag.append(newTagSrc);

            // console.log(bigPicture);
            // console.log(newTag);

            album.replaceChild(newTag, bigPicture);
        }

        photoDescription.textContent = description;
    });
};

for (let i = 0; i < previews.length; i++) {
    createClickHandler(previews[i], previewURLs[i], descriptions[i]);
    // console.log(previews[i].querySelector("source, img").tagName);
}