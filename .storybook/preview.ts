import type { Preview } from '@storybook/sveltekit';
import '../src/routes/layout.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			},
			exclude: [
				/^aria-/,
				/^data-/,
				/^on[A-Z]/,
				'ref',
				'children',
				'child',
				'class',
				'style',
				'this'
			]
		}
	}
};

export default preview;
