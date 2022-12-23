const requestURL = "../json/listasReproduccion.json";

async function fetchPlaylistJson(){
    const response = await fetch(requestURL);
    const playlists = await response.json();
    return playlists;
}

fetchPlaylistJson().then(playlists => {
    for (let index = 0; index < playlists.listasReproduccion.length; index++)
    {
        const playlistSection = document.getElementById('playlistsSection');

        let id = playlists.listasReproduccion[index].id;
        let photo = playlists.listasReproduccion[index].foto;
        let title = playlists.listasReproduccion[index].titulo;
        let genre = playlists.listasReproduccion[index].genero;
        let author = playlists.listasReproduccion[index].autor;

        playlistSection.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${photo}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="genre">${genre}</p>
                    <p class="author">${author}</p>
                </div>
            </div>
        `
    }
})