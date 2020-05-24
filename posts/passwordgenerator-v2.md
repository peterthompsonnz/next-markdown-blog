---
title: 'Password Generator app - version 2'
author: 'PeterT'
date: '24/5/2020'
---

Find attached a zip file t contains the second version of the password generator app that was mentioned and attached to the last post. Improvement are.

+ Better HTML design: more sensible naming of ids on page elements, wrappers around inputs/outputs, password display text input replaced by a textarea to allow for multiline passwords, content wrapper added for centring
+ CSS: content centred, typographical changes to improve the look, passwords list styled heavily
+ JS tidied and extra functionality added: better naming of variables, list of generated passwords appears under current password, basic error checking on number of words in password. 

I neglected to mention in yesterday's post that two additional JS files are included in the app to implement service worker caching. This makes the app a bit more speedy as the text file that password words are chosen from (the UNIX text file) contains 45,000+ words and weighs in at a hefty 400KiB.

[Password generator (151KiB)](/static/password_generator/password-generator-v2.zip)



