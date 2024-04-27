'use client';

import { Field } from 'formik';

export interface InputFieldProps {
	label?: string;
}

export default function ImputField({ label, id, ...rest }: InputFieldProps) {
	return (
		<div className="flex flex-col">
			{label && (
				<label htmlFor={id} className="color-gray-900 mb-2 text-base">
					{label}
				</label>
			)}
			<Field {...rest} id={id} className="h-11 rounded border border-gray-300 p-3 text-sm shadow" />
		</div>
	);
}
