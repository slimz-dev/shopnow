import routeName from '@com/config';
import getClassname from '@com/utils/getClassname';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JSX } from 'react';
import { Link } from 'react-router-dom';
import styles from './PageIndex.module.scss';
type PageIndexProps = {
	category: string;
	item?: string;
	activeCategory?: true;
};

const PageIndex = ({ category, item, activeCategory }: PageIndexProps): JSX.Element => {
	const cx = getClassname(styles);
	return (
		<div className="text-[gray] my-4">
			<span className="cursor-pointer hover:underline">
				<Link to={routeName.homePage()}>Home</Link>
			</span>
			<FontAwesomeIcon className="mx-2" size="sm" icon={faChevronRight} />
			{activeCategory ? (
				<Link to={routeName.categoryPage(category)}>
					<span
						className={cx('capitalize', {
							'hover:underline cursor-pointer hover:text-[#808181]': activeCategory,
						})}
					>
						{category}
					</span>
				</Link>
			) : (
				<span className={cx('capitalize')}>{category}</span>
			)}

			{item && (
				<>
					<FontAwesomeIcon className="mx-2" size="sm" icon={faChevronRight} />
					<span>{item}</span>
				</>
			)}
		</div>
	);
};

export default PageIndex;
