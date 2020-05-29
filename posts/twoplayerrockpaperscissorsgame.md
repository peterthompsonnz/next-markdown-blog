---
title: 'Two player Rock, Paper, Scissors game'
author: 'PeterT'
date: '30/5/2020'
---

Code for a simple Rock, Paper, Scissors game coded with Python. It would be better to
replace the if/elif block of code with a 'load' of ORs, but markdown does not wrap long
lines of text well. The version on repl.it does this.

```
items = ['paper','scissors','rock']
winner = ''

while True:
  # Make sure player one's choice is valid
  p_1 = input("Enter player 1 choice: ").lower()
  while p_1 not in items:
    print("Your choice must be one of these:", items)
    p_1 = input("Enter player 1 choice: ").lower()
  
  p_2 = input("Enter player 2 choice: ").lower()
  while p_2 not in items:
    print("Your choice must be one of these:", items)
    p_2 = input("Enter player 2 choice: ").lower()

  if p_1 == p_2:
    print("It's a tie! Play again.")
    # Break out of the while loop
    break
  
  if p_1 == "rock" and p_2 == "scissors":
    winner = 'player1'  
  elif p_1 == "paper" and p_2 == "rock":
    winner = 'player1'
  elif p_1 == "scissors" and p_2 == "paper":
    winner = 'player1'    
  else:
    winner = 'player2'
  
  if winner == 'player1':
    print(f"{p_1} beats {p_2} , player 1 win!")
  else: 
    print(f"{p_2} beats {p_1} , player 2 win!")
  
  play_again = input("Play again: (yes/no) : " ).lower()
  if play_again != "yes":
    break
```

Live version on repl.it: [Two player Rock, Paper, Scissors game](https://repl.it/@malvoliothegood/two-player-rock-paper-scissors#main.py)

