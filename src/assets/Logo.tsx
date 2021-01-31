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
				x1='128'
				y1='232'
				x2='128'
				y2='72'
				fill='none'
				stroke='#000000'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='16'
			></line>
			<circle
				cx='128'
				cy='52'
				r='20'
				fill='none'
				stroke='#000000'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='16'
			></circle>
			<line
				x1='88'
				y1='112'
				x2='168'
				y2='112'
				fill='none'
				stroke='#000000'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='16'
			></line>
			<path
				d='M40,144a48,48,0,0,0,48,48,40,40,0,0,1,40,40,40,40,0,0,1,40-40,48,48,0,0,0,48-48'
				fill='none'
				stroke='#000000'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='16'
			></path>
		</svg>
	);
};

export default Logo;
