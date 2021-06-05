# Basic img downloads
import requests


r = requests.get('https://images4.alphacoders.com/676/676679.jpg')

with open('vid.mp4', 'wb') as f:
    f.write(r.content)
    



# r = requests.get("https://httpbin.org/#/")
# print(r.headers)









