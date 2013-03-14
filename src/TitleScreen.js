import ui.View;
import ui.ImageView;

exports = Class(ui.ImageView, function(spr) {
  this.init = function(options) {
    options = merge(options, {
      x: 0,
      y: 0,
      image: "resources/images/title_screen.png"
    });

    spr(this, 'init', [options]);
  };

  this.buildView = function() {
    var startButton = new ui.View({
      superview: this,
      x: 58,
      y: 313,
      width: 200,
      height: 100
    });

    startButton.on('InputSelect', bind(this, function() {
      debugger;

      this.emit('titlescreen:start');
    }));
  };
});

