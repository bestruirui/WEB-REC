// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cVgJb":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _recorder = require("./components/recorder");
var _recorderDefault = parcelHelpers.interopDefault(_recorder);
var _themeToggler = require("./components/themeToggler");
var _themeTogglerDefault = parcelHelpers.interopDefault(_themeToggler);
var _handleMobileUsers = require("./utils/handleMobileUsers");
window.addEventListener("load", ()=>(0, _handleMobileUsers.handleMobileUsers)());
navigator.serviceWorker.register(require("552aec1fc527e86b"));
const screenRec = {};
//instance
screenRec.recorder = new (0, _recorderDefault.default)();
screenRec.theme = new (0, _themeTogglerDefault.default)();
// init
screenRec.recorder.init();
screenRec.theme.init();

},{"./components/recorder":"9CE50","./components/themeToggler":"8YGrt","./utils/handleMobileUsers":"9rtef","552aec1fc527e86b":"iUBYn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9CE50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class recorderClass {
    constructor(){
        if (!recorderClass.instance) {
            this.set = {
                // TODO: LOADING ANIMATION
                // logo: document.querySelector(".sh__logo"),
                // logoImg: document.querySelector(".sh__logo--img"),
                // logoText: document.querySelector(".sh__logo--text"),
                // progress: document.querySelector(".sh__progress"),
                // themeToggler: document.querySelector(".sh__toggler"),
                // footer: document.querySelector(".sh__footer"),
                start: document.getElementById("start"),
                stop: document.getElementById("stop"),
                pauseAndResume: document.getElementById("pauseAndResume"),
                preview: document.querySelector("#preview"),
                download: document.querySelector("#download"),
                recordingName: document.querySelector("#filename"),
                mimeChoiceWrapper: document.querySelector(".sh__choice"),
                videoWrapper: document.querySelector(".sh__video--wrp"),
                videoOpacitySheet: document.querySelector(".sh__video--sheet"),
                dropdownToggle: document.querySelector(".sh__dropdown--btn"),
                dropdownList: document.querySelector(".sh__dropdown__list"),
                dropdownDefaultOption: document.querySelector(".sh__dropdown--defaultOption"),
                dropdownOptions: document.querySelectorAll(".sh__dropdown__list--item"),
                dropdownChevron: document.querySelector(".sh__dropdown--icon.chevron"),
                headerText: document.querySelector(".sh__header"),
                toast: document.getElementById("toast"),
                mime: null,
                mediaRecorder: null,
                isRecording: false,
                isPause: false,
                filename: null
            };
            recorderClass.instance = this;
        }
        return recorderClass.instance;
    }
    toggleDropdown() {
        this.set.dropdownToggle.classList.toggle("toggled");
        this.set.dropdownChevron.classList.toggle("toggled");
        this.set.dropdownList.classList.toggle("open");
    }
    getSelectedValue(el) {
        let selectedElement = el;
        let selectedAttrValue = selectedElement.getAttribute("data-value");
        selectedAttrValue !== "" ? this.set.start.classList.add("visible") : this.set.start.classList.remove("visible");
        this.set.dropdownDefaultOption.textContent = selectedElement.innerText;
        this.set.mime = selectedAttrValue;
    }
    getRandomString(length) {
        let randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for(let i = 0; i < length; i++)result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        return result;
    }
    appendStatusNotification(actionType) {
        const notificationText = actionType === "start" ? "开始录制" : actionType === "stop" ? "停止录制" : actionType === "pause" ? "暂停录制" : actionType === "resume" ? "恢复录制" : "";
        this.set.toast.classList.add("active");
        document.getElementById("desc").innerHTML = notificationText;
        setTimeout(()=>{
            this.set.toast.classList.remove("active");
        }, 4000);
    }
    createRecorder(stream) {
        // the stream data is stored in this array
        let recordedChunks = [];
        this.set.mediaRecorder = new MediaRecorder(stream);
        this.set.mediaRecorder.ondataavailable = (e)=>{
            if (e.data.size > 0) recordedChunks.push(e.data);
        };
        this.set.mediaRecorder.onstop = ()=>{
            if (this.set.isRecording) this.stopRecording();
            this.bakeVideo(recordedChunks);
            recordedChunks = [];
        };
        // When stopping 'Tab Record' on Chrome browser by clicking 'Stop sharing' button, this gets fired instead of onstop event.
        this.set.mediaRecorder.stream.oninactive = ()=>{
            this.stopRecording();
        };
        this.set.mediaRecorder.start(15); // For every 200ms the stream data will be stored in a separate chunk.
        return this.set.mediaRecorder;
    }
    async recordScreen() {
        return await navigator.mediaDevices.getDisplayMedia({
            audio: true,
            video: {
                mediaSource: "screen"
            }
        });
    }
    bakeVideo(recordedChunks) {
        const blob = new Blob(recordedChunks, {
            type: "video/" + this.set.mime
        });
        let savedName;
        if (this.set.filename == null || this.set.filename == "") savedName = this.getRandomString(15);
        else savedName = this.set.filename;
        this.set.download.href = URL.createObjectURL(blob);
        this.set.download.download = `${savedName}.${this.set.mime}`;
        this.set.videoOpacitySheet.remove();
        this.set.preview.autoplay = false;
        this.set.preview.controls = true;
        this.set.preview.src = URL.createObjectURL(blob);
        URL.revokeObjectURL(blob); // clear from memory
    }
    async startRecording() {
        let stream = await this.recordScreen();
        let mimeType = "video/" + this.set.mime;
        this.set.filename = document.getElementById("filename").value;
        this.set.isRecording = true;
        this.set.mediaRecorder = this.createRecorder(stream, mimeType);
        this.set.preview.srcObject = stream;
        this.set.preview.captureStream = this.set.preview.captureStream || this.set.preview.mozCaptureStream;
        this.set.mimeChoiceWrapper.classList.add("hide");
        this.set.headerText.classList.add("is-recording");
        this.set.preview.classList.add("visible");
        this.set.pauseAndResume.classList.add("visible");
        this.set.stop.classList.add("visible");
        this.appendStatusNotification("start");
    }
    pauseRecording() {
        this.set.mediaRecorder.pause();
        this.set.isPause = true;
        this.appendStatusNotification("pause");
        this.set.pauseAndResume.classList.add("resume");
        this.set.pauseAndResume.classList.remove("pause");
    }
    resumeRecording() {
        this.set.mediaRecorder.resume();
        this.set.isPause = false;
        this.appendStatusNotification("resume");
        this.set.pauseAndResume.classList.remove("resume");
        this.set.pauseAndResume.classList.add("pause");
    }
    stopRecording() {
        this.set.mediaRecorder.stream.getTracks().forEach((track)=>track?.stop());
        const isInactive = this.set.mediaRecorder.state === "inactive"; // when stopping record with `Stop Sharing` button, isInactive is true
        this.set.isRecording = false;
        if (!isInactive) this.set.mediaRecorder.stop(); // prevents program from stopping the mediaRecorder twice, causing app to crash on chrome browser
        this.set.preview.srcObject = null;
        this.set.headerText.classList.remove("is-recording");
        this.set.headerText.classList.add("is-reviewing");
        this.set.stop.classList.remove("visible");
        this.set.pauseAndResume.classList.remove("visible");
        this.set.recordingName.classList.remove("visible");
        this.set.download.classList.add("visible");
        this.appendStatusNotification("stop");
    }
    init() {
        // TODO: LOADING ANIMATION
        // const tl = new TimelineLite({ duration: .8, delay: .4, ease: "back.out(2)", opacity: 0 });
        //
        // tl
        //     .to(this.set.progress,  { duration: 7, width: "101vw" } )
        //     .fromTo(this.set.logo, { duration: 1, opacity: 0, xPercent: -50, yPercent: 300 }, { opacity: 1, yPercent: -50, xPercent: -50, scale: .9 }, "<" )
        //     .from(".sh__logo--text .letter", { opacity: 0, x: 20, stagger: { amount: 0.80, from: "start" }}, "<")
        //     .to(this.set.logo, { scale: .7, yPercent: 3, top: "1.5%" }, "-=2")
        //     .from(this.set.themeToggler,{ yPercent: -200 } )
        //     .from(this.set.footer,{ yPercent: 200 }, "<" )
        //     .fromTo(this.set.headerText,{ opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "+=.8" )
        //     .fromTo(this.set.dropdownToggle, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, "-=.7" )
        this.set.dropdownToggle.addEventListener("click", ()=>{
            this.toggleDropdown();
        });
        document.addEventListener("click", (e)=>{
            if (this.set.dropdownToggle.classList.contains("toggled")) {
                if (!e.target.closest(".sh__dropdown--btn")) this.toggleDropdown();
            }
        });
        this.set.dropdownOptions.forEach((el)=>{
            el.addEventListener("click", ()=>{
                this.set.recordingName.classList.add("visible");
                this.getSelectedValue(el);
                this.toggleDropdown();
            });
        });
        this.set.start.addEventListener("click", ()=>{
            if (!this.set.isRecording) this.startRecording();
        });
        this.set.pauseAndResume.addEventListener("click", ()=>{
            if (!this.set.isPause) this.pauseRecording();
            else if (this.set.isPause) this.resumeRecording();
        });
        this.set.stop.addEventListener("click", ()=>{
            if (this.set.isRecording) this.stopRecording();
        });
    }
}
exports.default = recorderClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8YGrt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const LOCAL_STORAGE_KEY = "screenREC-color-scheme";
class themeTogglerClass {
    constructor(){
        if (!themeTogglerClass.instance) {
            this.set = {
                toggler: document.querySelector(".sh__toggler"),
                icons: document.querySelectorAll(".sh__toggler--icon"),
                moon: document.querySelector(".sh__toggler-btn--moon"),
                sun: document.querySelector(".sh__toggler-btn--sun")
            };
            themeTogglerClass.instance = this;
        }
        return themeTogglerClass.instance;
    }
    activateDarkMode() {
        document.body.dataset.theme = "dark";
        this.set.moon.classList.remove("active");
        this.set.sun.classList.add("active");
        window.localStorage.setItem(LOCAL_STORAGE_KEY, "dark");
    }
    activateLightMode() {
        document.body.dataset.theme = "light";
        this.set.sun.classList.remove("active");
        this.set.moon.classList.add("active");
        window.localStorage.setItem(LOCAL_STORAGE_KEY, "light");
    }
    getPreferredTheme() {
        // get color scheme from localStorage
        const theme = window.localStorage.getItem(LOCAL_STORAGE_KEY);
        if (theme === "light") return this.activateLightMode();
        if (theme === "dark") return this.activateDarkMode();
        window.matchMedia("(prefers-color-scheme: dark)").matches ? this.activateDarkMode() : this.activateLightMode();
    }
    init() {
        this.getPreferredTheme();
        this.set.toggler.addEventListener("click", ()=>{
            if (document.body.dataset.theme) {
                if (document.body.dataset.theme === "light") this.activateDarkMode();
                else this.activateLightMode();
            }
        });
        // Listen for OS theme changes
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
            if (e.matches) this.activateDarkMode();
            else this.activateLightMode();
        });
    }
}
exports.default = themeTogglerClass;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9rtef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleMobileUsers", ()=>handleMobileUsers);
const handleMobileUsers = ()=>{
    const isMobileRegExp = /mobile|android|iphone/i;
    const isMobile = isMobileRegExp.test(navigator.userAgent);
    if (isMobile) alert("暂不支持手机端 \uD83E\uDD7A");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUBYn":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("g05j8") + "sw.js" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}]},["cVgJb","ebWYT"], "ebWYT", "parcelRequirefe68")

//# sourceMappingURL=index.739bf03c.js.map
