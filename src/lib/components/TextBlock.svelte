<script lang="ts">
	import type { TypeTextBlock } from '$lib/types';
	export let fields: TypeTextBlock['fields'];
</script>

<div class="text-block">
	<div class="headline">
		{fields.headline}
	</div>
	<div class="description">
		{fields.body}
	</div>
</div>
