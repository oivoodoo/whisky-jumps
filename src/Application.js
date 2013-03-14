import device;
import ui.StackView as StackView;

import src.TitleScreen as TitleScreen;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		var titleScreen = new TitleScreen();

		this.view.style.backgroundColor = '#30B040';

		var rootView = new StackView({
			superview: this,
			x: device.width / 2 - 160,
			y: device.height / 2 - 240,
			width: 320,
			height: 480,
			clip: true,
			backgroundColor: '#37B34A'
		});

    rootView.push(titleScreen);

    titleScreen.on('titlescreen:start', function() {
      console.log('test message');
    });
	};

	this.launchUI = function () {};
});

