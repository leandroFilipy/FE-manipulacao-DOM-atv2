const btnMais = document.getElementById('mais')
const btnMenos = document.getElementById('menos')
const contador = document.getElementById('contador')
let count = 0

btnMais.addEventListener('click', () => {
    count++;
    contador.textContent = count
})

btnMenos.addEventListener('click', () => {
    count--;
    contador.textContent = count
})