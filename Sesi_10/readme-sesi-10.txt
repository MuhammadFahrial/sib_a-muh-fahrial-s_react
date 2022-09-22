Redux Principles
Single Source of Truth
State global dari Front End disimpang di sebuah object tree dengan sebuah store ( single store )

State is Read Only
Satu-satunya cara untuk merubah state adalah melalui action. Action adalah sebuah object yang menggambarkan apa yang harus terjadi

Changes are made with pure functions
Untuk menjelaskan secara detail bagaimana sebuah state dapat di “ubah” oleh action, kita harus menulis sebuah reducer

atau dengan kata lain :
One Immutable Store
Store bersifat immutable, kita tidak bisa merubahnya secara langsung dari view, harus melalui actions

Actions Trigger Changes
Action adalah plain JS object yang menjelaskan perubahan yang harus dilakukan. Contoh: increment,
decrement, add todo, edit todo, delete todo.

Reducer update the state
Apa itu reducer? Reducer itu hanyalah fungsi javascript biasa yang harus kita buat. Parameter-nya ada 2:
current state dan action apa yang terjadi. Misalnya kita klik tanda tambah, artinya reducernya akan mengambil state yang sekarang, misalnya 1, terus action nya increment, jadi si Reducer akan me-return state baru yang adalah 1+1 = 2

Apa yang kita butuhkan untuk bermain dengan Redux ?
- Redux itu sendiri. Redux bisa didapat melalui instalasi via npm
- Initial State. Bisa dalam bentuk tipe data apapun, tapi hampir dapat dipastikan secara practice akan digunakan sebuah object. Di dalamnya akan didaftarkan state apa saja yang kita butuhkan, beserta initial value nya
- Reducer. Sebuah function dengan 2 parameter : state dan action. Initial State akan dimasukkan ke dalam parameter sebagai default parameter dari state. Action adalah object dan yang akan sering kita gunakan adalah action.type ( untuk memberitahu action apa yang akan dilakukan ) dan action.payload ( data yang dibawa dan diperlukan untuk melakukan berbagai proses yang hasilnya akan kita gunakan untuk update state

Apa yang kita butuhkan untuk bermain dengan Redux? (Part 2)
- Function createStore dengan parameter sebuah reducer untuk menginisiasi store
- Function subscribe ( optional ) untuk bisa mendaftarkan sebuah aksi yang akan di trigger secara otomatis ketika ada perubahan state
- Function dispatch yang menerima parameter berupa object berisi type dan payload ( optional ) untuk diteruskan dan di konsumsi oleh reducer