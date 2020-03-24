const key = 'w74MySzCEyDtQ5dUjKFrkdeAU5Y86Ed6Qp2qKpwGn4_Pj-9cd8hJXGEmwkiUiCzGeCUanEAHmwW8b27rQXBK2rZ1DHbJEJl0okOt9k0eMi9B__vsS_89_LWOvMFzXnYx';
const proxy = 'https://cors-proxy-tommyli3318.herokuapp.com/'; // Work around CORS error
const endpoint = 'https://api.yelp.com/v3/businesses/search';

const params = {
    'term': 'starbucks',
    'limit': 10,
    'radius': 10000,
    'location': 'pomona'
};

var requestObj = {
    url: proxy + endpoint,
    data: params,
    headers: {'Authorization': `bearer ${key}`},
    dataType: 'json'
};

$.ajax(requestObj)
    .done(response => {
        console.log(response);
        formatHTML(response);
    });


function formatHTML(results) {
    document.getElementById("app").innerHTML = `
    <h1>Results (top ${results.businesses.length})</h1>
    ${results}
    
    `
}
