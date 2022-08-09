import React from 'react';
const Item = ({ people }) => {

  return (
    <>
      {
        people.map((person) => {
          //needs the return here
          return <div className='person' key={person.id}>
            <img className='img person' src={person.image} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </div>
        })
      }

    </>
  );
};

const List = (props) => {
  const { people } = props;
  return (
    <Item people={people} />
  );
};

export default List;
