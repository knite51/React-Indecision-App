'use strict';

var text = void 0;
var buttonInfo = 'Show Details';

var onToggle = function onToggle() {
  if (buttonInfo === 'Show Details') {
    text = React.createElement(
      'p',
      null,
      'These are some element'
    );
    buttonInfo = 'Hide Details';
  } else {
    text = undefined;
    buttonInfo = 'Show Details';
  }
  rerender();
};

var rerender = function rerender() {
  var visible = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      buttonInfo
    ),
    text
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
