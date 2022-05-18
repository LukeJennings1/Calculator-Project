# Calculator-Project

This is my web-based calculator app made using Javascript, HTML and CSS. 

The app takes input from screenselectors that convert the screen div using parsefloat. It then takes these inputs and stores them in variables before summing the logic based on the operator chosen. 

Most challenging thing: 

The most challenging thing with this project was in connecting up the operators so that you can perform chained equations such as 12 + 7 - 5 * 3 = 42. This challenge was overcome by (along with lots of coffee and head scratching!) adding a boolean that signals when another operator has been chosen and then clears the screen when any number value has been picked so that, for example on the subtraction operator (12 + 7 -) the screen clears and allows the user to input another number. This allows the screenselector to select the newly added number without interference from previous inputs. 
