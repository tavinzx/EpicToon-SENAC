document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const tarefa = {
        id: Date.now() ,        
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricao").value,
        pontos: document.querySelector("#pontos").value,
        concluida: false
    }
    
    tarefas.push(tarefa)

    localStorage.setItem("tarefas", JSON.stringify( tarefas ))

    window.location.href = "Index.html"
    calcularEstatisticas()
})      