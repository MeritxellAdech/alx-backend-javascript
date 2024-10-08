# ES6 Data Manipulation
This directory contains the implementation script of data manipulation related content.

## Setup
The following are to be created

`package.json`
```js
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

`babel.config.js`
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

`.eslintrc.js`
```js

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```
>[!Note]
>Once the files have been created, you should run `npm install` to execute the `package.json` file.

## usage
For testing purposes the following short script codes can be used. Each `*-main.js` has its respective file srcipt.

`0-main.js`
```js
    import getListStudents from "./0-get_list_students.js";

    console.log(getListStudents());
```

`1-main.js`
```js
    import getListStudentIds from "./1-get_list_student_ids.js";
    import getListStudents from "./0-get_list_students.js";

    console.log(getListStudentIds("hello"));
    console.log(getListStudentIds(getListStudents()));
```

`2-main.js`
```js
    import getListStudents from "./0-get_list_students.js";
    import getStudentsByLocation from "./2-get_students_by_loc.js";

    const students = getListStudents();

    console.log(getStudentsByLocation(students, 'San Francisco'));
```

`3-main.js`
```js
    import getListStudents from "./0-get_list_students.js";
    import getStudentIdsSum from "./3-get_ids_sum.js";

    const students = getListStudents();
    const value = getStudentIdsSum(students);

    console.log(value);
```

`4-main.js`
```js
    import getListStudents from "./0-get_list_students.js";
    import updateStudentGradeByCity from "./4-update_grade_by_city.js";

    console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

    console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
```

`5-main.js`
```js
    import createInt8TypedArray from "./5-typed_arrays.js";

    console.log(createInt8TypedArray(10, 2, 89));
```

`6-main.js`
```js
    import setFromArray from "./6-set.js";

    console.log(setFromArray([12, 32, 15, 78, 98, 15]));
```

`7-main.js`
```js
    import hasValuesFromArray from "./7-has_array_values.js";

    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
    console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));
```

`8-main.js`
```js
    import cleanSet from "./8-clean_set.js";

    console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
    console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
```

`9-main.js`
```js
    import groceriesList from "./9-groceries_list.js";

    console.log(groceriesList());
```

`10-main.js`
```js
    import updateUniqueItems from "./10-update_uniq_items.js";
    import groceriesList from "./9-groceries_list.js";

    const map = groceriesList();
    console.log(map);

    updateUniqueItems(map)
    console.log(map);
```


## Run
The following command is used to run the files individually.

```bash
    username:~$ npm run dev filename.js
```