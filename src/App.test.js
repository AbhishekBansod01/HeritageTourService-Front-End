import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import React from 'react'
import Home from './components/Home/Home'
import AddSite from './components/CRUD/Site/AddSite'
import AddCity from './components/CRUD/City/AddCity'
import CityRoute from './components/CRUD/City/CityRoute'
import Register from './components/Register'
import Login from './components/Login'


test('div45', () => {
  render(<Home />);
  // const linkElement = screen.getByText(/Tour /i);
  const linkElement = screen.getByTestId('hometest');
  //expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Tour')
});

test('ctdiv', () => {
  render(<AddSite />);
  const linkElement = screen.getByText(/Enter /i);
  expect(linkElement).toBeInTheDocument();
});

// test('nav', () => {
//   render(<CityRoute />);
//   // const linkElement = screen.getByText(/Tour /i);
//   const linkElement = screen.getByTestId('CityRoutetest');
//   //expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveTextContent('Add City')
// });


test('ctdiv', () => {
  render(<Register />);
  const linkElement = screen.getByTestId('RegisterTest');
  //const linkElement = screen.getByText(/Register here /i);
  expect(linkElement).toBeInTheDocument();
});



test('ctdiv', () => {
  render(<Login />);
  const linkElement = screen.getByTestId('LoginTest');
  //const linkElement = screen.getByText(/Register here /i);
  expect(linkElement).toBeInTheDocument();
});


test("RegisterTest", () => {
  render(<Register />)

  const passwordInput = screen.getByPlaceholderText(/your password/i);

  expect(passwordInput).toBeInTheDocument()
})

test("RegisterTest", () => {
  render(<Register />)

  const usernameInput = screen.getByPlaceholderText(/your user name/i);

  expect(usernameInput).toBeInTheDocument()
})



test("LoginTest", () => {
  render(<Register />)

  const passwordInput = screen.getByPlaceholderText(/your password/i);

  expect(passwordInput).toBeInTheDocument()
})

test("LoginTest", () => {
  render(<Register />)

  const usernameInput = screen.getByPlaceholderText(/your user name/i);

  expect(usernameInput).toBeInTheDocument()
})

