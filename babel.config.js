module.exports = {
	presets: [
		[
			'@babel/env',
			{
				debug: false,
				modules: false,
				useBuiltIns: 'usage',
				corejs: 3,
			},
		],
		'@babel/react',
	],
	plugins: ['@babel/plugin-proposal-class-properties'],
};