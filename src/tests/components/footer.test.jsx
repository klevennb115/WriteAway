import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../../components/Footer/Footer';

describe('Test for Footer', () => {
  test('Test Rendering', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
