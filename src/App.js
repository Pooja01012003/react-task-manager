import React, { useState } from 'react';
import './style.css';

const queryResult = [
  { id: 1, title: 'Dribble Shot', description: 'Create a project management user', status: 'To Do' },
  { id: 2, title: 'Usability Testing', description: 'Steps in doing usability', status: 'To Do' },
  { id: 3, title: 'Hero Section Update', description: 'Create a mobile banking user interface',status: 'In Progress' },
  { id: 4, title: 'Dribble Shot',description: 'Check the commands left by user', status: 'To Do' },
  { id: 5, title: 'User Interview', description: 'Interviewing users for online learning  ', status: 'In Progress' },
  { id: 6, title: 'Mobile Design', description: 'Showing our lecturers about our car rental projects', status: 'Completed' },
  { id: 7, title: 'Personal meet with the lecturer', description: 'Discussion about the end semester project', status: 'Completed' },
  { id: 7, title: 'Feedback', description: 'Collect feedback from the users', status: 'Completed' },
];

let id = 8;

export default function App() {
  const [data, setData] = React.useState(queryResult);
  console.log(data);

  function handleOnClick() {
    setData(
      data.concat([
        {
          id: id++,
          title: 'New Card',
          status: 'To Do',
        },
      ])
    );
  }

  function handleUpdate(id) {
    const newData = data.map((e) => {
      if (e.id !== id) {
        return e;
      } else {
        if (e.status === 'To Do') {
          return { ...e, status: 'In Progress' };
        } else if (e.status === 'In Progress') {
          return { ...e, status: 'Completed' };
        } else {
          return { ...e, status: 'To Do' };
        }
      }
    });

    setData(newData);
  }

  function handleDelete(id) {
    setData(data.filter((element) => element.id !== id));
  }

  return (
    <div className="container">
      <button className="button" onClick={handleOnClick}>
        Add
      </button>
      <div>
        To Do
        {data
          .filter((element) => element.status === 'To Do')
          .map((element) => {
            return (
              <Card
                title={element.title}
                onDelete={() => handleDelete(element.id)}
                description={element.description}
                onUpdate={() => handleUpdate(element.id)}
              />
            );
          })}
      </div>
      <div>
        In Progress
        {data
          .filter((element) => element.status === 'In Progress')
          .map((element) => {
            return (
              <Card
              title={element.title}
                onDelete={() => handleDelete(element.id)}
                description={element.description}
                onUpdate={() => handleUpdate(element.id)}
              />
            );
          })}
      </div>
      <div>
        Completed
        {data
          .filter((element) => element.status === 'Completed')
          .map((element) => {
            return (
              <Card
               title={element.title}
                onDelete={() => handleDelete(element.id)}
                description={element.description}
                onUpdate={() => handleUpdate(element.id)}
              />
            );
          })}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <br/>
      <button className="button" onClick={props.onDelete}>
        Delete
      </button>
      <hr />
      <button className="button" onClick={props.onUpdate}>
        Update
      </button>
    </div>
  );
}
