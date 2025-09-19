# 常见问题

## 如何将 KBar 重置为默认设置？
1. 关闭 After Effects
2. 打开 aescripts [ZXP 安装程序](http://aescripts.com/learn/zxp-installer/)。
3. 找到 KBar，点击“更多”，然后点击 [“重置首选项”](https://aescripts.com/knowledgebase/index/view/faq/zxp-installer-faq/)。
4. 删除主工具栏文件
   * 在 Windows 上 -- `C:\Users\<username>\AppData\Roaming\aescripts\kbar\toolbars.json`
   * 在 MacOs 上 --  `/Users/<username>/Library/Preferences/aescripts/kbar/toolbars.json`
5. 打开 After Effects


## 如何将工具栏名称从“KBar 1”更改为其他名称？
我很想支持这个功能，但这是不可能的 :(。这是 AE 本身的限制。

## 如何创建带有命令子菜单的下拉列表？
目前不支持，但技术上是可行的。问题在于，在 MacOs 上，它们会被裁剪，因为它不会在面板边界之外“绘制”任何东西。这感觉类似于今天存在的工具栏标签功能。如果您对不同的用户体验有想法，并且不那么糟糕，请在 [KBar 产品页面](https://aescripts.com/kbar/) 的评论部分分享。

![在 Mac 上裁剪下拉列表](/assets/switch-toolbar.gif)

## 有没有更快的方法来批量设置图标？
有点。我在教程视频中简要地谈到了这一点，但这可以在批量导入脚本文件时发生。它仅在 SVG/PNG 文件与脚本本身具有相同名称时才有效。它不适用于任何其他按钮类型。

## 有没有办法安装图标包？
还没有。我还在考虑如何做到这一点。
