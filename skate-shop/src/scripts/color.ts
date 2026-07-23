export function getColor(): string {
	return localStorage.getItem('color') ?? 'black';
}

// setzt --currentcolor auf dem root-element
export function applyColor() {
	document.documentElement.style.setProperty('--currentcolor', `var(--${getColor()})`);
}

export function setColor(name: string) {
	localStorage.setItem('color', name);
	applyColor();
}
