const button = document.querySelector('.button')
const input = document.querySelector('.input')


function evento(){
    const value = input.value.trim();
    if(value===''){
        return;
    }

    const ul = document.querySelector('.list')
    const li = document.createElement('li')

    li.innerHTML = value + '<span class="check">V</span> <span class="delete">X</span>'
    
/* Deletar os valores */
    ul.appendChild(li);
    const delet = li.querySelector('.delete')

delet.addEventListener('click', ()=>{
    li.remove()
})

/* Check nos valores */
    const check = li.querySelector('.check');
check.addEventListener('click', ()=>{
    li.classList.toggle('done')
    })

}

/* Adicionar tarefa */
button.addEventListener('click', evento)


/* Ao pressionar Enter, registra a tarefa */
input.addEventListener('keydown', e =>{

    if(e.key === "Enter"){
        evento()
    }
})