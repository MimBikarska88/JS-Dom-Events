function sortArr(arr, order) {
    let asc = (a, b) => a - b;
    let desc = (a, b) => b - a;

    if (order === 'desc') {
        let res = arr.sort(desc);
        return res;
    }
    if (order === 'asc') {
        let res = arr.sort(asc);
        return res;
    }
}

/****
 * Input : 
 * 
 * sortArr([14, 7, 17, 6, 8], 'asc');
    sortArr([14, 7, 17, 6, 8], 'desc');
 * 
 * 
 * 
 * Output : 
 * [6, 7, 8, 14, 17]
 * [17, 14, 8, 7, 6]
 * 
 */

function solution2() {
    let data = {};

    Array.from(arguments).forEach((arg) => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);
        if (data.hasOwnProperty(type)) {
            data[type]++;
        } else {
            data[type] = 1;
        }

    })
    Object.keys(data).sort((a, b) => data[b] - data[a]).forEach((key) => console.log(`${key} = ${data[key]}`));
}
/*****
 * Input : 
 * 
 *  solution2('cat', 42, function () { console.log('Hello world!'); })
    solution2({ name: 'bob' }, 3.333, 9.999);
 * 
 * Output : 
 * 
 * 
 * string: cat
number: 42
function: function () { console.log(&#39;Hello world!&#39;); }
string = 1
number = 1
function = 1
 * 
 * object: [object Object]
number: 3.333
number: 9.999
number = 2
object = 1

 * 
 * 
 * 
 * 
 */


function getFibonator() {
    let [a, b] = [0, 1];
    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}

function breakfastRobot() {
    let recipes = {
        "apple": {
            carbohydrate: 1,
            flavour: 2,
            calculateIngredients(quantity) {
                return {
                    carbohydrate: this.carbohydrate * quantity,
                    flavour: this.flavour * quantity,
                }
            }
        },
        "lemonade": {
            carbohydrate: 10,
            flavour: 20,
            calculateIngredients(quantity) {
                return {
                    carbohydrate: Number(this.carbohydrate * quantity),
                    flavour: Number(this.flavour * quantity),
                }
            }
        },
        "burger": {
            carbohydrate: 5,
            flavour: 3,
            fat: 7,
            calculateIngredients(quantity) {
                return {
                    carbohydrate: this.carbohydrate * quantity,
                    flavour: this.flavour * quantity,
                    fat: this.fat * quantity,
                }
            }
        },
        "eggs": {
            protein: 3,
            fat: 1,
            flavour: 1,
            calculateIngredients(quantity) {
                return {
                    protein: this.protein * quantity,
                    flavour: this.flavour * quantity,
                    fat: this.fat * quantity,
                }
            }
        },
        "turkey": {
            protein: 10,
            fat: 10,
            flavour: 10,
            carbohydrate: 10,
            calculateIngredients(quantity) {
                return {
                    carbohydrates: this.carbohydrate * quantity,
                    flavour: this.flavour * quantity,
                    fat: this.fat * quantity,
                    flavour: this.flavour * quantity
                }
            }
        }
    };
    let availableMicroelements = {};

    return (input) => {
        let commands = input.split(' ');
        let command = commands[0];
        switch (command) {
            case 'restock':
                {
                    let elem = commands[1];
                    let quantity = Number(commands[2]);
                    if (availableMicroelements.hasOwnProperty(elem)) {
                        availableMicroelements[elem] += quantity;
                    } else {
                        availableMicroelements[elem] = quantity;
                    }
                    console.log(availableMicroelements);
                }

                break;

            case 'prepare':
                {
                    let recipe = commands[1];
                    let quantity = Number(commands[2]);
                    if (recipes[recipe] !== undefined) {
                        let ingredients = recipes[recipe].calculateIngredients(quantity);
                        console.log(ingredients);
                        let keys = Object.keys(ingredients);
                        let canPrepare = true;
                        for (let key of keys) {
                            if (availableMicroelements[`${key}`] == undefined) {
                                canPrepare == false;
                            } else if (availableMicroelements[`${key}`] < ingredients[key]) {
                                console.log(`Not enough ${key} in stock.`);
                                canPrepare = false;

                            }
                        }
                        if (canPrepare == true) {
                            for (let key of keys) {
                                availableMicroelements[`${key}`] -= ingredients[key];
                            }
                        }
                    }


                    console.log(availableMicroelements);
                }
                break;

        }
    }
}
let manager = breakfastRobot();
manager("restock flavour 50");
manager("prepare lemonade 4");
manager("restock carbohydrate 10");
manager("restock flavour 10");
manager("prepare apple 2");
manager("restock fat 10");
manager