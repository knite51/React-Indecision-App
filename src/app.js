class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: props.options
    };

    this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveSingleOption = this.handleRemoveSingleOption.bind(this);
  }

  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if ( options ) {
        this.setState(() => ({ options }));
      }
    } catch(err){
      // DO NOTHING!
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount(){

  }

  handleDecision(){
    let random = Math.floor(Math.random() * this.state.options.length );
    alert(this.state.options[random]);
  }

  handleRemoveOptions() {
    this.setState(() => ( { options: [], } )
    );
  }

  handleAddOption(value){
    if(! value){
      return 'Enter a valid Item';
    }else if (this.state.options.indexOf(value) > -1 ){
      return 'Item already Exist';
    }
    this.setState((prevState) => (
      { options: prevState.options.concat(value),})
    )
  }

  handleRemoveSingleOption(optionToBeRemoved){
    this.setState((prevState) => ({
     options: prevState.options.filter((option) => optionToBeRemoved !== option)
    }));
  }

  render() {
    const subtitle = 'Confused? Let a Computer Decide for You!';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0}
        handleDecision={this.handleDecision}
        />
        <Options 
        options={this.state.options}
        handleRemoveOptions = {this.handleRemoveOptions} 
        handleRemoveSingleOption = {this.handleRemoveSingleOption}
        />
        <AddOptions handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
};

IndecisionApp.defaultProps = {
  options: [],
};


const Header = (props) => {
    return(
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h3>{props.subtitle}</h3>}
      </div>
    );
};

Header.defaultProps = {
  title: 'Indecision App',
};


const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handleDecision}>
        What Should I Do
        </button>
    </div>
  );
};
 
const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleRemoveOptions}>Remove All</button>
        {props.options.length === 0 && <p>Enter An Option</p>}
      {
        props.options.map((option) => 
        <Option 
        key={option} 
        optionText = {option} 
        handleRemoveSingleOption = {props.handleRemoveSingleOption}
        />)
      }
      </div>
    );
};

const Option = (props) => {
    return (
      <div>
        {props.optionText}
        <button
        onClick = {(e) => {
            props.handleRemoveSingleOption(props.optionText)
        }}
        >Remove</button>
      </div>
    );
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

    this.setState(() => ( { error } )  /*(same as error:error)*/ );
    if(!error){
      e.target.elements.InputText.value = '';
    }  
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