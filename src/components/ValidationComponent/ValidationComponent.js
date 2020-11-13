import React from 'react';

const ValidationComponent = (props) => {
  let validationMessage = 'Text long enought';

  if (props.length <= 5) {
    validationMessage = 'Text too short';
  }
  return (
    <div className="ValidationComponent" data-testid="ValidationComponent">
      <p>
         {validationMessage}
      </p>
    </div>
  )
};

ValidationComponent.propTypes = {};

ValidationComponent.defaultProps = {};

export default ValidationComponent;
