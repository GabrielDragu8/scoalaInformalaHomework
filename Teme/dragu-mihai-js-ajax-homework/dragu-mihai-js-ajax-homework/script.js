var url = 'https://rickandmortyapi.com/api';

function generic(apiUrl) {
    fetch(apiUrl, {
        method: 'GET'
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
    });
}

generic(url);

function getAllCharacters() {
    var allCharacters = url + '/character';
    generic(allCharacters);
}

function getAllLocations() {
    var allLocations = url + '/location';
    generic(allLocations);
}

function getAllEpisodes() {
    var allEpisodes = url + '/episode'; 
    generic(allEpisodes);
}

getAllCharacters();
getAllLocations();
getAllEpisodes();


// i gut stucked, i'm gonna work on API's more

