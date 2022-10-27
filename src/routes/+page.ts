import type { LoadEvent } from '@sveltejs/kit';
import { browser } from '$app/environment';
export async function load(event: LoadEvent) {
	if (browser) {
		const response = await fetch('test-data.json');
		const data = await response.json();
		return data;
	}
	return {
		flexComponents: []
	};
}
