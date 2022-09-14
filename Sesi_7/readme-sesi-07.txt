-> Component LifeCycle |
Analogi sederhana untuk Lifecycle adalah seperti jika kita mempunyai sebuah Restoran. Hal-hal di bawah ini bisa disebut sebagai lifecycle sebuah Restoran sehari-hari nya. Dan kita bisa manfaatkan setiap kegiatannya untuk menyisipkan hal yang kita butuhkan

Pada dasarnya, Lifecycle ( siklus hidup ) adalah urutan kejadian atau keadaan yang terjadi secara default dan berjalan secara teratur. Lifecycle pada React, berarti urutan kejadian atau keadaan yang terjadi ketika kita meng-implementasikan React. Urutannya sendiri sudah didefinisikan secara default dalam React nya dan bisa kita manfaatkan untuk berbagai keperluan. Berikut adalah diagram common lifecycle dalam React, pada Class Component

---------
Mounting
---------
constructor()
akan dipanggil saat sebuah komponen di inialisasi. seperti OOP dan class pada Umumnya, constructor akan dipanggil pertama kali saat proses inisialisasi sebuah instance. Biasanya kita mendefinisikan state awal sebuah komponen dan melakukan deklarasi variable dan binding class method.

render()
Setiap komponen class harus memiliki method ini dan harus me-return sebuah komponen. Class method ini harus bersifat pure function dan jangan ada proses perubahan state disini

componentDidMount()
Akan dipanggil ketika sebuah komponen selesai diletakkan di DOM sebuah browser. Method yang tepat untuk melakukan async request untuk mengambil data dari API. Hasil data yang didapat disimpan kedalam internal state dan akan men-trigger render()

----------
Updating
----------
shouldComponentDidUpdate (prevProps, prevState)
Method yang satu ini akan dipanggil tepat setelah render dipanggil. Kita bisa gunakan untuk operasi DOM atau request async untuk data berikutnya disini.

componentDidUpdate (prevProps, prevState)
Method yang satu ini akan dipanggil tepat setelah render dipanggil. Kita bisa gunakan untuk operasi DOM atau request async untuk data berikutnya disini. Prefetch misalnya

-----------
Unmounting
-----------
componentWillUnmount ()
Akan dipanggil sebelum kita menghapus komponen dari DOM. Kita bisa melakukan bersih-bersih di class method ini

---------------
Error Handling
---------------
componentDidCatch ()
Mulai React 16, kita bisa menggunakan class method ini. Ketika terjadi kesalahan, jenis kesalahan apapun, kita sekarang bisa menampilkan pesan error yang lebih baik

-> Function Component |
Kita tentunya pernah melakukan pengambilan data, berlangganan data (subscription), atau secara manual mengubah DOM dari komponen React sebelumnya. Kami menyebut operasi-operasi seperti ini “efek samping (side effects)” (atau singkatnya “efek (effects)”) karena dapat mempengaruhi komponen lain dan tidak dapat dilakukan pada saat proses render. Effect Hook, useEffect, menambahkan kemampuan untuk melakukan “efek samping” dari sebuah function component. Hook ini memiliki fungsi yang sama dengan componentDidMount, componentDidUpdate, dan componentWillUnmount pada kelas React, tetapi disatukan menjadi satu API Karena kita akan menggunakan Function Component untuk ke depannya, maka Hook ini lah yang akan banyak kita pakai.

-> Fetch Data | Penerapan Ajax Xhr
----------------
Class Component
----------------
Kita akan memanfaatkan componentDidMount() untuk melakukan data fetching dan mengisinya kepada local state

-------------------
Function Component
-------------------
Kita akan memanfaatkan userEffect() untuk melakukan data fetching dan mengisinya kepada local state