protractor-automation-demo-typescript
=======

This repo covers protractor automation of a 
[demo calculator page](http://juliemr.github.io/protractor-demo/), 
as described in 
[protractor tutorial](https://www.protractortest.org/#/tutorial),
but it uses 
[TypeScript](https://www.typescriptlang.org/).

Check 
[this repo](https://github.com/HassaanAhmadFarooqi/protractor-automation-demo) 
for the JavaScript version of the same.

## How to Run

- Install the dependencies:
    ```
    npm install
    ```
- Run the test
    ```
    npm run test
    ```
    It'll first transpile typescript into javascript and then will run the test
    (Check 
    [package.json](package.json) 
    for more details).

*Note:* If you're using 
[VSCode](https://code.visualstudio.com/), 
then you can run the program using VScode's Run Button also.  
(Configurations for running using Run button are present in 
[.vscode/launch.json](.vscode/launch.json)
)
