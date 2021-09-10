
    let i = 1;
    for(let li of slider.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

    let width = 130;
    let count = 1;

    let list = slider.querySelector('ul');
    let listElems = slider.querySelectorAll('li');

    let position = 0;

    slider.querySelector('.before').onclick = function() {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

    slider.querySelector('.after').onclick = function() {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};
