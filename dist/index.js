#!/usr/bin/env node

// Import necessary modules
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _commander = require("commander");
var _chalk = _interopRequireDefault(require("chalk"));
var _ora = _interopRequireDefault(require("ora"));
var _readline = _interopRequireDefault(require("readline"));
var _youtubeTranscript = require("youtube-transcript");
var _extractTweets = _interopRequireDefault(require("~services/extractTweets.js"));
var _prompts = _interopRequireDefault(require("~constants/prompts.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var spinner = (0, _ora["default"])('Loading...');

// Initialize the command line interface
var program = new _commander.Command();

// Define the version of the CLI
program.version('0.0.1');

// Define the config file path
var configFilePath = _path["default"].join('./api-key.json');

// Create an interface for reading input
var rl = _readline["default"].createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to read API key from config file
function readApiKey() {
  try {
    var config = JSON.parse(_fs["default"].readFileSync(configFilePath));
    return config['open_ai_key'] || '';
  } catch (error) {
    return '';
  }
}

// Function to write API key to config file
function writeApiKey(apiKey) {
  var config = {
    open_ai_key: apiKey
  };
  _fs["default"].writeFileSync(configFilePath, JSON.stringify(config, null, 2));
}

// Function to authenticate with OpenAI API Key
function authenticate(apiKey) {
  if (apiKey) return true;else return false;
}

// Command to accept a YouTube URL
program.command('yt2tweets <url>').description('Print a YouTube URL after authenticating with OpenAI API Key').action(/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var apiKey;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          apiKey = readApiKey(); // Read the saved API key
          // If no API key is found, prompt for it
          if (apiKey) {
            _context2.next = 5;
            break;
          }
          rl.question('Please enter your OpenAI API Key: ', /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(apiKey) {
              var isValid;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    spinner.start();
                    isValid = authenticate(apiKey);
                    if (!isValid) {
                      _context.next = 8;
                      break;
                    }
                    writeApiKey(apiKey); // Save the new API key
                    _context.next = 6;
                    return convertYt2Tweets(url, apiKey);
                  case 6:
                    _context.next = 9;
                    break;
                  case 8:
                    console.error(_chalk["default"].red('Invalid API Key. Please provide a valid OpenAI API Key.'));
                  case 9:
                    spinner.stop();
                    rl.close();
                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
          _context2.next = 8;
          break;
        case 5:
          // If an API key exists, use it directly
          spinner.start();
          _context2.next = 8;
          return convertYt2Tweets(url, apiKey);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// Function to print YouTube URL after authentication
function convertYt2Tweets(_x3, _x4) {
  return _convertYt2Tweets.apply(this, arguments);
} // Command to set the OpenAI API Key using --key or -k
function _convertYt2Tweets() {
  _convertYt2Tweets = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url, apiKey) {
    var isValid, youtubeRegex, transcript, _yield$extractTweets, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          isValid = authenticate(apiKey);
          if (!isValid) {
            _context3.next = 31;
            break;
          }
          youtubeRegex = /^https?:\/\/(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
          if (!youtubeRegex.test(url)) {
            _context3.next = 27;
            break;
          }
          spinner.succeed('YouTube URL is valid');
          spinner.start('Fetching transcript ...');
          _context3.prev = 6;
          _context3.next = 9;
          return _youtubeTranscript.YoutubeTranscript.fetchTranscript(url);
        case 9:
          transcript = _context3.sent;
          transcript = transcript.map(function (item) {
            return item.text;
          }).join(' ');
          spinner.succeed('Transcript retrieved');

          // Extract tweets
          spinner.start('Converting to Tweets ...');
          _context3.next = 15;
          return (0, _extractTweets["default"])({
            identity: _prompts["default"].IDENTITY,
            steps: _prompts["default"].STEPS,
            formats: _prompts["default"].FORMATS,
            input: transcript,
            apiKey: apiKey
          });
        case 15:
          _yield$extractTweets = _context3.sent;
          result = _yield$extractTweets.result;
          spinner.succeed('Conversion completed');
          console.log('');
          console.log(_chalk["default"].green(result));
          _context3.next = 25;
          break;
        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3["catch"](6);
          console.error(_chalk["default"].red(_context3.t0));
        case 25:
          _context3.next = 29;
          break;
        case 27:
          spinner.fail('Invalid YouTube URL');
          console.error(_chalk["default"].red('Please enter a valid YouTube URL to proceed'));
        case 29:
          _context3.next = 33;
          break;
        case 31:
          spinner.fail('Invalid API Key');
          console.error(_chalk["default"].red('Invalid API Key. Please provide a valid OpenAI API Key.'));
        case 33:
          // Close readline interface and exit process after printing or error
          spinner.stop();
          rl.close();
          process.exit(0);
        case 36:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[6, 22]]);
  }));
  return _convertYt2Tweets.apply(this, arguments);
}
program.option('-k, --key <apiKey>', 'Set your OpenAI API Key').action(function (options) {
  if (options.key) {
    writeApiKey(options.key);
    console.log(_chalk["default"].green('API Key has been updated successfully.'));
  }

  // Close readline interface and exit process after printing or error
  rl.close();
  process.exit(0);
});

// Help command enhancement
program.on('--help', function () {
  console.log('');
  console.log('Examples:');
  console.log('  $ yt2tweets https://youtu.be/1-TZqOsVCNM');
  console.log('  $ yt2tweets https://www.youtube.com/watch?v=1-TZqOsVCNM');
  console.log('');
  console.log('To change your OpenAI API Key:');
  console.log('  $ yt2tweets --key YOUR_NEW_API_KEY');
  console.log('  $ yt2tweets -k YOUR_NEW_API_KEY');
});

// Parse the command line arguments
program.parse(process.argv);

// If no command is provided, show help
if (!process.argv.slice(2).length) {
  program.outputHelp();
}