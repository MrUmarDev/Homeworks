// 1-misol

// class Rectangle {
//   a: number;
//   b: number;
//   constructor(a: number, b: number) {
//     this.a = a;
//     this.b = b;
//   }
//   Yuzasi() {
//     return this.a * this.b;
//   }
// }
//
// const tort = new Rectangle(2, 3);
// console.log(tort.Yuzasi());
//
// 2-misol
//
// class Person{
//     name:string;
//     age: number;
//     gander: string;
//     constructor(name:string, age:number, gander: string){
//         this.name = name;
//         this.age = age;
//         this.gander = gander;
//     }
//     about(){
//         return {
//             ism: this.name,
//             age: this.age,
//             gander: this.gander
//         }
//     }
// }
// const person = new Person("Umar", 20, 'erkak')
// console.log(person.about())
//
// 3-misol
//
// class Person{
//     name:string;
//     age: number;
//     gander: string;
//     constructor(name:string, age:number, gander: string){
//         this.name = name;
//         this.age = age;
//         this.gander = gander;
//     }
//     about(){
//         return {
//             ism: this.name,
//             age: this.age,
//             gander: this.gander
//         }
//     }
// }
// class Student extends Person{
//     ball: number;
//     constructor(ball: number, name:string, age:number, gender:string){
//         super(name, age, gender)
//         this.ball = ball;
//     }
//    about1(){
//     return {
//         ism: this.name,
//         age: this.age,
//         gander: this.gander,
//         ball: this.ball
//     }
//    }
//     }
// const student = new Student(100,"Umar", 20, 'erkak')
// console.log(student.about1())
//
// 4-misol
//
// class Book{
//     author: string;
//     title: string;
//     chiqqanYili: number;
//     constructor(author:string, title:string, chiqqanYili:number){
//         this.author = author;
//         this.title = title;
//         this.chiqqanYili = chiqqanYili;
//     }
//     year(){
//         const year:number = new Date().getFullYear()
//         return `
//         ${this.title} kitobi
//         ${this.author} tomonidan yozilgan va shu vaqtgacha
//         ${ year -  this.chiqqanYili} yil bo'lgan.`
//     }
// }
//
// const kitob = new Book("Cho'lpon", "Uyg'onish", 1922)
// console.log(kitob.year())
//
// 5-misol
//
// const count = (str: string):string =>{
//     const arr: Array<string> = [
//         'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
//         'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
//         'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
//         'Y', 'Z'];
//         let cnt:number = 0
//     for(let i: number = 0; i<str.length; i++){
//         let j:number = 0
//         arr.forEach((el)=> {
//             if(el == str[i])
//             j++
//         })
//         if(j != 0)
//         cnt++
//     }
//     return `Upper_Case: ${cnt} , Lower_Case : ${str.length - cnt}`
// }
// console.log(count('UmAr'))
//
// 6-misol
//
// const find_number = (a:number , b:number):Array<number> | null =>{
//     let beginning: number = Math.floor(Math.sqrt(a))
//     let cnt:number = 0
//     let arr: Array<number> = []
//     while(beginning ** 2 <= b){
//         if(beginning**2 > a && beginning** 2< b)
//         arr.push(beginning)
//         beginning++
//     }
//
//     return arr.length? arr: null
// }
//
// console.log(find_number(5, 8))
//
// 7-misol
//
// const array_checking = (arr: Array<number>):number[] =>{
//
//     const arrMusbat: number[] = arr.filter((el) => el > 0 )
//     const arrManfiy: number[] = arr.filter((el) => el < 0 )
//     const arrNol: number[] = arr.filter((el) => el == 0 )
//     return [arrMusbat.length/arr.length, arrManfiy.length/ arr.length, arrNol.length/ arr.length]
// }
//
// console.log(array_checking([1,2,3,-1,-2,0]))