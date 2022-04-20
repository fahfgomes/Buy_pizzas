/*
        Projeto totalmente desenvolvido de forma acadêmica
        Projeto de autoria do curso B&WEB - JAVASCRIPT
        Sistema de compra de pizzas

        Autor do script.js - Fabricio Freitas - github: fahfgomes
        Autor dos demais arquivos: B7WEB
*/ 
/*
        Armazenando em uma constante os dados que serão recebidos pela arrow function,
        para que o código fique mais limpo, assim chamamos a função c, recebemos os dados necessários
        e retornamos o o documento html relacionado ao dado que foi fornecido
*/
const s = (el)=>document.querySelector(el);
const sall = (el)=>document.querySelectorAll(el);

    
pizzaJson.map((item, index)=>{

    //clonando todo o conteúdo que possuimos de modelo, para prencher posteriormente

    let pizzaItem = s('.models .pizza-item').cloneNode(true);
    pizzaItem.setAttribute('data-key', index);
    /*
    preencher as informações em pizza item
    utilizar o "append" pois ele adiciona o item
    o innerHTML neste caso iria substituir os itens, e não seria o que a gente gostaria no momento
    pois teremos mais de uma pizza no catálogo*/

    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
 
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        s('.pizzaBig img').src = pizzaJson[key].img;
        s('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        s('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        s('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        sall('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        
        /*
        Após clicar na pizza retiramos o evento padrão dele com - e.preventDefault();
        e adicionamos uma animação para que o modal de compra seja aberto
        */
        s('.pizzaWindowArea').style.opacity = 0;
        s('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            s('.pizzaWindowArea').style.opacity = 1;
        }, 250);
        
        

    })
        
    s('.pizza-area').append(pizzaItem);
})