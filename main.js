// task1
// if else
let a = 'test'
if(a = 'test'){
    console.log('Верно')
}    
else{
    console.log('Неверно')
}
//тернарный метод
a = 'test' ? console.log('Верно') : console.log('Неверно')
//switch case
let aaa = 'test'
switch (aaa) {
    case 'test':
        console.log('верно')
        break;
    default:
        console.log('неверно')
        break;
}


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
// тернарный метод 2
m > 50 ? n = 'большое' : n = 'маленькое'
console.log(n)
//switch case 2
let mm = 49
switch (true) {
    case (m > 50) :
    console.log(n = 'большое')
        break;
    default:
    console.log(n = 'маленькое')
        break;    
}


// task3
let aa = 5
if(aa === 0 || aa === 2){
    console.log(aa + 7) 
}
else{
    console.log(aa / 10)
}
// тернарный метод 3
aa === 0 || aa === 2 ? console.log(aa + 7) : console.log(aa / 10)
//switch case3
let scaa = 5
switch(scaa){
    case 0:
    case 2:
    console.log(scaa + 7)
        break;
    default:
    console.log(scaa / 10) 
}
//if else3
let b = 0
if(b === 0 || b === 2){
    console.log(b + 7) 
}
else{
    console.log(b / 10)
}
// тернарный метод3
b === 0 || b === 2 ? console.log(b + 7) : console.log(b / 10)
//switch case3
let scb = 0
switch(scb){
    case 0:
    case 2:
    console.log(scb + 7)
        break;
    default:
        console.log(scb / 10) 
}

// if else3
let c = -3
if(c === 0 || c === 2){
    console.log(c + 7 ) 
}
else{
    console.log(c / 10)
}
// тернарный метод3
c === 0 || c === 2 ? console.log(c + 7 ) : console.log(c / 10)
//switch case3
let scc = -3
switch(scc){
    case 0:
    case 2:
    console.log(scc + 7)
        break;
    default:
        console.log(scc / 10) 
}

//if else3
let v = 2
if(v === 0 || v === 2){
    console.log(v + 7) 
}
else{
    console.log(v = v / 10)
}
// тернарный метод3
v === 0 || v === 2 ? console.log(v + 7) : console.log(v = v / 10)
//switch case3
let scv = 2
switch(scv){
    case 0:
    case 2:
    console.log(scv + 7)
        break;
    default:
        console.log(scv / 10) 
}


// task4
let ac = 1 
    b = 3
if(ac <= 1 && b >= 3){
    console.log(ac + b)
}
else{
    console.log(ac - b)
}
// тернарный метод4
ac <= 1 && b >= 3 ? console.log(ac + b) : console.log(ac - b)
//switch case
let wac = 1 
    wb = 3 
switch(true){
    case (wac <= 1 && wb >= 3):
        console.log(wac+wb);
        break;
    default:
        console.log(wac-wb);
    
}

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
// switch case
let wq = 0
    ww = 6
switch(true){
    case (wq <= 1 && ww>= 3):
        console.log(wq + ww);
        break;
    default:
        console.log(wq = ww);
}

//if else
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
//switch case
let wr = 3
    wt = 5
switch(true){
    case (wr <= 1 && wt>= 3):
        console.log(wr = wt);
        break;
    default:
        console.log(wr - wt);
}

// task5

//if else
let season = 'июнь'
if(season === 'декабрь' || season === 'январь' || season === 'февраль'){
    console.log('зима')
}
if(season === 'апрель' || season === 'март' || season == 'май'){
    consonle.log('весна')
}
if(season === 'июнь' || season === 'июль' || season === 'август'){
    console.log('лето')
}
if(season === 'сентябрь' || season === 'октябрь' || season === 'ноябрь'){
    console.log('осень')
}

//тернарный метод
season === 'декабрь' || season === 'январь' || season === 'февраль' ? console.log('зима'):
season === 'апрель' || season === 'март' || season == 'май' ? consonle.log('весна') :
season === 'июнь' || season === 'июль' || season === 'август' ? console.log('лето') : 
season === 'сентябрь' || season === 'октябрь' || season === 'ноябрь' ? console.log('осень') : console.log('не такого времени года')

// switch case 
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

//if else
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

//тернарный метод
time >= 0 && time <= 15 ? console.log('время относится к четверти часа') : 
time > 15 && time <= 30 ? console.log('время относится к половине часа') : 
time > 30 && time <= 45 ? console.log('время относится к 3/4 часа') :
time > 45 && time <= 60 ? console.log('время относится к целому часу') : console.log('неизвестный диапазон')

//switch case
let times = 55
switch(true){
    case (time >= 0 && time <= 15):
        console.log('время относится к четверти часа')
        break;
    case (time > 15 && time <= 30):
        console.log('время относится к половине часа')
        break;
    case (time > 30 && time <= 45):
        console.log('время относится к 3/4 часа')
        break;
    case (time > 45 && time <= 60):
        console.log('время относится к целому часу')
        break;

}


// task7

// if else
let num = 5 
if(0 === num % 3 && 0 === num % 5){
    console.log('MasterYoda')
}                            
else if(0 === num % 3){
    console.log('Master')
}                        
else{
    console.log('Yoda')
}


//тернарный метод
0 === num % 3 && 0 === num % 5 ? console.log('MasterYoda') : 
0 === num % 3 ? console.log('Master') : 
0 === num % 5 ? console.log('Yoda') : console.log('undefined')

//switch case
let nums = 5
switch(true){
    case (0 === nums % 3 && 0 === nums % 5):
        console.log('MasterYoda')
        break;
    case (0 === nums % 3):
        console.log('Master')
        break;
    case 0 === nums % 5:
        console.log('Yoda')
        break;
}