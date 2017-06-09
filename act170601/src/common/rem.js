var _html = document.querySelector('html');
var _body = document.querySelector('body');

// create a div and insert it into <body>
// by which we can get viewportWidth and viewportHeight
var _viewport = document.createElement('div');
_viewport.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
_body.insertBefore(_viewport, _body.firstChild);

class Manager {
  constructor() {
    this.initialized = false;
    this._callingHooks = false;

    this.drawingWidth = 750;

    this.rem = 0;
    this.viewportWidth = 0;
    this.viewportHeight = 0;
    this.viewportRatio = 0;

    this.hooks = {
      updated: []
    }
    this.init();
  }
  init() {
    if (this.initialized === false) {
      this.update();
      window.addEventListener('resize', this.update.bind(this));
      document.addEventListener('DOMContentLoaded', () => {
        this.update();
      })
      this.initialized = true;
    } else {
      throw new Error('[soap-rem] REM is already initialized.');
    }
  }
  setDrawingWidth(val) {
    if (typeof val === 'number') {
      this.drawingWidth = val;
      this.update();
    } else {
      throw new TypeError('[soap-rem] drawingWidth must be a number');
    }
  }
  update() {
    if (this._callingHooks) {
      throw new Error('You can\'t call function REM.update in the callback of function REM.on.')
    }
    // get width and height of current viewport
    _viewport.style.display = 'block';
    var w = Number(document.defaultView.getComputedStyle(_viewport).width.replace(/px/, ''));
    var h = Number(document.defaultView.getComputedStyle(_viewport).height.replace(/px/, ''));

    // Update viewportWidth, viewportHeight and viewportRatio
    this.viewportWidth = w;
    this.viewportHeight = h;
    this.viewportRatio = h / w;
    _viewport.style.display = 'none';

    // Calculate and update the value of rem
    this.rem = 100 * w / this.drawingWidth;
    _html.style.fontSize = this.rem + 'px';

    [].forEach.call(document.querySelectorAll('.rem_full_height'), a => {
      a.style.cssText += 'height: ' + h + 'px;'
    })

    // call the hooks
    this.callHooks('updated');

    console.debug('[soap-rem] Rem reset. Size of the viewport is ' + w + '*' + h + '.');
  }
  on(event, callback) {
    if (typeof callback === 'function') {
      this.hooks[event].push(callback);
      return this.removeHook.bind(this, this.hooks[event], callback);
    } else {
      throw new TypeError('[soap-rem] Expect the callback to be a function.');
    }
  }
  callHooks(event) {
    this.hooks[event].forEach(hook => {
      if (typeof hook === 'function') {
        hook();
      }
    })
  }
  removeHook(arr, fn) {
    var index = arr.indexOf(fn);
    arr.splice(index, 1);
  }

}

var manager = new Manager();

const REM = {
  getRem: function() {
    return manager.rem;
  },
  getViewportWidth: function() {
    return manager.viewportWidth;
  },
  getViewportHeight: function() {
    console.log(manager.viewportHeight)
    return manager.viewportHeight;
  },
  getValues: function() {
    return {
      viewportWidth: manager.viewportWidth,
      viewportHeight: manager.viewportHeight,
      viewportRatio: manager.viewportRatio,
      rem: manager.rem
    }
  },

  setDrawingWidth: manager.setDrawingWidth.bind(manager),
  update: manager.update.bind(manager),
  on: manager.on.bind(manager)
}

export default REM;
