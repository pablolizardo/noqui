import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export function TypographyH1({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h1 className={twMerge(`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl first-letter:uppercase `, className)}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h2 className={twMerge(`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 first-letter:uppercase`, className)}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h3 className={twMerge(`scroll-m-20 text-2xl font-semibold tracking-tight first-letter:uppercase`, className)}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h4 className={twMerge(`scroll-m-20 text-xl font-semibold tracking-tight first-letter:uppercase`, className)}>
      {children}
    </h4>
  )
}

export function TypographyP({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={twMerge(`leading-7 [&:not(:first-child)]:mt-6`, className)}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <blockquote className={twMerge(`mt-6 border-l-2 pl-6 italic`, className)}>
      {children}
    </blockquote>
  )
}

export function TypographyList({ items, className }: { items: string[], className?: string }) {
  return (
    <ul className={twMerge(`my-6 ml-6 list-disc [&>li]`, className)}>
      {items.map((item, i) => <li key={`item - ${i}`}>{item}</li>)}
    </ul>
  )
}

export function TypographyInlineCode({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <code className={twMerge(`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`, className)}>
      {children}
    </code>
  )
}

export function TypographyLead({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={twMerge(`text-xl text-muted-foreground`, className)}>
      {children}
    </p>
  )
}

export function TypographyLarge({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={twMerge(`text-lg font-semibold`, className)}>{children}</div>
  )
}

export function TypographySmall({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <small className={twMerge(`text-sm font-medium leading-none`, className)}>{children}</small>
  )
}

export function TypographyMuted({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={twMerge(`text-sm text-muted-foreground`, className)}>{children}</p>
  )
}
