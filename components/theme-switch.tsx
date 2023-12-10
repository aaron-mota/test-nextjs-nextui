'use client'

import { FC } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { SwitchProps, useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import clsx from 'clsx'

import { SunFilledIcon, MoonFilledIcon, CircleIcon } from '@/components/icons'

export interface ThemeSwitchProps {
  className?: string
  classNames?: SwitchProps['classNames']
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme()
  const isSSR = useIsSSR()

  // TODO: would like to do this in layout.tsx instead (e.g. darK:..., pink:..., etc.) not working yet -- need data-theme something ? (https://github.com/L-Blondy/tw-colors)
  const cl = {
    light: {
      background: 'bg-background',
    },
    dark: {
      background:
        'dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black',
    },
    pink: {
      background:
        'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100',
    },
  }

  function splitClassesToArray(classes: string) {
    return classes.split(' ')
  }

  const onChange = () => {
    const htmlElement = document.documentElement
    const mainElement = document.getElementById('main')!

    if (theme === 'light') {
      // remove
      htmlElement.classList.remove('light')
      splitClassesToArray(cl.light.background).forEach((cl) => {
        mainElement.classList.remove(cl)
      })
      // add
      setTheme('dark')
      htmlElement.style.setProperty('color-scheme', 'dark')
      splitClassesToArray(cl.dark.background).forEach((cl) => {
        mainElement.classList.add(cl)
      })
    } else if (theme === 'dark') {
      // remove
      htmlElement.classList.remove('dark')
      splitClassesToArray(cl.dark.background).forEach((cl) => {
        mainElement.classList.remove(cl)
      })
      // add
      setTheme('pink')
      htmlElement.style.setProperty('color-scheme', 'light')
      splitClassesToArray(cl.pink.background).forEach((cl) => {
        mainElement.classList.add(cl)
      })
    } else if (theme === 'pink') {
      // remove
      htmlElement.classList.remove('pink')
      splitClassesToArray(cl.pink.background).forEach((cl) => {
        mainElement.classList.remove(cl)
      })
      // add
      setTheme('light')
      htmlElement.style.setProperty('color-scheme', 'light')
      splitClassesToArray(cl.light.background).forEach((cl) => {
        mainElement.classList.add(cl)
      })
    }
  }

  // const onChange = () => {
  // 	if (theme === "light") {
  // 			setTheme("dark");
  // 	} else if (theme === "dark") {
  // 			setTheme("pink");
  // 	} else {
  // 			setTheme("light");
  // 	}
  // };

  // const onChange = () => {
  // 	theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === 'light' || isSSR,
    'aria-label': `Switch to ${
      theme === 'light' || isSSR ? 'dark' : theme === 'dark' ? 'pink' : 'light'
    } mode`,
    onChange,
  })
  // } = useSwitch({
  // 	isSelected: theme === "light" || isSSR,
  // 	"aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
  // 	onChange,
  // });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          'px-px transition-opacity hover:opacity-80 cursor-pointer',
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              'w-auto h-auto',
              'bg-transparent',
              'rounded-lg',
              'flex items-center justify-center',
              'group-data-[selected=true]:bg-transparent',
              '!text-default-500',
              'pt-px',
              'px-0',
              'mx-0',
            ],
            classNames?.wrapper
          ),
        })}
      >
        {theme === 'light' || isSSR ? (
          <SunFilledIcon size={22} />
        ) : theme === 'dark' ? (
          <MoonFilledIcon size={22} />
        ) : (
          <CircleIcon size={22} fill="pink" />
        )}
        {/* {!isSelected || isSSR ? <SunFilledIcon size={22} /> : <MoonFilledIcon size={22} />} */}
      </div>
    </Component>
  )
}
