// Створити функцію, яка робить глибоку копію об'єкту.
// Додаки перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function clone(obj){
    if(obj){
        let functions = [];
        for(let key in obj){
            if (typeof obj[key] === 'function') {
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key})
            }
        }

        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (let function1 of functions) {
            cloneObj[function1.key] = function1.functionClone;
        }

        console.log(cloneObj);
        return cloneObj
    }
}

let cloneFunc = clone({id:1, name:'Vasya', greeting() {console.log('Hello')}, foo() {console.log('World')}});
cloneFunc.greeting()
cloneFunc.foo()