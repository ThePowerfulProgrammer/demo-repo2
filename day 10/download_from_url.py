# Download files using python and terminal 
# 1 open a url
import os
import requests

this_file_path = os.path.abspath(__file__)
BASE_DIR = os.path.dirname(this_file_path)
# CREATE downloads path
DOWNLOADS_DIR = os.path.join(BASE_DIR, "downloads")

# If no download directory, Create one
os.makedirs(DOWNLOADS_DIR, exist_ok=True)
# Downloaded img path and image name
download_img_path = os.path.join(DOWNLOADS_DIR,'2.jpg')

# Image url
url = "https://static-ssl.businessinsider.com/image/5d9b5bff52887931e8497a36-1405/141222twnmustang.jpg"

# use with open wb mode, FOR A SMALLish Item
r = requests.get(url, stream=True)
r.raise_for_status()
with open(download_img_path, 'wb') as f:
    f.write(r.content) 