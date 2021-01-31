import { useState } from 'react';

const width = 200;
const height = 200;

const functionalBags = [
	{ n: 8, name: 'The brown one' },
	{ n: 9, name: 'The red one' },
	{ n: 10, name: 'The other brown one' },
	{ n: 11, name: 'The white one' },
	{ n: 12, name: 'The beige one' },
];

const prettyBags = [
	{ n: 3, name: 'The ? one' },
	{ n: 4, name: 'The hippie one' },
	{ n: 5, name: 'The green one' },
	{ n: 6, name: 'The pinkish one' },
	{ n: 7, name: 'The brown one' },
];

const Bags = () => {
	const [expanded, setExpanded] = useState<'pretty' | 'functional' | ''>('');
	const switchExpanded = (newExpanded: 'pretty' | 'functional') => {
		if (newExpanded === expanded) {
			setExpanded('');
		} else {
			setExpanded(newExpanded);
		}
	};
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
							src='Billede1.png'
							alt='Bag'
							onClick={() => switchExpanded('pretty')}
							width={width}
							height={height}
							style={{ cursor: 'pointer' }}
						/>
					</div>

					<div>
						<h1>The functional One</h1>
						<img
							src='Billede2.png'
							alt='Bag'
							onClick={() => switchExpanded('functional')}
							width={width}
							height={height}
							style={{ cursor: 'pointer' }}
						/>
					</div>
				</section>
				{expanded === 'pretty' && (
					<section
						className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<h1>The Pretty Bags</h1>

						{prettyBags.map(({ n, name }) => (
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									marginBottom: '3rem',
								}}
							>
								<img
									src={`Billede${n}.png`}
									alt='Bag'
									width={width}
									height={height}
								/>
								<div>
									<h2>{name}</h2>
									<h3>6000 kr</h3>
								</div>
							</div>
						))}
					</section>
				)}
				{expanded === 'functional' && (
					<section
						className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<h1>The Functional Bags</h1>

						{functionalBags.map(({ n, name }) => (
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-around',
									marginBottom: '3rem',
								}}
							>
								<img
									src={`Billede${n}.png`}
									alt='Bag'
									width={width}
									height={height}
								/>
								<div>
									<h2>{name}</h2>
									<h3>8000 kr</h3>
								</div>
							</div>
						))}
					</section>
				)}
			</div>
		</main>
	);
};

export default Bags;
