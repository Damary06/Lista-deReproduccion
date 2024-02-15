document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "Damy" && email === "Damary@prueba.com" && password === "damary1106") {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("playerContainer").style.display = "block";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});


let playlist = [
    {
        name: "Bad Bunny - Where She Goes",
        url: "assets/canciones/Bad Bunny - Where She Goes.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "3:51",
        genre: "Latin",
        cover: "assets/imagenes/caratula.jpg"
    },
    {
        name: "Miranda! - Don (Video Oficial) (128 kbps)",
        url: "assets/canciones/Miranda! - Don (Video Oficial) (128 kbps).mp3",
        artist: "Miranda",
        year: "2004",
        duration: "3:08",
        genre: "Pop",
        cover: "assets/imagenes/caratula1.jpg"
    },
    {
        name: "Rammstein - Engel (Official Video) (128 kbps)",
        url: "assets/canciones/Rammstein - Engel (Official Video) (128 kbps).mp3",
        artist: "Rammstein",
        year: "1997",
        duration: "4:25",
        genre: "heavy metal",
        cover: "assets/imagenes/engel.jpg"
    },
    {
        name: "01 - Abrázame",
        url: "assets/canciones/01 - Abrázame.mp3",
        artist: "camila",
        year: "2006",
        duration: "3:50",
        genre: "Latin Pop",
        cover: "assets/imagenes/cover.jpg"
    },
    {
        name: "Bad Bunny - Nadie Sabe",
        url: "assets/canciones/Bad Bunny - Nadie Sabe.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "6:16",
        genre: "latin",
        cover: "assets/imagenes/caratula3.jpg"
    },
    {
        name: "Bad Bunny - Un Preview",
        url: "assets/canciones/Bad Bunny - Un Preview.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "2:45",
        genre: "latin",
        cover: "assets/imagenes/caratula4.jpg"
    },
    {
        name: "02 - Me Basto",
        url: "assets/canciones/02 - Me Basto.mp3",
        artist: "Camila",
        year: "2006",
        duration: "3:12",
        genre: "Latin-Pop",
        cover: "assets/imagenes/cover.jpg"
    },
    {
        name: "Bad Bunny - Monaco",
        url: "assets/canciones/Bad Bunny - Monaco.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "4:27",
        genre: "latin",
        cover: "assets/imagenes/caratula5.jpg"
    },
    {
        name: "03 - Todo Cambió",
        url: "assets/canciones/03 - Todo Cambió.mp3",
        artist: "Camila",
        year: "2006",
        duration: "3:13",
        genre: "Latin-Pop",
        cover: "assets/imagenes/cover.jpg"
    },
    {
        name: "Bad Bunny ft Young Miko ft Tego Calderón - Fina",
        url: "assets/canciones/Bad Bunny ft Young Miko ft Tego Calderón - Fina.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "3:36",
        genre: "latin",
        cover: "assets/imagenes/caratula6.jpg"
    },
    {
        name: "04 - Coleccionista De Canciones",
        url: "assets/canciones/04 - Coleccionista De Canciones.mp3",
        artist: "Camila",
        year: "2006",
        duration: "5:07",
        genre: "Pop",
        cover: "assets/imagenes/cover.jpg"
    },
    {
        name: "Bad Bunny ft Mora - Hibiki-1",
        url: "assets/canciones/Bad Bunny ft Mora - Hibiki-1.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "3:28",
        genre: "latin",
        cover: "assets/imagenes/caratula7.jpg"
    },
    {
        name: "Bad Bunny - Mr. October",
        url: "assets/canciones/Bad Bunny - Mr. October.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "3:09",
        genre: "latin",
        cover: "assets/imagenes/caratula8.jpg"
    },
    {
        name: "Bad Bunny - Cybertruck",
        url: "assets/canciones/Bad Bunny - Cybertruck.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "3:12",
        genre: "latin",
        cover: "assets/imagenes/caratula9.jpg"
    },
    {
        name: "Bad Bunny - Vou 787",
        url: "assets/canciones/Bad Bunny - Vou 787.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "2:03",
        genre: "latin",
        cover: "assets/imagenes/caratula10.jpg"
    },
    {
        name: "Bad Bunny ft Bryant Myers - Seda",
        url: "assets/canciones/Bad Bunny ft Bryant Myers - Seda.mp3",
        artist: "Bad Bunny ft Bryant Myers",
        year: "2023",
        duration: "3:10",
        genre: "latin",
        cover: "assets/imagenes/caratula11.jpg"
    },
    {
        name: "Bad Bunny - Gracias por Nada",
        url: "assets/canciones/Bad Bunny - Gracias por Nada.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "2:57",
        genre: "latin",
        cover: "assets/imagenes/caratula12.jpg"
    },
        {
        name: "Bad Bunny ft Luar La L - Teléfono Nuevo",
        url: "assets/canciones/Bad Bunny ft Luar La L - Teléfono Nuevo.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "5:54",
        genre: "latin",
        cover: "assets/imagenes/caratula13.jpg"
    },
    {
        name: "Bad Bunny - Baby Nueva",
        url: "assets/canciones/Bad Bunny - Baby Nueva.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "4:00",
        genre: "latin",
        cover: "assets/imagenes/caratula14.jpg"
    },
    {
        name: "Bad Bunny ft YOVNGCHIMI - Mercedes Carota",
        url: "assets/canciones/Bad Bunny ft YOVNGCHIMI - Mercedes Carota.mp3",
        artist: "Bad Bunny ft YOVNGCHIMI",
        year: "2023",
        duration: "3:22",
        genre: "latin",
        cover: "assets/imagenes/caratula2.jpg"
    },
    {
        name: "Bad Bunny - Los Pits",
        url: "assets/canciones/Bad Bunny - Los Pits.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "4:10",
        genre: "latin",
        cover: "assets/imagenes/caratula3.jpg"
    },
    {
        name: "Bad Bunny - Vuelve Candy B",
        url: "assets/canciones/Bad Bunny - Vuelve Candy B.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "4:26",
        genre: "latin",
        cover: "assets/imagenes/caratula4.jpg"
    },
    {
        name: "Bad Bunny - Baticano",
        url: "assets/canciones/Bad Bunny - Baticano.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "4:16",
        genre: "latin",
        cover: "assets/imagenes/caratula5.jpg"
    },
    {
        name: "Bad Bunny - No Me Quiero Casar",
        url: "assets/canciones/Bad Bunny - No Me Quiero Casar.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "3:45",
        genre: "latin",
        cover: "assets/imagenes/caratula6.jpg"
    },
    {
        name: "Bad Bunny ft Eladio Carrion - Thunder y Lighning",
        url: "assets/canciones/Bad Bunny ft Eladio Carrion - Thunder y Lighning.mp3",
        artist: "Artista 2",
        year: "2020",
        duration: "3:37",
        genre: "latin",
        cover: "assets/imagenes/caratula7.jpg"
    },
    {
        name: "Bad Bunny ft Feid - Perro Negro",
        url: "assets/canciones/Bad Bunny ft Feid - Perro Negro.mp3",
        artist: "Bad Bunny ft Feid",
        year: "2023",
        duration: "2:42",
        genre: "latin",
        cover: "assets/imagenes/caratula8.jpg"
    },
    {
        name: "Bad Bunny - Europa",
        url: "assets/canciones/Bad Bunny - Europa.mp3",
        artist: "Bad Bunny",
        year: "2023",
        duration: "0:11",
        genre: "latin",
        cover: "assets/imagenes/caratula9.jpg"
    },
    {
        name: "Bad Bunny ft Ñengo Flow ft De La Ghetto ft Arcangel - Acho PR",
        url: "assets/canciones/Bad Bunny ft Ñengo Flow ft De La Ghetto ft Arcangel - Acho PR.mp3",
        artist: "Bad Bunny ft Ñengo Flow ft De La Ghetto ft Arcangel",
        year: "2023",
        duration: "5:59",
        genre: "Latin",
        cover: "assets/imagenes/caratula10.jpg"
    },
    {
        name: "Ehrling - Sthlm Sunset (128 kbps)",
        url: "assets/canciones/Ehrling - Sthlm Sunset (128 kbps).mp3",
        artist: "Desconocido",
        year: "2012",
        duration: "3:13",
        genre: "Electronica",
        cover: "assets/imagenes/engel.jpg"
    },
    {
        name: "SAXOFON POP 2021 🎷 Musica POP instrumental ALEGRE  ✅ (128 kbps)",
        url: "assets/canciones/SAXOFON POP 2021 🎷 Musica POP instrumental ALEGRE  ✅ (128 kbps).mp3",
        artist: "Desconocido",
        year: "2021",
        duration: "46:53",
        genre: "Electronica",
        cover: "assets/imagenes/engel.jpg"
    },
];

let filteredPlaylist = playlist.slice();
let favoritesPlaylist = [];

function loadPlaylist() {
    const playlistItems = document.getElementById("playlistItems");
    playlistItems.innerHTML = "";
    filteredPlaylist.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${song.name}`;
        const addToFavoritesButton = document.createElement("button");
        addToFavoritesButton.textContent = "Agregar a Favoritos";
        addToFavoritesButton.addEventListener("click", (event) => {
            event.stopPropagation();
            addToFavorites(index);
        });
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            deleteSong(index);
        });
        listItem.appendChild(addToFavoritesButton);
        listItem.appendChild(deleteButton);
        listItem.addEventListener("click", () => playSong(index));
        playlistItems.appendChild(listItem);
    });
}

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const name = file.name;
        const url = URL.createObjectURL(file);
        const audio = new Audio(url);
        audio.addEventListener('loadedmetadata', function() {
            const duration = audio.duration;
            const artist = ""; 
            const year = ""; 
            const genre = ""; 
            const cover = "Carátula"; 
            playlist.push({ name, url, artist, year, duration, genre, cover }); 
            filterPlaylist(""); 
        });
    }
}

function deleteSong(index) {
    if (index < 0 || index >= playlist.length) return;
    playlist.splice(index, 1);
    filterPlaylist(""); 
}

function playSong(index) {
    if (index < 0 || index >= filteredPlaylist.length) return;
    const song = filteredPlaylist[index];
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = song.url;
    audioPlayer.play();
    currentSongIndex = index;

    const songInfo = document.getElementById("songInfo");
    songInfo.innerHTML = `
        <div>
            <p><strong>Canción:</strong> ${song.name}</p>
            <p><strong>Artista:</strong> ${song.artist}</p>
            <p><strong>Año:</strong> ${song.year}</p>
            <p><strong>Duración:</strong> ${song.duration}</p>
            <p><strong>Género:</strong> ${song.genre}</p>
            <p><strong>Carátula:</strong></p>
            <img src="${song.cover}" alt="Carátula del álbum">
        </div>
    `;

    const progressBar = document.getElementById("progressBar");
    audioPlayer.addEventListener("timeupdate", function() {
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${percentage}%`;
    });
}
audioPlayer.addEventListener("ended", function() {
    let nextIndex = currentSongIndex + 1;
    if (nextIndex >= filteredPlaylist.length) {
        nextIndex = 0; 
    }
    playSong(nextIndex); 
});

function addToFavorites(index) {
    const song = filteredPlaylist[index];
    favoritesPlaylist.push(song);
    loadFavorites();
}

function removeFromFavorites(index) {
    if (index < 0 || index >= favoritesPlaylist.length) return;
    favoritesPlaylist.splice(index, 1);
    loadFavorites(); 
}

function loadFavorites() {
    const favoritesList = document.getElementById("favoritesList");
    favoritesList.innerHTML = "";
    favoritesPlaylist.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${song.name}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            removeFromFavorites(index);
        });
        listItem.appendChild(deleteButton);
        favoritesList.appendChild(listItem);
    });
}

function playFavorites() {
    filteredPlaylist = favoritesPlaylist.slice(); 
    currentSongIndex = 0;
    loadPlaylist(); 
    playSong(currentSongIndex);
}

document.getElementById("playFavoritesButton").addEventListener("click", playFavorites);

function filterPlaylist(searchTerm) {
    filteredPlaylist = playlist.filter(song =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    loadPlaylist();
}

document.getElementById("fileInput").addEventListener("change", function() {
    handleFiles(this.files);
});

document.getElementById("playButton").addEventListener("click", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    if (audioPlayer.paused) {
        audioPlayer.play();
    }
});

document.getElementById("pauseButton").addEventListener("click", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
});

document.getElementById("nextButton").addEventListener("click", function() {
    currentSongIndex++;
    if (currentSongIndex >= filteredPlaylist.length) {
        currentSongIndex = 0; 
    }
    playSong(currentSongIndex);
});

document.getElementById("previousButton").addEventListener("click", function() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = filteredPlaylist.length - 1; 
    }
    playSong(currentSongIndex);
});

document.getElementById("muteButton").addEventListener("click", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.muted = !audioPlayer.muted;
});

document.getElementById("searchButton").addEventListener("click", function() {
    const searchTerm = document.getElementById("searchInput").value;
    filterPlaylist(searchTerm);
});

window.addEventListener("load", function() {
    filterPlaylist(""); 
    loadPlaylist(); 
});
