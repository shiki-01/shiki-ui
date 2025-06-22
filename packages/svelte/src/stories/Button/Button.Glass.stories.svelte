<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '../../lib/components/Button.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Components/Button/Glass Design',
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
			design: 'glass',
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

<Story name="Default" />

<Story name="Primary" args={{ mode: 'primary', label: 'Primary Button' }} />

<Story name="Secondary" args={{ mode: 'secondary', design: 'glass', color: 'blue', label: 'Secondary Button' }} />

<Story name="Success" args={{ mode: 'success', label: 'Success Button' }} />

<Story name="Danger" args={{ mode: 'danger', label: 'Danger Button' }} />

<Story name="Warning" args={{ mode: 'warning', label: 'Warning Button' }} />

<Story name="Info" args={{ mode: 'info', label: 'Info Button' }} />

<Story name="Small" args={{ size: 'small', label: 'Small Button' }} />

<Story name="Medium" args={{ size: 'medium', label: 'Medium Button' }} />

<Story name="Large" args={{ size: 'large', label: 'Large Button' }} />

<Story name="RoundedSmall" args={{ rounded: 'small', label: 'Rounded Small' }} />

<Story name="RoundedMedium" args={{ rounded: 'medium', label: 'Rounded Medium' }} />

<Story name="RoundedLarge" args={{ rounded: 'large', label: 'Rounded Large' }} />

<Story name="RoundedFull" args={{ rounded: 'full', label: 'Pill Button' }} />

<Story name="Disabled" args={{ disabled: true, label: 'Disabled Button' }} />

