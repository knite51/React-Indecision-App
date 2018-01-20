'use strict';

var app = {
  title: 'Indecision App',
  subTitle: 'Here you go'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title + '!'
  ),
  React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var user = {
  name: 'Ayotunde Olubiyo',
  age: 23,
  location: 'Lagos, Nigeria'
};
var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

ReactDOM.render(templateTwo, document.getElementById('app'));
