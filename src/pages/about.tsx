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
						Vores græs gror på en 50'000 m<sup>2</sup> stor mark i Spanien, hvor
						der er 4 fuldtidsansatte gartnere der plejer græsset, samt en
						nymoderne maskine der tager græsset op, klipper det i længder og
						ruller det sammen klar til forsendelse.
					</p>
					<p>
						Vores gartnere passer godt på græsset. Vores basic græs er nemt og
						hurtigt at arbejde med, så de kan passe ca. 100m<sup>2</sup> græs i
						timen, mens vores luksusgræs kræver lidt mere pleje, så de derfor
						skal bruge 1 time på 50m<sup>2</sup>.
					</p>
					<p>
						Efter vores gartnere har passet og plejet græsset, går maskinen i
						gang. Den kan over tre dage rulle 1000m
						<sup>2</sup> i timen af vores basic græs, eller 400m<sup>2</sup> i
						timen af vores luksusgræs sammen. Derefter er græsset klart til at
						blive købt og sendt.
					</p>
					<h2>Best quality grass</h2>
					<p>
						For at sikre os at græsset har så gode muligheder for at vokse tæt
						og grønt bruger vi en blanding af to typer gødning: Kogødning og
						fåregødning.
					</p>
					<p>
						Vi skal mindst have 200 liter af hver gødning på vores græsmark. Vi
						køber 2 forskellige gødningeblandinger. Den første indeholder 30l
						kogødning og 40l fåregødning. I den anden 40l kogødning og 20l
						fåregødning.
					</p>
					<p>
						Den første gødning koster 100kr pr pose og den anden koster 150kr pr
						pose.
					</p>
				</section>
			</div>
		</main>
	);
};

export default About;
