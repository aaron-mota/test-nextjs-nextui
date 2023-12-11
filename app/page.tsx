import { GithubIcon, LinkedInIcon, PersonalIcon } from '@/components/icons'
import {
  Button,
  Card,
  CardBody,
  Chip,
  CircularProgress,
} from '@nextui-org/react'
import Image from 'next/image'

const cl = {
  groupOpacity: 'opacity-80 group-hover:opacity-100',
  dark: {
    groupOpacity: 'dark: opacity-50 dark:group-hover:opacity-80',
  },
}

interface ExternalLinkProps {
  href: string
  icon: React.ReactNode
  title: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, icon, title }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <Card className="w-full" isHoverable>
        <CardBody className="p-3 flex flex-row gap-2 items-center justify-center">
          <div
            className={`${cl.groupOpacity} group-hover:-rotate-6 transition-all duration-300`}
          >
            {icon}
          </div>
          <h3 className={`${cl.groupOpacity} self-center text-lg`}>{title}</h3>
        </CardBody>
      </Card>
    </a>
  )
}

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card shadow="lg">
        <CardBody>
          <div className="flex flex-col w-full">
            <div className="flex justify-center">
              <Image
                src="/meFB.jpeg"
                width={200}
                height={200}
                alt="Personal Profile Pic"
                className="rounded-full"
              />
            </div>
            <div className="flex justify-center pt-2">
              <h1 className="text-3xl font-bold">Aaron Motacek</h1>
            </div>
            <div className="flex justify-center m-4 gap-4">
              {/* Other components... */}
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
              <Button
                disableRipple
                className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              >
                Test
              </Button>
              <CircularProgress
                // classNames={{
                //   svg: 'w-36 h-36 drop-shadow-md',
                //   indicator: 'stroke-white',
                //   track: 'stroke-white/10',
                //   value: 'text-3xl font-semibold text-white',
                // }}
                value={70}
                strokeWidth={4}
                showValueLabel
              />
            </div>
            <div className="flex justify-center max-w-sm pt-1">
              <p className="text-center text-md font-semibold">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hi, I'm Aaron. I'm a full stack developer.
              </p>
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
  )
}
