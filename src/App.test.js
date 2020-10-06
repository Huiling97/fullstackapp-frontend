import React from 'react';
import Chai from 'chai-dom';
import { render } from '@testing-library/react';
import App from './App'; // imports app file

test('renders learn react link', () => {
  const { getNodeText } = render(<App />);
  
const TEXT_NODE = 3

  function getNodeText(node) {
    if (node.matches('input[type=submit], input[type=button]')) {
      return node.value
    }
    return Array.from(node.childNodes)
      .filter(child => child.nodeType === TEXT_NODE && Boolean(child.textContent))
      .map(c => c.textContent)
      .join('')
  }
  
  const linkElement = getNodeText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); 
});
