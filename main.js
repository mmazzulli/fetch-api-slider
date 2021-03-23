// ------------------------------------------

 
const showData = function(resultado) { 

      var html = [];
      var titulo = [];
      var descricao = [];
      var imagem = [];
      var num = 0;
      var desc = "";
      var tit = "";

    JSON.parse(resultado).forEach( function (registro){

      num++;
      
        imagem[num] = registro._embedded["wp:featuredmedia"]["0"].source_url;
        descricao[num] = registro.content.rendered;
        titulo[num] = registro.title.rendered;


    const tit = document.querySelector('#caption' + [num] );
    const desc = document.querySelector('#conteudo' + [num] );
    const sld = document.querySelector('#slide' + [num] );

    // Change the text of one element
    tit.textContent = titulo[num];
    desc.textContent = descricao[num].substr(1,150);
    sld.setAttribute('style', 'background-image: url(' + imagem[num] + ')');

      // console.log(imagem[num]);
 
    })

}

// --------------------------------------------------------
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const url = 'https://despertasaude.pt/wp-json/wp/v2/posts?_embed';

// fetch( `http://127.0.0.1/100pavor/wp-json/wp/v2/posts`, options)

fetch( url, options)
.then(resposta => {resposta.json()  
    .then ( converte => JSON.stringify(converte))
    .then( dados => showData(dados))
})
    .catch(e => console.log('Deu erro' + e.message))
