define(['exports', './bs-notification', './notification-level', './notification-service', './notification-controller', 'aurelia-pal', './notification-renderer'], function (exports, _bsNotification, _notificationLevel, _notificationService, _notificationController, _aureliaPal, _notificationRenderer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NotificationController = exports.NotificationService = exports.NotificationLevel = exports.BSNotification = undefined;
  exports.configure = configure;
  Object.defineProperty(exports, 'BSNotification', {
    enumerable: true,
    get: function () {
      return _bsNotification.BSNotification;
    }
  });
  Object.defineProperty(exports, 'NotificationLevel', {
    enumerable: true,
    get: function () {
      return _notificationLevel.NotificationLevel;
    }
  });
  Object.defineProperty(exports, 'NotificationService', {
    enumerable: true,
    get: function () {
      return _notificationService.NotificationService;
    }
  });
  Object.defineProperty(exports, 'NotificationController', {
    enumerable: true,
    get: function () {
      return _notificationController.NotificationController;
    }
  });
  function configure(config, callback) {
    config.globalResources(_aureliaPal.PLATFORM.moduleName('./bs-notification'));

    if (typeof callback === 'function') {
      callback(_notificationRenderer.globalSettings);
    }
  }
});