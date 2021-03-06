const key = 'w74MySzCEyDtQ5dUjKFrkdeAU5Y86Ed6Qp2qKpwGn4_Pj-9cd8hJXGEmwkiUiCzGeCUanEAHmwW8b27rQXBK2rZ1DHbJEJl0okOt9k0eMi9B__vsS_89_LWOvMFzXnYx';
const proxy = 'https://cors-proxy-tommyli3318.herokuapp.com/'; // Work around CORS error
const endpoint = 'https://api.yelp.com/v3/businesses/search';

function search() {
    navigator.geolocation.getCurrentPosition(searchUsingLatLon); // success callback
}

function searchUsingLatLon(position) {
    yelp(document.getElementById("searchbar").value, position.coords.latitude, position.coords.longitude);
}

function yelp(query, lat, lon) {
    const params = {
        'term': query,
        'limit': 10,
        'radius': 10000,
        'latitude': lat,
        'longitude': lon
    };
    
    var requestObj = {
        url: proxy + endpoint,
        data: params,
        headers: {'Authorization': `bearer ${key}`},
        dataType: 'json'
    };
    
    // change to use fetch() instead
    $.ajax(requestObj)
        .done(response => {
            console.log(response);
            formatHTML(response.businesses);
        });
}

function formatHTML(businesses) {
    document.getElementById("app").innerHTML = `
    <h1>Results (top ${businesses.length})</h1>
    ${businesses.map(businessTemplate)}
    `
}

function businessTemplate(business) {
    return `
    <div class="business">
        <img class="business-photo" src=${business.image_url}>
        <h2 class="business-name">${business.name}</h2>
    </div>
    `
}