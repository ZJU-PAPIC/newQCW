# 架构想法
[**issue #1**](https://github.com/zjuwkk/newQCW/issues/1)

# 分支规范
[**issue #2**](https://github.com/zjuwkk/newQCW/issues/2)

# 开发时间轴
我们慢慢来2333

# gitignore
**注意：** 
- 包文件、缓存文件、开发环境配置文件（如.vscode）不可git，如果未被现有gitignore文件包含请进行添加，**单元测试文件**只能push到test分支。
- 安装第三方npm包时注意save,save到开发依赖还是运行依赖请具体区别。必须git push package依赖说明文件。

# 语法检查
目前js阶段语法检查必须使用eslint，eslint的配置采用eslint-config-airbnb

# 代码风格统一
代码统一必须采用prettier，在编辑环境安装prettier配置。进入git merge/push工作流前先做代码风格统一。
Hotkey: **CMD + Shift + P -> Format Document**

# 其他
- 开发流程：先pull最新分支，然后新建开发分支，运行npm i安装依赖，开始开发，最后合并到相应分支并git push
- 直接使用npm源，尽量不使用cnpm（避免未知依赖错误）