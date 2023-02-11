// task1
let a = 'test'
if(a = 'test'){
    console.log('Верно')
}    
else{
    console.log('Неверно')
}

a = 'test' ? console.log('Верно') : console.log('Неверно')
// task2
let m = 49
let n
if (m > 50){
    n = 'большое'
}
else {
    n = 'маленькое' 
}
console.log(n)

// тернарный метод
m > 50 ? n = 'большое' : n = 'маленькое'
console.log(n)

// taks3
let aa = 5
if(aa === 0 || aa === 2){
    console.log(aa + 7) 
}
else{
    console.log(aa / 10)
}
// тернарный метод
aa === 0 || aa === 2 ? console.log(aa + 7) : console.log(aa / 10)

let b = 0
if(b === 0 || b === 2){
    console.log(b + 7) 
}
else{
    console.log(b / 10)
}
// тернарный метод
b === 0 || b === 2 ? console.log(b + 7) : console.log(b / 10)

let c = -3
if(c === 0 || c === 2){
    console.log(c + 7 ) 
}
else{
    console.log(c / 10)
}
// тернарный метод
c === 0 || c === 2 ? console.log(c + 7 ) : console.log(c / 10)

let v = 2
if(v === 0 || v === 2){
    console.log(v + 7) 
}
else{
    console.log(v = v / 10)
}
// тернарный метод
v === 0 || v === 2 ? console.log(v + 7) : console.log(v = v / 10)
// task4
let ac = 1 
    b = 3
if(ac <= 1 && b >= 3){
    console.log(ac + b)
}
else{
    console.log(ac - b)
}
// тернарный метод
ac <= 1 && b >= 3 ? console.log(ac + b) : console.log(ac - b)


let q = 0 
    w = 6
if(q <= 1 && w >= 3){
    console.log(q + w)
}
else{
    console.log(q - w)
}
// тернарный метод
q <= 1 && w >= 3 ? console.log(q + w) : console.log(q - w)

let r = 3 
    t = 5
if(r <= 1 && t >= 3){
    console.log(r + t)
}
else{
    console.log(r - t)
}
// тернарный метод
r <= 1 && t >= 3 ? console.log(r + t) : console.log(r - t)

// task5
let seasons = 'июнь'
switch (seasons) {
    case 'декабрь':
    case 'январь':
    case 'февраль':
        console.log('зима')
        break;
    case 'апрель':
    case 'март':
    case 'май':
        console.log('весна')
        break;
    case 'июнь':
    case 'июль':
    case 'август':
        console.log('лето')
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        console.log('осень')
        break;
}

// task6
let time = 55
if(time >= 0 && time <= 15){
    console.log('время относится к четверти часа')
}
if(time > 15 && time <= 30){
    console.log('время относится к половине часа')
}
if(time > 30 && time <= 45){
    console.log('время относится к 3/4 часа')
}
if(time > 45 && time <= 60){
    console.log('время относится к целому часу')
}
else{
    console.log('неизвестный диапазон')
    
}

// task7
let num = 5 
if(0 == num % 3 && 0 == num % 5){
    console.log('MasterYoda')
}                            
else if(0 == num % 3){
    console.log('Master')
}                        
else{
    console.log('Yoda')
}

let  = 15


                                                                                      
