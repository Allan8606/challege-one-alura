const inputNomeAmigo = document.querySelector("#amigo");
const nomeAmigosAdd = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");

let listaAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    if (inputNomeAmigo.value === "") {
        // Caso o campo esteja vazio
        alert("Digite um nome!");
    } else {
        // Caso o campo esteja preenchido
        // adiciona o amigo na lista e coloca na tela
        if (listaAmigos.includes(inputNomeAmigo.value)) {
            alert("Esse amigo ja foi adicionado!");
            limparCampos();
        } else {
            nomeAmigosAdd.innerHTML += `<li>${inputNomeAmigo.value}</li>`;
            listaAmigos.push(inputNomeAmigo.value);
        }
    }

    limparCampos();
}

// Função para sortear amigo
function sortearAmigo() {
    const qntAmigos = listaAmigos.length;
    // Escolhendo um item de forma aleatoria
    const indiceEscolhido = parseInt(Math.random() * listaAmigos.length);
    const amigoEscolhido = listaAmigos[indiceEscolhido];
    

    //Exibindo na tela
  
        if (qntAmigos === 0) {
            alert("Nenhum amigo foi adicionado!");
            resultado.innerHTML = "";
       
        } else {
          
                nomeAmigosAdd.innerHTML = "";
                resultado.innerHTML = `O amigo secreto sorteado é: <li>${amigoEscolhido}</li>`;
                console.log(listaAmigos);
                //Remove o amigo, para que não seja sorteado novamente
                listaAmigos.splice(indiceEscolhido, 1);
         
        }
    
}

//Função que limpa os campos toda vez que for adicionar um amigo
function limparCampos() {
    inputNomeAmigo.value = "";
}
