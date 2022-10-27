<script lang="ts">
	import TextBlock from '$lib/components/TextBlock.svelte';
	import BreakerCta from '$lib/components/BreakerCta.svelte';
	import { SvelteComponent } from 'svelte';
	import type { TypeTextBlock, TypeBreakerCta } from '$lib/types';
	type TypeFlexComponent = TypeBreakerCta | TypeTextBlock;
	const flexComponentMap = {
		TextBlock,
		BreakerCta
	};

	const flexComponents: TypeFlexComponent[] = [
		{
			componentName: 'BreakerCta',
			fields: {
				headline: 'breaker cta headline',
				body: 'breaker cta body'
			}
		},
		{
			componentName: 'TextBlock',
			fields: {
				headline: 'text block headline',
				body: 'text block body'
			}
		}
	];
</script>

<div class="flex-component">
	{#each flexComponents as component}
		<svelte:component
			this={flexComponentMap[component.componentName]}
			fields={component.fields}
		/>
	{/each}
</div>
