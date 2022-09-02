React merupakan library javascipt untuk membangun user interface. React dapat memiliki cara khusus yang dapat membantu kita membangun user interface dengan cara yang simpel, deklaratif dan intuitif. 

Tim dibelakang React mendesain sebuah library yang membuat workflow seorang developer menajadi lebih sederhana sekaligus performa dan skalabilitas tinggi untuk tim yang menggunakannya

React berporos kepada komponen. kita membangun komponen komponen yang membentuk sebuah aplikasi web. layaknya lego mungkin secara satuan tidak berarti namun jika di gabungkan dapat menjadi sebuah bangunan yang indah

Komponen di React memiliki alur hidup atau lifecycle yang mudah di prediksi dan di tulis dengan "regular old javascript" dan bantuan ekstensi JSX

React berbeda dengan framework lainnya menurut saya adalah React membantu saya memahami konsep-konsep dasar javascript dan juga konsep funtional programming yang di terapkan oleh React.

Selain membuat aplikasi Web, kita juga dapat mengembangkan aplikasi mobile dengan React Native, aplikasi VR dengan React VR, aplikasi CLI atau terminal dengan React Blessed, aplikasi smart tv dengan React-tv dan lain sebagainya.

"React is mainly a concept and a library just secondly" Peter Marton, CTO RisingStack

Konsep utama React yaitu berbasis Komponen, kita membangun user interface dengan cara menyusun satu komponen dengan komponen lain, bukan membuat halaman web atau membuat template.

dengan menerapkan konsep komponen sebagai mental dan visual tool dapat mengarahkan kita untuk mendesain dan membangun desain yang lebih intuitif.

kenapa pola pikir komponen itu penting? karena komponen mudah di gunakan kembali berulang-ulang. komponen juga dapat di pasangkan. dengan komponen berbeda sehingga menghasilkan komponen yang berbeda pula.

Aliran Data dari React berbeda dengan framework lain seperti Angular yang menerapkan aliran data dua arah, Sedangkan di React hanya mengalir satu arah. dan perubahan data menjadi lebih mudah di mengerti dan lebih mudah di prediksi.

View adalah kumpulan komponen yang sudah kita bahas di bagian sebelumnya. di view juga ada berbagai action seperti onClick ketika button di klik, onChange ketika pengguna memasukkan data di form dan banyak lagi.

Di React, semua data di simpan kedalam sebuah wadah yang di sebut dengan store atau state, uniknya jika terjadi perubahan data, katakanlah seorang pengguna mengklik button atau action yang lainnya, view tidak bisa mengubah data atau apapun juga. 

View harus menghubungi action memberitahu bahwa ada sebuah action yang di trigger oleh pengguna. dan tugas action lah yang kemudian menghubungi store untuk kemudian store untuk kemudian mengubah data sesuai actionnya. dan setelah itu baru kemudian store mengubah view hingga sesuai dengan data yang baru saja berubah. jadi satu jalur, dari view ke action ke store dan kembali ke view. dan tidak bisa sebaliknya. untuk mengubah data, view harus selalu melalui action dan seterusnya.

masih berhubungan dengan alur data satu arah sebelumnya setiap kali terjadi perubahan data yang terjadi di store, React atau dalam hal ini view akan selalu melakukan proses render ulang. React di desain untuk mempermudah workflow kita sebagai developer. hal ini menyebabkan React tidak membutuhkan data binding yang aneh-aneh.

Kalau di React tidak merender ulang DOM-nya langsung, yang kita render ulang adalah virtual DOM

Virtual DOM hanyalah sebuah struktur data yang menyimpan informasi lengkap tentang