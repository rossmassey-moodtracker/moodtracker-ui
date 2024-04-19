/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom'
import Moods from '../Moods'

it('Title says Moods', async () => {
    const { findByText } = await act(async () => render(<Moods/>));

    const titleElement = await findByText('Moods');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
});
