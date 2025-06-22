<script lang="ts">
	import '../lib/style/flat.css';
  import type { ButtonProps } from '../../../core/props/button';

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
</script>

<button
	{type}
	{disabled}
	class={`btn ${className}`}
  style={style}
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
	.btn {
		padding: 0.5em 1em;
		border: none;
		cursor: pointer;
		font-size: 1rem;
		transition:
			background-color 0.3s,
			color 0.3s;
		border-radius: 0;
	}

	/* Size variants */
	.btn[data-size='small'] {
		padding: 0.25em 0.5em;
		font-size: 0.875rem;
	}

	.btn[data-size='large'] {
		padding: 0.75em 1.5em;
		font-size: 1.125rem;
	}

	/* Rounded variants */
	.btn[data-rounded='small'] {
		border-radius: 0.25rem;
	}

	.btn[data-rounded='medium'] {
		border-radius: 0.5rem;
	}

	.btn[data-rounded='large'] {
		border-radius: 1rem;
	}

	.btn[data-rounded='full'] {
		border-radius: 9999px;
	}

	/* Flat design */
	.btn[data-design='flat'] {
		background-color: var(--flat-color-gray-primary, #6c757d);
		color: white;
	}

	.btn[data-design='flat']:hover:not(:disabled) {
		background-color: var(--flat-color-gray-secondary, #5a6268);
	}

	/* Mode variants for flat design */
	.btn[data-design='flat'][data-color='blue'][data-mode='primary'] {
		background-color: var(--flat-color-blue-primary, #007bff);
	}

	.btn[data-design='flat'][data-color='blue'][data-mode='primary']:hover:not(:disabled) {
		background-color: var(--flat-color-blue-secondary, #0056b3);
	}

	.btn[data-design='flat'][data-color='blue'][data-mode='secondary'] {
		background-color: var(--flat-color-blue-secondary, #6c757d);
	}

	.btn[data-design='flat'][data-color='blue'][data-mode='secondary']:hover:not(:disabled) {
		background-color: var(--flat-color-blue-tertiary, #5a6268);
	}

  .btn[data-design='flat'][data-color='green'][data-mode='primary'] {
    background-color: var(--flat-color-green-primary, #28a745);
  }

  .btn[data-design='flat'][data-color='green'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-green-secondary, #218838);
  }

  .btn[data-design='flat'][data-color='green'][data-mode='secondary'] {
    background-color: var(--flat-color-green-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='green'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-green-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='red'][data-mode='primary'] {
    background-color: var(--flat-color-red-primary, #dc3545);
  }

  .btn[data-design='flat'][data-color='red'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-red-secondary, #c82333);
  }

  .btn[data-design='flat'][data-color='red'][data-mode='secondary'] {
    background-color: var(--flat-color-red-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='red'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-red-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='green'][data-mode='primary'] {
    background-color: var(--flat-color-green-primary, #28a745);
  }

  .btn[data-design='flat'][data-color='green'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-green-secondary, #218838);
  }

  .btn[data-design='flat'][data-color='green'][data-mode='secondary'] {
    background-color: var(--flat-color-green-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='green'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-green-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='yellow'][data-mode='primary'] {
    background-color: var(--flat-color-yellow-primary, #ffc107);
  }

  .btn[data-design='flat'][data-color='yellow'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-yellow-secondary, #e0a800);
  }

  .btn[data-design='flat'][data-color='yellow'][data-mode='secondary'] {
    background-color: var(--flat-color-yellow-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='yellow'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-yellow-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='purple'][data-mode='primary'] {
    background-color: var(--flat-color-purple-primary, #6f42c1);
  }

  .btn[data-design='flat'][data-color='purple'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-purple-secondary, #5a32b1);
  }

  .btn[data-design='flat'][data-color='purple'][data-mode='secondary'] {
    background-color: var(--flat-color-purple-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='purple'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-purple-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='orange'][data-mode='primary'] {
    background-color: var(--flat-color-orange-primary, #fd7e14);
  }

  .btn[data-design='flat'][data-color='orange'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-orange-secondary, #e67e22);
  }

  .btn[data-design='flat'][data-color='orange'][data-mode='secondary'] {
    background-color: var(--flat-color-orange-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='orange'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-orange-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='pink'][data-mode='primary'] {
    background-color: var(--flat-color-pink-primary, #e83e8c);
  }

  .btn[data-design='flat'][data-color='pink'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-pink-secondary, #d63384);
  }

  .btn[data-design='flat'][data-color='pink'][data-mode='secondary'] {
    background-color: var(--flat-color-pink-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='pink'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-pink-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='teal'][data-mode='primary'] {
    background-color: var(--flat-color-teal-primary, #20c997);
  }

  .btn[data-design='flat'][data-color='teal'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-teal-secondary, #17a2b8);
  }

  .btn[data-design='flat'][data-color='teal'][data-mode='secondary'] {
    background-color: var(--flat-color-teal-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='teal'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-teal-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='cyan'][data-mode='primary'] {
    background-color: var(--flat-color-cyan-primary, #17a2b8);
  }

  .btn[data-design='flat'][data-color='cyan'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-cyan-secondary, #138496);
  }

  .btn[data-design='flat'][data-color='cyan'][data-mode='secondary'] {
    background-color: var(--flat-color-cyan-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='cyan'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-cyan-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='gray'][data-mode='primary'] {
    background-color: var(--flat-color-gray-primary, #6c757d);
  }

  .btn[data-design='flat'][data-color='gray'][data-mode='primary']:hover:not(:disabled) {
    background-color: var(--flat-color-gray-secondary, #5a6268);
  }

  .btn[data-design='flat'][data-color='gray'][data-mode='secondary'] {
    background-color: var(--flat-color-gray-secondary, #6c757d);
  }

  .btn[data-design='flat'][data-color='gray'][data-mode='secondary']:hover:not(:disabled) {
    background-color: var(--flat-color-gray-tertiary, #5a6268);
  }

  .btn[data-design='flat'][data-color='black'] {
    background-color: var(--flat-color-black, #000);
  }

  .btn[data-design='flat'][data-color='black']:hover:not(:disabled) {
    background-color: var(--flat-color-black-hover, #333);
  }

  .btn[data-design='flat'][data-color='white'] {
    background-color: var(--flat-color-white, #fff);
  }

  .btn[data-design='flat'][data-color='white']:hover:not(:disabled) {
    background-color: var(--flat-color-white-hover, #f8f9fa);
  }

  .btn[data-design='flat'][data-mode='success'] {
    background-color: var(--flat-color-success, #28a745);
  }

  .btn[data-design='flat'][data-mode='success']:hover:not(:disabled) {
    background-color: var(--flat-color-success-hover, #218838);
  }

  .btn[data-design='flat'][data-mode='danger'] {
    background-color: var(--flat-color-danger, #dc3545);
  }

  .btn[data-design='flat'][data-mode='danger']:hover:not(:disabled) {
    background-color: var(--flat-color-danger-hover, #c82333);
  }

  .btn[data-design='flat'][data-mode='warning'] {
    background-color: var(--flat-color-warning, #ffc107);
  }

  .btn[data-design='flat'][data-mode='warning']:hover:not(:disabled) {
    background-color: var(--flat-color-warning-hover, #e0a800);
  }

  .btn[data-design='flat'][data-mode='info'] {
    background-color: var(--flat-color-info, #17a2b8);
  }

  .btn[data-design='flat'][data-mode='info']:hover:not(:disabled) {
    background-color: var(--flat-color-info-hover, #138496);
  }

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
