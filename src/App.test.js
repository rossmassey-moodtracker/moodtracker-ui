/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('shows title', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Moodtracker UI/i);
    expect(linkElement).toBeInTheDocument();
});
