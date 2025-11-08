

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



// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     let satu = 'size';
//     let dua = 'caption';

//     if (this.classList.contains(satu)) {
//         [satu, dua] = [dua, satu];
//     }

//     this.classList.toggle(satu);
//     setTimeout(() => {
//         this.classList.toggle(dua);
//     }, 600);
// });



//array.prototype.filter
// const angka = [3, 5, 8, 11, -1, -4, 0, -3, 2, 1, 6, 10, 9, 4, 7];

// //mencari angka >= 5
// // //for
// // const newAngka = [];
// // for (let i = 0; i < angka.length; i++) {
// //     if (angka[i] >= 5) {
// //         newAngka.push(angka[i]);
// //     }
// // }
// // console.log(newAngka);

// const newAngka = angka.filter(angka => angka >= 5);
// console.log("Ini adalah angka >= 5",newAngka);

// //map
// //kalikan semua angka dengan 2
// const kalikanDua = angka.map(a => a * 2);
// console.log("Ini adalah angka * 2",kalikanDua);

// //reduce
// //jumlahkan semua angka
// const jumlah = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //0 adalah angka awal
// console.log("ini adalah jumlah semua angka",jumlah);

// //find
// //cari angka pertama yang bernilai 5
// const find = angka.find(angka => angka === 5);
// console.log("Ini adalah angka pertama yang bernilai 5",find);

// //findIndex
// //cari index angka pertama yang bernilai 5
// const findIndex = angka.findIndex(angka => angka === 5);
// console.log("Ini adalah index angka pertama yang bernilai 5",findIndex);

// //some
// //cek apakah ada angka yang bernilai 5
// const some = angka.some(angka => angka === 5);
// console.log("Apakah ada angka yang bernilai 5?",some);

// //every
// //cek apakah semua angka bernilai 5
// const every = angka.every(angka => angka === 5);
// console.log("Apakah semua angka bernilai 5?",every);

// //sort
// //urutkan angka
// const sort = angka.sort((a, b) => a - b);
// console.log("Ini adalah angka yang sudah diurutkan",sort);

// //reverse
// //balikkan angka
// const reverse = angka.reverse();
// console.log("Ini adalah angka yang sudah dibalik",reverse);

// //slice
// //slicing angka dari index 2 sampai 5
// const slice = angka.slice(2, 5);
// console.log("Ini adalah angka yang sudah dislice",slice);

// //slicing angka dari index 2 sampai akhir
// const slice2 = angka.slice(2);
// console.log("Ini adalah angka yang sudah dislice",slice2);

// //method chaining
// //cari angka > 5, kalikan dengan 2, jumlahkan
// const hasil = angka
//     .filter(a => a > 5)
//     .map(a => a * 2)
//     .reduce((acc, cur) => acc + cur, 0);
// console.log("Ini adalah angka > 5, kalikan dengan 2, jumlahkan",hasil);




//Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));
console.log(videos);

//pilih hanya yang  'JAVASCRIPT LANJUTAN'
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
//ambil durasi masing-masing video
    .map(video => video.dataset.duration)
//ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
    //10:30 => [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
});

//jumlahkan semua durasi detik (reduce)
const totalDetik = jsLanjut.reduce((acc, cur) => acc + cur, 0);
//ubah formatnya jadi jam menit detik
const jam = Math.floor(totalDetik / 3600);
const menit = Math.floor((totalDetik - (jam * 3600)) / 60);
const detik = totalDetik - (jam * 3600) - (menit * 60);
//simpan di DOM
const total = document.querySelector('.total-durasi');
total.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

//jumlahkan jumlah video
const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const jumlahVideoElement = document.querySelector('.jumlah-video');
jumlahVideoElement.textContent = jumlahVideo;