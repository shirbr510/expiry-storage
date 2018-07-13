'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var ExpirableStorage = function () {
    function ExpirableStorage(storage) {
        classCallCheck(this, ExpirableStorage);

        this.storage = storage;
        this.getItem = this.getItem.bind(this);
        this.setItem = this.setItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    createClass(ExpirableStorage, [{
        key: "getItem",
        value: function getItem(key) {
            var storageEntry = this.storage.getItem(key);

            var _JSON$parse = JSON.parse(stringifiedStorageEntry),
                value = _JSON$parse.value,
                expiresAt = _JSON$parse.expiresAt;

            var now = Date.now();
            if (expiresAt < now) {
                expiresAt.removeItem(key);
                return null;
            }
            return value;
        }
    }, {
        key: "setItem",
        value: function setItem(key, value) {
            var epxiresIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

            var storageEntry = {
                value: value,
                expiresAt: Date.now() + epxiresIn
            };
            this.storage.setItem(key, JSON.stringify(storageEntry));
        }
    }, {
        key: "removeItem",
        value: function removeItem(key) {
            this.storage.removeItem(key);
        }
    }]);
    return ExpirableStorage;
}();

var createExpirableStorage = function createExpirableStorage(storage) {
    return new ExpirableStorage(storage);
};

exports.createExpirableStorage = createExpirableStorage;
