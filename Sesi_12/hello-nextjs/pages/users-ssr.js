// Function getServerSideProps() ini akan dijalankan secara asynchronous, sehingga request dapat dilakukan berkali-kali tanpa harus menunggu request yang lain selesai. Selain itu, hasil dari function ini akan dikembalikan dalam bentuk props.

export default function Users(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.users?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Pada kode ini, kamu akan melihat ada satu function baru bernama getServerSideProps(). Apa fungsi dari function tersebut? Merujuk pada dokumentasi, function getServerSideProps() akan dijalankan pada level request. Jadi, ketika kita membuka localhost:3000/users-ssr, maka kita akan langsung mendapatkan data-nya, tanpa harus melakukan request ulang.
export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typcode.com/users");
  const users = await res.json();

  return {
    props: { users },
  };
}
