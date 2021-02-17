const Report = () => {
	return (
		<main>
			<div id='content' className='content clearfix'>
				<section className='block-edito block-edito-vertical block-edito-horizontal-standard block-edito-text'>
					<h1>Reports</h1>
					<h2>Sold units over the last 12 months</h2>
					<table>
						<tr>
							<th>Month</th>
							<th>
								Sold m<sup>2</sup> of basic
							</th>
							<th>
								Sold m<sup>2</sup> of luxury
							</th>
						</tr>
						<tr>
							<td>January</td>
							<td>5000</td>
							<td>0</td>
						</tr>
						<tr>
							<td>February</td>
							<td>46000</td>
							<td>4000</td>
						</tr>
						<tr>
							<td>March</td>
							<td>34000</td>
							<td>10000</td>
						</tr>
						<tr>
							<td>April</td>
							<td>28000</td>
							<td>13800</td>
						</tr>
						<tr>
							<td>May</td>
							<td>21600</td>
							<td>17800</td>
						</tr>
						<tr>
							<td>June</td>
							<td>32000</td>
							<td>14000</td>
						</tr>
						<tr>
							<td>July</td>
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
							<td>October</td>
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

					<h1>Machines</h1>
					<p>
						Now, the machines that harvest the grass is paid for. But when we
						bought it for a bit over a year ago, it cost us 1'000'000kr. with 1%
						rent per month
					</p>
					<h1>Working conditions</h1>
					<p>
						Our gardeners work 37.5 hours per week, and they get paid X kr. per
						month. There are 3 employees to work the machine, where they work
						3x8 hour shifts in the 72 hours the machine is running. For the 3
						shifts, they get X kr.
					</p>
				</section>
			</div>
		</main>
	);
};

export default Report;
