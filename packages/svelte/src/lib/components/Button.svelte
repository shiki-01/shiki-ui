<script lang="ts">
	import type { ButtonProps } from '../../../../core/props/button';

	const {
		design = 'flat',
		size = 'medium',
		mode = 'primary',
		color = 'blue',
		type = 'button',
		rounded = 'none',
		disabled = false,
		class: className = '',
		style = '',
		label,
		onclick = () => {}
	}: ButtonProps = $props();

	let cssVars: string = $state('');

	$effect(() => {
        if (mode === 'success' || mode === 'danger' || mode === 'warning' || mode === 'info') {
            cssVars = `--btn-bg: var(--${design}-color-${mode}); --btn-bg-hover: var(--${design}-color-${mode}-hover);`;
        } else if (color === 'black' || color === 'white') {
            cssVars = `--btn-bg: var(--${design}-color-${color}); --btn-bg-hover: var(--${design}-color-${color}-hover);`;
        } else {
            cssVars = `--btn-bg: var(--${design}-color-${color}-${mode === 'secondary' ? 'secondary' : 'primary'}); --btn-bg-hover: var(--${design}-color-${color}-${mode === 'secondary' ? 'tertiary' : 'secondary'});`;
        }
    });
</script>

<button
	{type}
	{disabled}
	class={`btn ${className}`}
	style={`${cssVars} ${style}`}
	data-design={design}
	data-size={size}
	data-mode={mode}
	data-color={color}
	data-rounded={rounded}
	{onclick}
>
	{label}
</button>

<style>
    @import '../style/btn.default.css';
    @import '../style/flat.css';
    @import '../style/neumorpism.css';
</style>
