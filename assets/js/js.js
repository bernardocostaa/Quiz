let cadaQuestao = 0
let contAcerto = 0

mostrarQuestoes()



function mostrarQuestoes(){
  const btnGame = document.querySelector('.js-btn')
  btnGame.addEventListener('click',()=>{
    const caixa = document.querySelector('.js-remove')
    caixa.classList.add('d-none')
  })
  
  if(questoes[cadaQuestao]){
    let q = questoes[cadaQuestao]
    
    const tituloQuestao = document.querySelector('.title-questao')
    const numeroQ = document.querySelector('.numero-q')
    tituloQuestao.innerHTML = q.questao
    numeroQ.innerHTML = `${cadaQuestao + 1}/5`
    
    let htmlOption = ''
    q.opicao.forEach((item, index)=>{
      htmlOption += `<div data-op="${index}" class="opcao fw-bold d-flex align-items-center borda-baixo">
      <span data-op="${index}" class="bg-dark rounded-5 text-white tamanho-bola">${index + 1}</span>
      ${item}
      </div>`
    })
    document.querySelector('.modal-body').innerHTML = htmlOption
    const todasQ = document.querySelectorAll('.modal-body .opcao')
    todasQ.forEach((q)=>{
      q.addEventListener('click',opcaoClique)
    })
  }else{
    resultadoQuiz()
  }
  
  function opcaoClique(e){
    let cliqueEvent = +e.target.getAttribute('data-op')
    console.log(cliqueEvent);
    if(cliqueEvent === questoes[cadaQuestao].respCorreta){

      contAcerto++
    }
    console.log(questoes[cadaQuestao].respCorreta);
    console.log(cliqueEvent);
    cadaQuestao++
    mostrarQuestoes()
  }
}

function resultadoQuiz(){
  document.querySelector('.js-modal').style.display='none'
  let htmlCont = ''
  htmlCont = ` <div class="d-flex flex-column align-items-center mx-3 porcima">
  <div class="bg-quiz rounded-5 max-w">
  <div class="text-center p-3 ajuste-modal flex-column gap-2">
  <p class="font-size mb-2 text-success">Parabéns, você terminou o quiz sua pontuação foi:</p>
  <span class="bg-primary rounded-5 text-white p-2 fs-4 numero-q">${contAcerto}/5</span>
  </div>
  </div>
  </div>`
  document.querySelector('.js-remove').innerHTML = htmlCont
  const caixa = document.querySelector('.js-remove')
  caixa.classList.remove('d-none')
}
