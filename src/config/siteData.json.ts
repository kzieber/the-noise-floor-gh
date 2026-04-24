export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "The Noise Floor",
	// Your website's title and description (meta fields)
	title: "The Noise Floor",
	description:
		"Your home for music lessons, instrument and accessory sales, service, and more in Joshua Tree, CA",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "The Noise Floor",
		email: "thenoisefloorjt.net",
		twitter: "",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Noise Floor logo",
	},
};

export default siteData;
