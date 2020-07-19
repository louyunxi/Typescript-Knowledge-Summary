# Typescript 常用语法总结
---------
ts 是js的超集 包含es5 和es6
欢迎白嫖复习学习
# 安装 Typescript
node 
全局安装 npm install -g typescript
## ts单文件编译
即可新建 demo.ts文件
通过: tsc ./demo.ts 进行编译ts文件 同级生成编译后 demo.js
## 配置自动编译
项目路径下 打开命令行 输入：tsc --init 
会在当前项目文件夹 自动生成 tsconfig.json ts配置文件
在配置文件中 可设置输出文件夹路径 "outDir":'./js' 等
vscode 运行自动监听编译步骤
终端>运行任务>typescript>tsc:监视- 项目路径/tsconfig.json
---------
学习内容 请参照内部

















