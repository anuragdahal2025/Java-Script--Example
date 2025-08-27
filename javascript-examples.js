// JavaScript Examples by Anurag Dahal

// Variables and Data Types
function demoVariables() {
    let output = '';
    var oldWay = "I'm declared with var";
    let modernWay = "I'm declared with let";
    const constantValue = "I'm declared with const";
    
    output += "=== Variable Declarations ===\n";
    output += `var: ${oldWay}\n`;
    output += `let: ${modernWay}\n`;
    output += `const: ${constantValue}\n`;
    
    document.getElementById('variables-output').textContent = output;
}

function demoDataTypes() {
    let output = '';
    const myString = "Hello, World!";
    const myNumber = 42;
    const myBoolean = true;
    const myArray = [1, 2, 3, "four", true];
    const myObject = { name: "Anurag", age: 20, city: "Kathmandu" };
    
    output += "=== Data Types ===\n";
    output += `String: "${myString}" (type: ${typeof myString})\n`;
    output += `Number: ${myNumber} (type: ${typeof myNumber})\n`;
    output += `Boolean: ${myBoolean} (type: ${typeof myBoolean})\n`;
    output += `Array: [${myArray}] (type: ${typeof myArray})\n`;
    output += `Object: ${JSON.stringify(myObject)} (type: ${typeof myObject})\n`;
    
    document.getElementById('datatypes-output').textContent = output;
}

function demoTypeConversion() {
    let output = '';
    const stringNum = "123";
    const convertedNum = Number(stringNum);
    const num = 456;
    const numToString = num.toString();
    
    output += "=== Type Conversion ===\n";
    output += `String to Number: "123" → ${convertedNum} (type: ${typeof convertedNum})\n`;
    output += `Number to String: 456 → "${numToString}" (type: ${typeof numToString})\n`;
    
    document.getElementById('conversion-output').textContent = output;
}

// Operators
function demoArithmetic() {
    let output = '';
    const a = 10, b = 3;
    
    output += "=== Arithmetic Operators ===\n";
    output += `Addition: ${a} + ${b} = ${a + b}\n`;
    output += `Subtraction: ${a} - ${b} = ${a - b}\n`;
    output += `Multiplication: ${a} * ${b} = ${a * b}\n`;
    output += `Division: ${a} / ${b} = ${a / b}\n`;
    output += `Modulus: ${a} % ${b} = ${a % b}\n`;
    
    document.getElementById('arithmetic-output').textContent = output;
}

function demoComparison() {
    let output = '';
    const a = 5, b = "5", c = 10;
    
    output += "=== Comparison Operators ===\n";
    output += `Equality (==): ${a} == "${b}": ${a == b}\n`;
    output += `Strict Equality (===): ${a} === "${b}": ${a === b}\n`;
    output += `Greater Than: ${a} > ${c}: ${a > c}\n`;
    output += `Less Than: ${a} < ${c}: ${a < c}\n`;
    
    document.getElementById('comparison-output').textContent = output;
}

function demoLogical() {
    let output = '';
    const a = true, b = false;
    
    output += "=== Logical Operators ===\n";
    output += `AND: ${a} && ${b}: ${a && b}\n`;
    output += `OR: ${a} || ${b}: ${a || b}\n`;
    output += `NOT: !${a}: ${!a}\n`;
    
    document.getElementById('logical-output').textContent = output;
}

// Control Structures
function demoIfElse() {
    const age = parseInt(document.getElementById('age-input').value);
    let output = '';
    
    output += `Age: ${age}\n\n`;
    
    if (age < 13) {
        output += "You are a child.\n";
    } else if (age < 20) {
        output += "You are a teenager.\n";
    } else if (age < 65) {
        output += "You are an adult.\n";
    } else {
        output += "You are a senior.\n";
    }
    
    document.getElementById('ifelse-output').textContent = output;
}

function demoSwitch() {
    const dayNum = parseInt(document.getElementById('day-input').value);
    let output = '';
    let dayName;
    
    switch (dayNum) {
        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
        case 7: dayName = "Sunday"; break;
        default: dayName = "Invalid day number";
    }
    
    output += `Day ${dayNum}: ${dayName}\n`;
    document.getElementById('switch-output').textContent = output;
}

function demoLoops() {
    let output = '';
    
    output += "=== For Loop ===\n";
    for (let i = 1; i <= 5; i++) {
        output += `Iteration ${i}\n`;
    }
    
    output += "\n=== While Loop ===\n";
    let j = 1;
    while (j <= 3) {
        output += `While iteration ${j}\n`;
        j++;
    }
    
    document.getElementById('loops-output').textContent = output;
}

// Functions
function demoFunctionDeclarations() {
    let output = '';
    
    function greet(name) {
        return `Hello, ${name}!`;
    }
    
    const multiply = function(a, b) {
        return a * b;
    };
    
    const square = x => x * x;
    
    output += "=== Function Examples ===\n";
    output += `Function declaration: ${greet("Anurag")}\n`;
    output += `Function expression: ${multiply(4, 5)}\n`;
    output += `Arrow function: ${square(6)}\n`;
    
    document.getElementById('functions-output').textContent = output;
}

function demoFunctionParameters() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let output = '';
    
    function calculateSum(a, b = 0) {
        return a + b;
    }
    
    output += `Numbers: ${num1}, ${num2}\n`;
    output += `Sum: ${calculateSum(num1, num2)}\n`;
    
    document.getElementById('parameters-output').textContent = output;
}

function demoArrowFunctions() {
    let output = '';
    
    const double = x => x * 2;
    const add = (a, b) => a + b;
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(x => x * 2);
    
    output += "=== Arrow Function Examples ===\n";
    output += `double(5): ${double(5)}\n`;
    output += `add(10, 20): ${add(10, 20)}\n`;
    output += `Array map: [${numbers}] → [${doubled}]\n`;
    
    document.getElementById('arrow-output').textContent = output;
}

// Arrays
function demoArrayMethods() {
    let output = '';
    const fruits = ["Apple", "Banana", "Orange"];
    
    output += "=== Array Methods ===\n";
    output += `Original: [${fruits}]\n`;
    
    fruits.push("Grape");
    output += `After push: [${fruits}]\n`;
    
    const sorted = [...fruits].sort();
    output += `Sorted: [${sorted}]\n`;
    
    const found = fruits.find(fruit => fruit.startsWith("B"));
    output += `Find "B": ${found}\n`;
    
    document.getElementById('array-methods-output').textContent = output;
}

function demoArrayIteration() {
    let output = '';
    const numbers = [1, 2, 3, 4, 5];
    
    output += "=== Array Iteration ===\n";
    output += `Numbers: [${numbers}]\n\n`;
    
    output += "forEach:\n";
    numbers.forEach((num, index) => {
        output += `  ${index}: ${num}\n`;
    });
    
    const doubled = numbers.map(num => num * 2);
    output += `\nmap: [${doubled}]\n`;
    
    const evens = numbers.filter(num => num % 2 === 0);
    output += `filter (evens): [${evens}]\n`;
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    output += `reduce (sum): ${sum}\n`;
    
    document.getElementById('array-iteration-output').textContent = output;
}

// Objects
function demoObjects() {
    let output = '';
    
    const person = {
        name: "Anurag Dahal",
        age: 20,
        city: "Kathmandu",
        greet() {
            return `Hello, I'm ${this.name}!`;
        }
    };
    
    output += "=== Object Examples ===\n";
    output += `Person: ${JSON.stringify(person, null, 2)}\n\n`;
    output += `Access: ${person.name}\n`;
    output += `Method: ${person.greet()}\n`;
    
    const keys = Object.keys(person);
    output += `Keys: [${keys}]\n`;
    
    document.getElementById('objects-output').textContent = output;
}

function demoDestructuring() {
    let output = '';
    
    const person = { name: "Anurag", age: 20, city: "Kathmandu" };
    const numbers = [1, 2, 3, 4, 5];
    
    // Object destructuring
    const { name, age } = person;
    output += "=== Object Destructuring ===\n";
    output += `const { name, age } = person\n`;
    output += `  name: ${name}, age: ${age}\n\n`;
    
    // Array destructuring
    const [first, second, ...rest] = numbers;
    output += "=== Array Destructuring ===\n";
    output += `const [first, second, ...rest] = [${numbers}]\n`;
    output += `  first: ${first}, second: ${second}, rest: [${rest}]\n`;
    
    document.getElementById('destructuring-output').textContent = output;
}

// DOM Manipulation
function changeText() {
    const element = document.getElementById('changeable-text');
    element.textContent = "Text has been changed by JavaScript!";
}

function changeColor() {
    const element = document.getElementById('changeable-text');
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

function toggleVisibility() {
    const element = document.getElementById('changeable-text');
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}

// Event handling
document.addEventListener('DOMContentLoaded', function() {
    const eventButton = document.getElementById('event-button');
    const eventsOutput = document.getElementById('events-output');
    
    eventButton.addEventListener('click', function() {
        eventsOutput.textContent += 'Button clicked!\n';
    });
    
    // Form handling
    const demoForm = document.getElementById('demo-form');
    const formOutput = document.getElementById('form-output');
    
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        formOutput.textContent = `Form submitted!\nName: ${name}\nEmail: ${email}`;
        demoForm.reset();
    });
});

// Local Storage
let counter = parseInt(localStorage.getItem('counter')) || 0;
document.getElementById('counter').textContent = counter;

function incrementCounter() {
    counter++;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = counter;
}

function decrementCounter() {
    counter--;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = counter;
}

function resetCounter() {
    counter = 0;
    localStorage.setItem('counter', counter);
    document.getElementById('counter').textContent = counter;
}

// Todo list
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    
    if (text) {
        const todo = { id: Date.now(), text: text, completed: false };
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
        input.value = '';
    }
}

function toggleTodo(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

function displayTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        todoItem.innerHTML = `
            <span onclick="toggleTodo(${todo.id})" style="cursor: pointer;">
                ${todo.text}
            </span>
            <button class="btn btn-warning" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(todoItem);
    });
}

function clearTodos() {
    todos = [];
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
}

displayTodos();

// Error Handling
function demoTryCatch() {
    let output = '';
    
    output += "=== Try-Catch Examples ===\n\n";
    
    try {
        const result = 10 / 0;
        if (!isFinite(result)) {
            throw new Error("Division by zero results in infinity");
        }
        output += `Result: ${result}\n`;
    } catch (error) {
        output += `Error caught: ${error.message}\n`;
    }
    
    try {
        const invalidJSON = "{ invalid json }";
        const parsed = JSON.parse(invalidJSON);
        output += `Parsed: ${parsed}\n`;
    } catch (error) {
        output += `JSON parse error: ${error.message}\n`;
    }
    
    document.getElementById('error-output').textContent = output;
}

function demoAsyncError() {
    let output = '';
    
    output += "=== Async Error Handling ===\n\n";
    
    const asyncOperation = new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve("Operation successful!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 1000);
    });
    
    asyncOperation
        .then(result => {
            output += `Success: ${result}\n`;
        })
        .catch(error => {
            output += `Error: ${error.message}\n`;
        });
    
    document.getElementById('async-error-output').textContent = output;
}

// Asynchronous JavaScript
function demoPromises() {
    let output = '';
    
    output += "=== Promise Examples ===\n\n";
    
    const basicPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 1 second!");
        }, 1000);
    });
    
    basicPromise.then(result => {
        output += `Basic Promise: ${result}\n`;
    });
    
    document.getElementById('promises-output').textContent = output;
}

function demoAsyncAwait() {
    let output = '';
    
    output += "=== Async/Await Examples ===\n\n";
    
    async function fetchUserData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ name: "Anurag", age: 20, city: "Kathmandu" });
            }, 1000);
        });
    }
    
    async function getUserInfo() {
        try {
            output += "Fetching user data...\n";
            const userData = await fetchUserData();
            output += `User data: ${JSON.stringify(userData)}\n`;
            return userData;
        } catch (error) {
            output += `Error: ${error.message}\n`;
        }
    }
    
    getUserInfo();
    
    document.getElementById('async-output').textContent = output;
}

function demoFetch() {
    let output = '';
    
    output += "=== Fetch API Examples ===\n\n";
    
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            output += `Fetched post:\n`;
            output += `Title: ${data.title}\n`;
            output += `Body: ${data.body.substring(0, 50)}...\n`;
        })
        .catch(error => {
            output += `Fetch error: ${error.message}\n`;
        });
    
    document.getElementById('fetch-output').textContent = output;
}
