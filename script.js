// document.addEventListener('DOMContentLoaded', loadFunction)
let typewriter = document.getElementById('typewriter')
let cursor = document.querySelector('.cursor')
let typeDelay = 100
let eraseDelay = 70
let textNewDelay = 2000
let charIndex = 0
let arrayIndex = 0

let occupation = ['Graphic Designer','Web Developer','Web Designer','Video Editor']

    function type() {
        if (charIndex < occupation[arrayIndex].length ) {
            if(!cursor.classList.contains('noblink')){
                cursor.classList.add('noblink')
            }
            typewriter.textContent += occupation[arrayIndex].charAt(charIndex)
            charIndex++
            setTimeout( type , typeDelay)
        }
        else{         
                cursor.classList.remove('noblink')
                setTimeout( erase , textNewDelay )
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursor.classList.contains('noblink')){
                cursor.classList.add('noblink')
            }
            typewriter.textContent = occupation[arrayIndex].substring(0,charIndex-1)
            charIndex--
            setTimeout( erase , eraseDelay)
        }
        else{
            cursor.classList.remove('noblink')
            arrayIndex++
            if (arrayIndex === occupation.length) {
                arrayIndex = 0
            }
            setTimeout( type , typeDelay + 100 )
        }
    }


    document.addEventListener('DOMContentLoaded',()=>{
        setTimeout( type , 3000)  
    })