import requests


payload = {'page':2, 'count':25}
# Params added to urls
r = requests.get("https://httpbin.org/get", params=payload)

print(r.text)
print(r.url)