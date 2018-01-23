// User Profile

const user = {
  name: 'Ayotunde Olubiyo',
  age: 23,
  location: 'Lagos, Nigeria'
};
const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>
  }
};


const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);



// Counter
let count = 0;
const addBtn = () => {
  count++
  rerender();
};
const minusBtn = () => {
  count--
  rerender();
};
const resetBtn = () => {
  count = 0
  rerender();
}


const rerender = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addBtn}>+1</button>
      <button onClick={minusBtn}>-1</button>
      <button onClick={resetBtn}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, document.getElementById('app'));

};

rerender();



//Visibility Toggle


let text;
let buttonInfo = 'Show Details';

const onToggle = () => {
  if (buttonInfo === 'Show Details') {
    text = <p>These are some element</p>;
    buttonInfo = 'Hide Details';
  } else {
    text = undefined;
    buttonInfo = 'Show Details';
  }
  rerender();
}

const rerender = () => {
  const visible = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{buttonInfo}</button>
      {text}
    </div>
  );
  ReactDOM.render(visible, document.getElementById('app'));
};
rerender();

//or
//  let v = false;

//  const t = () => {
//    v = !v;
//    render();
//  };

//  const render = () => {
//    const j = (
//      <div>
//       <h1>Vs</h1>
//       <button onClick={t}>{v ? 'Hide': 'Show'}</button>
//       {v && (<p>Yo it worked</p>)}
//      </div>
//    )
//  }





// App stage One without Components

const app = {
  title: 'Indecision App',
  subTitle: 'Here you go',
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const value = e.target.elements.option.value;
  if (value) {
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
      <button disabled={app.options.length <= 0} onClick={onClickDecision}>What Should I do</button>
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