# ES6 Classes
This directoty contains the implementation script for this project.

## Setup
* The following files are required to have the environment setup
`.eslintrc.js`, `package.json`, and `babel.config.js`
* On your `terminal` run the following command to install the needed dependencies.
```bash
    npm install
```

## Usages
The following are samples to run the script

`0-main.js`
```js
    import ClassRoom from "./0-classroom.js";

    const room = new ClassRoom(10);
    console.log(room._maxStudentsSize)
```

`1-main.js`
```js
    import initializeRooms from './1-make_classrooms.js';

    console.log(initializeRooms());
```


`2-main.js`
```js
    import HolbertonCourse from "./2-hbtn_course.js";

    const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
    console.log(c1.name);
    c1.name = "Python 101";
    console.log(c1);

    try {
        c1.name = 12;
    } 
    catch(err) {
        console.log(err);
    }

    try {
        const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
    }
    catch(err) {
        console.log(err);
    }
```


`3-main.js`
```js
    import Currency from "./3-currency.js";

    const dollar = new Currency('$', 'Dollars');
    console.log(dollar.displayFullCurrency());
```


`4-main.js`
```js
    import Pricing from './4-pricing.js';
    import Currency from './3-currency.js';

    const p = new Pricing(100, new Currency("EUR", "Euro"))
    console.log(p);
    console.log(p.displayFullPrice());
```


`5-main.js`
```js
    import Building from './5-building.js';

    const b = new Building(100);
    console.log(b);

    class TestBuilding extends Building {}

    try {
        new TestBuilding(200)
    }
    catch(err) {
        console.log(err);
    }
```


`6-main.js`
```js
    import SkyHighBuilding from './6-sky_high.js';

    const building = new SkyHighBuilding(140, 60);
    console.log(building.sqft);
    console.log(building.floors);
    console.log(building.evacuationWarningMessage());
```


`7-main.js`
```js
    import Airport from "./7-airport.js";

    const airportSF = new Airport('San Francisco Airport', 'SFO');
    console.log(airportSF);
    console.log(airportSF.toString());
```


`8-main.js`
```js
    import HolbertonClass from "./8-hbtn_class.js";

    const hc = new HolbertonClass(12, "Mezzanine")
    console.log(Number(hc));
    console.log(String(hc));
```


`9-main.js`
```js
    import listOfStudents from "./9-hoisting.js";

    console.log(listOfStudents);

    const listPrinted = listOfStudents.map(
        student => student.fullStudentDescription
    );

    console.log(listPrinted)
```


`10-main.js`
```js
    import Car from "./10-car.js";

    class TestCar extends Car {}

    const tc1 = new TestCar("Nissan", "Turbo", "Pink");
    const tc2 = tc1.cloneCar();

    console.log(tc1);
    console.log(tc1 instanceof TestCar);

    console.log(tc2);
    console.log(tc2 instanceof TestCar);

    console.log(tc1 == tc2);
```