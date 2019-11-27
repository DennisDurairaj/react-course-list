import React from 'react';
import { render } from 'react-dom';


const App: React.FC = () => {
  return <div>Hello World</div>;
}

render(<App />, document.getElementById('app'));
