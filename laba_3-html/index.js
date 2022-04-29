document.querySelector('.name').addEventListener('click', function () {
    document.querySelector('.conteiner').classList.add('visibl');
});

 document.querySelector('.overlay').addEventListener('click', function () {
    document.querySelector('.conteiner').classList.remove('visibl');
});