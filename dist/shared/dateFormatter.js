'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatShortWeekday = exports.formatWeekday = exports.formatMonth = exports.formatMonthYear = exports.formatLongDate = exports.formatDate = undefined;

var _getUserLocale = require('get-user-locale');

var _getUserLocale2 = _interopRequireDefault(_getUserLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatterCache = {};

/**
 * Gets Intl-based date formatter from formatter cache. If it doesn't exist in cache
 * just yet, it will be created on the fly.
 */
var getFormatter = function getFormatter(locale, options) {
  if (!locale) {
    // Default parameter is not enough as it does not protect us from null values
    // eslint-disable-next-line no-param-reassign
    locale = (0, _getUserLocale2.default)();
  }

  var stringifiedOptions = JSON.stringify(options);

  if (!formatterCache[locale]) {
    formatterCache[locale] = {};
  }

  if (!formatterCache[locale][stringifiedOptions]) {
    formatterCache[locale][stringifiedOptions] = function (n) {
      return n.toLocaleString(locale, options);
    };
  }

  return formatterCache[locale][stringifiedOptions];
};

/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */
var toSafeHour = function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
};

var formatDate = exports.formatDate = function formatDate(locale, date) {
  return getFormatter(locale, { day: 'numeric', month: 'numeric', year: 'numeric' })(toSafeHour(date));
};

var formatLongDate = exports.formatLongDate = function formatLongDate(locale, date) {
  return getFormatter(locale, { day: 'numeric', month: 'long', year: 'numeric' })(toSafeHour(date));
};

var formatMonthYear = exports.formatMonthYear = function formatMonthYear(locale, date) {
  return getFormatter(locale, { month: 'long', year: 'numeric' })(toSafeHour(date));
};

var formatMonth = exports.formatMonth = function formatMonth(locale, date) {
  return getFormatter(locale, { month: 'long' })(toSafeHour(date));
};

var formatWeekday = exports.formatWeekday = function formatWeekday(locale, date) {
  return getFormatter(locale, { weekday: 'long' })(toSafeHour(date));
};

var formatShortWeekday = exports.formatShortWeekday = function formatShortWeekday(locale, date) {
  return getFormatter(locale, { weekday: 'short' })(toSafeHour(date));
};