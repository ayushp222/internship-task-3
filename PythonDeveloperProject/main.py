
def multiplication_table():
    n = int(input("Enter a number: "))
    for i in range(1, 11):
        print(f"{n} x {i} = {n * i}")


def swap_numbers():
    a = int(input("Enter a: "))
    b = int(input("Enter b: "))
    a, b = b, a
    print("After swap: a =", a, "b =", b)


def check_substring():
    s1 = input("Enter main string: ")
    s2 = input("Enter substring: ")
    print("Is substring?", s2 in s1)


def decimal_to_binary():
    n = int(input("Enter a number: "))
    print("Binary:", bin(n)[2:])


def matrix_addition():
    A = [[1, 2], [3, 4]]
    B = [[5, 6], [7, 8]]
    result = [[A[i][j] + B[i][j] for j in range(2)] for i in range(2)]
    print("Matrix Addition:", result)


def matrix_multiplication():
    A = [[1, 2], [3, 4]]
    B = [[5, 6], [7, 8]]
    result = [[sum(a*b for a, b in zip(row, col)) for col in zip(*B)] for row in A]
    print("Matrix Multiplication:", result)


def second_largest():
    nums = list(map(int, input("Enter numbers: ").split()))
    unique = sorted(set(nums))
    print("Second largest:", unique[-2] if len(unique) >= 2 else "Not enough numbers")


def check_anagram():
    s1 = input("Enter first string: ")
    s2 = input("Enter second string: ")
    print("Are anagrams?", sorted(s1) == sorted(s2))


def ai_tic_tac_toe():
    import ai_tic_tac_toe
    ai_tic_tac_toe.play_game()


def main():
    while True:
        print("\nChoose a task:")
        print("1. Multiplication Table")
        print("2. Swap Two Numbers")
        print("3. Check Substring")
        print("4. Decimal to Binary")
        print("5. Matrix Addition")
        print("6. Matrix Multiplication")
        print("7. Find Second Largest")
        print("8. Check Anagram")
        print("9. AI Tic-Tac-Toe")
        print("10. Exit")

        choice = input("Enter task number: ")

        if choice == "17":
            multiplication_table()
        elif choice == "18":
            swap_numbers()
        elif choice == "19":
            check_substring()
        elif choice == "20":
            decimal_to_binary()
        elif choice == "21":
            matrix_addition()
        elif choice == "22":
            matrix_multiplication()
        elif choice == "23":
            second_largest()
        elif choice == "24":
            check_anagram()
        elif choice == "25":
            ai_tic_tac_toe()
        elif choice == "0":
            break
        else:
            print("Invalid choice!")

if __name__ == "__main__":
    main()
