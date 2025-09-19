# 部署指南

本文档将指导您如何将 VitePress 项目部署到 Vercel 并配置自定义域名。

## 1. 准备工作

### 1.1 更新 package.json
确保 `package.json` 中包含正确的构建命令：

```json
{
  "scripts": {
    "docs:dev": "vitepress dev",
    "docs:build": "vitepress build",
    "docs:preview": "vitepress preview"
  }
}
```

### 1.2 创建 Vercel 配置文件
在项目根目录创建 `vercel.json`：

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run docs:build",
        "outputDirectory": ".vitepress/dist"
      }
    }
  ]
}
```

## 2. 推送到 GitHub

```bash
# 初始化 Git 仓库（如果还未初始化）
git init

# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "feat: initial commit"

# 添加远程仓库（请将 URL 替换为您的 GitHub 仓库地址）
git remote add origin https://github.com/yancongya/KraftyFx.github.io.git

# 推送到 GitHub
git push -u origin main
```

## 3. 部署到 Vercel

1. 登录 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 从 GitHub 导入您的仓库
4. 配置构建设置：
   - Framework Preset: 选择 "Vite"
   - Build Command: `npm run docs:build`
   - Output Directory: `.vitepress/dist`
5. 点击 "Deploy"

## 4. 配置自定义域名

### 4.1 在 Vercel 中添加域名

1. 在 Vercel 项目设置中点击 "Domains"
2. 输入您的域名并点击 "Add"
3. Vercel 会提供要添加的 DNS 记录

### 4.2 在 Cloudflare 配置 DNS

1. 登录 Cloudflare 控制台
2. 选择您的域名
3. 进入 DNS 设置
4. 添加以下记录：
   ```
   类型: CNAME
   名称: www（或其他子域名）
   内容: cname.vercel-dns.com
   代理状态: 建议开启（橙色云朵）
   ```

5. 如果要配置裸域名（例如 example.com），添加：
   ```
   类型: A
   名称: @
   内容: 76.76.21.21
   代理状态: 建议开启（橙色云朵）
   ```

### 4.3 SSL/TLS 设置（Cloudflare）

1. 在 Cloudflare 中进入 "SSL/TLS" 设置
2. 推荐设置：
   - SSL/TLS 加密模式：选择 "完全" 或 "完全（严格）"
   - 始终使用 HTTPS：开启
   - 自动 HTTPS 重写：开启

## 5. 验证部署

1. 等待 DNS 记录生效（可能需要几分钟到几小时）
2. 访问您的自定义域名，确保网站正常加载
3. 检查 HTTPS 是否正常工作（浏览器地址栏应显示安全锁图标）

## 6. 更新网站内容

后续更新网站内容时，只需：

```bash
# 添加更改
git add .

# 提交更改
git commit -m "你的提交信息"

# 推送到 GitHub
git push

# Vercel 将自动部署更新
```

## 故障排除

### DNS 问题
- 使用 `dig` 或 `nslookup` 命令检查 DNS 解析
- 检查 Cloudflare DNS 记录是否正确
- 确认 DNS 传播是否完成（可能需要等待）

### SSL 证书问题
- 确保 Cloudflare 的 SSL/TLS 设置正确
- 检查是否存在混合内容警告
- 验证证书是否正确颁发和安装

### 部署失败
- 检查 Vercel 部署日志
- 确认构建命令和输出目录配置正确
- 验证所有依赖是否正确安装

## 有用的链接

- [Vercel 文档](https://vercel.com/docs)
- [Cloudflare 文档](https://developers.cloudflare.com/fundamentals/)
- [VitePress 部署指南](https://vitepress.dev/guide/deploy)