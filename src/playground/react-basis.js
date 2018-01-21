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