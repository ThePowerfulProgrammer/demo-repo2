import os 
import requests

chunk_size = 256

url = ""
r = requests.get(url, stream=True)

with open("test.mp4", 'wb') as f:
    for chunk in r.iter_content(chunk_size=chunk_size):
        f.write(chunk)