import React from 'react';
import { render } from '@testing-library/react';
import { Banner } from './src/components/Banner';

test('Renderizar Banner', () => {
  render(<Banner />);
});
