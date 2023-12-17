import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer Component', () => {
  it('should render footer logo', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const logoLink = screen.getByTestId('logo-link');
    const logoLetters = screen.getAllByTestId('logo-letter');

    expect(logoLink).toBeInTheDocument();
    expect(logoLetters).toHaveLength(3);
  });

  it('should render footer copyright text', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const copyrightText = screen.getByText('© 2019 What to watch Ltd.');
    expect(copyrightText).toBeInTheDocument();
  });
});
