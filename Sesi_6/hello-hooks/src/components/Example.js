import React, { useState, useEffect } from "react";

function Example() {
  // Deklarasi variabel state baru yang kita sebuh 'Count'
  const [count, setCount] = useState(0);

  // mirip dengan componentDidMount dan componentDidUpdate:

  useEffect(() => {
    // memperbarui judul dokumen menggunakan API browser
    // document.title = `You Clicked ${count} times`;
    console.log(`Kamu menekan ${count} times`);
  });

  return (
    <div>
      <p>Anda menekan sebanyak {count}</p>
      <button onClick={() => setCount(count + 1)}>Klik Saya</button>
    </div>
  );
}

export default Example;

// Potongan code diatas berdasarkan pada contoh counter dari sebelumnya, tetapi kita menambahkan fitur baru didalamnya: kita akan mengisi judul dokumen dengan pesan kustom termasuk dari jumlah klik. Pengambilan data, pengaturan berlangganan (subscription) , dan perubahan manual DOM di dalam komponen React adalah beberapa contoh dari efek samping.
