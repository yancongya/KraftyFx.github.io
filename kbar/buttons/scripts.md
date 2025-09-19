# 常见问题
## 如何让 KBar 调用另一个工具中的特定功能？
KBar 脚本和 Scriptlet 按钮有一个名为 `Script Argument` 的特殊字段，可用于调用工具中的特定功能。您必须传入它识别的值才能使其工作。与 KBar 配合使用的流行工具通常会在其网站上发布它，例如 [Explode Shape Layers](https://aescripts.com/explode-shape-layers/)、[Key Cloner](https://conigs.com/tools/key-cloner/)、[Ray Dynamic Color](https://docs.google.com/document/d/10OnBN80BgcECx_2EeW5UMm6BmomiyRYAxTUbnQdstio/edit)、[Mocha Import](https://mamoworld.com/article/mochaimport-kbar-api)。

如果您找不到参数，请联系脚本作者，他们可以告诉您。如果他们不支持，请让他们使用[集成指南](/kbar/integration)。您可以这样问：


> *嗨，我喜欢您的工具，并希望从 KBar 中使用它。它支持哪些参数？如果它不起作用，您能试试[KBar 集成指南](/kbar/integration)吗？*

## 我的脚本面板不再停靠了。我该如何解决？ ##
该脚本可能不是为与工具启动器一起使用而构建的。不要创建 JSX/JSXBIN 按钮，而是创建一个菜单命令，并使用菜单中显示的确切文本。只要文件名是唯一的，您就应该能够调用它并取回可停靠的面板。
