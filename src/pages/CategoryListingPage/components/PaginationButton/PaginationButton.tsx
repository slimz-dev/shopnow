import getClassname from '@com/utils/getClassname';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX, SetStateAction } from 'react';
import styles from './PaginationButton.module.scss';

type PaginationButton = {
	startIndex: number;
	pagination: number;
	total: number;
	setSkip: React.Dispatch<React.SetStateAction<number>>;
};

const PaginationButton = ({
	startIndex,
	pagination,
	total,
	setSkip,
}: PaginationButton): JSX.Element => {
	const cx = getClassname(styles);
	const currentPage = Math.ceil(startIndex / pagination) + 1;
	const totalPage = Math.ceil(total / pagination);

	const handleChangePage = (indexPagination: number) => {
		setSkip(pagination * indexPagination);
	};

	return (
		<>
			{total && (
				<div className="border-t pt-4 mt-8 flex items-center justify-between">
					{currentPage !== 1 ? (
						<div className="border px-4 py-2 rounded-xl hover:bg-[#f7f7f7] cursor-pointer">
							<FontAwesomeIcon size="lg" icon={faArrowLeft} />
							<span className="ml-3 text-xl font-semibold">Previous</span>
						</div>
					) : (
						<div className=" px-4 py-2 rounded-xl  cursor-pointer"></div>
					)}

					<div className="flex  ">
						{[1, 2].map((item) => {
							return (
								<>
									{currentPage > item + 2 && (
										<div
											className={cx(
												'p-2 text-[#adadad] text-2xl hover:text-black px-3 rounded-md cursor-pointer hover:bg-[#f0f0f0]'
											)}
											onClick={() => handleChangePage(item - 1)}
										>
											{item}
										</div>
									)}
								</>
							);
						})}
						<>
							{currentPage >= 6 && (
								<div
									className={cx(
										'p-2  text-2xl text-black px-1 rounded-md cursor-not-allowed hover:bg-[#afafaf]'
									)}
								>
									...
								</div>
							)}
						</>
						{Array(totalPage)
							.fill('')
							.map((element, index) => {
								return (
									<>
										{index + 1 <= currentPage + 2 &&
											index + 1 >= currentPage - 2 && (
												<div
													className={cx(
														'p-2 text-[#adadad] text-2xl hover:text-black px-3 rounded-md cursor-pointer hover:bg-[#f0f0f0]',
														{
															'text-black font-semibold bg-[#f0f0f0] cursor-default ':
																currentPage === index + 1,
														}
													)}
													onClick={() => handleChangePage(index)}
												>
													{index + 1}
												</div>
											)}
									</>
								);
							})}
						<>
							{currentPage <= totalPage - 5 && (
								<div
									className={cx(
										'p-2 px-1  text-2xl text-black  rounded-md cursor-not-allowed hover:bg-[#afafaf]'
									)}
								>
									...
								</div>
							)}
						</>
						{[totalPage - 1, totalPage].map((item) => {
							return (
								<>
									{currentPage < item - 2 && (
										<div
											className={cx(
												'p-2 text-[#adadad] text-2xl hover:text-black px-3 rounded-md cursor-pointer hover:bg-[#f0f0f0]'
											)}
											onClick={() => handleChangePage(item - 1)}
										>
											{item}
										</div>
									)}
								</>
							);
						})}
					</div>
					{currentPage !== totalPage ? (
						<div className="border px-4 py-2 hover:bg-[#f7f7f7] cursor-pointer rounded-xl">
							<span className="mr-3 text-xl font-semibold">Next</span>
							<FontAwesomeIcon size="lg" icon={faArrowRight} />
						</div>
					) : (
						<div className=" px-4 py-2 cursor-pointer rounded-xl"></div>
					)}
				</div>
			)}
		</>
	);
};

export default PaginationButton;
