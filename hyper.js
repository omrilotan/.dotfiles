// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
		updateChannel: 'stable',
		css: '',
		termCSS: '',
		showHamburgerMenu: '',
		showWindowControls: false,
		padding: '10px',
		shell: '',
		shellArgs: ['--login'],
		env: {},
		bell: false,
		copyOnSelect: true,
		defaultSSHApp: true,
  },
  plugins: ['hyper-search', 'hypercwd', 'hyperline'],
  localPlugins: ['/spaceship/mono/packages/hypertonia/'],
  keymaps: {},
  hyperline: {
    plugins: [
      'ip',
      'cpu',
      'spotify'
    ]
  }
};
