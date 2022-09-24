Mengenal Server-Side Rendering

Apa itu Server-Side Rendering?
Server-Side Rendering (SSR) adalah teknik untuk menampilkan Single Page Application (SPA) yang akan di-render oleh server. Lalu, hasilnya akan diteruskan kepada client.

Cara Kerja Server-Side Rendering
- Ketika sebuah client melakukan request, server akan memproses request tersebut, kemudian data dari hasil proses ini akan dirangkai dalam format HTML. HTML ini kemudian dikirimkan oleh server kepada client tersebut.

- Pada tahap ini, client berhasil mendapatkan HTML dari server. Kemudian, client akan mengambil kode JavaScript yang diperlukan.

- Setelah kode JavaScript berhasil didapat, client selanjutnya akan mengeksekusi kode React.

- Nah, pada langkah ini, kode React berhasil dijalankan pada client. Setelah itu, user dapat berinteraksi dengan halaman tersebut.

Keuntungan dan Kekurangan SSR

Kelebihan Server-Side Rendering <------
Search Engine Optimization
SSR akan membantu search engine melakukan crawling konten aplikasi/website kita, karena data akan diambil terlebih dahulu sebelum di-serve. Mengapa? Karena pada dasarnya, crawling dari search engine umumnya tidak mendukung JavaScript, sehingga ketika di-crawl hanya akan menampilkan halaman kosong saja. Di samping itu, hanya beberapa search engine tertentu (seperti Google), yang mampu melakukan crawling konten tanpa SSR.

Efisien dan Cepat
Karena prosesnya dilakukan pada server, maka server-lah yang akan menanggung beban ketika mengambil data. Oleh karena itu, user dengan kecepatan internet yang lambat, akan mendapatkan manfaatnya. Di samping itu, konten akan ditampilkan terlebih dahulu, berkat bantuan SSR ini (masih ingat dengan cara kerja SSR sebelumnya?). Dengan begitu, user dapat melihat konten tanpa harus menunggu kode JavaScript selesai di-download.

Kekurangan Server-Side Rendering <-------
Load Time Meningkat
Karena semua pengambilan data dan rendering dilakukan pada server, maka waktu yang dibutuhkan untuk mengirimkan response akan meningkat juga. Lama waktu yang dibutuhkan juga tergantung pada workload dan spesifikasi yang dimiliki server tersebut. Jika aplikasi semakin kompleks, waktu yang dibutuhkan juga semakin lama.

Potensi Masalah dengan Kode Pihak Ketiga
Ada juga kemungkinan atau potensi masalah dengan kode JavaScript oleh pihak ketiga. Namun, hal ini bukan berarti kamu tidak diperbolehkan menggunakan kode JavaScript pihak ketiga, ya. Jadi, sebelum kamu coba terapkan SSR pada aplikasi kamu, ada baiknya kamu uji coba apakah kode JavaScript pihak ketiga dapat berjalan ketika menggunakan SSR atau tidak.

Jadi, kapan menggunakan SSR?
Semua kembali kepada tujuan kamu membuat aplikasi web dengan React. Apakah aplikasi kamu akan menjadi kompleks, atau sederhana? Atau, apakah kamu mau aplikasi web kamu dapat di-crawl oleh semua search engine?

Nah, ketika kamu membuat aplikasi sederhana dan tidak kompleks --
semisal untuk menampilkan artikel --
maka kamu bisa mengimplementasikan SSR.
Dan, jika kamu ingin konten aplikasi kamu dicari oleh search engine, maka kamu disarankan untuk mengimplementasikan SSR, agar lebih mudah dicari.