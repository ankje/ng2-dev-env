# 使用rollup插件来实现angular工程的AOT预编译

# 编译工程生成工厂代码
 "node_modules/.bin/ngc" -p tsconfig-aot.json

# 运行rollup生成捆文件"bulid.js"
 "node_modules/.bin/rollup"  -c rollup-config.js

# 在程序入口页index.html中引入"bulid.js"
  <script src="dist/build.js"></script>

# 工作流与便利脚本:npm脚本
    {
      "scripts": {
        "build:aot": "ngc -p tsconfig-aot.json && rollup -c rollup-config.js",
        "serve:aot": "lite-server -c bs-config.aot.json"
      }
    }

# 先用JIT开发，再AOT发布

#usage
>npm run build:aot
>复制/src/index-aot.html到/aot/index.html
>node copy-dist-files
>npm run serve:aot
