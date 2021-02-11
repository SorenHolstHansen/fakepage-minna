import { useState } from 'react';
import Tray from '../components/Tray';
import Logo from '../assets/Logo';
import Link from 'next/link';

const Header = () => {
	const [trayVisible, setTrayVisible] = useState(false);
	return (
		<div id='page-header-wrap' className='header-wrapper'>
			<Tray visible={trayVisible} dismiss={() => setTrayVisible(false)} />
			<div
				id='page-header'
				className='header header-uptop expand'
				style={{ transform: 'translate3d(0px, 0px, 0px)' }}
			>
				<div className='block-wrapper'>
					<div id='header-actions' className='header-actions'>
						<div className='header-content clearfix'>
							<div itemScope={false} itemType='http://schema.org/Organization'>
								<header role='banner'>
									<Link href='/'>
										<a
											itemProp='url'
											rel='home'
											className='header-logo'
											data-track-logo=''
										>
											<picture>
												<Logo size={50} />
											</picture>
										</a>
									</Link>
								</header>
							</div>
							<div className='header__region region region-header'>
								<div id='header-navigation' className='header-navigation'>
									<ul className='header-icons clearfix'>
										<li>
											<nav role='navigation'>
												<button
													aria-expanded='false'
													aria-haspopup='dialog'
													aria-controls='tray-nav-shop'
													id='collection-button'
													className='button button-icon button-not-black'
													data-tray-trigger='tray-nav-shop'
													data-track-menu=''
													onClick={() => setTrayVisible(true)}
												>
													<svg className='icon icon-shop' viewBox='0 0 24 24'>
														<path d='M3.75 11.25h16.5v1.5H3.75zm0-6h16.5v1.5H3.75zm0 12h16.5v1.5H3.75z'></path>
													</svg>
													<span>Menu</span>
												</button>
											</nav>
										</li>

										<li>
											<button
												className='fakelink button button-icon button-not-black'
												id='open-cart'
												data-track-cart=''
											>
												<svg
													className='icon icon-cart'
													aria-hidden='true'
													focusable='false'
												>
													<path d='M19.586 8.02h-3.86v-.282C15.725 4.244 13.798 3 11.998 3S8.272 4.244 8.272 7.738v.28h-3.86l-1.14 12.19h17.453l-1.14-12.19zm-9.778-.282c0-2.03.8-3.195 2.19-3.195 1.393 0 2.192 1.164 2.192 3.195v.28H9.808v-.28zM4.92 18.708l.86-9.19h2.493v1.217h1.534V9.52h4.383v1.215h1.534V9.52h2.494l.86 9.187H4.92z'></path>
												</svg>
												<span>Cart </span>
												<small className='header-count'></small>
												<span
													className='sr-only'
													id='accessibility-header-cart-count'
												>
													empty
												</span>
											</button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id='header-spacer' className='header-spacer spacer'></div>
		</div>
	);
};

export default Header;
