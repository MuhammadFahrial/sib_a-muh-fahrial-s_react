this == window //true
function changeColor(){
    this.document.body.style.backgroundColor = '#bada55a'
    this === window
}

$('.button').click((e,t) => {
    this.style.backgroundColor = 'papayawhip' // this === button(s)
})

let counter = {
    val: 0,
    increment: function(){
        this.val += 1
    }
}