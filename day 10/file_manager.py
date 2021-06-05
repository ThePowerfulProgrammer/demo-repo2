import os

# show file path
this_file_path = os.path.abspath(__file__)
print("file PATH BELOW")
print(this_file_path)
print('file PATH  ABOVE')
a = int(input('Enter number: '))
print(a * 5)

BASE_DIR = os.path.dirname(this_file_path)
ENTIRE_PROJECT_DIR = os.path.dirname(BASE_DIR)
# print(BASE_DIR) 
# print(ENTIRE_PROJECT_DIR)

email_txt = os.path.join(BASE_DIR,'templates', 'email.txt')

content = ''

with open(email_txt, "r") as f:
    content = f.read()

print(content.format(name="Azura"))

print(content.format(name="Ash"))

print(content.format(name="Zeus"))