


const train__btn = document.querySelectorAll('.train__btn-title'),
      train__block = document.querySelectorAll('.train__block');




function openTrainList (block, info) {
    block.addEventListener('click', (e) => {
        e.preventDefault();
        if (info.classList.contains('hide')) {
            info.classList.remove('hide')
            info.classList.add('show');
        } else {
            info.classList.remove('show')
            info.classList.add('hide');
        }
    })
}



train__btn.forEach((element,i) => {
    openTrainList(element, train__block[i]);
})

const icon = document.querySelectorAll('.icon'),
      img = document.querySelectorAll('.img');

icon.forEach((element,i) => {
    openTrainList(element, img[i]);
})




const icon2 = document.querySelectorAll('.icon2'),
    gif = document.querySelectorAll('.gif');

icon2.forEach((element,i) => {
    openTrainList(element, gif[i]);
})







