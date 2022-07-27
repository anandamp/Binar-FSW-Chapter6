
// Result Style
resultStyleDraw =`
    font-size: 25px;
    color: white;
    background-color: rgba(3, 91, 12, 1);
    padding: 2.5rem 1rem;
    transform: rotate(-28.87deg);
`

resultStyleWin = `
    font-size: 25px;
    color: white;
    background-color: rgba(76, 150, 84, 1);
    padding: 2.5rem 1rem;
    transform: rotate(-28.87deg);
`
 

// Refresh Button
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', function () {
    window.location.reload();
})


// Selector DOM
const option = document.querySelectorAll('.player-option img');
const comOption = document.querySelectorAll('.com-option img');
const result = document.querySelector('.col-2 h1');
const comChoose = ['batu', 'kertas', 'gunting'];


// Games Play
option.forEach(function(opt) {
    opt.addEventListener('click', function() {

            let player1 = opt;
            let player1Option = player1.className
            player1.style.backgroundColor = '#C4C4C4';


            // Computer Option
            const comNum = Math.floor(Math.random() *3);
            const comOpt = comChoose[comNum];

            let comBatu = document.querySelector('.batu2')
            let comKertas = document.querySelector('.kertas2')
            let comGunting = document.querySelector('.gunting2')

            if(comOpt === 'batu') {
                comBatu.style.backgroundColor = '#C4C4C4';
            } else if (comOpt === 'kertas') {
                comKertas.style.backgroundColor = '#C4C4C4';
            } else {
                comGunting.style.backgroundColor = '#C4C4C4';
            }


            // Result
            getResult = '';
            if(player1Option === 'batu' && comOpt === 'gunting' || player1Option === 'kertas' && comOpt === 'batu' || player1Option === 'gunting' && comOpt === 'kertas') {
                result.innerHTML = 'PLAYER 1 WIN';
                result.style = resultStyleWin;
            } else if (comOpt === 'batu' && player1Option === 'gunting' || comOpt === 'kertas' && player1Option === 'batu' || comOpt === 'gunting' && player1Option === 'kertas') {
                result.innerHTML = 'COM WIN';
                result.style = resultStyleWin;
            } else {
                result.innerHTML = 'DRAW';
                result.style = resultStyleDraw;
            }

        const reloading = setTimeout(refresh, 100);
        
    })
})


