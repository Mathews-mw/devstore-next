import { Suspense } from 'react';

import { CurrentSearch } from './current-search';
import { Skeleton } from '@/components/skeleton';

export default function SearchLoading() {
	return (
		<div className='flex flex-col gap-4'>
			<Suspense fallback={null}>
				<CurrentSearch />
			</Suspense>

			<div className='grid grid-cols-3 gap-6'>
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
				<Skeleton className='h-[380px]' />
			</div>
		</div>
	);
}
