
const catalogo = 
[
 //IMAGEM,TIPO DO PRODUTO, NOME DO PRODUTO, DESCRIÇÃO E PREÇO

 ["Fotos/Blackwork (1).jpg","BlackWork","Blackwork#0001","Desenho digital ao estilo blackwork",150],
 ["Fotos/Mandala (1).jpg","Mandala","Mandala#0001","Desenho digital ao estilo Mandala",160],
 ["Fotos/Oldschool (1).jpg","Oldschool","Oldschool#0001","Desenho digital ao estilo Oldschool",120],
 ["Fotos/Blackwork (2).jpg","BlackWork","Blackwork#0002","Desenho digital ao estilo blackwork",150],
 ["Fotos/Mandala (2).jpg","Mandala","Mandala#0002","Desenho digital ao estilo Mandala",180],
 ["Fotos/Oldschool (2).jpg","Oldschool","Oldschool#0002","Desenho digital ao estilo Oldschool",150],
 ["Fotos/Blackwork (3).jpg","BlackWork","Blackwork#0003","Desenho digital ao estilo blackwork",130],
 ["Fotos/Mandala (3).jpg","Mandala","Mandala#0003","Desenho digital ao estilo Mandala",120],
 ["Fotos/Oldschool (3).jpg","Oldschool","Oldschool#0003","Desenho digital ao estilo Oldschool",100],
 
]



const TodosButton =  document.getElementById("buttonNav1");
const BlackWorkButton = document.getElementById("buttonNav2");
const MandalaButton = document.getElementById("buttonNav3");
const OldschoolButton = document.getElementById("buttonNav4");
const buttonPesquisar = document.getElementById("buttonPesquisar");
const barraPesquisa = document.getElementById("barraPesquisa");
const exposicao = document.getElementById("exposicao");
const carrinho = document.getElementById("carrinho");
const carrinhoVazio = document.getElementById("carrinhoVazio");
const itemBoxCarrinho = document.getElementById("itemboxcarrinho");
const totalquantidade = document.getElementById("totalquantidade");
const totalpreco = document.getElementById("totalpreco");




function vitrine(){
  
  for( i = 0; i < catalogo.length; i++ ){
    
      let containerProduto = document.createElement("div");
      containerProduto.setAttribute("class", "containerProduto");
      
      
      let img = document.createElement("img");
      img.setAttribute('src', catalogo[i][0]); 
      img.setAttribute('class', 'productImg') ;
      img.setAttribute('alt', catalogo[i][2]);
     
      let product= document.createElement("div");
      product.setAttribute("class", "product");
     
      let tipo = document.createElement("h4");
       tipo.setAttribute('class', 'tipo');
       tipo.innerText = catalogo[i][1];
     
      let nome = document.createElement("h2");
      nome.innerText = catalogo[i][2];
      nome.setAttribute('class', 'nome');
     
      let descricao = document.createElement("span");
      descricao.innerText = catalogo[i][3];
      descricao.setAttribute('class', 'descricao');
     
      let preco = document.createElement("h3");
      preco.innerText =  "R$ " +catalogo[i][4] + ",00";
      preco.setAttribute('class', 'preco');
     
      let addbutton = document.createElement("button");
      addbutton.innerText = "Adicionar Ao Carrinho";
      addbutton.setAttribute("class", "adicionar");

      addbutton.addEventListener("click", () => {
        createItemChart(img.src,nome.innerText,preco.innerText);

      })

     
        containerProduto.appendChild(img);
        product.appendChild(tipo);
        product.appendChild(nome);
        product.appendChild(descricao);
        product.appendChild(preco);
        product.appendChild(addbutton)
        containerProduto.appendChild(product);
        exposicao.appendChild(containerProduto);

        
        
  }
  

}


function vitrineByFilter(text){
    for( i = 0; i < catalogo.length; i++ ){ 
       if (catalogo[i][1] === text){
        let containerProduto = document.createElement("div");
        containerProduto.setAttribute("class", "containerProduto");
        
        
        let img = document.createElement("img");
        img.setAttribute('src', catalogo[i][0]); 
        img.setAttribute('class', 'productImg') ;
        img.setAttribute('alt', catalogo[i][2]);
       
        let product= document.createElement("div");
        product.setAttribute("class", "product");
       
        let tipo = document.createElement("h4");
         tipo.setAttribute('class', 'tipo');
         tipo.innerText = catalogo[i][1];
       
        let nome = document.createElement("h2");
        nome.innerText = catalogo[i][2];
        nome.setAttribute('class', 'nome');
       
        let descricao = document.createElement("span");
        descricao.innerText = catalogo[i][3];
        descricao.setAttribute('class', 'descricao');
       
        let preco = document.createElement("h3");
        preco.innerText = "R$ " + catalogo[i][4] + ",00";
        preco.setAttribute('class', 'preco');
       
        let addbutton = document.createElement("button");
        addbutton.innerText = "Adicionar Ao Carrinho";
        addbutton.setAttribute("class", "adicionar");

        addbutton.addEventListener("click", () => {
          createItemChart(img.src,nome.innerText,preco.innerText);
  
        })
       
          containerProduto.appendChild(img);
          product.appendChild(tipo);
          product.appendChild(nome);
          product.appendChild(descricao);
          product.appendChild(preco);
          product.appendChild(addbutton)
          containerProduto.appendChild(product);
          exposicao.appendChild(containerProduto);
  
         }
    }
}


function vitrineBySearch(){
  
  for (let i = 0; i < catalogo.length; i++) {
    if ((catalogo[i][2]).toLowerCase().includes(barraPesquisa.value)) {
          let containerProduto = document.createElement("div");
          containerProduto.setAttribute("class", "containerProduto");
          
          
          let img = document.createElement("img");
          img.setAttribute('src', catalogo[i][0]); 
          img.setAttribute('class', 'productImg') ;
          img.setAttribute('alt', catalogo[i][2]);
         
          let product= document.createElement("div");
          product.setAttribute("class", "product");
         
          let tipo = document.createElement("h4");
           tipo.setAttribute('class', 'tipo');
           tipo.innerText = catalogo[i][1];
         
          let nome = document.createElement("h2");
          nome.innerText = catalogo[i][2];
          nome.setAttribute('class', 'nome');
         
          let descricao = document.createElement("span");
          descricao.innerText = catalogo[i][3];
          descricao.setAttribute('class', 'descricao');
         
          let preco = document.createElement("h3");
          preco.innerText = "R$ " + catalogo[i][4] + ",00";
          preco.setAttribute('class', 'preco');
         
          let addbutton = document.createElement("button");
          addbutton.innerText = "Adicionar Ao Carrinho";
          addbutton.setAttribute("class", "adicionar");
  
          addbutton.addEventListener("click", () => {
            createItemChart(img.src,nome.innerText,preco.innerText);
    
          })
         
            containerProduto.appendChild(img);
            product.appendChild(tipo);
            product.appendChild(nome);
            product.appendChild(descricao);
            product.appendChild(preco);
            product.appendChild(addbutton)
            containerProduto.appendChild(product);
            exposicao.appendChild(containerProduto);
    }
 }
}





  
let quantidade = 0;
let precototal = 0;

function createItemChart(img,name,price){ 
      carrinhoVazio.innerHTML = '';
      
   let itemNoCarrinho = document.createElement("div");
      itemNoCarrinho.setAttribute("class", "itemCarrinho");
   let figureCarrinho = document.createElement("div");
      figureCarrinho.setAttribute("class", "imgBoxCarrinho");
   let imgCarrinho =  document.createElement("img");
     imgCarrinho.setAttribute('src', img); 
     imgCarrinho.setAttribute('alt', name);
   let infosItemCarrinho = document.createElement("div");
     infosItemCarrinho.setAttribute("class", "infosItemCarrinho");
   let nomeItemCarrinho = document.createElement("p");
     nomeItemCarrinho.innerText = name;
     nomeItemCarrinho.setAttribute("class", "nomeItemCarrinho");
   let valorItemCarrinho = document.createElement("span");
     valorItemCarrinho.innerText = price ;
     valorItemCarrinho.setAttribute("class", "valorItemCarrinho");
   let removerItemCarrinho = document.createElement("button");
     removerItemCarrinho.innerText = "Remover produto";
     removerItemCarrinho.setAttribute("class", "removerItemCarrinho");

   removerItemCarrinho.addEventListener("click", () => {
     REMOVEquantidadePrecoProdutos(price);
     itemBoxCarrinho.removeChild(itemNoCarrinho);
      
     if(itemBoxCarrinho.childElementCount === 0){
        let empty = document.createElement("h3");
        empty.innerText = "Carrinho Vazio";
        empty.setAttribute("id", "empty");
        let addcart = document.createElement("button");
        addcart.innerText = "Adicionar Item";
        addcart.setAttribute("id", "addToCart");

        carrinhoVazio.appendChild(empty);
        carrinhoVazio.appendChild(addcart);
      }
    })
  
   figureCarrinho.appendChild(imgCarrinho);
   infosItemCarrinho.appendChild(nomeItemCarrinho);
   infosItemCarrinho.appendChild(valorItemCarrinho);
   infosItemCarrinho.appendChild(removerItemCarrinho);
  
  
   itemNoCarrinho.appendChild(figureCarrinho);
   itemNoCarrinho.appendChild(infosItemCarrinho);
   itemBoxCarrinho.appendChild(itemNoCarrinho);

  quantidadePrecoProdutos(price); 
}


function quantidadePrecoProdutos(price){
  quantidade += 1;
  totalquantidade.innerText = quantidade;

  let replace = price.replace(/[,]/g," ");
  let split = replace.split(" ");
  let splice = split.splice(1, 1);
  let stringtonumber = Number(splice)
  precototal += stringtonumber;
  totalpreco.innerText = "R$ " + precototal + ",00"
}


function REMOVEquantidadePrecoProdutos(price){
  quantidade -= 1;
  totalquantidade.innerText = quantidade;

  let replace = price.replace(/[,]/g," ");
  let split = replace.split(" ");
  let splice = split.splice(1, 1);
  let stringtonumber = Number(splice);
  precototal -= stringtonumber;
  totalpreco.innerText = "R$ " + precototal + ",00";
}


  
  


TodosButton.addEventListener("click", () => {
  exposicao.innerHTML = ''
  TodosButton.style.color = "#333333"
  TodosButton.style.fontWeight = 800;
  MandalaButton.style.color = "#828282"
  MandalaButton.style.fontWeight = 400;
  OldschoolButton.style.color = "#828282"
  OldschoolButton.style.fontWeight = 400;
  BlackWorkButton.style.color = "#828282"
  BlackWorkButton.style.fontWeight = 400;


  vitrine();

})

window.onload = TodosButton.click();



BlackWorkButton.addEventListener("click", () => {
 exposicao.innerHTML = ''
 TodosButton.style.color = "#828282"
 TodosButton.style.fontWeight = 400;
 MandalaButton.style.color = "#828282"
 MandalaButton.style.fontWeight = 400;
 OldschoolButton.style.color = "#828282"
 OldschoolButton.style.fontWeight = 400;
 BlackWorkButton.style.color = "#333333"
 BlackWorkButton.style.fontWeight = 800;
 vitrineByFilter("BlackWork");

})

MandalaButton.addEventListener("click", () => {
  exposicao.innerHTML = ''
  TodosButton.style.color = "#828282"
  TodosButton.style.fontWeight = 400;
  MandalaButton.style.color = "#333333"
  MandalaButton.style.fontWeight = 800;
  OldschoolButton.style.color = "#828282"
  OldschoolButton.style.fontWeight = 400;
  BlackWorkButton.style.color = "#828282"
  BlackWorkButton.style.fontWeight = 400;
  vitrineByFilter("Mandala");
 })


 OldschoolButton.addEventListener("click", () => {
  exposicao.innerHTML = ''
  TodosButton.style.color = "#828282"
  TodosButton.style.fontWeight = 400;
  MandalaButton.style.color = "#828282"
  MandalaButton.style.fontWeight = 400;
  OldschoolButton.style.color = "#333333"
  OldschoolButton.style.fontWeight = 800;
  BlackWorkButton.style.color = "#828282"
  BlackWorkButton.style.fontWeight = 400;
  vitrineByFilter("Oldschool");
 })


 buttonPesquisar.addEventListener("click", () => {
  exposicao.innerHTML = '';
  vitrineBySearch();
  barraPesquisa.value = ""

})
