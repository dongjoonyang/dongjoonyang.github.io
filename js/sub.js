function layerPopOpen(imgSrc, event) {
    const layerPop = document.getElementById('layerPop');
    const imgElement = document.querySelector("#layerPop .popup img");  // 수정된 부분
    layerPop.style.display = 'flex';
    imgElement.src = imgSrc;
}

document.getElementById('closePopupBtn').addEventListener('click', function() {
    document.getElementById('layerPop').style.display = 'none';
});

const layerPop = document.getElementById('layerPop');
layerPop.addEventListener('click', (event) => {
    if (event.target === layerPop) {
        layerPop.style.display = 'none';
    }
});