---
title: 'Password Generator app - V2'
author: 'PeterT'
date: '24/05/2020'
---

![Password generator screenshot version 2](/static/password_generator/password-generator-v2.png)

[Password Generator on repl.it](https://repl.it/@malvoliothegood/password-generator)

Find attached a zip file that contains another version of the password generator app that was mentioned in the last post. It does not have a 'Copy to Clipboard' button, but generated passwords are displayed in a list. 

I neglected to mention in yesterday's post that two additional JS files are included in the app to implement service worker caching. This makes the app a bit more speedy after the first use as the text file that contains the words that are used to make up the generated password - it is the UNIX text file - contains 45,000+ words and weighs in at a hefty 400KiB.

[Password generator (151KiB)](/static/password_generator/password-generator-v2.zip)



