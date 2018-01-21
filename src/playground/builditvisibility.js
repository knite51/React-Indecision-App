
let text ;
let buttonInfo = 'Show Details';

const onToggle = () => {
  if(buttonInfo === 'Show Details'){
    text = <p>These are some element</p>;
    buttonInfo = 'Hide Details';
  }else{
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