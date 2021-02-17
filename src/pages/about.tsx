import { useReducer } from 'react';

const About = () => {
	const [count, setCount] = useReducer((state, action) => {
		return state + 1;
	}, 0);
	return (
		<main>
			<div id='content' className='content clearfix'>
				<section className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'>
					<h1>About Us</h1>
					<p>
						Before we can sell our grass there are some things that needs to be
						done. From it is planted in the soil it takes 4 weeks before the
						grass is ready to be made in to rolls, and send to our stores in
						Denmark and Germany. During these 4 weeks, every square meter needs
						to be cared for with fertilizer one time by our gardeners. After the
						4 weeks, our machine has 72 hours to harvest the grass, after which
						it is ready to be delivered, and the process starts all over again.
					</p>
					<p>
						Our grass grows on a 50'000 m<sup>2</sup> large field in Spain,
						where our 4 fulltime gardeners care for the grass. When the grass is
						ready, our modern machines pick up the grass and makes it ready for
						shipping right to our shops in Germany and Denmark, and if you wish,
						right to your doorstep.
					</p>
					<p>
						Our gardeners take great care of our grass. Our basic grass is easy
						and quick to work with, so our gardeners can take care of about 100m
						<sup>2</sup> grass pr. hour, while our luxury grass needs a lot more
						care, so our gardeners therefore have to use 1 hour for 50m
						<sup>2</sup>.
					</p>
					<p>
						After our gardeners has cared for and attended the grass, our
						machines then fires up. It can roll up a staggering 1000m
						<sup>2</sup> an hour of our basic grass or 400m<sup>2</sup> of our
						luxury grass which we are a bit more careful with. After that our
						grass is ready for shipping and delivery.
					</p>
					<h2>Best quality grass</h2>
					<p>
						To ensure the best potential for growth we use a mixture of two
						types of fertilizer. Cow and sheep fertilizer. We need at least 2000
						litres of each type of fertilizer for our grassfield. We buy 2
						different fertilizer mixtures. The first contains 30l Cowfertilizer
						and 40l Sheepfertilizer. The other mixture contains 40l
						cowfertilizer and 20l sheepfertilizer. The first mixture of
						fertilizer costs 100kr. per bag, and the other costs 150kr. per bag.
					</p>
				</section>
			</div>
		</main>
	);
};

export default About;
