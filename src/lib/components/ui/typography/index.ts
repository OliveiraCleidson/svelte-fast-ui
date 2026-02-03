import { type VariantProps, tv } from 'tailwind-variants';

export const typographyVariants = tv({
	variants: {
		variant: {
			h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
			h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
			h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
			h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
			p: 'leading-7 [&:not(:first-child)]:mt-6',
			blockquote: 'mt-6 border-s-2 ps-6 italic',
			code: 'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
			lead: 'text-muted-foreground text-xl',
			large: 'text-lg font-semibold',
			small: 'text-sm leading-none font-medium',
			muted: 'text-muted-foreground text-sm',
			list: 'my-6 ms-6 list-disc [&>li]:mt-2'
		}
	},
	defaultVariants: {
		variant: 'p'
	}
});

export type TypographyVariant = VariantProps<typeof typographyVariants>['variant'];
