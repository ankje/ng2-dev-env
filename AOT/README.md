# 使用rollup插件来实现angular工程的AOT预编译

# 编译工程生成工厂代码
 "node_modules/.bin/ngc" -p tsconfig-aot.json

# 运行rollup生成捆文件"bulid.js"
 "node_modules/.bin/rollup"  -c rollup-config.js

# 在程序入口页index.html中引入"bulid.js"
  <script src="build.js"></script>

# 工作流与便利脚本:npm脚本
    {
      "scripts": {
        "build:aot": "ngc -p tsconfig-aot.json && rollup -c rollup-config.js"
      }
    }

# 先用JIT开发，再AOT发布
