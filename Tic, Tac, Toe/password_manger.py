import time
import string

print("Enter master password for all accounts: Only numbers and letters")
print(time.sleep(5))

master_password = input('Enter master password').isalnum()
while master_password == False:
    master_password = input('Enter master password').isalnum()

print(master_password)
def password_manger(master_password):
    print("to access any password, enter first master password! ")
    passwords = {}
    print("do you wish to add passwords to password manager?")
    answer = input("Yes or No").lower()
    print(answer)


    while answer != "yes":
        answer = input("Yes or No").lower()
    if answer == "yes":
        print("How many passwords? ")
        num_of_passwords = int(input("Number of passwords"))
       

        while num_of_passwords == False:
            num_of_passwords = int(input("Number of passwords"))
        for num in range(num_of_passwords):
            name_of_password = input('Enter name of password: ').isalpha()
            while name_of_password == "False":
                name_of_password = input('Enter name of password: ').isalpha()
            set_password = input("Enter password: ").isalnum
            while set_password == False:
                set_password = input("Enter password: ").isaln
            x = passwords.setdefault(name_of_password, set_password)
            print(passwords)

        print("Do you want to view dictionary of passwords? ")
        answer_ = input('Yes or No').lower()
        if answer == 'yes':
            master_test = input("Enter master pass: ").isalnum()
            if master_test == master_password:
                print('Do you want to access passwords? ')
                answer = input('Enter email name: ')
                print(passwords[answer])

        elif answer == 'no':
            print("End")
        else:
            print("bye")
    elif answer == "no":

        print("Program terminated in 5 seconds")
        time.sleep(5)
        return "END!!! "
    else:
        pass



print(password_manger(master_password))









