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

  const onChange = () => {
    const htmlElement = document.documentElement
    console.log('got here')
    if (theme === 'light') {
      console.log('got here 2')
      htmlElement.classList.remove('light')
      htmlElement.style.setProperty('color-scheme', 'dark')
      setTheme('dark')
    } else if (theme === 'dark') {
      htmlElement.classList.remove('dark')
      htmlElement.style.setProperty('color-scheme', 'light')
      setTheme('pink')
    } else if (theme === 'pink') {
      htmlElement.classList.remove('pink')
      htmlElement.style.setProperty('color-scheme', 'light')
      setTheme('light')
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
