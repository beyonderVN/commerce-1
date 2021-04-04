import { LoadingDots } from '@components/ui'
import cn from 'classnames'
import React, {
  ButtonHTMLAttributes,
  forwardRef,
  JSXElementConstructor,
  useRef,
} from 'react'
import mergeRefs from 'react-merge-refs'
import s from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  secondary?: boolean
  className?: string
  variant?: 'flat' | 'slim' | 'link'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  Component?: string | JSXElementConstructor<any>
  width?: string | number
  loading?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = 'flat',
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    secondary,
    Component = 'button',
    ...rest
  } = props
  const ref = useRef<typeof Component>(null)

  const rootClassName = cn(
    s.root,
    {
      [s.secondary]: secondary,
      [s.slim]: variant === 'slim',
      [s.link]: variant === 'link',
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  )
})

export default Button
