import device;
import ui.StackView as StackView;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		var rootView = new StackView({
			superview: this,
			x: device.width / 2 - 160,
			y: device.height / 2 - 240,
			width: 720,
			height: 1280,
			clip: true,
			backgroundColor: '#37B34A'
		});
	};

	this.launchUI = function () {};
});

