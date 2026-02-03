<script lang="ts">
	import * as NativeSelect from '$lib/components/ui/native-select/index.js';
</script>

<NativeSelect.Root>
	<NativeSelect.Option value="">Select a team member</NativeSelect.Option>
	<NativeSelect.OptGroup label="Engineering">
		<NativeSelect.Option value="alex">Alex Johnson</NativeSelect.Option>
		<NativeSelect.Option value="sarah">Sarah Chen</NativeSelect.Option>
		<NativeSelect.Option value="mike">Mike Wilson</NativeSelect.Option>
	</NativeSelect.OptGroup>
	<NativeSelect.OptGroup label="Sales">
		<NativeSelect.Option value="emily">Emily Davis</NativeSelect.Option>
		<NativeSelect.Option value="james">James Brown</NativeSelect.Option>
	</NativeSelect.OptGroup>
	<NativeSelect.OptGroup label="Operations">
		<NativeSelect.Option value="lisa">Lisa Anderson</NativeSelect.Option>
		<NativeSelect.Option value="david">David Martinez</NativeSelect.Option>
	</NativeSelect.OptGroup>
</NativeSelect.Root>
