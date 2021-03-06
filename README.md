# package-icons

package-icons is a command line tool to package svg icons into font file with useable css

## 简介

我们在开发的时候，UI大大会不停更新svg矢量图标，所以我们一次又一次地手动用 [panda](https://github.com/thunkli/panda) 这个工具来更新图标的字体库。来一个，更新一次；来两个，更新一双；来三个……擦！终于有一天，[见勇](https://github.com/Devil-Cong)怒了（不要问我[见勇](https://github.com/Devil-Cong)是谁），总不能打UI大大（说不定也打不过……），于是就打（写）了这个小工具。    

**使用这个小工具，我们需要的东西有：**

    1. 一个装满svg文件的文件夹
    2. 每个svg文件都做好英语命名，例如: action-search.svg, action-cancel.svg

**运行后，我们得到的东西有：**

    1. eot/svg/ttf/woff 字体文件
    2. css文件（所有的图标class名会根据svg文件名生成）
    3. 预览用的html文件

理论上，配合脚本，这些woff和css可以直接在项目中使用，显示漂亮的图标。    

UI大大每次发过来一个svg的zip包，[见勇](https://github.com/Devil-Cong)微微一笑，运行脚本。    

就这样，世界和平了……

## Install and run

Please make sure you have Node 8+ installed.

```shell
npm install -g package-icons
package-icons
```

if you get npx installed, try

```shell
npx package-icons
```

![Alt text](./pictures/description.png?raw=true)

## Example

1. Given you have a folder like below

    ![Alt text](./pictures/source.png?raw=true)

2. Then you can run

    ```shell
    npx package-icons \
    --source /Users/lujunjie/code/github/gfsfe/package-icons/test/icons  \
    --target /Users/lujunjie/code/github/gfsfe/package-icons/test/target \
    --class-prefix w-icon-
    ```

3. You will get the result in the target folder like below

    ![Alt text](./pictures/target.png?raw=true)

4. You can double click the preview.html to see the result.

    ![Alt text](./pictures/preview.png?raw=true)

5. There is a icon-meta.json which contain the meta information of the class name and font value, you can use it to generate project final css with predefined template in your project's build flow.

    ```json
    {
        "w-icon-add": "e001",
        "w-icon-close": "e002",
        "w-icon-delete": "e003",
        "w-icon-done": "e004",
        "w-icon-left": "e005",
        "w-icon-right": "e006",
        "w-icon-share": "e007",
        "w-icon-win": "e008"
    }
    ```
