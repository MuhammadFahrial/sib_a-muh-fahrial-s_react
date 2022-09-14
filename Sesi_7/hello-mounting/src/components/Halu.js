class Halu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // shouldComponentDidUpdate (prevProps, prevState)
    // Method yang satu ini akan dipanggil tepat setelah render dipanggil. Kita bisa gunakan untuk operasi DOM atau request async untuk data berikutnya disini.

    if (this.state.users.length !== nextState.users.length) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate (prevProps, prevState)
    // Method yang satu ini akan dipanggil tepat setelah render dipanggil. Kita bisa gunakan untuk operasi DOM atau request async untuk data berikutnya disini. Prefetch misalnya

    if (prevProps.selectedState !== this.props.selectedState) {
      fetch("https://pathToApi.com")
        .then((resp) => resp.sjon())
        .then((respJson) => {
          this.setState({
            isLoading: false,
            data: respJson,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  componentDidMount() {
    eventData.addEventListener();
  }

  componentWillUnmount() {
    // componentWillUnmount ()
    // Akan dipanggil sebelum kita menghapus komponen dari DOM. Kita bisa melakukan bersih-bersih di class method ini

    eventData.removeEventListner();
  }
}
