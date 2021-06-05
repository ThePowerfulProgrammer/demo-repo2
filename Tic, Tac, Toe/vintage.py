import time

my_inv = {
    "sword": 1, 
    "axe": 20, 
    "meat": 15
    }

def display_Invertory(dict):
    total_items = 0
    
    print("Do you want to add items? ")
    answer = input('Yes or No: ')
    if answer == "Yes":
        add_item = input("Item name: ")
        item_amt = int(input("How many?: "))
        my_inv.setdefault(add_item, item_amt)
    else:
        print("Okay ")

    print("Invertory: ")
    for item in dict:
        print(item, dict[item])
        total_items = total_items + dict[item]
    return ("Total number of items:" , total_items)

print(display_Invertory(my_inv))

dragon_loot = {
    "heavy_armour": 2,
    "Excalibur": 1, 
    "max_potions": 1000
    }

def add_Invertory(dict_1, dict_2):
    dict_1.update(dict_2)
    return dict_1
    
print(add_Invertory(my_inv, dragon_loot))

player = input("Enter name: ").lower()
print(player)

def game(name):
    print("Welcome, are you ready to play?", player)
    answer = input("Yes or No: ").lower()
    if answer == 'yes':
        print("Games begins in...")
        for i in range(6):
            print(i)
        
        player_health = 100
        print(player, "health ", player_health)
        generic_monster = 50
        print(player, 'vs', 'monster')
        print(" ")
        time.sleep(5)
        while generic_monster > 0:
            print('What will you use to attack monster? Axe or hand: ')
            weapon = input('Axe or hand: ').lower()
            if weapon == 'axe':
                generic_monster = generic_monster - my_inv['axe']
            elif answer == 'hand':
                print("Monster kills you")
                break
            else:
                break
            if generic_monster < 0:
                print("You won", player)
                my_inv.setdefault("heavy sword", 100)
                print(my_inv)
                print("New item, heavy sword")
                

        print("next battle begins")
        print(" ")
        print(" ")
        print(" ")
        print("player vs dragon")
        dragon = 1000

        while dragon > 0:
            print('What will you use to attack Dragon? Axe or hand: ')
            weapon = input('Axe or hand: ').lower()
            if weapon == 'heavy sword':
                dragon = dragon - my_inv['heavy sword']
                print(" ")
            elif weapon == 'hand':
                print("dragon kills you")
                break
            elif weapon == "axe":
                dragon = dragon - my_inv['axe']
            else:
                break
            if dragon < 0:
                print("You won", player)
    else:
        pass   

print(game(player))