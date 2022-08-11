---
layout: default
title: Run Shell Commands
permalink: /kbar/buttons/shell-commands/
parent: Buttons
---
# How to use this button #
The **Run Shell Command** button for KBar is designed to let you run something on the system command line similar to [Terminal on MacOS](https://support.apple.com/guide/terminal/execute-commands-and-run-tools-apdb66b5242-0d18-49fc-9c47-a2498b7c91d5/mac) or the [Command Prompt](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands) on Windows.

By default it gives you a sample command that shows you how it works.  You should replace this with your own command.

## Options
The button has 2 ways to run shells commands, directly or by picking a native shell script file.  The main advantage to using a shell script file is that it will be baked into a toolbar export.  Any files referenced in a direct shell command will not.  The disadvantage of using a script file is that you cannot pass parameters into it.  To make this a little more flexible KBar lets you define a environment variable called `KBAR_BUTTON_ARG` that can be read at runtime.

## Execution context
When a shell command runs the current working directory is the same as the AEP you're working on (system default otherwise).

KBar defines a range of other environment variables so your command or script knows what button was pressed and other useful data in a platform neutral way.  You can see it in the **Environment Variable** list.

# Frequently asked questions #
Nothing yet..
