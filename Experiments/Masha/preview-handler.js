let bigPicture = document.querySelector(".album__big-picture");

let previews = document.querySelectorAll(".album__image-preview");

let previewURLs = {};

for (let i = 0; i < previews.length; i++) {
    previewURLs[i] = previews[i].querySelector("img, source").src;
}

let createClickHandler = function (preview, url) {
    let previewTag;
    let previewTagSrc;

    preview.addEventListener('click', function () {
        // готовим теги для большой картинки и видоса
        if (preview.querySelector("source, img").tagName === "IMG") {
            previewTag = document.createElement("img");
            previewTag.src = url;

            console.log(previewTag);

            bigPicture.children[0].remove();
            bigPicture.append(previewTag);
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
            // previewTag.poster = "";
            previewTag.append(previewTagSrc);

            console.log(previewTag);
            bigPicture.children[0].remove();
            bigPicture.append(previewTag);
        }
        console.log(bigPicture);
    });
}

for (let i = 0; i < previews.length; i++) {
    createClickHandler(previews[i], previewURLs[i]);
    // console.log(previews[i].querySelector("source, img").tagName);
}