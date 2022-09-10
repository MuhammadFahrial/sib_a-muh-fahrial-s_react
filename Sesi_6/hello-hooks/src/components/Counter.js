import React, { useState } from "react";

// Jika state baru dikomputasi menggunakan state sebelumnya, Anda dapat mengoper sebuah fungsi ke setState. Fungsi tersebut akan menerima nilai sebelumnya, dan mengembalikan sebuah nilai yang telah diperbarui. Berikut adalah contoh komponen penghitung yang menggunakan kedua bentuk setState:

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export default Counter;

// Tombol ”+” dan ”-” menggunakan bentuk fungsional, karena nilai yang telah diperbarui didasari oleh nilai sebelumnya. Tetapi tombol “Reset” menggunakan bentuk normal, karena tombol tersebut selalu mengatur perhitungan kembali ke nilai awal.

// Jika fungsi pembaruan Anda mengembalikan nilai yang sama dengan state saat ini, pe-render-an ulang selanjutnya akan dilewati.
