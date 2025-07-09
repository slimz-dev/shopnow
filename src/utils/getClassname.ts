import classNames from 'classnames/bind';

const getClassname = (styles: { [className: string]: string }) => {
	return classNames.bind(styles);
};

export default getClassname;
