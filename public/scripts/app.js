'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Welcome home Ayotunde Olubiyo.'
  ),
  React.createElement(
    'p',
    null,
    'You are Genius Believe it!'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ayotunde'
  ),
  React.createElement(
    'p',
    null,
    'Age: 23'
  ),
  React.createElement(
    'p',
    null,
    'Location: Lagos, Nigeria'
  )
);

ReactDOM.render(templateTwo, document.getElementById('app'));
