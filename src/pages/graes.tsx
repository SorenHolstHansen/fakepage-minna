import { useState } from 'react';

const width = 200;
const height = 200;

const Bags = () => {
	return (
		<main>
			<div id='content' className='content clearfix'>
				<section className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'>
					<h2 className='editorial-block-title'>Bags</h2>
				</section>
				<section
					className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'
					style={{ display: 'flex', justifyContent: 'space-around' }}
				>
					<div>
						<h1>The pretty One</h1>
						<img
							src='basic_rul.jpg'
							alt='Bag'
							width={width}
							height={height}
							style={{ cursor: 'pointer' }}
						/>
					</div>

					<div>
						<h1>The functional One</h1>
						<img
							src='luksus_rul.jpg'
							alt='Bag'
							width={width}
							height={height}
							style={{ cursor: 'pointer' }}
						/>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Bags;
