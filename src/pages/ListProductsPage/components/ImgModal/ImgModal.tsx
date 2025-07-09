import getClassname from '@com/utils/getClassname';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from '../../ProductPage.module.scss';
import { SetBooleanType, SetNumberType } from '@com/types';
import { JSX, useRef } from 'react';
type DynamicState = {
	[key: string]: any;
};

type ImgModalProps = {
	item: DynamicState;
	setIsOpenImgModal: SetBooleanType;
	setModalSelectedItem: SetNumberType;
	modalSelectedItem: number;
};
const ImgModal = ({
	item,
	setIsOpenImgModal,
	setModalSelectedItem,
	modalSelectedItem,
}: ImgModalProps): JSX.Element => {
	const cx = getClassname(style);
	const modalRef = useRef<HTMLDivElement>(null);
	const handleEscapeModal = (e: any) => {
		if (modalRef.current) {
			if (!modalRef.current.contains(e.target)) {
				setIsOpenImgModal(false);
				document.body.style.overflow = 'scroll';
			}
		}
	};

	const handleModalSelectedItem = (direction: number) => {
		if (direction === 0) {
			setModalSelectedItem((prev: number) =>
				prev === 0 ? item.images.length - 1 : prev - 1
			);
		} else {
			setModalSelectedItem((prev: number) =>
				prev === item.images.length - 1 ? 0 : prev + 1
			);
		}
	};
	return (
		<div
			onClick={(e) => handleEscapeModal(e)}
			className="absolute top-0 left-0 right-0 bottom-0  bg-[#00000061] "
		>
			<div
				ref={modalRef}
				className=" bg-white w-[70%] rounded-lg h-[90%] flex translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute"
			>
				<div className=" relative">
					<FontAwesomeIcon
						onClick={() => handleModalSelectedItem(0)}
						className="absolute px-2 py-6 bg-[#c5cbd5] cursor-pointer left-[10px] top-1/2"
						size="2xl"
						icon={faChevronLeft}
					/>
					<img
						className="border h-full rounded-2xl px-12"
						src={item.images[modalSelectedItem]}
						alt="product"
					/>
					<FontAwesomeIcon
						onClick={() => handleModalSelectedItem(1)}
						className="absolute px-2 py-6 bg-[#c5cbd5] cursor-pointer right-[10px]  top-1/2"
						size="2xl"
						icon={faChevronRight}
					/>
				</div>
				<div className="ml-3">
					<div className="my-6 text-xl">{item.title}</div>
					<div className="grid grid-flow-col gap-4 mt-4">
						{item.images.map((image: string, index: number) => {
							return (
								<div
									onClick={() => setModalSelectedItem(index)}
									key={index}
									className={cx(
										'overflow-hidden border rounded-2xl w-[100px] h-[100px]',
										{
											'border-black': index === modalSelectedItem,
										}
									)}
								>
									<img
										className={cx(
											' hover:scale-150 duration-1000 cursor-pointer'
										)}
										src={image}
										alt="product thumbnail"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImgModal;
