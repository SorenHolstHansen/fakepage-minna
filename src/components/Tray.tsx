import Link from 'next/link';

type Props = {
	visible: boolean;
	dismiss: () => void;
};

const Tray = ({ visible, dismiss }: Props) => {
	if (!visible) return null;

	const emptyFunc = () => {};

	return (
		<div id='tray-scroll-wrap' className='tray-scroll-wrap' role='none'>
			<div
				id='tray'
				className='tray tray-nav-shop-visible'
				style={{
					visibility: 'inherit',
					opacity: '1',
					transform: 'translate3d(0px, 0px, 0px)',
				}}
				onClick={emptyFunc}
			>
				<div className='tray-wrap' onClick={emptyFunc}>
					<div
						id='tray-nav-shop'
						aria-hidden='false'
						className='tray-content tray-nav tray-nav-deep'
						aria-labelledby='title-tray-nav-shop'
						aria-atomic='false'
						role='dialog'
						aria-live='assertive'
					>
						<div className='tray-content-wrapper'>
							<div className='tray-header'>
								<div className='title-tray-container'>
									<svg
										className='icon icon-arrow-left'
										aria-hidden='true'
										viewBox='0 0 33 32'
									>
										<g
											id='Cross'
											stroke='none'
											stroke-width='1'
											fill-rule='evenodd'
											stroke-linecap='round'
										>
											<line
												x1='2.5'
												y1='2.5'
												x2='29.5'
												y2='29.5'
												id='Line-2'
												stroke='#444444'
												stroke-width='3'
											></line>
											<line
												x1='2.5'
												y1='2.5'
												x2='29.5'
												y2='29.5'
												id='Line-2'
												stroke='#444444'
												stroke-width='3'
												transform='translate(16.000000, 16.000000) scale(-1, 1) translate(-16.000000, -16.000000) '
											></line>
										</g>
									</svg>
									<button
										aria-label='Close'
										aria-describedby='title-tray-nav-shop'
										className='button-tray tray-close'
										onClick={dismiss}
									></button>
									<h2 id='title-tray-nav-shop' className='title-tray'>
										Menu
									</h2>
								</div>
							</div>
							<ul
								role='tree'
								aria-labelledby='title-tray-nav-shop'
								className='nav-list-menu'
							>
								<li
									role='treeitem'
									aria-expanded='false'
									className='nav-item has-sub-item'
									tabIndex={0}
								>
									<Link href='/graes'>
										<a onClick={dismiss}>Græs</a>
									</Link>
								</li>
								<li
									role='treeitem'
									aria-expanded='false'
									className='nav-item has-sub-item'
									tabIndex={0}
								>
									<Link href='/about'>
										<a onClick={dismiss}>About Us</a>
									</Link>
								</li>
								<li
									role='treeitem'
									aria-expanded='false'
									className='nav-item has-sub-item'
									tabIndex={0}
								>
									<Link href='/go-global'>
										<a onClick={dismiss}>Go global</a>
									</Link>
								</li>
								<li
									role='treeitem'
									aria-expanded='false'
									className='nav-item has-sub-item'
									tabIndex={0}
								>
									<Link href='/reports'>
										<a onClick={dismiss}>Reports</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
				onClick={dismiss}
			></div>
		</div>
	);
};

export default Tray;
