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
}

const rerenderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <h1>{app.subTitle}</h1>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
      <p>{app.options.length}</p>
      <button onClick={removeOptions}>RemoveAll</button>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
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
