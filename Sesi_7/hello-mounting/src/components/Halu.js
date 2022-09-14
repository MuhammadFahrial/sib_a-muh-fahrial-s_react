class Halu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      users: [],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.users.length !== nextState.users.length) {
      return true;
    }
    return false;
  }

  componentDidUpdate(preProps){
    if(prevProps.selectedState !== this.props.selectedState){
        fetch('https://pathToApi.com')
        .then
    }
  }
}
