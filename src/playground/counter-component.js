class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAdd(){
    this.setState((prevState)=>{
      return ({
        count: prevState.count + 1,
      });
    });
  }
  handleMinus(){
    this.setState((prevState) => {
      return ({
        count: prevState.count - 1,
      });
    });
  }
  handleReset(){
    this.setState(() => {
      return ({
        count: 0,
      });
    });
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
};

ReactDOM.render(<Counter />, document.getElementById('app'));