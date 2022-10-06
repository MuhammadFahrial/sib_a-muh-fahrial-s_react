Setelah materi-materi sebelumnya kita sudah belajar tentang React untuk membuat aplikasi web, sekarang kita akan belajar bagaimana menggunakan skill React kita untuk membangun aplikasi Mobile baik itu Android maupun iOS. Selain web dan mobile, React pun juga dapat kita gunakan untuk membangun aplikasi di platform seperti Virtual Reality, aplikasi terminal, aplikasi smart tv dan lain sebagainya.

React Native sendiri dapat membantu kita untuk membangun User Interface native dengan memanfaatkan komponen React. Dengan React Native, kita dapat membuat aplikasi mobile menggunakan JavaScript. React Native akan secara dinamis men-generate elemen-elemen native menggunakan JavaScript. Dengan demikian kita dapat memiliki aplikasi native dengan kecepatan dan tenaga dari sebuah aplikasi native, dengan kemudahan proses development selayaknya mengembangkan aplikasi web.

React Native melakukan transpilasi kode JSX yang kita tulis menjadi JavaScript murni sama halnya seperti yang terjadi di pengembangan aplikasi web. Kemudian dari kode JavaScript hasil transpilasi tersebut, JavaScript diterjemahkan menjadi elemen-elemen native dengan bantuan JavaScriptCoresehingga menjadi kode native baik itu Objective-C di iOS ataupun Java di Android. Jadi, in the end, kita bisa membuat aplikasi iOS dan Android menggunakan 1 code base

Untuk membuat React Native app, kita bisa gunakan 2 tool yaitu React Native CLI dan Expo. Jika kita membutuhkan native code pada React Native app yang kita buat, pilihan terbaik adalah React Native CLI. Tentu saja kita akan membutuhkan Android Studio atau Xcode. Jadi React Native CLI ini lebih banyak dipakai oleh developer yang sudah berpengalaman membuat mobile apps dengan native code seperti Java/Kotlin dan Swift. Sementara Expo adalah sebuah SDK untuk mempermudah proses React Native app development. Kita tidak perlu install Android Studio maupun Xcode untuk membuat sebuah project. Kelemahan Expo adalah tidak bisa digabungkan dengan native code (Java/Kotlin/Swift).

Ada 3 pilihan yang mudah untuk kita dapat menjalankan / melihat hasil koding React Native kita : Android emulator, Android based phone, dan iOS based phone.

Bagaimana kalau kita TIDAK terhubung dengan WiFi dan ingin running app kita ? Cara ke 3 yaitu dengan Android Debug Brige ( adb ). Dan dengan cara ini, kita cukup menyambungkan gadget Android kita dengan kabel data ke laptop. Jangan lupa aktifkan Developer Mode, dan USB Debugging pada gadget kita.

View bertindak sama seperti sebuah elemen <div> pada aplikasi berbasis web
Text bertindak sama dengan sebuah elemen <p> pada aplikasi berbasis web
StyleSheet menjadi tempat kita menyimpan style dari elemen yang kita pakai