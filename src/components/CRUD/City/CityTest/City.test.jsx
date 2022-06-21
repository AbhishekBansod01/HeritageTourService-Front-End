import { render, screen, cleanup } from '@testing-library/react';
import React from 'react'
import AddCity from '../AddCity'
import DeleteCity from '../DeleteCity'

test('ctdiv', () => {
    render(<AddCity />);
   // const linkElement = screen.getByText(/Tour /i);
    const linkElement = screen.getByTestId('AddCitytest');
    //expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Enter City Data')
  });
  
  test('ctdiv', () => {
    render(<DeleteCity />);
   // const linkElement = screen.getByText(/Tour /i);
    const linkElement = screen.getByTestId('DeleteCityTest');
    //expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Delete City Data')
  });
  