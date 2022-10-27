<script lang="ts">
	import type { TypeBreakerCta } from '$lib/types';
	export let fields: TypeBreakerCta['fields'];
</script>

<div class="breaker-cta">
	<div class="headline">
		{fields.headline}
	</div>
	<div class="description">
		{fields.body}
	</div>
</div>
