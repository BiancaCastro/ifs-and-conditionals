import React from 'react';

const CharComponent = (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  }
  return (
    <div className="CharComponent" data-testid="CharComponent" style={style} onClick={props.clicked}>
      {props.character}

    </div>
  )
}



CharComponent.propTypes = {};

CharComponent.defaultProps = {};

export default CharComponent;
