import requests

url = "https://xkcd.com/353/"
r = requests.get(url)

# print http method
print(r.status_code)

# Print all fuctions and methods
print(dir(r))

# Print All html of the page in unicode print(r.text)

# Print 
print(r.history)

# print headers as a dict
print(r.headers)

# print byte information eg: images
url = "https://imgs.xkcd.com/comics/python.png"
r = requests.get(url)
# print(r.content)

''' download images, if dir not specified will download in current dir
with open("comic.png", 'wb') as f:
    f.write(r.content)
'''

# test http methods, can add http parameters using a dictionary , eg choose a page and count, returns json
payload = {"page": 2, "count": 129}
url = 'https://httpbin.org/get'
r = requests.get(url, params=payload)


print(r.text)

# http post method, data added in a form
url = 'https://httpbin.org/post'
payload = {"username": 'ash', "password": 'testing'}
r = requests.post(url, data=payload)

print(r.json())

# test auth
r = requests.get("https://httpbin.org/basic-auth/ash/1234", auth=('ash', 'testing'))
print(r.text)