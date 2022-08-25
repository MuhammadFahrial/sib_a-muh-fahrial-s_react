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