import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Skelton({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)} {...props} />
	);
}
