export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Aaron Motacek",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/aaron-mota",
		twitter: "https://twitter.com/aaronmotacek",
		discord: "https://discord.gg/aaronmota",
		linkedin: "https://www.linkedin.com/in/aaron-motacek/",
		instagram: "https://www.instagram.com/aaronmotacek/",
    sponsor: "https://www.aaronmotacek.dev/",
    personal: "https://www.aaronmotacek.dev/",
	},
};
