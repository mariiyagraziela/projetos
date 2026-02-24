let barNP = document.getElementById("barNP");

//Função de NOVA PUBLICAÇÃO
let telaAberta = false;
barNP.addEventListener("click", function(){
  if(telaAberta) return;
  telaAberta = true;
  let modificarPrincipal =    document.getElementById("conteudoPrincipalModificar"); 

  let conteudoECards = document.getElementById("conteudoCards").style.display="none"; 
  
 
  //input do titulo
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Digite o titulo da matéria"

  //textoarea com o conteudo
  const input2 = document.createElement("textarea");
  input2.type = "text";
  input2.setAttribute("placeholder","valor");

  //adicionado css aos input
  input.classList.add("estilo-input");
  input2.classList.add("estilo-input2");

  const botoes = document.createElement("div");
  botoes.setAttribute("id","estilo-botao");

  //Botões de Salvar e sair 
  const botaoSalvar = document.createElement("button");
  botaoSalvar.textContent = "Salvar"; 
  const botaoSair = document.createElement("button");
  botaoSair.textContent = "Sair";
        
  botoes.append(botaoSalvar);
  botoes.append(botaoSair);

  modificarPrincipal.append(input);
  modificarPrincipal.append(input2);
  modificarPrincipal.appendChild(botoes);

  //Adicionando funcionalidades para os botões de Salvar e Sair
  
  //Uma função
  botaoSalvar.addEventListener("click", salvarpublicacao);
  function salvarpublicacao(){
      const titulo = input.value;
      const conteudo = input2.value;
      const conteudoAbreviado = conteudo.slice(0,50) + "...";
      const construindoCards = document.getElementById("sessao-cards");
      
      console.log(titulo);
      const novoCard = document.createElement("div");
      novoCard.innerHTML = titulo + "<br>" + conteudoAbreviado;
      novoCard.classList.add("card");

      novoCard.dataset.titulos = titulo;
      novoCard.dataset.conteudos = conteudo;
      construindoCards.append(novoCard);
  
      
  }

  //Outra função
  botaoSair.addEventListener("click", sairDoPlublicar);
  function sairDoPlublicar(){
      telaAberta = false;
      let conteudoECards = document.getElementById("conteudoCards").style.display="block";   
       

    input.style.display="none"; 
    input2.style.display="none"; 
    botoes.style.display="none"; 
  }


});
const cards = document.getElementById("sessao-cards");

cards.addEventListener("click", conteudoDentroDoCard);
function conteudoDentroDoCard(event){

    if(event.target.classList.contains("card")){
        const cardClicado = event.target;
    
        const tituloDentroDoCard = cardClicado.dataset.titulos;
        const conteudoDentroDoCard = cardClicado.dataset.conteudos;

    
        const conteudoTexto = document.getElementById("coteudoPrincipal");
        conteudoTexto.innerHTML = "<h1>" + tituloDentroDoCard + "</h1>" + "<p>" + conteudoDentroDoCard + "</p>";
    console.log(tituloDentroDoCard);
    } 
}


//Configuração de cards

// classList.remove/add/touggle, setAttribute("atributo","valor")
