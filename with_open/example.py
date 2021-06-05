with open('sample3.txt', 'r') as handle:
    counts = dict()
    for line in handle:
        words = line.split()
        
        # Print words in list
        for word in words:
            counts[word] = counts.get(word, 0) + 1

    # Print list
    print(words)
    # Print dict to counts words
    print(counts)

            