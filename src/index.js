//solution goes here

document.addEventListener('DOMContentLoaded', init)

function init(){
    getTrainers()
}

function getTrainers(){
    fetch('http://localhost:3000/trainers')
    .then(res => res.json())
    .then(json => json.forEach(showTrainer))
}

function showTrainer(trainer){
    let main = document.getElementsByTagName('main')[0]
    let div = document.createElement('div')
    let p = document.createElement('p')
    let addBtn = document.createElement('button')
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    let relBtn = document.createElement('button')

    div.classList.add('card')
    addBtn.classList.add('release')

    addBtn.setAttribute('id', `add-poke-${trainer.id}`)
    relBtn.setAttribute('id', `rel-poke-${trainer.id}`)
    div.setAttribute('id', `card-${trainer.id}`)

    p.innerText = trainer.name
    addBtn.innerText = 'Add Pokemon'
    relBtn.innerText = 'Release'
    // li.innerText = 

        // for (let i = 0; i < list.length; i++) {
    
        //     let li = document.createElement('li');
        //     li.id = list[i].id
        // }
    main.appendChild(div)
    div.append(p, ul, addBtn)
    ul.append(relBtn, li)
    
    // addBtn.addEventListener('click', postPokemon)
}

// function postPokemon(){

//     let data = {
//         name:
//         pokemons:
//     }

//     fetch('http://localhost:3000/trainers', {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         }
//     }).then(res => res.json())
//         .then(poke => {
//             showTrainer(poke)
//             // document.getElementById('poke-form').reset()
//       })
// }