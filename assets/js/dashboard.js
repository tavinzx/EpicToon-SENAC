
function calcularEstatisticas(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    const pendentes = tarefas.filter(t => t.concluida == false)
    const qtdePendente = pendentes.length 
    console.log(qtdePendente)
    document.querySelector("#qtde-pendente").innerHTML = qtdePendente

    const concluidas = tarefas.filter(t => t.concluida == true)
    const qtdeConcluida = concluidas.length 
    document.querySelector("#qtde-concluida").innerHTML = qtdeConcluida

    const totalNotas = tarefas.reduce((total,t) => total += +t.pontos, 0)
    document.querySelector("#total-notas").innerHTML = totalNotas
    
}
calcularEstatisticas()