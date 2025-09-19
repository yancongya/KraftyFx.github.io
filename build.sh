#!/bin/bash

# 安装依赖
echo "Installing dependencies..."
npm install

# 清理缓存目录
echo "Cleaning cache..."
rm -rf .vitepress/cache
rm -rf .vitepress/dist

# 构建文档
echo "Building documentation..."
npm run docs:build

# 验证构建输出
echo "Verifying build output..."
if [ -d ".vitepress/dist" ]; then
    echo "Build successful!"
else
    echo "Build failed - output directory not found"
    exit 1
fi