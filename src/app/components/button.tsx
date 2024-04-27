'use client';

import clsx from 'clsx';

export interface ButtonProps extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
	disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={clsx(
				'rounded bg-gray-900 px-5 py-2.5 text-center text-base font-medium text-zinc-50',
				!disabled && 'hover"bg-gray-800 active:bg-gray-950',
				disabled && 'text-zinc-100',
			)}
		/>
	);
}
