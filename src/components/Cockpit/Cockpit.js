import React from 'react';

const Cockpit = (props) => {
  const inlineStyle = {
    backgroundColor: 'white',
    border: '2px solid blue',
    padding: '16px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
  const visibility = {
    display: 'none'
  }
  return (
    <div>
      <h1>This is my new Project</h1>
      <button style={{ ...inlineStyle, ...visibility }}
        /*onClick={()=>this.switchNameHandler('Mac'.toString())}*/
        onClick={()=>props.switchNameHandler('Maxi')}
        on>SwitchName</button>

      <button
        /*onClick={()=>this.switchNameHandler('Mac'.toString())}*/
        onClick={props.togglePersonHandler}
        on>{props.isPersonListVisible ? 'Hide Person List' : 'Show Person List'}</button>
    </div>
  );
};

export default Cockpit;