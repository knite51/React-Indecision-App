class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: props.count,
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      const number = this.state.count;
      localStorage.setItem('count', number);
    }
  }

  componentDidMount() {
    try {
      const stringNumber = localStorage.getItem('count');
      const number = parseInt(stringNumber, 10)

      if (!isNaN(number)) {
        this.setState(() => ({ count: number }));
      }
    } catch (err) {
      // DO NOTHING!
    }
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

Counter.defaultProps = {
  count: 0,
}

ReactDOM.render(<Counter />, document.getElementById('app'));