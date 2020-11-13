import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ValidationComponent from './ValidationComponent';

describe('<ValidationComponent />', () => {
  test('it should mount', () => {
    render(<ValidationComponent />);
    
    const validationComponent = screen.getByTestId('ValidationComponent');

    expect(validationComponent).toBeInTheDocument();
  });
});