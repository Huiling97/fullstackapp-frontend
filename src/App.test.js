import React from 'react';
import Chai from 'chai-dom';
import { render } from '@testing-library/react', '@testing-library/jest-dom';
import App from './App'; // imports app file

test('renders learn react link', () => {
  
    screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Welcome to FintechSG React Course";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
  
  const { nodeHasText } = render(<App />);
  const linkElement = nodeHasText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); 
});
