const Logo = ({ size, media }: { size: number; media?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			media={media || ''}
			fill='#000000'
			viewBox='0 0 256 256'
		>
			<rect width='256' height='256' fill='none'></rect>
			<line
				x1='160'
				y1='96'
				x2='24'
				y2='232'
				fill='none'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='16'
			></line>
			<path
				d='M46.783,209.217A128.08756,128.08756,0,0,1,209.217,46.783,128.08756,128.08756,0,0,1,46.783,209.217Z'
				fill='none'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='16'
			></path>
		</svg>
	);
};

export default Logo;
