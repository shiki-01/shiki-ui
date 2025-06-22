<script module lang="ts">
    import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '../../lib/components/Button.svelte';
	import { fn } from 'storybook/test';

    const { Story } = defineMeta({
		title: 'Components/Button/Neumorpism Design',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			design: {
				control: { type: 'select' },
				options: ['flat', 'neumorpism', 'glass', 'retro', 'minimal', '3d', 'neon', 'border']
			},
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			},
			mode: {
				control: { type: 'select' },
				options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
			},
			color: {
				control: { type: 'select' },
				options: [
					'blue',
					'red',
					'green',
					'yellow',
					'purple',
					'orange',
					'pink',
					'teal',
					'cyan',
					'gray',
					'black',
					'white'
				]
			},
			style: {
				control: { type: 'text' }
			},
			rounded: {
				control: { type: 'select' },
				options: ['none', 'small', 'medium', 'large', 'full']
			},
			type: {
				control: { type: 'select' },
				options: ['button', 'submit', 'reset']
			},
			disabled: { control: 'boolean' },
			label: { control: 'text' }
		},
		args: {
			design: 'neumorpism',
			size: 'medium',
			mode: 'primary',
			color: 'blue',
			style: '',
			rounded: 'medium',
			type: 'button',
			disabled: false,
			label: 'Button',
			onclick: fn()
		}
	});
</script>

<Story name="Primary" args={{ mode: 'primary', label: 'Neumorpism Primary' }} />

<Story name="Secondary" args={{ mode: 'secondary', label: 'Neumorpism Secondary' }} />

<Story name="Success" args={{ mode: 'success', label: 'Neumorpism Success' }} />

<Story name="Danger" args={{ mode: 'danger', label: 'Neumorpism Danger' }} />

<Story name="Warning" args={{ mode: 'warning', label: 'Neumorpism Warning' }} />

<Story name="Info" args={{ mode: 'info', label: 'Neumorpism Info' }} />

<Story name="Small" args={{ size: 'small', label: 'Neumorpism Small' }} />

<Story name="Medium" args={{ size: 'medium', label: 'Neumorpism Medium' }} />

<Story name="Large" args={{ size: 'large', label: 'Neumorpism Large' }} />
