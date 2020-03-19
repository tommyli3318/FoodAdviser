# Find food places close to current location, > 4.0 stars

import requests

key = 'w74MySzCEyDtQ5dUjKFrkdeAU5Y86Ed6Qp2qKpwGn4_Pj-9cd8hJXGEmwkiUiCzGeCUanEAHmwW8b27rQXBK2rZ1DHbJEJl0okOt9k0eMi9B__vsS_89_LWOvMFzXnYx'

endpoint = 'https://api.yelp.com/v3/businesses/search'
headers = {'Authorization': 'bearer %s' % key}

params = {
    'term': 'starbucks',
    'limit': 10,
    'radius': 10000,
    'location': 'pomona'
}


response = requests.get(
    url = endpoint,
    params = params,
    headers = headers
)

data = response.json()

for item in data['businesses']:
    print(item['name'], item['rating'])