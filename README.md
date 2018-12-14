# package-icons

package-icons is a command line tool to package svg icons into font file with useable css

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

    You can double click the preview.html to see the result.
