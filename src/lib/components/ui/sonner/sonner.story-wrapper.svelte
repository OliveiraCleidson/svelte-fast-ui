<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { Toaster } from './index.js';
	import { Button } from '../button/index.js';

	let {
		variant = 'default',
		position = 'bottom-right',
		richColors = true,
		closeButton = false,
		expand = false
	}: {
		variant?:
			| 'default'
			| 'success'
			| 'error'
			| 'info'
			| 'warning'
			| 'description'
			| 'action'
			| 'promise'
			| 'loading';
		position?:
			| 'top-left'
			| 'top-center'
			| 'top-right'
			| 'bottom-left'
			| 'bottom-center'
			| 'bottom-right';
		richColors?: boolean;
		closeButton?: boolean;
		expand?: boolean;
	} = $props();

	function showToast() {
		switch (variant) {
			case 'success':
				toast.success('Successfully saved!');
				break;
			case 'error':
				toast.error('Something went wrong');
				break;
			case 'info':
				toast.info('This is an informational message');
				break;
			case 'warning':
				toast.warning('Please review before continuing');
				break;
			case 'description':
				toast('Event has been created', {
					description: 'Sunday, December 03, 2023 at 9:00 AM'
				});
				break;
			case 'action':
				toast('Event has been created', {
					description: 'Sunday, December 03, 2023 at 9:00 AM',
					action: {
						label: 'Undo',
						onClick: () => console.info('Undo')
					}
				});
				break;
			case 'promise':
				toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
					loading: 'Loading...',
					success: 'Data loaded successfully!',
					error: 'Failed to load data'
				});
				break;
			case 'loading':
				const toastId = toast.loading('Uploading file...');
				setTimeout(() => {
					toast.success('Upload complete!', { id: toastId });
				}, 2000);
				break;
			default:
				toast('Event has been created', {
					description: 'Sunday, December 03, 2023 at 9:00 AM',
					action: {
						label: 'Undo',
						onClick: () => console.info('Undo')
					}
				});
		}
	}
</script>

<Toaster {position} {richColors} {closeButton} {expand} />
<Button variant="outline" onclick={showToast}>Show Toast</Button>
