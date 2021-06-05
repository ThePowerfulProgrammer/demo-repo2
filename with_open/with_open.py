import os

with open("Hello_world.txt", 'w') as write_file:
    write_file.write("Hello World")

with open("Hello_world.txt", 'r') as read_file:
    print(read_file.read())


with open("Hello_world.txt", 'a') as write_file:
    name = "Ashish"
    write_file.write(f", My name is {name}")

with open("Hello_world.txt", 'r') as read_file:
    print(read_file.read())

str_input = input("Enter text: ")

with open("Hello_world.txt", 'a') as write_file:
    write_file.write(f", {str_input}")

with open("Hello_world.txt", 'r') as read_file:
    print(read_file.read())

'''
with open("Hello_world.txt", "a") as write_file:
    for word in range(0, 5):
        word = input("Enter word: ")
        write_file.write(f"\n {word}, has been added")

with open("Hello_world.txt", 'r') as read_file:
    print(read_file.read())
'''
print(os.listdir('\\Users\Ashish\Desktop\Ashish'))

