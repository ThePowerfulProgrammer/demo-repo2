theBoard = {'top-L': ' ', 'top-M': ' ', 'top-R': ' ',        
            'mid-L': ' ', 'mid-M': ' ', 'mid-R': ' ',      
            'low-L': ' ', 'low-M': ' ', 'low-R': ' '}

def print_board(board):
    print(board['top-L'] + '|' + board['top-M'] + '|' + board['top-R'])
    print('-----')
    print(board['mid-L'] + '|' + board['mid-M'] + '|' + board['mid-R'])
    print('-----')
    print(board['low-L'] + '|' + board['low-M'] + '|' + board['low-R'])
    

max = int(input("enter num: "))

turn = 'X'
for i in range(max):
    print(print_board(theBoard))
    print('Turn for ' + turn + '. Move on which space?')
    move = input("Enter space")
    # Dicts are mutable, changes value in dict with either x or o
    theBoard[move] = turn
    if turn == 'X':
        turn = 'O'
    else:
        turn = 'X'

    if (theBoard['top-L'] and theBoard['top-M'] and theBoard['top-R']) == 'X':
       
        print("winner" + ' ' +  turn)
    elif (theBoard['mid-L'] and theBoard['mid-M'] and theBoard['mid-R']) == 'X':
      
        print("winner" + ' ' +  turn)
    elif (theBoard['low-L'] and theBoard['low-M'] and theBoard['low-R']) == 'X':

        print("winner" + ' ' +  turn)               
    else:
        continue























