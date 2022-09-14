import React from "react";

class Clock extends React.Component {
  constructor(props) {
    // constructor()
    // akan dipanggil saat sebuah komponen di inialisasi. seperti OOP dan class pada Umumnya, constructor akan dipanggil pertama kali saat proses inisialisasi sebuah instance. Biasanya kita mendefinisikan state awal sebuah komponen dan melakukan deklarasi variable dan binding class method.

    super(props);
    this.state = { data: new Date() };
  }

  componentDidMount() {
    // componentDidMount()
    // Akan dipanggil ketika sebuah komponen selesai diletakkan di DOM sebuah browser. Method yang tepat untuk melakukan async request untuk mengambil data dari API. Hasil data yang didapat disimpan kedalam internal state dan akan men-trigger render()

    this.timerID = setInterval(() => {
      this.tick(), 1000;
    });
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    // render()
    // Setiap komponen class harus memiliki method ini dan harus me-return sebuah komponen. Class method ini harus bersifat pure function dan jangan ada proses perubahan state disini

    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
