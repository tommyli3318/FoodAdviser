const key = process.env.YELP_API_KEY
const proxy = "https://cors-anywhere.herokuapp.com/"; // Work around CORS error
const endpoint = 'https://api.yelp.com/v3/businesses/search'

const params = {
    'term': 'starbucks',
    'limit': 10,
    'radius': 10000,
    'location': 'pomona'
}

var requestObj = {
    url: proxy + endpoint,
    data: params,
    headers: {'Authorization': `bearer ${key}`}
}

$.ajax(requestObj)
    .done(response => {
        console.log(response)
    })