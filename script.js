//-------------------------------------задание 1---------------------------------------------
// let data = ["Иван", "Иванов", "Отдел разработки", "Программист", 2000];

// let [name, surname, department, position, salary] = data;
// console.log(name, surname, department, position, salary); 



//-------------------------------------задание 2---------------------------------------------
// const data = ["Иван", "Иванов", "Отдел разработки", "Программист", 2000];

// let [name, surname, info ] = data;
// console.log(name, surname, info); 



//-------------------------------------задание 3---------------------------------------------
// const data = ["Иван", "Иванов", "Отдел разработки", undefined, 2000];

// let [name, surname, department, position = "Junior"] = data;
// console.log(name, surname, department, position);



//-------------------------------------задание 4---------------------------------------------
const data = {
    color: "red",
    width: 400,
    height: 500,
};

let {color, width, height} = data;
console.log(color, width, height);