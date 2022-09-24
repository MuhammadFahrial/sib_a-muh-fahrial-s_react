Redux Logger

Kita bisa menambahkan fungsi tambahan seperti extensions atau plugin diantara proses dispatch sebuah action hingga pada saat mencapai reducer. Kita bisa menggunakan Redux middleware untuk logging, crash reporting, proses async ke API, routing dan lain sebagainya.

Sudah cukup jelas ya, sebuah logger untuk Redux. Setiap terjadi perubahan state, action di panggil dan berbagai hal yang berhubungan dengan Redux, akan muncul informasi di console browser.


Instalasi
> npm install redux-logger / yarn add redux-logger

Redux Toolkit menyediakan function createAsyncThunk untuk memproses async.

THUNK
● Nama ini sebenarnya secara humor merupakan bentuk past-tense dari “think”
● Adalah sebuah fungsi yang membungkus 1 atau beberapa expresi yang akan di evaluasi ( baca: dikerjakan )
● Mengadopsi konsep thunk ke dalam redux


Axios

Instalasi
> npm install axios


Login with React & Redux

Login biasanya merupakan halaman pertama yang harus kita buat di hampir semua aplikasi. Dalam sesi ini sekaligus review tentang react-redux di pembahasan sebelumnya, kita akan membuat form login yang interaktif dan intuitif dengan React & Redux.
Berikut beberapa fitur dari form login yang akan kita implementasi:
● Form memiliki field email dan kata sandi
● Ketika pengguna mengklik kirim, itu akan menampilkan pesan bahwasanya value email dan kata sandi itu dikirim sebagai permintaan ke server.
● Saat menerima respon, itu akan menunjukkan status login.

Prerequisite libraries
● create-react-app: I always use this library to create my React project, it will install React and some scripts with make our React app running
● @reduxjs/toolkit: our state management
● react-redux

Application state
Because we only have a login form, our application state is pretty simple, it has 3 attributes:
● isLoginPending: indicates when login has sent login request
● isLoginSuccess: indicates if login successful
● errorMessage: contains the error message if login fail