/**
 * Exports the PostCSS configuration.
 *
 * @return {string} PostCSS options.
 */

module.exports = {
	plugins: [
		'postcss-import',
		'postcss-mixins',
		[
			'postcss-preset-env',
			{
				stage: 0,
				autoprefixer: {
					grid: false,
				},
				features: {
					'custom-properties': false,
				},
			},
		],
		[
			'cssnano',
			{
				preset: [
					'default',
					{
						autoprefixer: false,
						calc: {
							precision: 8,
						},
						convertValues: true,
						discardComments: {
							removeAll: true,
						},
						mergeLonghand: false,
						zindex: false,
					},
				],
			},
		],
		[
			'postcss-replace',
			{
				data: {
					basePath: process.env.REACT_APP_BASE_PATH,
				},
			},
		],
	],
};
