// Fichero src/components/App.js
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import getWords from '../../src/services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetter from './SolutionLetter';
import ErrorLetters from './ErrorLetters';
import Form from './Form';

// import React from 'react';

function App() {
  // const [numbeOfrErrors, setNumber] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);


  useEffect(() => {
    getWords().then(data => {
      setWord(data.word);
      console.log(data.word)
    });
  }, []);

  const handleClickLetter = (value) => {
    const wordLetters = word.split('');
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/;
    if (re.test(value) || value === '') {
      setlastLetter(value);
      if (value !== '') {
        setUserLetters([...userLetters, value]);
      }
    }
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) => {
      if (userLetters.includes(eachLetter)) {
        return (
          <li key={index} className="letter">
            {eachLetter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>
      }
    });
  };
  const renderErrorLetters = () => {
    const wordLetters = word.split('');
    return userLetters.map((eachLetter, index) => {
      if (!wordLetters.includes(eachLetter)) {
        return (
          <li key={index} className="letter">
            {eachLetter}
          </li>
        );
      }
    });
  };
  const error = () => {
    const errorLetter = userLetters.filter((each) => word.includes(each) === false);
    return errorLetter.length;
  };
  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetter
            renderSolutionLetters={renderSolutionLetters()} />
          <ErrorLetters renderErrorLetters={renderErrorLetters()} />
          <Form
            lastLetter={lastLetter}
            handleClickLetter={handleClickLetter} />
          {/* <button onClick={handleClick}>Incrementar</button> */}
        </section>
        <Dummy error={error()} />

      </main>
    </div>
  );
}

export default App;
