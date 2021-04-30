import './App.css';
import './styling/main.scss'

import Button from './components/button/Button';
import PureCssCard from './components/card/Card'
import { useState } from 'react';

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleClick = (ev) => {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
};

const TagCloud = ({tags}) => {
  return (
    <ul className="tagcloud">
      {tags.map((tag, index) => <TagCloudItem key={index} tag={tag} />)}
    </ul>
  );
};

const TagCloudItem = ({tag}) => {
  return (
    <li className="tagcloud__item">{tag}</li>
  );
};

const Counter = ({count}) => {
  return (
    <div>
      {count === 0 && <span>Messages: {count}</span>}
    </div>
  );
}

const App = () => {
  const tags = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'API'];

  return (
    <div className="app">
      <Toggle />
      <TagCloud tags={tags} />
      <Counter count={0} />

      <PureCssCard type="error">
        Dit is een kaartje met gewone CSS.
      </PureCssCard>

      <Button>
        Test button
      </Button>
    </div>
  );
}

export default App;
