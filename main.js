const inputCard = document.querySelector('#inputCard')
const inputDate = document.querySelector('#inputDate')
const inputCVV = document.querySelector('#inputCVV')

const masknumber = '####-####-####-####'
const maskDate = '##/##'
const maskCVV = '###'

let current = ""
let cardNumber = []
let cardDate = []
let cvv = []

inputCard.addEventListener('keydown', (e)=> {
    if(e.key === 'Tab'){
        return
    }
    e.preventDefault()
    handleInput(masknumber, e.key, cardNumber)
    inputCard.value = cardNumber.join("")

})

inputDate.addEventListener('keydown', (e)=> {
    if(e.key === 'Tab'){
        return
    }
    e.preventDefault()
    handleInputDate(maskDate, e.key, cardDate)
    inputDate.value = cardDate.join("")

})

inputCVV.addEventListener('keydown', (e)=> {
    if(e.key === 'Tab'){
        return
    }
    e.preventDefault()
    handleInputCVV(maskCVV, e.key, cvv)
    inputCVV.value = cvv.join("")

})


function handleInput(mask, key , arr) {
let numbers = ["0","1","2","3","4","5","6","7","8","9"]

if (key === "Backspace" && arr.length > 0){
    arr.pop()
    return
}

if(numbers.includes(key) && arr.length + 1 <= mask.length){
 if (mask[arr.length] === "-" || mask[arr.length] === "/"){
  arr.push(mask[arr.length], key)   
 }
 else{
     arr.push(key)
 } 
}
}



function handleInputDate(mask, key , arr) {
    let numbers = ["0","1","2","3","4","5","6","7","8","9"]
    
    if (key === "Backspace" && arr.length > 0){
        arr.pop()
        return
    }
    
    if(numbers.includes(key) && arr.length + 1 <= mask.length){
     if (mask[arr.length] === "-" || mask[arr.length] === "/"){
      arr.push(mask[arr.length], key)   
     }
     else{
         arr.push(key)
     } 
    }
    }

    function handleInputCVV(mask, key , arr) {
        let numbers = ["0","1","2","3","4","5","6","7","8","9"]
        
        if (key === "Backspace" && arr.length > 0){
            arr.pop()
            return
        }
        
        if(numbers.includes(key) && arr.length + 1 <= mask.length){
         if (mask[arr.length] === "-" || mask[arr.length] === "/"){
          arr.push(mask[arr.length], key)   
         }
         else{
             arr.push(key)
         } 
        }
        }

        