import {hoverCardAnatomy} from '$lib/index.js';
import {render} from '@testing-library/svelte';
import {axe} from 'vitest-axe';
import HoverCard from './hover-card.svelte';
import {getAnatomySelector} from './utils.js';

describe('HoverCard', () => {
  it.each(getAnatomySelector(hoverCardAnatomy))(
    'should render %s',
    (selector) => {
      render(HoverCard as any);
      expect(document.querySelector(selector)).toBeInTheDocument();
    },
  );

  it('should have no a11y violations', async () => {
    const {container} = render(HoverCard as any);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
