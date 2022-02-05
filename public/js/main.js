window.onload = () => {
    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);
  
    if(localStorage.getItem('favs') !== null) {
      const favoritas = document.getElementById("favorites");
      favoritas.innerHTML = '<a href="/favorites">Ir a Favoritos</a>';
  }
  
    // Aqui debemos agregar nuestro fetch
  
    let url = "http://localhost:3031/api/movies";
      fetch(url)
          .then(response => response.json())
          .then(peliculas => {
            let data = peliculas.data;
            console.log(data)
  
      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");
  
        const h1 = document.createElement("h1");
        h1.textContent = movie.title;
  
        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;
  
        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;
  
        const favs = document.createElement('span');
        favs.innerHTML = '<i class="fas fa-star"></i>'
        favs.addEventListener('click', function(e){
          e.preventDefault()
          if(localStorage.favs){
            let favsList = localStorage.favs.split(',');
            favsList.push(movie.id)
            localStorage.favs = favsList;
            console.log(localStorage.favs)
          } else {
            localStorage.setItem('favs', movie.id)
          }
        })
  
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Género: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
        card.appendChild(favs);
      });
  
    })
  };
  