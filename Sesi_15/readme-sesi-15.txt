Familiar dengan Flexbox di CSS3 ? React native pun menyediakannya. Bedanya, default direction nya adalah column

behaviour default dari React Native. Flexbox direction secara default adalah column. Kemudian, karena container menggunakan nilai flex sebanyak 1, maka seluruh tinggi layar akan digunakan. Box-box ( view ) yang ada di dalam container menggunakan flex sebanyak 1, berarti, tinggi layar akan dibagi rata

Cara menghitungnya seperti ini :
Jumlahkan total area flex yang diminta : 1 + 2 + 3 = 6
Kemudian, masing-masing box akan mendapatkan area sebanyak yang diminta. Contoh : box1 meminta 1 area flex, berarti, box 1 akan mendapatkan ⅙ dari tinggi layar Begitupun untuk box2 dan box3

Cara kita handle text input sama persis seperti apa yang kita lakukan dengan React sebelumnya. Handling ini melibatkan state dan event handler

Bagaimana untuk handle tampilan yang bisa jadi melebihi tinggi layar kita ? Misal : menampilkan banyak text box ? Gunakanlah ScrollView

Dan kita pun bisa menampilkan list yang terlihat flat, terutama untuk menampilkan daftar dengan hanya nama atau title nya saja, dengan menggunakan FlatList

Untuk React Native kita mempunya beberapa opsi untuk debugging. Untuk mengakses debugging tools kita bisa menekan tombol command + d untuk simulator iOS dan command + m untuk emulator Android. Kita akan bahas opsinya satu per satu.

1. Reload. Digunakan untuk me-reload ulang aplikasi kita.
2. Debug JS Remotely akan membuka chrome browser dan kita dapat melakukan debug seperti console.log atau debugger untuk setting breakpoint.
3. Enable Live Reload secara otomatis me-reload ulang aplikasi kita ketika ada perubahan file.
4. Enable Hot Reloading jika opsi sebelumnya me-reload seluruh aplikasi kita, hot reload akan me-reload sebagian aplikasi kita dengan tetap mempertahankan posisi atau current state dan hanya me-reload bagian yang berubah saja.
5. Toggle Inspector digunakan untuk mencari komponen-komponen seperti inspect element jika di browser.
6. Show Perf Monitor dapat digunakan untuk memonitor performance dari aplikasi kita.

Selain itu kita juga bisa menggunakan console.warn untuk menampilkan warning di hp atau emulator.