import React from "react";
import { useParams } from "react-router-dom";

const Member = () => {
  let params = useParams();

  return (
    <div>
      <h3>{params.memberName}</h3>
      <p>This is the detail page of {params.memberName}</p>
    </div>
  );
};

export default Member;

// Pada halaman detail member ini, kita menggunakan hooks yang bernama useParams untuk bisa membaca params yang akan kita setting pada Routes nantinya. Berikut adalah contoh implementasinya
