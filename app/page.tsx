import { GithubIcon, LinkedInIcon, PersonalIcon } from "@/components/icons";
import { Card, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";

interface ExternalLinkProps {
	href: string;
	icon: React.ReactNode;
	title: string;
}

const cl = {
	groupOpacity: "opacity-80 group-hover:opacity-100",
	dark: {
		groupOpacity: "dark: opacity-50 dark:group-hover:opacity-80",
	}
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, icon, title }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			<Card className="w-full" isHoverable>
				<CardBody className="group p-3 flex flex-row gap-2 items-center justify-center">
					{icon}
					<h3 className={`${cl.groupOpacity} self-center text-lg`}>{title}</h3>
				</CardBody>
			</Card>
		</a>
	);
};

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
			<Card shadow="lg">
				<CardBody>
					<div className="flex flex-col w-full">
						<div className="flex justify-center">
							<Image src="/meFB.jpeg" width={200} height={200} alt="Personal Profile Pic" className="rounded-full" />
						</div>
						<div className="flex justify-center pt-2">
							<h1 className="text-3xl font-bold">Aaron Motacek</h1>
						</div>
						<div className="flex justify-center m-4 gap-4">
							<Chip variant="shadow" size="sm" color="primary">
								React
							</Chip>
							<Chip variant="shadow" size="sm" color="primary">
								Next.js
							</Chip>
							<Chip variant="shadow" size="sm" color="primary">
								Tailwind
							</Chip>
							<Chip variant="shadow" size="sm" color="primary">
								Typescript
							</Chip>
						</div>
						<div className="flex justify-center max-w-sm pt-1">
							{/* eslint-disable-next-line react/no-unescaped-entities */}
							<p className="text-center text-md font-semibold">Hi, I'm Aaron. I'm a full stack developer.</p>
						</div>
						<div className="flex flex-col justify-center gap-2 pt-6">
							<ExternalLink
								title="aaronmotacek.dev"
								href="https://aaronmotacek.dev"
								icon={<PersonalIcon className={`${cl.groupOpacity}`} />}
							/>
							<ExternalLink
								title="Github"
								href="https://www.github.com/aaron-mota"
								icon={<GithubIcon className={`${cl.groupOpacity}`} />}
							/>
							<ExternalLink
								title="LinkedIn"
								href="https://www.linkedin.com/aaronmotacek"
								icon={<LinkedInIcon className={`${cl.groupOpacity}`} />}
							/>
						</div>
					</div>
				</CardBody>
			</Card>
		</section>
	);
}



{/* <div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}