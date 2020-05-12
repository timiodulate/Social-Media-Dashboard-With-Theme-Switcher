var checkbox = document.querySelector('input[name=theme]');
var mode = document.getElementById('modeText')

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
        // mode.textContent = 'Dark Mode'
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        // mode.textContent ='Light Mode'
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}