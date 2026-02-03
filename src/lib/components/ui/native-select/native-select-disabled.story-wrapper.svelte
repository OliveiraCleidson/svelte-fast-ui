<script lang="ts">
	import * as NativeSelect from '$lib/components/ui/native-select/index.js';
</script>

<NativeSelect.Root disabled>
	<NativeSelect.Option value="">Select priority</NativeSelect.Option>
	<NativeSelect.Option value="low">Low</NativeSelect.Option>
	<NativeSelect.Option value="medium">Medium</NativeSelect.Option>
	<NativeSelect.Option value="high">High</NativeSelect.Option>
	<NativeSelect.Option value="urgent">Urgent</NativeSelect.Option>
</NativeSelect.Root>
