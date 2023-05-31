let display = document.getElementById('screen')

// to clear data
const wipe = () => {
    display.value = ""
}

// to display input
const show = (n) => {
    display.value += n
   
}


// calculate result
const calc = () => {
    display.value = eval(display.value)
}
