import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
files_dir = os.path.join(BASE_DIR, "images")


## IF no directory
# if not os.path.exists(files_dir):
#     print("This is not a valid path, Directory may not exist")



## CREATE directory
os.makedirs(files_dir, exist_ok=True)

my_images = range(0, 12)

# create image files
for i in my_images:
    fname = f"{i}.txt"
    file_path = os.path.join(files_dir, fname)
    if os.path.exists(file_path):
        print(f"skipped {fname}")
        continue
    with open(file_path, "w") as f:
        f.write("Hello world") 

