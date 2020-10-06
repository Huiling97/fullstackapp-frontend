import React from 'react';
import Chai from 'chai-dom';
import { render } from '@testing-library/react';
import App from './App'; // imports app file

test('renders learn react link', () => {
  getNodeText(params: {node: HTMLElement})
  const getBytext = getNodeText(container.querySelector('div'))                      
  const linkElement = getNodeText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
