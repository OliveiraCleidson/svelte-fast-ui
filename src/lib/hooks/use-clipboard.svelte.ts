export class UseClipboard {
	copied = $state(false);
	#timeout: ReturnType<typeof setTimeout> | null = null;

	async copy(text: string) {
		try {
			await navigator.clipboard.writeText(text);
			this.copied = true;

			if (this.#timeout) {
				clearTimeout(this.#timeout);
			}

			this.#timeout = setTimeout(() => {
				this.copied = false;
			}, 2000);
		} catch {
			this.copied = false;
		}
	}
}
