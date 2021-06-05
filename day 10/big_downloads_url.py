# Download files using python and terminal 
# 1 open a url
import os
import requests
import shutil
from download_util import download_file

this_file_path = os.path.abspath(__file__)
BASE_DIR = os.path.dirname(this_file_path)
# CREATE downloads path
DOWNLOADS_DIR = os.path.join(BASE_DIR, "downloads")

# If no download directory, Create one
os.makedirs(DOWNLOADS_DIR, exist_ok=True)
# Downloaded img path and image name
download_img_path = os.path.join(DOWNLOADS_DIR,'1.jpg')

# Image url, if empty manually add url
url = ""

# use with open wb mode, FOR A SMALLish Item
r = requests.get(url, stream=True)
r.raise_for_status()
with open(download_img_path, 'wb') as f:
    f.write(r.content) 

# dl_filename = os.path.basename(url)
# new_dl_path = os.path.join(DOWNLOADS_DIR, dl_filename)
# with requests.get(url, stream=True) as r:
#     with open(new_dl_path, 'wb') as fileobject:
#         shutil.copyfileobj(r.raw, fileobject) 

download_file(url, DOWNLOADS_DIR) 