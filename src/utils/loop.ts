export function loop(fn: () => void, amount: number) {
	for (let i = 0; i < amount; i++) {
		fn();
	}
}
