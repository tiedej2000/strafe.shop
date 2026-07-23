export function getColor(): string {
	return localStorage.getItem('color') ?? 'black';
}

// setzt --currentcolor auf dem root-element
export function applyColor() {
	const color = getColor();
	document.documentElement.style.setProperty('--currentcolor', `var(--${color})`);
}

export function setColor(name: string) {
	localStorage.setItem('color', name);
	applyColor();
}
