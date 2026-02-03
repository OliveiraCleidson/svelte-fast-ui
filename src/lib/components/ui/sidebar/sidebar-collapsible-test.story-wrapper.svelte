<script lang="ts">
	import * as Sidebar from './index.js';
	import * as Collapsible from '../collapsible/index.js';
	import { Button } from '../button/index.js';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import FolderIcon from '@lucide/svelte/icons/folder';
	import FileIcon from '@lucide/svelte/icons/file';

	let open = $state(false);

	function handleToggle() {
		open = !open;
		console.log('Collapsible toggled, open:', open);
	}
</script>

<div class="h-[400px] w-[300px] overflow-hidden rounded-lg border">
	<Sidebar.Provider>
		<Sidebar.Root>
			<Sidebar.Header>
				<h3 class="px-4 py-2 font-semibold">Collapsible Test</h3>
			</Sidebar.Header>

			<Sidebar.Content>
				<Sidebar.Group>
					<Sidebar.GroupLabel>Test Menu</Sidebar.GroupLabel>
					<Sidebar.Menu>
						<!-- Test 1: Using Collapsible with child snippet on Trigger -->
						<Collapsible.Root bind:open>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									<FolderIcon class="size-4" />
									<span>With Child Snippet</span>
								</Sidebar.MenuButton>
								<Collapsible.Trigger>
									{#snippet child({ props })}
										<Sidebar.MenuAction {...props} class="data-[state=open]:rotate-90">
											<ChevronRightIcon />
										</Sidebar.MenuAction>
									{/snippet}
								</Collapsible.Trigger>
								<Collapsible.Content>
									<Sidebar.MenuSub>
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton>
												<FileIcon class="size-4" />
												<span>Sub Item 1</span>
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton>
												<FileIcon class="size-4" />
												<span>Sub Item 2</span>
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
									</Sidebar.MenuSub>
								</Collapsible.Content>
							</Sidebar.MenuItem>
						</Collapsible.Root>

						<!-- Test 2: Using Collapsible.Trigger directly as button -->
						<Collapsible.Root>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									<FolderIcon class="size-4" />
									<span>Direct Trigger</span>
								</Sidebar.MenuButton>
								<Collapsible.Trigger
									class="absolute end-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform hover:bg-sidebar-accent data-[state=open]:rotate-90"
								>
									<ChevronRightIcon class="size-4" />
								</Collapsible.Trigger>
								<Collapsible.Content>
									<Sidebar.MenuSub>
										<Sidebar.MenuSubItem>
											<Sidebar.MenuSubButton>
												<FileIcon class="size-4" />
												<span>Direct Sub 1</span>
											</Sidebar.MenuSubButton>
										</Sidebar.MenuSubItem>
									</Sidebar.MenuSub>
								</Collapsible.Content>
							</Sidebar.MenuItem>
						</Collapsible.Root>

						<!-- Test 3: Manual button control -->
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								<FolderIcon class="size-4" />
								<span>Manual Control</span>
							</Sidebar.MenuButton>
							<button
								onclick={handleToggle}
								class="absolute end-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 transition-transform hover:bg-sidebar-accent"
								class:rotate-90={open}
							>
								<ChevronRightIcon class="size-4" />
							</button>
							{#if open}
								<Sidebar.MenuSub>
									<Sidebar.MenuSubItem>
										<Sidebar.MenuSubButton>
											<FileIcon class="size-4" />
											<span>Manual Sub 1</span>
										</Sidebar.MenuSubButton>
									</Sidebar.MenuSubItem>
								</Sidebar.MenuSub>
							{/if}
						</Sidebar.MenuItem>
					</Sidebar.Menu>
				</Sidebar.Group>
			</Sidebar.Content>

			<Sidebar.Footer>
				<div class="px-4 py-2 text-xs text-muted-foreground">
					Open state: {open ? 'true' : 'false'}
				</div>
			</Sidebar.Footer>
		</Sidebar.Root>
	</Sidebar.Provider>
</div>
