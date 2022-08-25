// Array -----------------------------------------
var kode = ["React", "PHP", "Ruby"];
let kode = ["React", "PHP", "Ruby"];
const kode = ["React", "PHP", "Ruby"];

// Operasi Array
// Menggabungkan 2 Array
var fruits = ['anggur', 'melati', 'apel', 'jeruk'];
var buah_buahan = ['strawbery', 'pir', 'durian'];
fruits.push.apply(fruits, buah_buahan); // Menggabungkan 2 Array dengan push.apply()

// Menghapus Item pada Array
var indexHapus = 1;
fruits.slice(indexHapus, 1); // fruits = ['anggur', 'apel', 'jeruk'];

// Mengosongkan Array
fruits = [] // fruits -> []<----- menghilangkan referensi dalam variabel
fruits.splice(0, fruits.length) // fruits -> []