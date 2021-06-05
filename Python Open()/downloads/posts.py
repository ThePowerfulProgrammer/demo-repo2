import requests

# Arbitary, just makes sense
payload = {"username": "Ash", "password": 1234}

# post some data to a url, Create a form
r = requests.post("https://httpbin.org/post", data=payload)

print(r.text)
# Method call ()
r_dict = r.json()
print(r_dict)



# Basic auth on httpbin
r = requests.get('https://httpbin.org/basic-auth/Ash/1234', auth=("Ash", 1234))

print(r.text)

