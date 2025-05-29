// //muncul di console browser(inspect)
// console.log("Hello")
// //buat pop up
// alert("Hello")
// //pop up tp ada textboxnya
// prompt("Insert Your Name", "Your Name")

// variable deklarasi 
// var, let, const
// var jarang digunakan, lebih baik gunakan let atau const

// let nama = "Syahansyah Fathin";
// const tnglahir = "20 Mei 2007";

// nama = "Adit" //variable nama bisa diubah karena menggunakan let

// console.log(nama)
// console.log(tnglahir)





// //tipe data primitif
// //string, number, boolean, null undifiend, symbol

// //string
// let nama = "Asep";
// let alamat = 'Jakarta';
// let hello = `Hallo, selamat datang ${nama} kamu sekarang sedang di ${alamat}`;

// console.log('Hallo, selamat datang', nama, 'Kamu sekarang sedang di', alamat)

// console.log('hello')
// alert("hello")


// //number
// let umur = 18;
// let berat = 55.4;
// let suhu = -3;
// let sisa = 10%3;
// let nan = "saya" //karna saya tdk pake kurung jadi dibaca number(NaN)

// console.log(umur)
// console.log(berat)
// console.log(suhu)
// console.log(sisa)
// console.log(typeof nan)


// //boolean

// let benerGak = 1 > 3;

// console.log(benerGak);


// // null, undifiend
// //null adalah nilai yg sengaja diberikan, artinya tdk ada nilai yg diberikan
// let Adit; //undifiend
// console.log(Adit)

// //tipe data objek
// //objek adalah tipe data kompleks, yg berisi kumpulan nilai dalam bentuk pasangan key-value

// let saya = {
//     nama : 'Syahansyah',
//     tahunlahir : 2007,
//     umur : `2025 - `,
//     alamat : 'jakarta',
//     adik : ['asep', 'budi', 'putri'],
//     rutinitas : {
//         pagi : 'workout',
//         siang : 'masak',
//         malam : 'tidur',
//     },

//     hai: function(){
//         console.log(`hello, nama saya ${this.nama}`)
//     }

//     // umur: function(){
//     //     2025 - ${this.tahunlahir}
//     // },
// }

// console.log(saya.umur);


// saya.hai()

// console.log(saya);
// console.log(saya.nama);
// console.log(saya.rutinitas.siang);
// console.log('halo saya punya adik 3, yg ketiga', saya.adik[2])



// let buku = {
//     judul : 'Jatuh',
//     author : 'Tere Liye',
//     halaman : 100,
//     genre : ['fantasy', 'drama', 'fiction', 'mystery'],
//     terbit : {
//         tahun : 2010,
//         penerbit : "gramedia",
//         isbn : 299123
//     }

// }

// //array pada javascript

// let mobil = ['toyota avanza', 'honda jazz', 'suzuki ertiga', 'daihatsu xenia'];

// console.log(`saya punya ${mobil.length} mobil, yaitu, ${mobil[0]}, ${mobil[1]}, ${mobil[2]}, dan ${mobil[3]}`)



//operator aritmatika
// let a = 15;
// let b = 10;
// let hasil = a + b;

// console.log(`hasil dari ${a} + ${b} = ${hasil}`)
// console.log(`hasil dari ${a} / ${b} = ${hasil}`)
// console.log(`hasil dari ${a} * ${b} = ${hasil}`)
// console.log(`hasil dari ${a} % ${b} = ${hasil}`);


let a = prompt("Masukkan alas")
let b = prompt("Masukkan tinggi")
let luas = (a * b) / 2;

alert(`Hasil hasil luasnya ${luas}`)
