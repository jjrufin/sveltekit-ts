<script lang="ts">
	import TextBlock from '$lib/components/TextBlock.svelte';
	import BreakerCta from '$lib/components/BreakerCta.svelte';
	import type { TypeTextBlock, TypeBreakerCta } from '$lib/types';
	type TypePageData = {
		flexComponents: TypeFlexComponent[];
	};
	type TypeFlexComponent = TypeBreakerCta | TypeTextBlock;
	const flexComponentMap = {
		TextBlock,
		BreakerCta
	};
	export let data: TypePageData;

	const { flexComponents } = data;
</script>

<div class="flex-component">
	{#each flexComponents as component}
		<svelte:component
			this={flexComponentMap[component.componentName]}
			fields={component.fields}
		/>
	{/each}
</div>
