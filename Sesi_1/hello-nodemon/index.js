// -------------------- Deklarasi Variabel -----------------------
// let ---------------------------
let score = 50
console.log("hasil score " + score);

let playerName = "Budi";
console.log("Hasil variabel playerName " + playerName);
alert(playerName);

// const ---------------------------
const pi = 3.14
console.log(pi)

// const - > Object
const objectAngkaKeb = {id:1, name:'rial', jenkel:'L'};
objectAngkaKeb.id = 2;
objectAngkaKeb.name = 'Rahmat';
objectAngkaKeb.jenkel = 'L' ;
console.log(objectAngkaKeb);

// const -> Array 
const arrayNumber = [1,2,3,4,5];
arrayNumber.push(6);
arrayNumber.push(7);
arrayNumber.push(8);
console.log(arrayNumber);

// -------------------- Mengenal Tipe Data -----------------------
// Tipe Data Number ---------------------------
let originalNum = 23;
let newNum = originalNum + 7;
alert(newNum);

let numberTobeNum = 7;
let newNum2 = originalNum +numberTobeAdd;
alert(newNum2);

// Tipe Data String ---------------------------
alert("Hello class Modern Javascript")

'Selamat datang di kelas Modern Javascript Dasar'
'Nama saya Rial'
"Javascript is fun!"

let message = 'Welcome!';
alert(message);
message = 'Bye, bye';
alert(message);

message = "She's a great person";
message = 'She\'s a great person';

let htmlSnippet = '<h1 class="header">This is a header</h1>'
htmlSnippet = "<h1 class=\"header\">This is a header</h1>"

// Teknik Manipulasi String
// Menggabungkan String
let Visitor = prompt('Siapakah namamu?');
let message1 = 'Halo ' + Visitor;
alert(message1);

let message2 = 'Halo ' + Visitor + '. Selamat datang di kelas Modern Javascript!' + 'Kita senang sekali kamu mau datang berkunjung, ' + Visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.';
alert(message2);

message1 = message1 + '. Selamat datang di kelas Modern Javascript!';
message1 += 'Kita senang sekali kamu mau datang berkunjung, ';

message1 += Visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama. ';

alert(message1);

// Tipe data Boolean ---------------------------
let isRaining = true;
let isFinished = true;

let menuOpen = "true"; //Terhitung String

// Array ---------------------------
var kode = ["React", "PHP", "Ruby"];
let kode = ["React", "PHP", "Ruby"];
const kode = ["React", "PHP", "Ruby"];

// Operasi Array
// Menggabungkan 2 Array
var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
var buah_buahan = ['strawbery', 'pir', 'durian'];

fruits.push.apply(fruits, buah_buahan); // Menggabungkan 2 Array dengan push.apply()

// Menghapus Item pada Array
var indexHapus = 1;

fruits.slice(indexHapus, 1); // fruits = ['anggur', 'apel', 'jeruk'];

// Mengosongkan Array
// fruits = [] // fruits -> []<----- menghilangkan referensi dalam variabel
fruits.splice(0, fruits.length) // fruits -> []





