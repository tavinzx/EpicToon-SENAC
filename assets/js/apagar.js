const botoes = document.querySelectorAll(".btn-apagar")
function apagar(id) {
    console.log("apagar tarefa", id)
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)
    localStorage.setItem("tarefas", JSON.stringify(tarefas_filtradas))
    atualizar()

    calcularEstatisticas()
}
console.log(botoes)
