---
layout: default
title: Scripts
permalink: /kbar/buttons/scripts/
parent: Buttons
---
# Frequently Asked Questions
## How do I make KBar call a specific feature in another tool?
KBar Scripts and Scriptlet buttons have special field called `Script Argument` which can be used to invoke a specific feature inside a tool.  You have to pass in a value it recognizes for it to work.  Popular tools that work with KBar usually publish it on their website like [Explode Shape Layers](https://aescripts.com/explode-shape-layers/), [Key Cloner](https://conigs.com/tools/key-cloner/), [Ray Dynamic Color](https://docs.google.com/document/d/10OnBN80BgcECx_2EeW5UMm6BmomiyRYAxTUbnQdstio/edit), [Mocha Import](https://mamoworld.com/article/mochaimport-kbar-api).

If you can't find the argument contact the script author and they can tell you.  If they don't support it then ask them to use the [integration guide]({{ site.baseurl }}{% link _kbar/integration.md %}).  You can ask like this:


> *Hi, I love your tool and want to use it from KBar.  What arguments does it support? If it doesn't work can you try with the [KBar integration guide]({{ site.baseurl }}{% link _kbar/integration.md %})?*

## The panel for my script doesn't dock anymore. How do I fix this? ##
The script probably wasn't built to work with a tool launcher. Instead of making a JSX/JSXBIN button, create a Menu Command instead and use the EXACT text that appears in the menus. As long as the filename is UNIQUE you should be able to invoke it and get your dockable panel back.

