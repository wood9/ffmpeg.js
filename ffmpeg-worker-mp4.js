
var b;
b || (b = typeof Module !== 'undefined' ? Module : {});
var c = !1;
self.onmessage = function(a) {
  a = a.data;
  "run" == a.type ? c ? self.postMessage({type:"error", data:"already running"}) : (c = !0, self.postMessage({type:"run"}), Object.keys(a).forEach(function() {
  }), c = !1) : self.postMessage({type:"error", data:"unknown command"});
};
self.postMessage({type:"ready"});

