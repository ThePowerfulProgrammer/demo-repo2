counts = dict()
lines = input('Enter a line of text: ')

words = lines.split()
print("Words", words)

print("Counting...")
for word in words:
    counts[word] = counts.get(word, 0) + 1
print(counts)


print("Below")
with open("Hello_world.txt", 'r') as handle:
    counts = dict()
    for line in handle:
        words = line.split()
        for word in words:
            counts[word] = counts.get(word, 0) + 1
    bigCount = None
    bigWord = None
    for word, count in counts.items():
        if bigCount is None or count > bigCount:
            bigWord = word
            bigCount = count
    print(bigCount, bigWord)
print("out")
#git remote add origin git@github.com:ThePowerfulProgrammer/Python.git
#git branch -M main
#git push -u origin main
print("Hello world")