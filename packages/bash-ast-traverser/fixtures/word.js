module.exports = {
	ast: {
		type: 'word',
		text: 0,
		expansion: [{
			type: 'name',
			text: 'test'
		}]
	},
	expected: [
		[['name on test']],
		'word on 0'
	]
};