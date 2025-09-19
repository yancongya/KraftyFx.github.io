# 如何使用此按钮 #
KBar 的 **运行 Shell 命令** 按钮旨在让您在系统命令行上运行某些内容，类似于 [MacOS 上的终端](https://support.apple.com/guide/terminal/execute-commands-and-run-tools-apdb66b5242-0d18-49fc-9c47-a2498b7c91d5/mac) 或 Windows 上的 [命令提示符](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)。

默认情况下，它会为您提供一个示例命令，向您展示其工作原理。您应该用自己的命令替换它。

## 选项
该按钮有两种运行 shell 命令的方式，直接运行或通过选择本机 shell 脚本文件。使用 shell 脚本文件的主要优点是它将被烘焙到工具栏导出中。直接 shell 命令中引用的任何文件都不会。使用脚本文件的缺点是您无法向其传递参数。为了使其更灵活一些，KBar 允许您定义一个名为 `KBAR_BUTTON_ARG` 的环境变量，该变量可以在运行时读取。

## 执行上下文
当 shell 命令运行时，当前工作目录与您正在处理的 AEP 相同（否则为系统默认值）。

KBar 定义了一系列其他环境变量，因此您的命令或脚本可以以平台中立的方式知道按下了哪个按钮以及其他有用的数据。您可以在 **环境变量** 列表中看到它。

# 常见问题 #
暂无..
