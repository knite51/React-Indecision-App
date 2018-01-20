const app = {
  title: 'Indecision App',
  subTitle: 'Here you go',
  options: ['One', 'Two'],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <h1>{app.subTitle}</h1>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name: 'Ayotunde Olubiyo',
  age: 23,
  location: 'Lagos, Nigeria'
};
const getLocation = (location) => {
  if(location){
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

ReactDOM.render(template, document.getElementById('app'));
