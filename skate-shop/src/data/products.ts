type ProductImage = { type: string; src: string; alt: string };

type Product = {
	id: string;
	title: string;
	price: number;
	images: ProductImage[];
	description?: string;
	productDetails?: string;
	productCare?: string;
};

export const products: Product[] = [
	{
		id: 'IDNR1',
		title: 'SWEATER WR',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR1/produkt1_ziphoodie_black_modell.webp', alt: 'Zip Hoodie Schwarz – am Modell' },
			{ type: 'closeup', src: '/products/IDNR1/produkt1_ziphoodie_black_closeup.webp', alt: 'Zip Hoodie Schwarz – Detail' },
			{ type: 'front', src: '/products/IDNR1/produkt1_ziphoodie_black.webp', alt: 'Zip Hoodie Schwarz – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR1/produkt1_ziphoodie_black_back.webp', alt: 'Zip Hoodie Schwarz – Rückansicht' },
		],
		description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus.',
		productDetails: 'test auch mal 2',
		productCare: 'test',
	},
	{
		id: 'IDNR2',
		title: 'SWEATER WR',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR2/produkt1_ziphoodie_blue_modell.webp', alt: 'Zip Hoodie Blau – am Modell' },
			{ type: 'closeup', src: '/products/IDNR2/produkt1_ziphoodie_blue_closeup.webp', alt: 'Zip Hoodie Blau – Detail' },
			{ type: 'front', src: '/products/IDNR2/produkt1_ziphoodie_blue.webp', alt: 'Zip Hoodie Blau – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR2/produkt1_ziphoodie_blue_black.webp', alt: 'Zip Hoodie Blau – Ansicht' },
		],
	},
	{
		id: 'IDNR3',
		title: 'SWEATER WR',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR3/produkt1_ziphoodie_red_modell.webp', alt: 'Zip Hoodie Rot – am Modell' },
			{ type: 'closeup', src: '/products/IDNR3/produkt1_ziphoodie_red_closeup.webp', alt: 'Zip Hoodie Rot – Detail' },
			{ type: 'front', src: '/products/IDNR3/produkt1_ziphoodie_red.webp', alt: 'Zip Hoodie Rot – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR3/produkt1_ziphoodie_red_back.webp', alt: 'Zip Hoodie Rot – Rückansicht' },
		],
	},
	{
		id: 'IDNR4',
		title: 'JEANS',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR4/produkt2_jeans_modell.webp', alt: 'Jeans – am Modell' },
			{ type: 'closeup', src: '/products/IDNR4/produkt2_jeans_closeup.webp', alt: 'Jeans – Detail' },
			{ type: 'front', src: '/products/IDNR4/produkt2_jeans.webp', alt: 'Jeans – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR4/produkt_jeans_back.webp', alt: 'Jeans – Rückansicht' },
		],
	},
	{
		id: 'IDNR5',
		title: 'BELT SNAKE',
		price: 120,
		images: [
			{ type: 'closeup', src: '/products/IDNR5/produkt3_belt_snake_closeup.webp', alt: 'Gürtel Snake – Detail' },
			{ type: 'front', src: '/products/IDNR5/produkt3_belt_snake.webp', alt: 'Gürtel Snake – Vorderansicht' },
			{ type: 'rolled', src: '/products/IDNR5/produkt3_belt_snake_rolled.webp', alt: 'Gürtel Snake – gerollt' },
		],
	},
	{
		id: 'IDNR6',
		title: 'BELT COW',
		price: 120,
		images: [
			{ type: 'closeup', src: '/products/IDNR6/produkt3_belt_cow_closeup.webp', alt: 'Gürtel Cow – Detail' },
			{ type: 'front', src: '/products/IDNR6/produkt3_belt_cow.webp', alt: 'Gürtel Cow – Vorderansicht' },
			{ type: 'rolled', src: '/products/IDNR6/produkt3_belt_cow_rolled.webp', alt: 'Gürtel Cow – gerollt' },
		],
	},
	{
		id: 'IDNR7',
		title: 'TEE LIZ BLUE',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR7/produkt4_tee_liz_modell.webp', alt: 'Tee Liz Blau – am Modell' },
			{ type: 'front', src: '/products/IDNR7/produkt4_tee_lizblue.webp', alt: 'Tee Liz Blau – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR7/produkt4_tee_liz_back.webp', alt: 'Tee Liz Blau – Rückansicht' },
		],
	},
	{
		id: 'IDNR8',
		title: 'TEE LIZ BLACK',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR8/produkt4_tee_liz_modell.webp', alt: 'Tee Liz Schwarz – am Modell' },
			{ type: 'front', src: '/products/IDNR8/produkt4_tee_lizblack.webp', alt: 'Tee Liz Schwarz – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR8/produkt4_tee_liz_back.webp', alt: 'Tee Liz Schwarz – Rückansicht' },
		],
	},
	{
		id: 'IDNR9',
		title: 'TEE LIZ BLACK',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR9/produkt5_tee_lizblack_modell.webp', alt: 'Tee Liz Schwarz – am Modell' },
			{ type: 'front', src: '/products/IDNR9/produkt5_tee_lizblack.webp', alt: 'Tee Liz Schwarz – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR9/produkt5_tee_lizblack_back.webp', alt: 'Tee Liz Schwarz – Rückansicht' },
		],
	},
	{
		id: 'IDNR10',
		title: 'WAX LIZ RED',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR10/produkt6_wax_lizred.webp', alt: 'Wax Liz Rot – Vorderansicht' },
			{ type: 'alt', src: '/products/IDNR10/produkt6_wax_lizred2.webp', alt: 'Wax Liz Rot – Ansicht' },
		],
	},
	{
		id: 'IDNR11',
		title: 'WAX LIZ BLUE',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR11/produkt6_wax_lizblue.webp', alt: 'Wax Liz Blau – Vorderansicht' },
			{ type: 'alt', src: '/products/IDNR11/produkt6_wax_lizblue2.webp', alt: 'Wax Liz Blau – Ansicht' },
		],
	},
	{
		id: 'IDNR12',
		title: 'DECK STAR BB',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR12/produkt7_deck_starBB.webp', alt: 'Deck Star BB – Ansicht' },
		],
	},
	{
		id: 'IDNR13',
		title: 'DECK STAR RW',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR13/produkt7_deck_starRW.webp', alt: 'Deck Star RW – Ansicht' },
		],
	},
	{
		id: 'IDNR14',
		title: 'DECK STAR OY',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR14/produkt7_deck_starOY.webp', alt: 'Deck Star OY – Ansicht' },
		],
	},
	{
		id: 'IDNR15',
		title: 'MAG ISSUE 07',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR15/produkt8_mag_issue07.webp', alt: 'Magazin Issue 07 – Cover' },
		],
	},
	{
		id: 'IDNR16',
		title: 'MAG ISSUE 08',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR16/produkt8_mag_issue08.webp', alt: 'Magazin Issue 08 – Cover' },
		],
	},
	{
		id: 'IDNR17',
		title: 'JEANS BAGGY BLUE',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR17/produkt9_jeans_baggyblue_modell.webp', alt: 'Baggy Jeans Blau – am Modell' },
			{ type: 'front', src: '/products/IDNR17/produkt9_jeans_baggyblue.webp', alt: 'Baggy Jeans Blau – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR17/produkt9_jeans_baggyblue_back.webp', alt: 'Baggy Jeans Blau – Rückansicht' },
		],
	},
	{
		id: 'IDNR18',
		title: 'JEANS BAGGY GREEN',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR18/produkt9_jeans_baggygreen_modell.webp', alt: 'Baggy Jeans Grün – am Modell' },
			{ type: 'front', src: '/products/IDNR18/produkt9_jeans_baggygreen.webp', alt: 'Baggy Jeans Grün – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR18/produkt9_jeans_baggygreen_back.webp', alt: 'Baggy Jeans Grün – Rückansicht' },
		],
	},
	{
		id: 'IDNR19',
		title: 'JEANS BAGGY ASPHALT',
		price: 120,
		images: [
			{ type: 'modell', src: '/products/IDNR19/produkt9_jeans_baggyasphalt_modell.webp', alt: 'Baggy Jeans Asphalt – am Modell' },
			{ type: 'front', src: '/products/IDNR19/produkt9_jeans_baggyasphalt.webp', alt: 'Baggy Jeans Asphalt – Vorderansicht' },
			{ type: 'back', src: '/products/IDNR19/produkt9_jeans_baggyasphalt_back.webp', alt: 'Baggy Jeans Asphalt – Rückansicht' },
		],
	},
	{
		id: 'IDNR20',
		title: 'CANDLE 3PACK',
		price: 120,
		images: [
			{ type: 'closeup', src: '/products/IDNR20/produkt10_candle_closeup.webp', alt: 'Candle 3-Pack – Detail' },
			{ type: 'front', src: '/products/IDNR20/produkt10_candle_3pack.webp', alt: 'Candle 3-Pack – Ansicht' },
		],
	},
	{
		id: 'IDNR21',
		title: 'BEANIE STAR BEIGE',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR21/produkt11_beanistar_beige.webp', alt: 'Beanie Star Beige – Ansicht' },
		],
	},
	{
		id: 'IDNR22',
		title: 'BEANIE STAR BLACK',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR22/produkt11_beanistar_black.webp', alt: 'Beanie Star Schwarz – Ansicht' },
		],
	},
	{
		id: 'IDNR23',
		title: 'BEANIE STAR BLUE',
		price: 120,
		images: [
			{ type: 'front', src: '/products/IDNR23/produkt11_beanistar_blue.webp', alt: 'Beanie Star Blau – Ansicht' },
		],
	},
]
