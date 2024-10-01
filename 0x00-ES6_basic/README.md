# ES6 Basics
This directory contains the script implementation of the core functionalities in Ecma-Script 6, the basics.

## Core Content
* Block-scoped variables
* Tradicional and arrow functions
* Types of paramenters
* Operators and string interpolation
* Objects
* Loops

## Setup
* **Install NodeJS latest version**
```bash
    sudo apt install nodejs -y
```
* Confirm installation
```bash
    $ nodejs -v
    $ npm -v
```
* **Install `Jest`, `Babel`, and `ESLint`**
In this project directory, install `Jest`, `Babel` and `ESList` by using the supplied `package.json` and run `npm install` from the `terminal` of your project folder to install all necessary project dependencies.

## Run
The following are sample files to appreciate the script file functionality.

`0-main.js`
```js
    import { taskFirst, taskNext } from './0-constants.js';

    console.log(`${taskFirst()} ${taskNext()}`);
```

`1-main.js`
```js
    import taskBlock from './1-block-scoped.js';

    console.log(taskBlock(true));
    console.log(taskBlock(false));
```

`2-main.js`
```js
    import getNeighborhoodsList from './2-arrow.js';

    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    console.log(res);
```

`3-main.js`
```js
    import getSumOfHoods from './3-default-parameter.js';

    console.log(getSumOfHoods(34));
    console.log(getSumOfHoods(34, 3));
    console.log(getSumOfHoods(34, 3, 4));
```

`4-main.js`
```js
    import returnHowManyArguments from './4-rest-parameter.js';

    console.log(returnHowManyArguments("one"));
    console.log(returnHowManyArguments("one", "two", 3, "4th"));
```

`5-main.js`
```js
    import concatArrays from './5-spread-operator.js';

    console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
```

`6-main.js`
```js
    import getSanFranciscoDescription from './6-string-interpolation.js';

    console.log(getSanFranciscoDescription());
```

`7-main.js`
```js
    import getBudgetObject from './7-getBudgetObject.js';

    console.log(getBudgetObject(400, 700, 900));
```

`8-main.js`
```js
    import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

    console.log(getBudgetForCurrentYear(2100, 5200, 1090));
```
`9-main.js`
```js
    import getFullBudgetObject from './9-getFullBudget.js';

    const fullBudget = getFullBudgetObject(20, 50, 10);

    console.log(fullBudget.getIncomeInDollars(fullBudget.income));
    console.log(fullBudget.getIncomeInEuros(fullBudget.income));
```
`10-main.js`
```js
    import appendToEachArrayValue from './10-loops.js';

    console.log(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-'));
```

`11-main.js`
```js
    import createEmployeesObject from './11-createEmployeesObject.js';

    console.log(createEmployeesObject("Software", [ "Bob", "Sylvie" ]));
```

`12-main.js`
```js
    import createEmployeesObject from './11-createEmployeesObject.js';
    import createReportObject from './12-createReportObject.js';

    const employees = {
        ...createEmployeesObject('engineering', ['Bob', 'Jane']),
        ...createEmployeesObject('marketing', ['Sylvie'])
    };      

    const report = createReportObject(employees);
    console.log(report.allEmployees);
    console.log(report.getNumberOfDepartments(report.allEmployees));
```
