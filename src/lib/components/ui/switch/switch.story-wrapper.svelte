<script lang="ts">
	import * as Switch from '$lib/components/ui/switch/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<div class="flex items-center space-x-2">
	<Switch.Root id="airplane-mode" />
	<Label for="airplane-mode">Airplane Mode</Label>
</div>
