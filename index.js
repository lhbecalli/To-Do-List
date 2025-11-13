const button = document.querySelector('.button')
const input = document.querySelector('.input')
const clear = document.querySelector('.clear')
const ul = document.querySelector('.list')

clear.style.display = 'none'

function atualizarBotao() {
    
    clear.style.display = ul.children.length > 0 ? 'block' : 'none'
}

function evento() {
    const value = input.value.trim();
    if(value === '') return;

    const li = document.createElement('li')
    li.innerHTML = value + ' <span class="check">V</span> <span class="delete">X</span>'

    
    ul.appendChild(li);

    
    const delet = li.querySelector('.delete')
    delet.addEventListener('click', () => {
        li.remove()
        atualizarBotao() 
    })


    const check = li.querySelector('.check')
    check.addEventListener('click', () => {
        li.classList.toggle('done')
    })

    // Limpar tudo
    clear.addEventListener('click', () => {
        ul.innerHTML = ''
        input.value = ''
        input.focus()
        atualizarBotao() 
    })

    input.value = ''
    input.focus()

    atualizarBotao() 
}


button.addEventListener('click', evento)


input.addEventListener('keydown', e => {
    if(e.key === "Enter"){
        evento()
    }
})
