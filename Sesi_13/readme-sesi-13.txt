TESTING AND DEBUGGING REACT
Dengan mengadaptasi banyak sifat dari functional programming, React semakin mudah untuk ditest. Dengan bantuan testing library Jest dan RTL ( React Testing Library ) saat ini melakukan testing di sisi front-end sudah tidak sulit lagi. Testing kode yang sudah kita buat merupakan hal yang bisa dibilang wajib. Tujuannya agar kode yang kita hasilkan selalu berkualitas tinggi dan merupakan sebuah garansi bahwa apa yang sudah kita kerjakan sesuai harapan, dan tentunya jumlah bugs atau kesalahan yang sangat minimal. Saat ini, developer selain ngoding juga dituntut untuk juga bisa melakukan testing terhadap codingan kita sendiri.

Unit: Testing terhadap fungsi tunggal atau single functionality. Misalnya ada sebuah fungsi yang tugasnya mengambil data dari server. Yang ditest Hanya satu fungsi itu saja. Tampilan dan lain sebagainya tidak ditest dalam hal ini.

Integration: Beberapa fungsi terkait ditest secara bersamaan. Misalnya ada beberapa fungsi yang tugasnya mengambil data dari server dan menampilkan ke layar. Yang ditest ya mulai dari ambil data hingga tampilan

End to end: Memastikan seluruh fungsi bekerja dari perspektif user. Jadi ngetest-nya dengan button click, apa yang terjadi dan seterusnya. Dan seperti yang terlihat di ilustrasi diatas, unit testing merupakan jenis test yang paling cepat dijalankan. Dan semakin keatas proses eksekusi akan semakin lambat. Unit test juga merupakan solusi testing yang paling murah dibandingkan dengan solusi testing lain. Tentu untuk membayar orang melakukan testing seperti QA jauh lebih mahal daripada membuat unit test kan?!

JEST
… adalah sebuah testing framework dalam bahasa JavaScript yang biasanya digunakan untuk melakukan testing di sisi FE. Dibuat dan di design oleh Christoph Nakazawa, dan di maintain oleh Facebook, Inc, dan berfokus pada kemudahan dan dukungan untuk aplikasi berbasis web yang cukup besar. Dapat dipakai untuk aplikasi yang menggunakan Babel, TypeScript, Node.js, React, Angular, Vue.js, dan Svelte

React Testing Library ( RTL )
… adalah utility yang bisa kita pakai untuk melakukan testing terhadap aplikasi React. Merupakan sebuah solusi yang sangat ringan ( light-weight ) untuk melakukan testing terhadap komponen React. Menyediakan utility yang ringan di atas react-dom dan react-dom/test-utils, dengan cara yang memberikan dorongan / motivasi untuk bisa melakukan praktek testing yang lebih baik.

JEST :
test : untuk memberikan scope / judul dari rangkaian test yang akan dijalankan
expect : untuk binding expektasi terhadap suatu DOM yang kita akan test, dan akan di chain dengan toBe<something>
toBe<something> : untuk memeriksa expektasi
kita, ada puluhan toBe yang bisa digunakan, silakan cek di dokumentasinya

React Testing Libary :
render : untuk render sebuah component
debug : untuk menampilkan seluruh DOM yang ter-render, merupakan shortcut dari console.log(prettyDOM(baseElement))
fireEvent : untuk men-trigger sebuah DOM event
waitFor : untuk menunggu sebuah fungsi berjalan hingga selesai, biasanya untuk proses async