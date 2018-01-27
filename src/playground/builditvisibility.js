class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(){
    this.setState((prevState) => {
      return ({
        visible: !(prevState.visible)
      });
    });
  }
  render(){
    return(
      <div>
        <h1>Toggle Button</h1>
        <button onClick={this.handleToggle}>
          {this.state.visible ? 'Hide Details' : 'Show Details' }
        </button>
        {this.state.visible && <p>Hey you go Man!</p>}
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));