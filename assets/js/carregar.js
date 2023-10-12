window.addEventListener("load", () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    tarefas.forEach(tarefa=> criarCard(tarefa))
})

function criarCard(tarefa){
    const card = document.createElement("div")

    card.innerHTML = `
    
    <div class="card">
            <div class="card-content">
                    <div class="card-image">
                    <img src="/imagem/love-death-robots-cg.jpg">   
                    <span class="card-title">${tarefa.titulo}</span>
                    </div>   
                    <p>${tarefa.descricao}</p>
                    <span data-badge-caption=${tarefa.pontos} class="badge grey white-text">nota</span>
             </div>
                    <div class="card-action">
                        <a href="#" class="btn red">
                            <i class="material-icons"> delete </i>
                        </a>
                        <a href="#" class="btn green">
                            <i class="material-icons"> check </i>
                        </a>
                    </div>
                </div>
    `
    document.querySelector("#lista-tarefas").appendChild(card)
}