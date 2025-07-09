import routeName from '@com/config';
import useDebounce from '@com/hooks/useDebounce';
import searchProduct from '@com/services/products/searchProduct';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SearchComponent = (): JSX.Element => {
	const [value, setValue] = useState<string>('');
	const debouncedValue = useDebounce(value, 500);
	const [isSearching, setIsSearching] = useState<boolean>(false);
	const [isDisplaySearchResult, setIsDisplaySearchResult] = useState<boolean>(true);
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		if (debouncedValue) {
			const searchApi = async () => {
				try {
					const response = await searchProduct(debouncedValue, 6);
					setData(response.products);
				} catch (error) {
					console.error('Error fetching search results:', error);
				}
			};
			searchApi();
		} else {
			setData([]);
		}
		setIsSearching(false);
	}, [debouncedValue]);

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		setIsSearching(true);
	};

	const handleEraseInput = () => {
		setValue('');
		setData([]);
		setIsDisplaySearchResult(false);
	};
	return (
		<div
			onFocus={() => setIsDisplaySearchResult(true)}
			onMouseLeave={() => setIsDisplaySearchResult(false)}
			onMouseEnter={() => setIsDisplaySearchResult(true)}
		>
			<div className="relative rounded-full items-center w-[600px] bg-[#f0f0f0] flex-[4] flex  p-3 px-5">
				{isSearching ? (
					<FontAwesomeIcon icon={faSpinner} className=" animate-spin" />
				) : (
					<FontAwesomeIcon color="gray" icon={faMagnifyingGlass} />
				)}

				<input
					className="ml-2 flex-1 bg-[#f0f0f0] outline-none"
					placeholder="Search for products..."
					value={value}
					onChange={(e) => handleChangeInput(e)}
				/>
				<div className="absolute top-full left-0 right-0 z-10">
					{data.length > 0 && isDisplaySearchResult && (
						<div className="  bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto">
							{data.map((item, index) => (
								<Link
									onClick={handleEraseInput}
									to={routeName.productdetailPage(item.id)}
									key={index}
									className=" overflow-hidden flex p-3 hover:bg-gray-100 cursor-pointer"
								>
									<img
										src={item.thumbnail}
										className="h-16"
										alt="product thumbnail"
									/>
									<div className="flex flex-col justify-center flex-wrap">
										<div className="font-semibold">{item.title}</div>
										<div className="text-sm text-gray-500 text-ellipsis max-w-[500px] whitespace-nowrap  overflow-hidden">
											{item.description}
										</div>
									</div>
								</Link>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default SearchComponent;
