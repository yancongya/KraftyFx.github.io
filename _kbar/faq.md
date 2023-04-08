---
layout: default
title: FAQ
permalink: /kbar/faq
nav_order: 0
---

# Frequently Asked Questions

## How do I reset KBar to the default?
1. Close After Effects
1. Open the aescripts [ZXP Installer](http://aescripts.com/learn/zxp-installer/).
1. Find KBar click "More" and then ["Reset Preferences"](https://aescripts.com/knowledgebase/index/view/faq/zxp-installer-faq/).
1. Delete the main toolbar file
   * On Windows -- `C:\Users\<username>\AppData\Roaming\aescripts\kbar\toolbars.json`
   * On MacOs --  `/Users/<username>/Library/Preferences/aescripts/kbar/toolbars.json`
1. Open After Effects


## How do I change the toolbar names from "KBar 1" to something else?
I would love to support this but it isn't possible :(.  It's a limitation of AE itself.

## How do I create dropdowns with submenus of commands?
It's not supported today but is technically possible. The problem is on MacOs they'd get cropped b/c it won't "draw" anything outside the boundaries of the panel.  It'll feel similar to having the toolbar label feature that's there today.  If you have thoughts on a different user experience that doesn't suck please share it in the comments section of the [KBar product page](https://aescripts.com/kbar/).

![dropdowns being cropped on Mac](/assets/switch-toolbar.gif)

## Is there a faster way to bulk set the icons?
Sort of.  I touch upon this briefly in the tutorial video but this can happen during bulk importing of script files. It only works if the SVG/PNG file has the same name of the script itself. It doesn't work for any other button type.

## Is there a way to install icon packs?
Not yet. I'm still thinking about how to do this.