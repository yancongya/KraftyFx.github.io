---
layout: default
title: JSX and Scripts
permalink: /kbar/buttons/scripts/
parent: KBar Buttons
---
# JSX(BIN) and Scriptlet FAQ
## The panel for my script doesn't dock anymore. How do I fix this? ##
The script probably wasn't built to work with a tool launcher. Instead of making a JSX/JSXBIN button, create a Menu Command instead and use the EXACT text that appears in the menus. As long as the filename is UNIQUE you should be able to invoke it and get your dockable panel back.

## What is the function name/argument field for?
Some users are scared to modify code but can handle modifying a simple string value.  The function/name field is a way for you to parameterize your scriptlet without needing to create UI to get the value.  This is typically used more for script authors that distribute JSX(BIN) files.

If you want to use this field for your scriptlets you can use this snippet to get the value:

```javascript
var button = (typeof kbar !== 'undefined') ? kbar.button : null;

if (button)
{
   var version = kbar.version;       // KBar version like '2.0.5'
   var JSON = kbar.JSON;             // Lets you stringify/parse JSON strings
   var aeq = kbar.aeq;               // Lets you use aequery

   var id = button.id;               // A randomly generated string by KBar
   var name = button.name;           // The name the user set for the button
   var argument = button.argument;   // The argument field

   switch(button.argument)
   {
      case 'Function 1': 
         doSomething(); 
         break;

      case 'Function 2':
         doSomethingElse();
         break;

      default:
         alert("I don't know what the argument " + button.argument + " is supposed to do");
         break;
   }
}
else
{
   // Run your script as normal
}
```