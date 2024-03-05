let url = 'https://rickandmortyapi.com/api';

function genericFunction(url) {
    return fetch(url, {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
        return jsonResp;
    });
}



function getCharacters (url, id) {
    let destination = `/character/${id || ''}`;
    return genericFunction(url + destination);
}


function getLocations (url, id) {
    let destination = `/location/${id || ''}`;
    return genericFunction(url + destination);
}

function getEpisodes (url, id) {
    let destination = `/episode/${id || ''}`;
    return genericFunction(url + destination);
}

//genericFunction(url);
getCharacters(url);
getLocations(url);
getEpisodes(url);
getCharacters(url, 1);
getCharacters(url, 2);
getCharacters(url, 3);
getLocations(url, 1);
getLocations(url, 2);
getLocations(url, 3);
getEpisodes(url, 1);
getEpisodes(url, 2);
getEpisodes(url, 3);

function showCharacters(url) {
    getCharacters(url, '1,2,3,4,5,6,7,8,9,10')
        .then(function(characters) {
            const characterNamesDiv = document.getElementById('characterNames');
            const namesList = characters.map(function(character) {
                return '<p>' + (character.name || 'Not found') + '</p>';
            }).join('');

            characterNamesDiv.innerHTML = namesList;
        })
        .catch(function(error) {
            console.error('Error fetching characters:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    showCharacters('https://rickandmortyapi.com/api/');
});

function showLocations(url) {
    getLocations(url, '1,2,3,4,5,6,7,8,9,10')
        .then(function(locations) {
            const locationNamesDiv = document.getElementById('locationNames');
            const locationList = locations.map(function(locations) {
                return '<p>' + (locations.name || 'Not found') + '</p>';
            }).join('');

            locationNamesDiv.innerHTML = locationList;
        })
        .catch(function(error) {
            console.error('Error fetching location:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    showLocations('https://rickandmortyapi.com/api/');
});

function showEpisodes(url) {
    getEpisodes(url, '1,2,3,4,5,6,7,8,9,10')
        .then(function(episodes) {
            const episodeNamesDiv = document.getElementById('episodeNames');
            const episodeList = episodes.map(function(episodes) {
                return '<p>' + (episodes.name || 'Not found') + '</p>';
            }).join('');

            episodeNamesDiv.innerHTML = episodeList;
        })
        .catch(function(error) {
            console.error('Error fetching episode:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    showEpisodes('https://rickandmortyapi.com/api/');
});
