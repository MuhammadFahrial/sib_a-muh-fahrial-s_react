Data Flow in React
Aliran data react bersifat satu arah. dari view ke action ke store dan dari store balik lagi ke view

untuk saling berinteraksi antar komponen, React mempunyai dua cara: state dan props. masing masing punya tugas dan tujuan yang berbeda. 

state digunakan untuk menyimpan kondisi saat ini untuk komponen, semetara props digunakan untuk mengirimkan informasi ke komponen lain.

Aplikasi web modern biasanya di bangun berdasarkan data atau istilah kerennya data-driven.

PropTypes memungkinkan kita melakukan validasi terhadap props yang kita harapkan. misalnya kita berharap sebuah tipe data integer untuk angka counter. kita dapat menggunakan PropTypes yang memastikan bahwa props yang di kirimkan benar adanya adalah sebuah integer. Apabila yang dikirim kan benar adanya adalah sebuah integer. apabila yang dikirim misalnya string "1", maka aplikasi akan error karena string "1" jika di tambah angka 1 akan menjadi ngaco dan memunculkan bugs

PropTypes bisa melakukan validasi untuk berbagai tipe data. mulai dari tipe data scalar hingga ke struktur data seperti array, object dan kita juga bisa melakukan validasi sesuai bentuk dari sebuah object (ShapeOf)

Atomic Design adalah pendekatan desain yang di populerkan oleh Brad Frost, yang memecah elemen aplikasi menjadi bagian-bagian modular hingga yang paling kecil

Elemen di bagi jadi beberapa level atau hirarki: atom, molekul, organisme, template, dan laman. Tujuannya adalah untuk mereduksi adanya kode berulang, mereduksi waktu set up dan meningkatkan konsistensi antar komponen dan tampilan.

Sistem ini menggunakan pattern library sebagai repository dari komponen-komponen web yang bisa diimport (importable) dan dapat di gunakan kembali (reusable). hal ini juga sudah di terapkan.

dengan pattern library ini, biasanya waktu yang di butuhkan memang lebih panjang daripada pendekatan desain lama (pages) biasa. Namun metode ini lebih kolaboratif dan menjamin reusability dan maintability untuk jangka panjang

Pada level atom, telah di tentukan komponen-komponen kecil seperti tombol 'Search', input pencarian beserta placeholder, dan pelabelan 'Search the Site'. penentuan elemen-elemen palet warna, tipografi, ukuran teks, dan margin dilakukan di level ini

Pada Level molekul (molecule), elemen-elemen pada level atomis di kelompokkan dan diatur dalam modul yang lebih besar. misalnya pencarian yang tersusun dari komponen-komponen: tombol search, input pencarian(text field), dan label 'Search the Site'

Pada level organisme (organism), modul pencarian juga di kelompokkan dengan elemen-elemen lain seperti menu dan logo sebagai elemen header.

yang terakhir template yang sudah dibuat menjadi sebuah halaman spesifik yang sudah dilengkapi dengan representasi konten yang nyata dan menunjukkan antar muka yang sebenarnya dari sebuah website. misalnya laman Home/Beranda, atau laman blog yang di bangun dari sebuah website.

Kelebihan yang di tawarkan oleh Metode Atomic Design, adalah kemampuan untuk pindah dari konsep yang abstrack kepada hal yang konkrit. Selain itu, ada pemisahan yang jelas antara struktur sebuah website dengan konten.

Kekurangan dari sistem ini adalah tidak ada orang khusus yang merawat pattern library.