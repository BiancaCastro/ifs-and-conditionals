import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharComponent from './CharComponent';

describe('<CharComponent />', () => {
  test('it should mount', () => {
    render(<CharComponent />);
    
    const charComponent = screen.getByTestId('CharComponent');

    expect(charComponent).toBeInTheDocument();
  });
});