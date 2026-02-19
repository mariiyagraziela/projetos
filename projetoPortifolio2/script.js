let barNP = document.getElementById("barNP");


barNP.addEventListener("click", function(){
  let modificarPrincipal =    document.getElementById("conteudoPrincipalModificar"); 
  modificarPrincipal.innerHTML = " ";
  let sessaocard = document.getElementById("sessao-cards").style.display="none"; 
 
  //input do titulo
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Digite o titulo da matéria"
  //textoarea com o conteudo
  const input2 = document.createElement("textarea");
  input2.type = "text";
  input2.setAttribute("placeholder","valor");

  input.classList.add("estilo-input");// adicionado css aos input
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
  
  botaoSalvar.addEventListener("click", salvarpublicacao);
  function salvarpublicacao(){
      const titulo = input.value;
      const conteudo = input2.value;
      const conteudoAbreviado = conteudo.slice(0,50) + "...";
      const construindoCards = document.getElementById("sessao-cards");
      
      
      const novoCard = document.createElement("div");
      novoCard.innerHTML = titulo + "<br>" + conteudoAbreviado ;
      
      construindoCards.append(novoCard);
  }
  botaoSair.addEventListener("click", sairDoPlublicar);
  function sairDoPlublicar(){
      
  }


});

// classList.remove/add/touggle, setAttribute("atributo","valor")
