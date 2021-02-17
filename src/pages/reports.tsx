const Report = () => {
	return (
		<main>
			<div id='content' className='content clearfix'>
				<section className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'>
					<h1>Reports</h1>
					<h2>Solgte enheder de sidste 12 måneder</h2>
					<table>
						<tr>
							<th>Måned</th>
							<th>
								Solgte m<sup>2</sup> af basic
							</th>
							<th>
								Solgte m<sup>2</sup> af luksus
							</th>
						</tr>
						<tr>
							<td>Januar</td>
							<td>5000</td>
							<td>0</td>
						</tr>
						<tr>
							<td>Februar</td>
							<td>46000</td>
							<td>4000</td>
						</tr>
						<tr>
							<td>Marts</td>
							<td>34000</td>
							<td>10000</td>
						</tr>
						<tr>
							<td>April</td>
							<td>28000</td>
							<td>13800</td>
						</tr>
						<tr>
							<td>Maj</td>
							<td>21600</td>
							<td>17800</td>
						</tr>
						<tr>
							<td>Juni</td>
							<td>32000</td>
							<td>14000</td>
						</tr>
						<tr>
							<td>Juli</td>
							<td>24000</td>
							<td>18000</td>
						</tr>
						<tr>
							<td>August</td>
							<td>22000</td>
							<td>12000</td>
						</tr>
						<tr>
							<td>September</td>
							<td>18000</td>
							<td>20000</td>
						</tr>
						<tr>
							<td>Oktober</td>
							<td>20000</td>
							<td>20000</td>
						</tr>
						<tr>
							<td>November</td>
							<td>24000</td>
							<td>18000</td>
						</tr>
						<tr>
							<td>December</td>
							<td>12000</td>
							<td>24000</td>
						</tr>
					</table>
				</section>
			</div>
		</main>
	);
};

export default Report;
