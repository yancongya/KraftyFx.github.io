# KBar 集成指南
如果你为 After Effects 编写脚本或扩展，你可以用一种可被 KBar 按钮调用的方式来公开你的功能。像 [Explode Shape Layers](https://aescripts.com/explode-shape-layers/?src=kbar-docs)、[Key Cloner](https://conigs.com/tools/key-cloner/?src=kbar-docs)、[Ray Dynamic Color](https://docs.google.com/document/d/10OnBN80BgcECx_2EeW5UMm6BmomiyRYAxTUbnQdstio/edit)、[Mocha Import](https://mamoworld.com/article/mochaimport-kbar-api?src=kbar-docs) 和 [Flow](https://aescripts.com/flow/?src=kbar-docs) 等许多流行工具都这样做了，你也可以。

工具能否与 KBar 集成，取决于它是作为 JSX 脚本还是用 CEP 构建的。目前，没有为 C++ 插件提供特殊的集成，但是，这应该是可能的。

# JSX 集成
如果你的工具完全基于 JSX，它需要检测它是否是从 KBar 启动的，如果是，传入了什么参数。这是通过检查 `kbar` 全局变量和 `button` 成员变量来实现的。从那里你可以获得有关被点击按钮的详细信息（如下例所示）。

## 示例
```javascript
if (typeof kbar !== 'undefined' && kbar.button)
{
   var version = kbar.version;       // KBar 版本，如 '3.0.0'
   var JSON = kbar.JSON;             // 让你 stringify/parse JSON 字符串
   var aeq = kbar.aeq;               // 让你使用 aequery

   var button = kbar.button;
   var id = button.id;               // KBar 生成的随机字符串
   var name = button.name;           // 用户为按钮设置的名称

   switch(button.argument)
   {
      case 'Function 1': 
         doSomething(); 
         break;

      case 'Function 2':
         doSomethingElse();
         break;

      default:
         alert("我不知道参数 " + button.argument + " 应该做什么");
         break;
   }
}
else
{
   // 正常运行你的脚本
}
```

## KBar API
KBar 附带了一些库来帮助你编写脚本。一个是 `JSON` 的实现，另一个是对 [AEQuery](https://aenhancers.github.io/aequery/) 的内部引用，这是一个受 After Effects 开发人员欢迎的实用程序库。


# CEP 集成
如果你的工具是基于 CEP 的，你可以监听发送到你的扩展 ID 并以 `.kbar` 结尾的 [CEP 事件](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#cep-events)。

当按下 KBar 扩展按钮时，它首先使用目标扩展 ID 调用 `requestOpenExtension`，然后使用参数数据调用 `dispatchEvent`。请注意，只有当你的扩展是打开的并且监听器已注册时，你的扩展才会收到通知；否则，单击扩展按钮只会打开它。

```javascript
var csInterface = new CSInterface();

csInterface.addEventListener(csInterface.getExtensionID() + ".kbar", function (event)
{
   // event.data 包含按钮参数
   alert("从 KBar 调用 " + event.data);
}
```

## KBar 导出集成

如果你的工具支持预设库作为其用户体验的一部分，你可以通过将其导出为 `.kbar` 文件中的按钮来增强它。你可以在 [Flow](https://aescripts.com/flow/?src=kbar-docs) 中看到一个例子。

在构建导出时，重要的是要决定在没有安装你的工具的情况下，导出是否可用。

如果你想要一个独立的体验，那么你将在导出中烘焙一个 JSX 文件、预设或 shell 脚本，你的按钮将调用它们。不支持烘焙 CEP 扩展，因为存在[围绕安装的安全挑战](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_10.x/Documentation/CEP%2010.0%20HTML%20Extension%20Cookbook.md#extension-folders)。

如果 kbar 按钮只能在你的工具首先被安装的情况下工作，那么你应该在工具不可用时测试 KBar 体验。不幸的是，没有标准的方法来检测某个工具是否已安装和/或正在运行，大多数解决方案都伴随着其他无法可靠解决的问题。

对于基于 JSX 的工具，一种处理方法是让主工具声明一个具有不常见名称的全局变量，KBar JSX 按钮可以检查它是否已定义。如果是，那么你就知道该工具已安装并正在运行。如果未找到该全局变量，则可以提醒用户打开它。

```javascript
// 你的工具中的一行代码，具有唯一的全局变量。

_my_tool_name_is_running = true;
```

```javascript
// KBar Scriptlet 按钮

if (typeof _my_tool_name_is_running === 'undefined') {
   alert('请安装并运行 my_tool_name 然后再试一次。');
} else {
   // 在工具中做某事
}
```

对于基于 CEP 的工具，建议使用扩展按钮，如果未安装扩展，则让 KBar 显示错误。不鼓励尝试调用与 CEP 扩展捆绑的 JSX 代码，因为捆绑的代码在扩展启动时不会加载。**不要试图在扩展启动时强制加载你的 JSX 代码。**这很容易导致你的工具和 After Effects 锁定和崩溃。

## KBar 导出格式

KBar 导出是一个 zip 文件，其中包含一个 `manifest.json` 文件，该文件描述了按钮列表和支持资产，如脚本、预设和 shell 脚本。查看和理解该格式的最简单方法是使用 KBar 进行烘焙导出，将扩展名从 `.kbar` 更改为 `.zip`，然后将其解压缩。

`manifest.json` 的模式非常简单。不幸的是，目前还没有包含验证逻辑或 TypeScript 定义的官方 NPM 包，但你现在可以获取我[在此处](https://gist.github.com/rafikhan/f3f9e7a77b71c6a1150ff6e8f0f50353)制作的快速要点。
