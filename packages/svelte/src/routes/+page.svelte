<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<main>
	<div>
		<h1>Flat</h1>
		<div>
			<Button
				design="flat"
				mode="primary"
				color="blue"
				rounded="medium"
				type="button"
				disabled={false}
				onClick={() => console.log('hello!')}
				size="medium"
			>
				Click Me
			</Button>
            <Button
                design="flat"
                mode="secondary"
                color="red"
                rounded="medium"
                type="button"
                disabled={false}
                onClick={() => console.log('hello!')}
                size="medium"
            >
                Click Me
            </Button>
            <Button
                design="flat"
                mode="success"
                color="green"
                rounded="medium"
                type="button"
                disabled={false}
                onClick={() => console.log('hello!')}
                size="medium"
            >
                Click Me
            </Button>
            <Button
                design="flat"
                mode="danger"
                color="red"
                rounded="medium"
                type="button"
                disabled={false}
                onClick={() => console.log('hello!')}
                size="medium"
            >
                Click Me
            </Button>
            <Button
                design="flat"
                mode="warning"
                color="yellow"
                rounded="medium"
                type="button"
                disabled={false}
                onClick={() => console.log('hello!')}
                size="medium"
            >
                Click Me
            </Button>
            <Button
                design="flat"
                mode="info"
                color="blue"
                rounded="medium"
                type="button"
                disabled={false}
                onClick={() => console.log('hello!')}
                size="medium"
            >
                Click Me
            </Button>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
