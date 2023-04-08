---
layout: default
title: Integration Guide
permalink: /kbar/integration
nav_order: 2
---
# KBar Integration Guide
If you write scripts or extensions for After Effects you can expose your functionality in a way that's accessible to KBar.  Popular tools like [Explode Shape Layers](https://aescripts.com/explode-shape-layers/), [Key Cloner](https://conigs.com/tools/key-cloner/), [Ray Dynamic Color](https://docs.google.com/document/d/10OnBN80BgcECx_2EeW5UMm6BmomiyRYAxTUbnQdstio/edit), [Mocha Import](https://mamoworld.com/article/mochaimport-kbar-api) do this and you can too.


# JSX Integration
If you're writing a JSX script it needs to detect if it was launched from KBar and if so, what arguments were passed in.  This is achieved by checking for the existance of the `kbar` global variable and seeing if there is a nested `button` variable on it.  From there you have details on the button that was clicked.  You can see this in the example below.

## KBar API
KBar comes with a few useful tools to help you author scripts.  One is an implementation of `JSON` and another is an internal reference to [AEQuery](https://aenhancers.github.io/aequery/), a popular utility library for After Effects.


## Example
```javascript
if (typeof kbar !== 'undefined' && kbar.button)
{
   var version = kbar.version;       // KBar version like '3.0.0'
   var JSON = kbar.JSON;             // Lets you stringify/parse JSON strings
   var aeq = kbar.aeq;               // Lets you use aequery

   var button = kbar.button;
   var id = button.id;               // A randomly generated string by KBar
   var name = button.name;           // The name the user set for the button

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

# CEP Integration
Similar to script buttons, CEP extensions can check for KBar invocation by listening to a [CEP Event](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#cep-events) sent to the same extension id with `.kbar` at the end.  When the button is pressed it first calls `requestOpenExtension` with the target extension id and then `dispatchEvent` to it.  Note that the event will only be received by your extension if it is open AND the listener is registered; otherwise, clicking an extension button will only open it.

## Example
```javascript
var csInterface = new CSInterface();

csInterface.addEventListener(csInterface.getExtensionID() + ".kbar", function (event)
{
     alert("Invoked from KBar " + event.data);
}
```

# Toolbar Exports

If your tool lets users build a library of presets you can enhance it by exporting `.kbar` files that can be opened by any KBar user.

## `.kbar` Format
A KBar export is a simple zip file.  The easiest way to understand the format is to make an export with KBar, change the file extension from `.kbar` to `.zip`, then extract it.  Once extracted you'll notice it contains a `manifest.json` file at the root describing all the buttons it contains.  If your export included script files, FFX's, or shell scripts you'll see dedicated directories to hold them as well.

## Export Strategies
Depending on how independent you want it to be you have a few options on how to build it.

1. Bake an entire JSX tool into the export. This works well if you don't care about multiple variants/copies of your script being distributed.
1. If your tool is CEP based build a toolbar that uses extension buttons.
1. If your tool is JSX only use scriptlets or bake a companion JSX file into the export that talks to your main tool through a common global variable in ESTK (see below).

### Companion Script(let) put in exports for JSX only tools
```javascript
if (typeof MyCoolToolName_CalledFromKBar === 'undefined') {
   alert('MyCoolToolName is not running and needs to be opened first.');

   var toolPath = File.openDialog("MyCoolToolName.jsx:MyCoolToolName.jsx; All files:*.*");

   if (toolPath) {
      $.evalFile(toolPath.absoluteURI);
   }
} else {
   MyCoolToolName_CalledFromKBar();
}
```


### Additional logic in the main tool
```javascript
MyCoolToolName_CalledFromKBar = function() {
   var isLicensed = true;         // This value should come from whatever licensing system you use like aescripts.

   if (!isLicensed) {
      alert('Please buy this tool first!');
      return;
   }

   var version = kbar.version;  // KBar version like '3.0.0'
   var JSON = kbar.JSON;        // Lets you stringify/parse JSON strings
   var aeq = kbar.aeq;          // Lets you use aequery

   var button = kbar.button;
   var id = button.id;          // A randomly generated string by KBar
   var name = button.name;      // The name the user set for the button

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
```
