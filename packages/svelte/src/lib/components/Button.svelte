<script lang="ts">
    import '../style/flat.css';

    type Design = "flat" | "neumorpism" | "glass" | "retro" | "minimal" | "3d" | "neon" | "border";

    type ButtonProps = {
        design?: Design;
        size?: "small" | "medium" | "large";
        mode?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
        color?: "blue" | "red" | "green" | "yellow" | "purple" | "orange" | "pink" | "teal";
        rounded?: "none" | "small" | "medium" | "large" | "full";
        type?: "button" | "submit" | "reset";
        disabled?: boolean;
        class?: string;
        onClick?: () => void;
        children?: () => any;
    };

    let {
        design = "flat",
        size = "medium",
        mode = "primary",
        color = "blue",
        type = "button",
        rounded = "none",
        disabled = false,
        class: className = "",
        onClick = () => {},
        children
    }: ButtonProps = $props();
</script>

<button
    type={type}
    disabled={disabled}
    class={`btn ${className}`}
    data-design={design}
    data-size={size}
    data-mode={mode}
    data-color={color}
    onclick={onClick}
>
    {@render children?.()}
</button>

<style>
    .btn {
        padding: 0.5em 1em;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s, color 0.3s;
    }

    .btn[data-design="flat"] {
        background-color: var(--color-flat-bg, #f0f0f0);
        color: var(--color-flat-text, #333);
    }

    .btn[data-design="flat"]:hover {
        background-color: var(--color-flat-hover-bg, #e0e0e0);
    }
</style>
