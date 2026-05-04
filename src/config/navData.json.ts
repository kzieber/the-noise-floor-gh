export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/#",
	},
	// {
	// 	text: "Brands",
	// 	link: "/products",
	// },
	{
		text: "About",
		link: "/#about",
	},
	{
		text: "Contact",
		link: "/#contact",
	},
	// {
	// 	text: "Pages",
	// 	dropdown: [
	// 		{
	// 			text: "404",
	// 			link: "/not-a-link/",
	// 		},
	// 	],
	// },
];

export default navConfig;
