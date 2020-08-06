// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)
// Quando clicar no botão


function cloneField(){
    // Duplicar os campos. Que campo duplicar?
    const fields = document.querySelector('.schedule-item').cloneNode(true)//Clona o campo (Node se refere a elementos HTML)
                                                            // true faz a cópia de toda a div. false copia apenas a div vazia
    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(fields)


}