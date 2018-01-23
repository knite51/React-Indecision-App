class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: []
    };
    this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleDecision(){
    let random = Math.floor(Math.random() * this.state.options.length );
    alert(this.state.options[random]);
  }
  handleRemoveOptions() {
    this.setState(() => {
      return ({
        options: [],
      })
    })
  }
  handleAddOption(value){
    if(! value){
      return 'Enter a valid Item';
    }else if (this.state.options.indexOf(value) > -1 ){
      return 'Item already Exist';
    }
    this.setState((prevState) => {
      return ({
        options: prevState.options.concat(value),
      })
    })
  }
  render() {
    const title = 'Indecision App';
    const subtitle = 'Confused? Let a Computer Decide for You!';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0}
        handleDecision={this.handleDecision}
        />
        <Options options={this.state.options}
        handleRemoveOptions = {this.handleRemoveOptions} />
        <AddOptions handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
};


class Header extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
};

class Action extends React.Component{
  render(){
    return (
      <div>
        <button 
          disabled = {!this.props.hasOptions}
          onClick={this.props.handleDecision}>
          What Should I Do
        </button>
      </div>
    );
  }
};

class Options extends React.Component{
  render(){
    return (
      <div>
        <button onClick={this.props.handleRemoveOptions}>Remove All</button>
      {
        this.props.options.map((option) => 
        <Option key={option} optionText = {option} />)
      }
      <Option />  
      </div>
    );
  }
};

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
};

class AddOptions extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined,
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let value = e.target.elements.InputText.value.trim(); 
    const error = this.props.handleAddOption(value);

    this.setState(()=> {
      return { error }; //(same as error:error)
    });

    e.target.elements.InputText.value = '';
  }
  render() {
    return (
      <div>
        {this.state.error && this.state.error}
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='InputText'/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));