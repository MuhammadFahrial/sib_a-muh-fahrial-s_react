let display = document.querySelector('.display')
let buttons = Array.from(document.querySelectorAll('.button'))

buttons.map(button => {
    button.addEventListener('click', (btn)=>{
        let pushed = btn.target.innerText

            if ( pushed == 'AC' ) display.innerText = ''
            else if ( pushed == 'CE' ) display.innerText = display.innerText.slice(0,-1)
            else if ( pushed == '=' ) {
                try{
                        if (display.innerText == '') alert("Masukkan nilai terlebih dahulu")
                        else display.innerText = eval(display.innerText)
                    } catch {
                        alert('Masukkan nilai Dengan Benar')
                    }
            } else {
                if ( display.innerText == '+' || display.innerText == '-' || display.innerText == '*' || display.innerText == '/' || display.innerText == '.' ){
                    display.innerText = pushed
                } else {
                    display.innerText += pushed
                }
            }
        // console.log(display.innerText.length)
    })
})

        // switch(btn.target.innerHTML){
        //     case 'AC':
        //         display.innerHTML = ''
        //         break
        //     case 'CE':
        //         display.innerHTML = display.innerHTML.slice(0,-1)
        //         break
        //     case '=':
        //         try{
        //             if(display.innerHTML == '') alert("Masukkan angka terlebih dahulu")
        //             else display.innerHTML = eval(display.innerHTML)
        //         } catch {
        //             alert('Masukkan Nilai Dengan Benar')
        //         }
        //         break;
        //     default:
        //         if(display.innerHTML == '+' || display.innerHTML == '-'  || display.innerHTML == '*' || display.innerHTML == '/' || display.innerHTML == '.'){
        //             display.innerHTML = btn.target.innerHTML
        //         } else {
        //             display.innerHTML += btn.target.innerHTML
        //         }
        // }
