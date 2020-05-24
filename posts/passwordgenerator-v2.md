---
title: 'Password Generator app: version 2'
author: 'PeterT'
date: '24/5/2020'
---

![Password generator screenshot version 2](/static/password_generator/password-generator-v2.png)

Find attached a zip file that contains another version of the password generator app that was mentioned and attached to the last post. I write another version because the one that this one is developed from was not the same one attached to the last post. It turns out that I had two versions with slightly different functionality. For example this one does not have the "copy to clipboard" button. It does have other features that are an overal improvement in my opinion. Her is a summary of changes:

+ Better HTML design: more sensible naming of ids on page elements, wrapper divs around inputs/outputs, password display text input replaced by a textarea to allow for multiline passwords, content wrapper added to aide centering, dynamic passwords list added
+ CSS: content centred, typographical changes to improve the look, colours changed to improve readability
+ JS: tidied and extra functionality added, better naming of variables, list of generated passwords appears under current password, basic error checking on field that supplies the number of words to be in the generated password

I neglected to mention in yesterday's post that two additional JS files are included in the app to implement service worker caching. This makes the app a bit more speedy as the text file that the password words are chosen from (the UNIX text file) contains 45,000+ words and weighs in at a hefty 400KiB.

[Password generator (151KiB)](/static/password_generator/password-generator-v2.zip)



