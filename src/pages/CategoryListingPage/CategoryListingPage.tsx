import ListProducts from '@com/components/ListProducts/ListProducts';
import PageIndex from '@com/components/PageIndex/PageIndex';
import getProductsBycategory from '@com/services/products/getProductsByCategory';
import getClassname from '@com/utils/getClassname';
import {
	faArrowDown,
	faArrowUp,
	faChevronDown,
	faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PaginationButton from './components/PaginationButton/PaginationButton';
import styles from './CategoryListingPage.module.scss';
import { productTypes } from '@com/const';
import getNewArrival from '@com/services/products/getNewArrivalProduct';
import getTopSelling from '@com/services/products/getTopSelling';
type DynamicState = {
	[key: string]: any;
};

type sortProps = {
	sortBy?: string;
	order?: string;
	sortType?: number;
};

const CategoryListingPage = (): JSX.Element => {
	const cx = getClassname(styles);
	const { categorySlug } = useParams();
	const [skip, setSkip] = useState<number>(0);
	const [sortValue, setSortValue] = useState<sortProps>({
		sortBy: 'price',
		order: 'asc',
	});
	const [data, setData] = useState<DynamicState>({});
	useEffect(() => {
		if (categorySlug) {
			const fetchProducts = async () => {
				const result =
					categorySlug === productTypes.NEW_ARRIVAL ||
					categorySlug === productTypes.ON_SALE
						? await getNewArrival(20, skip, sortValue)
						: categorySlug === productTypes.TOP_SELLING
						? await getTopSelling(20, skip, sortValue)
						: await getProductsBycategory(categorySlug, skip, sortValue);
				setData(() => {
					window.scrollTo(0, 0);
					return result;
				});
			};
			fetchProducts();
		}
	}, [categorySlug, skip, sortValue]);

	const SlugToTitle = (category: string): string => {
		return category.replace('-', ' ');
	};

	const handleSort = (sortType: number) => {
		if (sortType) {
			setSortValue({
				sortBy: 'price',
				sortType,
				order: 'desc',
			});
		} else {
			setSortValue({
				sortBy: 'price',
				sortType,
				order: 'asc',
			});
		}
	};

	return (
		<div className="border-t  border-[gray]">
			<PageIndex category={categorySlug ? categorySlug : ''} />
			<div className="flex items-center justify-between">
				<div className="uppercase font-semibold text-3xl">
					{categorySlug && SlugToTitle(categorySlug)}
				</div>
				<div className="flex text-[grey] items-center">
					<div className="mr-4">{`Showing ${data.skip + 1}-${data.skip + data.limit} of ${
						data.total
					} Products`}</div>
					<div className="flex mr-4">
						<span>Sort by:</span>
						<div className="text-black">
							<span className="font-semibold mx-2">Price</span>
							{sortValue?.sortType === 1 ? (
								<FontAwesomeIcon size="sm" icon={faChevronDown} />
							) : sortValue?.sortType === 0 ? (
								<FontAwesomeIcon size="sm" icon={faChevronUp} />
							) : (
								''
							)}
						</div>
					</div>
					<div
						onClick={() => handleSort(1)}
						className={cx(
							' border rounded-full px-4 py-2 mr-2 cursor-pointer hover:bg-[#e9e9e9]',
							{
								'bg-[#e9e9e9]': sortValue?.sortType === 1,
							}
						)}
					>
						<span className="mr-2">Sort down</span>
						<FontAwesomeIcon icon={faArrowDown} />
					</div>
					<div
						onClick={() => handleSort(0)}
						className={cx(
							'border rounded-full px-4 py-2 cursor-pointer hover:bg-[#e9e9e9]',
							{
								'bg-[#e9e9e9]': sortValue?.sortType === 0,
							}
						)}
					>
						<span className="mr-2">Sort up</span>
						<FontAwesomeIcon icon={faArrowUp} />
					</div>
				</div>
			</div>
			<div className="grid grid-cols-5 mt-6 gap-8">
				<ListProducts items={data.products} />
			</div>
			<PaginationButton
				setSkip={setSkip}
				startIndex={data.skip}
				pagination={20}
				total={data.total}
			/>
		</div>
	);
};

export default CategoryListingPage;
