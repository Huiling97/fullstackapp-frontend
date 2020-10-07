import React from 'react';
import Chai from 'chai-dom';
import { render, screen } from '@testing-library/react';
import Jest from '@testing-library/jest-dom';
import App from './App'; // imports app file

test('renders learn react link', () => {
  
   const { getByText } = render(<App />);
                                  
      screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Welcome to FintechSG React Course";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
  
 
  const linkElement = getByText("Welcome to FintechSG React Course");
  expect(linkElement).toBeInTheDocument(); 
});
