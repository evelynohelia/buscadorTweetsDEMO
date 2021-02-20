const json_request  = async() => {
  const json_url = 'https://dataserverdaw.herokuapp.com/twitter/';
  const resp = await fetch(json_url);
  const json = await resp.json();
  var tweets = json.tweets;
  var contenedor = document.getElementById('contenido');
  var contador = 0;

  tweets.forEach(tweet => {
      let box = document.createElement("div");
      let row = document.createElement("row");
      let column1 = document.createElement("column");
      let column2 = document.createElement("column");
      let detalle= document.createElement('div');
      let img = document.createElement("img");
      let name= document.createElement('h2');
      let user_detail = document.createElement('div');
      let user_nick = document.createElement('span');
      let user_flows = document.createElement('span');
      let user_tweets = document.createElement('span');
      let text = document.createElement('p');
      let fecha = document.createElement('div');
      let c_boton=document.createElement('div');
      let boton = document.createElement('button');
           
      img.src=tweet.picture;
      column1.appendChild(img);
      img.id="foto";

      name.innerHTML = tweet.name;
      detalle.appendChild(name);
      name.id="nombre";

      user_nick.innerHTML= tweet.user;
      user_detail.appendChild(user_nick);
      user_nick.id="user";

      user_tweets.innerHTML= tweet.tweets;
      user_tweets.textContent+=" tweets";
      user_detail.appendChild(user_tweets);
      user_tweets.id="num_tweets";
      
      user_flows.innerHTML= tweet.followers;
      user_flows.textContent+=" followers";
      user_detail.appendChild(user_flows);
      user_flows.id="followers";

      detalle.appendChild(user_detail);
      user_detail.id="detalle_usuario";

      text.innerHTML = tweet.text;
      detalle.appendChild(text);
      text.id="texto";
            
      fecha.innerHTML = tweet.tweeted.split('T')[0];
      detalle.appendChild(fecha);
      fecha.id="fecha";
      
      column2.appendChild (detalle);

      row.appendChild(column1);
      row.appendChild(column2);
      box.appendChild(row);
      
      let seguir = 'seguir'
      boton.textContent = seguir
      c_boton.appendChild(boton)
      box.appendChild(c_boton);
      c_boton.id="seguir";
      
      box.className="tweet";
      box.id="tweet"+ contador;
      if(contador<10){
      contenedor.appendChild(box);
      }

      
      
      contador++;

    });
    contenedor.className=("tweets");
}

function filtrar() {
  let input = document.getElementById("myInput");
  input.onkeyup= () =>{
    
    let entrada = document.getElementById("myInput");
    let filtro= entrada.value.toUpperCase();
    console.log(filtro);

    let tweet=document.querySelector(".tweets");
    let textos=tweet.getElementsByTagName("p");
    let array= Array.from(textos);
    
    for (i = 0; i < textos.length; i++) {
      let txtValue = textos[i].textContent;
      console.log(txtValue);
      let tw= document.getElementById("tweet"+i);
      if ((txtValue.toUpperCase().includes(filtro))) {        
         tw.style.display = "";      
      }
      else{
        tw.style.display = "none";      
      }

    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
    json_request();
    filtrar();
})

