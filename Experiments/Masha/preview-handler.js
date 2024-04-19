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
]; 

let bigPicture = document.querySelector(".album__big-picture");
let previews = document.querySelectorAll(".album__image-preview");
let photoDescription = document.querySelector(".album__description");


let previewURLs = {};
for (let i = 0; i < previews.length; i++) {
    previewURLs[i] = previews[i].querySelector("img, source").src;
}

console.log(bigPicture.children);

let createClickHandler = function (preview, url, description) {
    let previewTag;
    let previewTagSrc;

    preview.addEventListener('click', function () {
        // готовим теги для большой картинки и видоса
        if (preview.querySelector("source, img").tagName === "IMG") {
            previewTag = document.createElement("img");
            previewTag.src = url;
            
            bigPicture.replaceChild(previewTag, bigPicture.children[0]);
        } else {
            previewTag = document.createElement("video");
            console.log(previewTag);
            previewTagSrc = document.createElement("source");
            previewTagSrc.type = "video/mp4";
            previewTagSrc.src = url;

            previewTag.loop = true;
            previewTag.playsInline = true;
            previewTag.muted = true;
            previewTag.preload = "metadata";
            previewTag.autoplay = true;
            previewTag.append(previewTagSrc);

            bigPicture.replaceChild(previewTag, bigPicture.children[0]);
        }

        photoDescription.textContent = description;
    });
}

for (let i = 0; i < previews.length; i++) {
    createClickHandler(previews[i], previewURLs[i], descriptions[i]);
    // console.log(previews[i].querySelector("source, img").tagName);
}