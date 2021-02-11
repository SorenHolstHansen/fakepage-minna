export default function Home() {
	return (
		<main>
			<div id='content' className='content clearfix'>
				<section className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'>
					<h2 className='editorial-block-title'>Rullegræs</h2>
					<p className='editorial-block-intro'>Rullegræs</p>
				</section>

				<section className='block-edito block-edito-vertical block-edito-horizontal-full-hero block-edito-block-gallery-carousel '>
					<div className='carousel-square slick-initialized slick-slider slick-dotted'>
						<div
							className='slick-list draggable'
							style={{ padding: '0px 50px' }}
						>
							<div
								className='slick-track'
								style={{
									opacity: '1',
									width: '30000px',
									transform: 'translate3d(-641px, 0px, 0px)',
								}}
							>
								<div
									className='gallery-carousel-item slick-slide slick-cloned'
									tabIndex={-1}
								>
									<div className='entity entity-hermes-media hermes-media-hermes-media clearfix'>
										<figure>
											<picture className='media-wrap media-wrap-mobile media-wrap-square'>
												<img
													className=' lazyloaded'
													alt=''
													role='presentation'
													src='rul1.jpg'
												/>
											</picture>
										</figure>
									</div>
								</div>
								<div
									className='gallery-carousel-item slick-slide'
									data-slick-index='1'
									tabIndex={-1}
									role='tabpanel'
									id='slick-slide01'
									aria-describedby='slick-slide-control01'
								>
									<div className='entity entity-hermes-media hermes-media-hermes-media clearfix'>
										<figure>
											<picture className='media-wrap media-wrap-mobile media-wrap-square'>
												<img
													className=' lazyloaded'
													alt=''
													role='presentation'
													src='rul1.jpg'
												/>
											</picture>
										</figure>
									</div>
								</div>
								<div
									className='gallery-carousel-item slick-slide slick-cloned'
									data-slick-index='-1'
									tabIndex={-1}
								>
									<div className='entity entity-hermes-media hermes-media-hermes-media clearfix'>
										<figure>
											<picture className='media-wrap media-wrap-mobile media-wrap-square'>
												<img
													className=' lazyloaded'
													alt=''
													role='presentation'
													src='rul2.jpg'
												/>
											</picture>
										</figure>
									</div>
								</div>
								<div
									className='gallery-carousel-item slick-slide slick-current slick-active slick-center'
									data-slick-index='0'
									aria-hidden='false'
									tabIndex={0}
									role='tabpanel'
									id='slick-slide00'
									aria-describedby='slick-slide-control00'
								>
									<div className='entity entity-hermes-media hermes-media-hermes-media clearfix'>
										<figure>
											<picture className='media-wrap media-wrap-mobile media-wrap-square'>
												<img
													className=' lazyloaded'
													alt=''
													role='presentation'
													src='rul3.jpg'
												/>
											</picture>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='field field-name-field-grey-background field-type-list-boolean field-label-hidden'>
						<div className='field-items'>
							<div className='field-item even'></div>
						</div>
					</div>
				</section>

				<section className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text '>
					<h2 className='editorial-block-title'>Green Green Green</h2>
				</section>

				<section className='block-edito block-edito-vertical block-edito-horizontal-hero block-edito-media-text '>
					<ul>
						<li className='media'>
							<div className='field field-name-field-video-item field-type-entityreference field-label-hidden'>
								<div className='field-items'>
									<div className='field-item even'>
										<div className='entity entity-hermes-media hermes-media-hermes-media clearfix'>
											<figure>
												<picture className='media-wrap media-wrap-mobile media-wrap-square'>
													<img
														className=' lazyloaded'
														alt=''
														aria-hidden='true'
														role='presentation'
														src='rul1.jpg'
													/>
												</picture>
											</figure>
										</div>
									</div>
								</div>
							</div>{' '}
						</li>

						<li className='text'>
							<p className='editorial-block-text'>
								Alt vores rullegræs er håndsået og grønt
							</p>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
}
