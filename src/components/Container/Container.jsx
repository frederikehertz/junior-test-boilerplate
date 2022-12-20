import { useEffect, useReducer } from 'react';

import { Card } from '../Card';

import classes from './Container.module.css';

const initial = 6;
const increment = 6;

const getCardData = (amount, setCards) => {
  (async () => {
    const response = await fetch(`http://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_API_KEY}&count=${amount}`);
    const json = await response.json();
    const filteredJson = json.map(e => {
      const {created_at, id, urls: {raw}} = e;
      const cropped = raw.concat('?crop=focalpoint&fit=crop&w=240&h=240');

      return {date: created_at, id, url: cropped};
    });

    setCards({type: 'add', payload: filteredJson});
  })();
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
    return ([...state, ...action.payload]);
    case 'delete':
    return (state.filter(e => e.id !== action.payload));
  }
};

export const Container = () => {
  const [cards, setCards] = useReducer(reducer, []);

  useEffect(() => getCardData(initial, setCards), []);
  
  const handleDelete = id => setCards({type: 'delete', payload: id});

  const renderAllCards = arg => arg.map(e => <Card key={e.id} handleDelete={handleDelete} cardData={e}/>);

  return (
    <>
      <div className={classes.list}>
        {renderAllCards(cards)}
      </div>
      <div className={classes.buttonBox}>
        <button className={classes.button} onClick={() => getCardData(increment, setCards)}>
          Добавить ещё...
        </button>
      </div>
    </>
  );
}
