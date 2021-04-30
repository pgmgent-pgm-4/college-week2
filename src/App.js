import './App.css';
import './styling/main.scss'

import styled, {ThemeProvider} from 'styled-components';
import { useEffect, useState } from 'react';

import Button from './components/button/Button';
import CardStyled from './components/card/CardStyled';
import PureCssCard from './components/card/Card'

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
};

const students = [
  {
    id: 'bc1e9873-6c3a-4a45-b1b5-e8864646803c',
    name: {
      firstName: 'Olivier',
      lastName: 'Pieters'
    }
  },
  {
    id: 'e66a178a-2a81-4263-9013-c020b05c63cd',
    name: {
      firstName: 'Selie',
      lastName: 'Peters'
    }
  }
];

const Students = ({data}) => {
  return (
    <div className="students">
      <ul className="students__list">
        {data.map((s) => <Student key={s.id} data={s} />)}
      </ul>
    </div>
  )
};

const Student = ({data}) => {
  return (
    <li className="students__list-item">{data.name.firstName} {data.name.lastName}</li>
  )
};

const ThemeToggle = ({onThemeChange}) => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    if (typeof onThemeChange === 'function') {
      onThemeChange(isToggled);
    }
  }, [isToggled, onThemeChange]);

  const handleOnChange = (ev) => {
    setIsToggled(ev.target.checked);
  };

  return (
    <label>
      <input type="checkbox" value={isToggled} checked={isToggled} onChange={handleOnChange} />
      {
        isToggled ? 'Enable light mode' : 'Enable dark mode'
      }
    </label>
  )
};

const lightTheme = {
  backgroundColor: 'white',
  textColor: 'black'
}

const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white'
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor}
`;

const App = () => {
  const tags = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'API'];
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleOnThemeChange = (isSelected) => {
    setIsDarkMode(isSelected);
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <AppContainer>
          <CardStyled>
            Dit is een card met styledcomponents.
          </CardStyled>

          <PureCssCard type="error">
            Dit is een kaartje met gewone CSS.
          </PureCssCard>

          <Button>
            Test button
          </Button>

          <Toggle />
          <TagCloud tags={tags} />
          <Counter count={0} />
          <Students data={students} />
          <ThemeToggle onThemeChange={handleOnThemeChange} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
