---
layout: default
title: Integration Guide
permalink: /kbar/integration
nav_order: 2
---
# KBar Integration Guide
If you write scripts or extensions for After Effects you can check if it was launched by KBar with an argument and do something special with it.  Popular tools like [Explode Shape Layers](https://aescripts.com/explode-shape-layers/), [Key Cloner](https://conigs.com/tools/key-cloner/), [Ray Dynamic Color](https://docs.google.com/document/d/10OnBN80BgcECx_2EeW5UMm6BmomiyRYAxTUbnQdstio/edit), [Mocha Import](https://mamoworld.com/article/mochaimport-kbar-api) do this and you can too.


## JSX Integration
If you're writing a JSX script it needs to detect if it was launched from KBar and if so, what arguments were passed in.  This is achieved by checking for the existance of the `kbar` global variable and seeing if there is a nested `button` variable on it.  From there you have details on the button that was clicked.  You can see this in the example below.

### KBar API
KBar comes with a few useful tools to help you author scripts.  One is an implementation of `JSON` and another is an internal reference to [AEQuery](https://aenhancers.github.io/aequery/), a popular utility library for After Effects.


### Example
```javascript
var button = (typeof kbar !== 'undefined') ? kbar.button : null;

if (button)
{
   var version = kbar.version;       // KBar version like '3.0.0'
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

## CEP Integration
I'm still figuring this out.  [Talk to me](mailto:info@kraftyfx.com) to help me understand what you're trying to do.