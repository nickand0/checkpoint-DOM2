var loaded = document.addEventListener('DOMContentLoaded',function(){
    var colorBox = document.getElementById('color-box');
    var ChangeColor = document.getElementById('change-color-btn');

    function getRandomColor(){
        const letters = '0123456789ABCDEF';
        let color='#';
        for (i=0 ;i<6 ;i++){
            color+=letters[Math.floor(Math.random()*16)];
        }
        return color;
    }

    ChangeColor.addEventListener('click',function(){
        colorBox.style.backgroundColor = getRandomColor();
    })

});