import React from 'react';
import './App.css';

const integrations = [
	{
		imgUrl:
			'https://img.favpng.com/19/24/8/logo-marketing-manual-do-mailchimp-smile-m-png-favpng-GrG2z2vHBu1exEW2U19CFwYW2.jpg',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl:
			'https://logos-download.com/wp-content/uploads/2016/09/Slack_logo-700x227.png',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl: 'https://cdn.zapier.com/zapier/images/logos/zapier-logo.png',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl:
			'https://d2x5h3n6mzrmz3.cloudfront.net/wp-content/themes/mglv3/HTML/images/logo.png',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl:
			'https://exob2b.com/wp-content/uploads/2017/05/apps_facebook-pixel.png',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl:
			'https://www.moveyourmetal.com/wp-content/uploads/2017/06/offconv2.jpg',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl:
			'https://s3.amazonaws.com/collateral.impactdata.com.au/web17/ID-logo.svg',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl:
			'https://www.campaignmonitor.com/assets/brand/campaignmonitor.jpg',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl: 'https://www.activecampaign.com/site/assets/social-2x.png',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HSLogo_color.svg',
		tagLine: 'blah blah blah',
	},
	{
		imgUrl:
			'https://i.pcmag.com/imagery/reviews/0503JFSfbnsU8sDkO8tK8Vt-13.fit_scale.size_1028x578.v_1569475319.jpg',
		tagLine: 'blah blah blah',
	},
];

const Card = ({ imgUrl, tagLine }) => {
	return (
		<div className="card">
			<div className="dotWrapper">
				<div className="dot" />
			</div>
			<div className="imgWrapper">
				<img src={imgUrl} />
			</div>
			<p>{tagLine}</p>
		</div>
	);
};

const App = () => {
	return (
		<div className="wrapper">
			{integrations.map((i) => (
				<Card {...i} />
			))}
		</div>
	);
};

export default App;
