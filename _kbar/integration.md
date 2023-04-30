---
layout: default
title: Integration Guide
permalink: /kbar/integration
nav_order: 2
---
# KBar Integration Guide
If you write scripts or extensions for After Effects you can expose your functionality in a way that's callable by KBar buttons.  Popular tools like [Explode Shape Layers](https://aescripts.com/explode-shape-layers/?src=kbar-docs), [Key Cloner](https://conigs.com/tools/key-cloner/?src=kbar-docs), [Ray Dynamic Color](https://docs.google.com/document/d/10OnBN80BgcECx_2EeW5UMm6BmomiyRYAxTUbnQdstio/edit), [Mocha Import](https://mamoworld.com/article/mochaimport-kbar-api?src=kbar-docs), and [Flow](https://aescripts.com/flow/?src=kbar-docs) and many others do this and you can too.

A tool can integrate with KBar depending on if it is built as a JSX script or with CEP.  Currently, no special integrations are offered for C++ plugins, however, it should be possible.

# JSX Integration
If your tool is exclusively JSX based it needs to detect if it was launched from KBar and if so, what arguments were passed in.  This is achieved by checking for the `kbar` global variable and a `button` member variable.  From there you have details on the button that was clicked (example below).

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

## KBar API
KBar comes with libraries to help you author scripts.  One is an implementation of `JSON` and another is an internal reference to [AEQuery](https://aenhancers.github.io/aequery/), a popular utility library for After Effects developers.


# CEP Integration
If your tool is CEP based you can listen for a [CEP Event](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#cep-events) sent to your extension id with `.kbar` at the end.

When a KBar extension button is pressed it first calls `requestOpenExtension` with the target extension id and then `dispatchEvent` with argument data.  Note that the notification will only be received by your extension if it is open AND the listener is registered; otherwise, clicking an extension button will only open it.

```javascript
var csInterface = new CSInterface();

csInterface.addEventListener(csInterface.getExtensionID() + ".kbar", function (event)
{
   // event.data contains the button argument
   alert("Invoked from KBar " + event.data);
}
```

## KBar Export Integration

If your tool supports a library of presets as part of its UX you can enhance it by exporting as buttons to a `.kbar` file.  You can see an example of this with [Flow](https://aescripts.com/flow/?src=kbar-docs).

When building an export it is important to decide if the export should be usable without your tool being installed.

If you want a self contained experience then you you will bake in a JSX file, preset, or shell script into the export and your buttons will call into them.  Baking a CEP extension is not supported because of the [security challenges around installation](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#extension-folders).

If the kbar button can/should only work if your tool is first installed then you should test the KBar experience when the tool is not availble.  Unfortunately, there is no standard way to detect if a certain tool is installed and/or running and most solutions come with other problems that are impossible to reliably solve.

For JSX based tools one way to handle this is to have the main tool declare a global variable with an uncommon name and the KBar JSX button can check if it's defined. If it is then you know the tool is installed and running.  If the global is not found then you can alert the user to open it.

```javascript
// A line of code in your tool that has a unique global variable.

_my_tool_name_is_running = true;
```

```javascript
// KBar Scriptlet button

if (typeof _my_tool_name_is_running === 'undefined') {
   alert('Please install and run my_tool_name then try again.');
} else {
   // Do something in the tool
}
```

For CEP based tools it is recommend to use extension buttons and let KBar show an error if the extension is not installed.  Attemping to call JSX code bundled with the CEP extension is discouraged because bundled code is not loaded when the extension starts. **Do not try to force load your JSX code at extension startup.** It can cause your tool and After Effects to lock up and crash very easily.

## KBar Export Format

A KBar export is a zip file with a `manifest.json` file that describes a list of buttons and supporting assets like scripts, presets, and shell scripts.  The easiest way to see and understand the format is to make an baked export with KBar, change the extension from `.kbar` to `.zip`, then extract it.

The schema of `manifest.json` is fairly simple.  Unfortunately, there is no official NPM package with the validation logic or TypeScript definitions yet but you can grab a quick gist I made [here](https://gist.github.com/rafikhan/f3f9e7a77b71c6a1150ff6e8f0f50353) for now.

