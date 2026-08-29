// Warenkorb in localStorage. Es werden nur id + qty gespeichert –
// Titel/Preis/Bild kommen beim Rendern frisch aus products.ts.

export type CartItem = { id: string; qty: number; size?: string };

export function getCart(): CartItem[] {
	return JSON.parse(localStorage.getItem('cart') ?? '[]');
}

export function cartCount(): number {
	return getCart().reduce((n, i) => n + i.qty, 0);
}

function save(cart: CartItem[]) {
	localStorage.setItem('cart', JSON.stringify(cart));
	// damit UI (counter, panel) ueberall reagieren kann
	window.dispatchEvent(new Event('cart-change'));
}

// eine cart-zeile ist id + size: hoodie in M und hoodie in L sind zwei zeilen
export function addToCart(id: string, size?: string) {
	const cart = getCart();
	const item = cart.find((i) => i.id === id && i.size === size);
	if (item) item.qty++;
	else cart.push({ id, qty: 1, size });
	save(cart);
}

export function removeFromCart(id: string, size?: string) {
	const cart = getCart();
	const item = cart.find((i) => i.id === id && i.size === size);
	if (!item) return;
	if (item.qty > 1) {
		item.qty--;
		save(cart);
	} else {
		save(cart.filter((i) => !(i.id === id && i.size === size)));
	}
}

// ---- gemeinsames cart-panel-rendering fuer collection + produktseite ----

type CartProduct = { id: string; title: string; price: number; images: { src: string }[] };

const EMPTY_CART_HTML =
	'<div class="cart-empty"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm61.66-93.66a8,8,0,0,1-11.32,11.32L168,123.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L156.69,112l-10.35-10.34a8,8,0,0,1,11.32-11.32L168,100.69l10.34-10.35a8,8,0,0,1,11.32,11.32L179.31,112Zm-80-20.68L99.31,112l10.35,10.34a8,8,0,0,1-11.32,11.32L88,123.31,77.66,133.66a8,8,0,0,1-11.32-11.32L76.69,112,66.34,101.66A8,8,0,0,1,77.66,90.34L88,100.69,98.34,90.34a8,8,0,0,1,11.32,11.32ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg><span>cart is empty</span></div>';

export function initCartUI(panel: HTMLElement, cartBtn: HTMLElement, products: CartProduct[]) {
	const render = () => {
		// ids aus dem storage mit den produktdaten zusammenfuehren
		const items = [];
		for (const entry of getCart()) {
			const product = products.find(p => p.id === entry.id);
			if (product) {
				items.push({ ...product, qty: entry.qty, size: entry.size });
			}
		}

		let total = 0;
		for (const item of items) {
			total += item.price * item.qty;
		}

		panel.innerHTML = items.length
			? ``
				+ items.map((p) => `
				<div class="cart-row">
					<a class="cart-link" href="/products/${p.id}">
						<img src="${p.images[0].src}" alt="">
						<span class="cart-title">${p.title}${p.size ? ` (${p.size})` : ''} ×${p.qty}</span>
					</a>
					<span>€${p.price * p.qty}</span>
					<button class="cart-remove" data-id="${p.id}" data-size="${p.size ?? ''}">remove</button>
				</div>`).join('')
				+ `<div class="cart-total"><span>total</span><span>€${total}</span></div>`
				+ `<button class="cart-checkout">checkout</button>`
			: EMPTY_CART_HTML;

		// nur das label aktualisieren, damit ein evtl. vorhandenes icon erhalten bleibt
		const cartLabel = cartBtn.querySelector('.nav-label') ?? cartBtn;
		cartLabel.textContent = cartCount() ? `cart (${cartCount()})` : 'cart (0)';
	};

	// mindestens 5 verschiedene artikel im warenkorb pflicht fuer den checkout
	const MIN_ITEMS = 5;

	// ein listener fuer alle buttons im panel (auch nach re-render)
	panel.addEventListener('click', (e) => {
		const removeBtn = (e.target as HTMLElement).closest<HTMLElement>('.cart-remove');
		// leeres data-size wieder zu undefined machen (zeile ohne groesse)
		if (removeBtn) {
			removeFromCart(removeBtn.dataset.id!, removeBtn.dataset.size || undefined);
			return;
		}

		const checkoutBtn = (e.target as HTMLElement).closest('.cart-checkout');
		if (checkoutBtn) {
			const items = getCart().length;
			if (items >= MIN_ITEMS) {
				window.location.href = '/checkout';
			}
		}
	});

	// beim hinzufuegen (menge steigt) kurz aufblinken lassen
	let prevCount = cartCount();
	cartBtn.addEventListener('animationend', () => cartBtn.classList.remove('blink'));

	window.addEventListener('cart-change', () => {
		const now = cartCount();
		if (now > prevCount) {
			cartBtn.classList.remove('blink');
			void cartBtn.offsetWidth; // reflow, damit die animation neu startet
			cartBtn.classList.add('blink');
		}
		prevCount = now;
		render();
	});
	render();
}
