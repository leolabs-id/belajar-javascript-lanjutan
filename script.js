

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




// //Ambil semua elemen video
// const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos);

// //pilih hanya yang  'JAVASCRIPT LANJUTAN'
// const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// //ambil durasi masing-masing video
//     .map(video => video.dataset.duration)
// //ubah durasi menjadi float, ubah menit menjadi detik
//     .map(waktu => {
//     //10:30 => [10, 30] split
//     const parts = waktu.split(':').map(part => parseFloat(part));
//     return (parts[0] * 60) + parts[1];
// });

// //jumlahkan semua durasi detik (reduce)
// const totalDetik = jsLanjut.reduce((acc, cur) => acc + cur, 0);
// //ubah formatnya jadi jam menit detik
// const jam = Math.floor(totalDetik / 3600);
// const menit = Math.floor((totalDetik - (jam * 3600)) / 60);
// const detik = totalDetik - (jam * 3600) - (menit * 60);
// //simpan di DOM
// const total = document.querySelector('.total-durasi');
// total.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// //jumlahkan jumlah video
// const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
// const jumlahVideoElement = document.querySelector('.jumlah-video');
// jumlahVideoElement.textContent = jumlahVideo;







// //Template Literal
// const nama = 'Andi';
// const umur = 20;
// const pesan = `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(pesan);

// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


//Html Fragment looping
// const mhs = [{
//     nama: 'Andi',
//     email: 'andi@example.com'
// }, {
//         nama: 'Budi',
//         email: 'budi@example.com'
//     }, {
//         nama: 'Cici',
//         email: 'cici@example.com'
//     }];


// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
// </ul>`).join('')}
// </div>
// `;

// document.body.innerHTML = el;


// //Ternary template literal
// const lagu = {
//     judul: 'Seperti Langit',
//     penyanyi: 'Andi',
//     feat: 'Budi'
// }

// const el = ` <div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `feat ${lagu.feat}` : ''}</li>
//     </ul>
// </div>
// `;

// document.body.innerHTML = el;


// //Html Nested 1
// const mhs = {
//     nama: 'Andi',
//     semester: 3,
//     mataKuliah: ['Pemrograman Web', 'Jaringan Komputer', 'Basis Data']  
// }

// const el = ` <div class="mhs">
//     <ul>
//         <li>${mhs.nama}</li>
//         <li>${mhs.semester}</li>
//         <li>${mhs.mataKuliah.map(mk => `<li>${mk}</li>`).join('')}</li>
//     </ul>
// </div>
// `;

// document.body.innerHTML = el;

// //Html Nested 2
// const mhs = {
//     nama: 'Andi',
//     semester: 3,
//     mataKuliah: ['Pemrograman Web', 'Jaringan Komputer', 'Basis Data']  
// }

// function cetakMataKuliah(mataKuliah) {
//     return `
//     <ol>
//         ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>
//     `
// }

// const el = ` <div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester ${mhs.semester}</span>
//     <h4>Mata Kuliah:</h4>
//     <ul>
//         ${cetakMataKuliah(mhs.mataKuliah)}
//     </ul>
// </div>
// `;

// document.body.innerHTML = el;


// // Tagged Template
// const nama = 'Andi';
// const umur = 20;

// function coba(strings, nama, umur){
//     return umur;
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// //Tagged Templates
// const nama = 'Andi';
// const umur = 20;

// function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += str + (values[i] || '');
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => result + str + (values[i] || ''), '');
// }

// const test = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(test);

// function kalkulasi(a, b) {
//     return [
//         a + b,
//         a - b,
//         a * b,
//         a / b
//     ]; 
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }
// //tidak harus berurutan
// const {tambah, kurang, kali, bagi} = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);


// //destructuring object
// const mhs1 = {
//     nama: 'Andi',
//     umur: 20,
//     email: 'andi@example.com'
//     nilai: {
//         tugas: 80,
//         uts: 85,
//         uas: 90
//     }
// }

// function cetakMhs({nama, umur, email, nilai: {tugas, uts, uas}}) {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun, email saya ${email}. 
//     Nilai uas saya adalah ${uas}.`;
// }

// console.log(cetakMhs(mhs1));


// //for of
// const mhs = ['andi', 'budi', 'cici'];
// for (let m of mhs) {
//     console.log(m);
// }

// //forEach
// mhs.forEach((m, i) => console.log(m));

// for( const m of mhs.entries()) {
//     console.log(m);
// }

// //looping string
// const nama = 'Andi';
// for (let n of nama) {
//     console.log(n);
// }


// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (let angka of arguments) {
//         jumlah += angka;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));


// //for in
// const mhs = {
//     nama: 'Andi',
//     umur: 20,
//     email: 'andi@example.com'
// }

// for (m in mhs) {
//     console.log(m);
// }


// // spread operator
// // menggabungkan 2 array
// const mhs = ['andi', 'budi', 'cici'];
// const mhs2 = ['dodi', 'euis', 'febi'];
// const semuaMhs = [...mhs, 'gaga', ...mhs2];
// console.log(semuaMhs);


// //menyalin array
// const mhs3 = ['andi', 'budi', 'cici'];
// const mhsCopy = [...mhs3];
// console.log(mhsCopy);



// //Rest Parameter
// function myFunc(a, b, ...c) {
//    return c;
// }

// console.log(myFunc(1, 2, 3, 4, 5));
// //muncul 3, 4, 5


// function myFunc()
// {
//     return [...arguments]; //arguments bukan array, tapi object
// }
// console.log(myFunc(1, 2, 3, 4, 5));
// //hasilnya adalah array
 

// //function kalkulasi
// function jumlahkan(...angka) {
//     // let jumlah = 0;
//     // for (let a of angka) {
//     //     jumlah += a;
//     // }
//     // return jumlah;
//     return angka.reduce((total, a) => total + a, 0);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));


// //aray destructuring
// const mhs = ['andi', 'budi', 'cici', 'dodi', 'euis', 'febi'];
// const [ketua, wakil, ...anggota] = mhs;
// console.log(anggota);
// //hasilnya adalah ['cici', 'dodi', 'euis', 'febi']

// //object destructuring
// const team = {
//     pm: 'Andi',
//     frontend1: 'Budi',
//     frontend2: 'Cici',
//     backend: 'Dodi'
//     ux: 'Euis'
//     devOps: 'Febi'
// }
// const {pm, ...team2} = team;
// console.log(team2);
// //hasilnya adalah {frontend1: 'Budi', frontend2: 'Cici', backend: 'Dodi', ux: 'Euis', devOps: 'Febi'}   


// //filtering
// function filterBy(type, ...values){
//     return values.filter(value => typeof value === type);

// }

// console.log(filterBy('number', 1, 2, 'sandika', false, 10, true, 'dody'));


// // Callback Function
// // syncronous callback
// function halo(nama){
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Siapa nama kamu?');
//     callback(nama);
// }

// tampilkanPesan((nama) =>  alert(`Halo, ${nama}`));

// const mhs = [
//     {
//         'nama': 'Andi',
//         'umur': 20,
//         'email': 'andi@example.com',
//         'jurusan': 'Informatika',
//         'idDosenWali': 1
//     },
//     {
//         'nama': 'Budi',
//         'umur': 21,
//         'email': 'budi@example.com',
//         'jurusan': 'Informatika',
//         'idDosenWali': 2
//     },
//     {
//         'nama': 'Cici',
//         'umur': 22,
//         'email': 'cici@example.com',
//         'jurusan': 'Informatika',
//         'idDosenWali': 3
//     },
//     {
//         'nama': 'Dodi',
//         'umur': 23,
//         'email': 'dodi@example.com',
//         'jurusan': 'Informatika',
//         'idDosenWali': 4
//     }
// ];

// //contoh penggunaan syncronous callback 
// //terdapat masalah loading karena for loop yang berat
// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();

//     }
//     console.log(m.nama);
// });
// console.log('selesai');




// Asynchronous Callback
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (err) => console.log(err)  
});
console.log('selesai');