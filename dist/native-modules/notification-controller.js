

import { invokeLifecycle } from './lifecycle';

export var NotificationController = function () {
  function NotificationController(renderer, settings) {
    

    this._renderer = renderer;
    this.settings = settings;
  }

  NotificationController.prototype.close = function close() {
    var _this = this;

    clearTimeout(this.timer);

    return invokeLifecycle(this.viewModel, 'canDeactivate').then(function (canDeactivate) {
      if (canDeactivate) {
        invokeLifecycle(_this.viewModel, 'deactivate').then(function () {
          return _this._renderer.hideNotification(_this);
        }).then(function () {
          return _this._renderer.destroyNotificationHost(_this);
        }).then(function () {
          _this.controller.unbind();
        });
      }
    });
  };

  return NotificationController;
}();