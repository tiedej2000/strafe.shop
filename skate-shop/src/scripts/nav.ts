type NavPair = { el: HTMLElement; panel: string };

export function initNav(wrapper: HTMLElement, pairs: NavPair[]) {
	const navPanel = wrapper.querySelector<HTMLElement>('#nav-panel')!;

	function openPanel(name: string) {
		const section = navPanel.querySelector(`[data-panel="${name}"]`)!;
		const wasOpen = section.classList.contains('active');
		navPanel.querySelectorAll('.panel-section').forEach((s) => s.classList.remove('active'));
		navPanel.classList.toggle('active', !wasOpen);
		section.classList.toggle('active', !wasOpen);
		return !wasOpen;
	}

	pairs.forEach(({ el, panel }) => {
		el.addEventListener('click', () => {
			const open = openPanel(panel);
			pairs.forEach((p) => p.el.classList.remove('active'));
			el.classList.toggle('active', open);
		});
	});

	wrapper.addEventListener('mouseleave', () => {
		navPanel.classList.remove('active');
		navPanel.querySelectorAll('.panel-section').forEach((s) => s.classList.remove('active'));
		pairs.forEach((p) => p.el.classList.remove('active'));
	});
}
