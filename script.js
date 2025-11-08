

// creation phase pada global context
// nama var =  undefined
// nama function = fn()
// hoisting
// window =  global object
// this = window
// arguments
// execution phase



// var umur = 20;
// var nama = "Leo";

// console.log(sayHello());

// function sayHello() {
//     return `Hello, nama saya ${nama}, saya ${umur} tahun`; 
// }


// var name = "Leo";
// var username = "@leo";

// function cetakURL() {
//     console.log(arguments[0]);
//     var instagramURL = 'https://www.instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@leolabs', 'Leo Labs'));


// function satu() {
//     var nama = "Leo labs";
//     console.log(nama);
    
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = "Leo";
// satu();
// dua('Leonard');
// console.log(nama);


// function init() {
//     //let nama = "Leo labs";
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('Leo Labs');
// panggilNama('Leonard');






// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Selamat ${waktu}, ${nama}`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Leo Labs');
// selamatSiang('Leonard');
// selamatMalam('Leo');



// // closure
// let add = (function () {
//     let counter = 0;
//     return function() {
//         return ++counter;
//     }
// })();

// counter = 10;
// console.log(add());
// console.log(add());
// console.log(add());


// function test() {
//     for(var i = 0; i < 10; i++) {
//     console.log(i);
//     }
// }

// test();
// console.log(i);



// const tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Leo'));


// const tampilNama = (nama) => {   return `Halo ${nama}`}
// console.log(tampilNama('Leo'));


// const tampilNama = (nama, waktu) => {
//     return `Halo ${nama}, selamat ${waktu}`;
// }
// console.log(tampilNama('Leo', 'Pagi'));


// //implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Leo'));


// const tampilNama = () => `Halo Leo`;
// console.log(tampilNama());

// let Mahasiswa = ['Leo Labs', 'Leonard', 'Leo'];
// let jumlahHuruf = Mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);


// let Mahasiswa = ['Leo Labs', 'Leonard', 'Leo'];
// let jumlahHuruf = Mahasiswa.map(nama => ({nama, jumlahHuruf: nama.length}));
// console.table(jumlahHuruf);


// konsep this pada arrow function
// this pada arrow function tidak memiliki konsep this, this pada arrow function akan mengambil this dari parent scope

// const Mahasiswa = function () {
//     this.nama = "Leo Labs";
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Hello, nama saya ${this.nama}, saya ${this.umur} tahun`);
//     }
// }

// const leo = new Mahasiswa();
// leo.sayHello();


// //objek literal dengan arrow function
// const Mahasiswa = {
//     nama: "Leo Labs",
//     umur: 20,
//     sayHello: () => {
//         console.log(`Hello, nama saya ${this.nama}, saya ${this.umur} tahun`);
//     }
// }
// const leo = Mahasiswa;
// leo.sayHello();





// const Mahasiswa = function () {
//     this.nama = "Leo Labs";
//     this.umur = 20;
//     this.sayHello = function () {
//         console.log(`Hello, nama saya ${this.nama}, saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }
// const leo = new Mahasiswa();
// leo.sayHello();



const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});