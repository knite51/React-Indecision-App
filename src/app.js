const app = {
  title: 'Indecision App',
  subTitle: 'Here you go',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const value = e.target.elements.option.value;
  if(value){
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    rerenderForm();
  }
}

const removeOptions = () => {
  app.options = [];
  rerenderForm();
};

const onClickDecision = () => {
  let randomNum = Math.floor(Math.random() * app.options.length);
  let option = app.options[randomNum];
  alert(option);
}

const rerenderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <h1>{app.subTitle}</h1>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <button disabled = {app.options.length <= 0} onClick={onClickDecision}>What Should I do</button>
      <button onClick={removeOptions}>RemoveAll</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};
rerenderForm();
