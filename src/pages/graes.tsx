import { useState } from 'react';

const width = 200;
const height = 200;

const Bags = () => {
	return (
		<main>
			<div id='content' className='content clearfix'>
				<section className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'>
					<h2 className='editorial-block-title'>Our Grass</h2>
				</section>
				<section
					className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'
					style={{ display: 'flex', justifyContent: 'space-around' }}
				>
					<div>
						<h1>Basic Grass</h1>
						<img
							src='basic_rul.jpg'
							alt='Bag'
							width={width}
							height={height}
							style={{ cursor: 'pointer' }}
						/>
						<h2>
							25kr. / m<sup>2</sup>
						</h2>
					</div>

					<div>
						<h1>Luxury Grass</h1>
						<img
							src='luksus_rul.jpg'
							alt='Bag'
							width={width}
							height={height}
							style={{ cursor: 'pointer' }}
						/>
						<h2>
							40kr. / m<sup>2</sup>
						</h2>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Bags;
