# 架构想法
[**issue #1**](https://github.com/zjuwkk/newQCW/issues/1)

# 分支规范
[**issue #2**](https://github.com/zjuwkk/newQCW/issues/2)

# 开发时间轴
我们慢慢来2333

# gitignore
**注意：** 
- 包文件、缓存文件、开发环境配置文件（如.vscode）不可git，如果未被现有gitignore文件包含请进行添加，**单元测试文件**只能push到test分支。
- 必须git push包依赖说明文件。

# 包管理
包管理统一采用yarn。yarn的安装过程（Windows下推荐采用scoop安装方式）可以详见官网说明。不允许使用npm i！

# 语法检查
目前js阶段语法检查必须使用eslint。

# 代码风格统一
代码统一必须采用prettier，在编辑环境安装prettier配置。进入git merge/push工作流前先做代码风格统一。
Hotkey: **CMD/CTRL + Shift + F -> Format Document**

# 其他
- 开发流程：先pull最新分支，然后新建开发分支，运行npm i安装依赖，开始开发，最后合并到相应分支并git push