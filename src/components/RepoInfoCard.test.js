import React from 'react';
import {render, cleanup } from '@testing-library/react';
import RepoInfoCard from './RepoInfoCard';
import AppProviders from '../context';

afterEach(cleanup)

test('StyledP is rendered', () => {
  const { queryByText } = render(<AppProviders><RepoInfoCard /></AppProviders>);
  const result = queryByText(/Repository details will/i);
  expect(result).toBeTruthy(); 
});