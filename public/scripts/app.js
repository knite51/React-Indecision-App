'use strict';

var app = {
  title: 'Indecision App',
  subTitle: 'Here you go',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var value = e.target.elements.option.value;
  if (value) {
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';
    rerenderForm();
  }
};

var removeOptions = function removeOptions() {
  app.options = [];
  rerenderForm();
};

var rerenderForm = function rerenderForm() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subTitle && React.createElement(
      'h1',
      null,
      app.subTitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeOptions },
      'RemoveAll'
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};
rerenderForm();
