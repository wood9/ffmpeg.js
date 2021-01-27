
var Ra;
Ra || (Ra = typeof Module !== 'undefined' ? Module : {});
module.exports = function(J) {
  function Sa(a, b, c, e) {
    a || (a = this);
    this.parent = a;
    this.l = a.l;
    this.fa = null;
    this.id = d.Mb++;
    this.name = b;
    this.mode = c;
    this.f = {};
    this.g = {};
    this.rdev = e;
  }
  function da(a, b) {
    throw b;
  }
  function Ta(a) {
    Array.isArray(a) || a instanceof ArrayBuffer ? a = new Uint8Array(a) : a ? a instanceof Uint8Array || (a = new Uint8Array(a.buffer)) : a = new Uint8Array(0);
    return a;
  }
  function Ua(a) {
    var b = [];
    return function(c, e) {
      if (e && b.length) {
        return a(N(b, 0));
      }
      10 === c || 13 === c ? (S && b.push(c), a(N(b, 0)), b = []) : 0 !== c && b.push(c);
    };
  }
  function tb(a) {
    return f.locateFile ? f.locateFile(a, K) : K + a;
  }
  function N(a, b, c) {
    var e = b + c;
    for (c = b; a[c] && !(c >= e);) {
      ++c;
    }
    if (16 < c - b && a.subarray && Va) {
      return Va.decode(a.subarray(b, c));
    }
    for (e = ""; b < c;) {
      var g = a[b++];
      if (g & 128) {
        var h = a[b++] & 63;
        if (192 == (g & 224)) {
          e += String.fromCharCode((g & 31) << 6 | h);
        } else {
          var l = a[b++] & 63;
          g = 224 == (g & 240) ? (g & 15) << 12 | h << 6 | l : (g & 7) << 18 | h << 12 | l << 6 | a[b++] & 63;
          65536 > g ? e += String.fromCharCode(g) : (g -= 65536, e += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
        }
      } else {
        e += String.fromCharCode(g);
      }
    }
    return e;
  }
  function Z(a, b) {
    return a ? N(O, a, b) : "";
  }
  function T(a, b, c, e) {
    if (!(0 < e)) {
      return 0;
    }
    var g = c;
    e = c + e - 1;
    for (var h = 0; h < a.length; ++h) {
      var l = a.charCodeAt(h);
      if (55296 <= l && 57343 >= l) {
        var p = a.charCodeAt(++h);
        l = 65536 + ((l & 1023) << 10) | p & 1023;
      }
      if (127 >= l) {
        if (c >= e) {
          break;
        }
        b[c++] = l;
      } else {
        if (2047 >= l) {
          if (c + 1 >= e) {
            break;
          }
          b[c++] = 192 | l >> 6;
        } else {
          if (65535 >= l) {
            if (c + 2 >= e) {
              break;
            }
            b[c++] = 224 | l >> 12;
          } else {
            if (c + 3 >= e) {
              break;
            }
            b[c++] = 240 | l >> 18;
            b[c++] = 128 | l >> 12 & 63;
          }
          b[c++] = 128 | l >> 6 & 63;
        }
        b[c++] = 128 | l & 63;
      }
    }
    b[c] = 0;
    return c - g;
  }
  function ea(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
      var e = a.charCodeAt(c);
      55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++c) & 1023);
      127 >= e ? ++b : b = 2047 >= e ? b + 2 : 65535 >= e ? b + 3 : b + 4;
    }
    return b;
  }
  function Wa(a) {
    var b = ea(a) + 1, c = Fa(b);
    c && T(a, F, c, b);
    return c;
  }
  function Xa(a) {
    var b = ea(a) + 1, c = Ga(b);
    T(a, F, c, b);
    return c;
  }
  function ub(a, b) {
    0 < a % b && (a += b - a % b);
    return a;
  }
  function Ya(a) {
    pa = a;
    f.HEAP8 = F = new Int8Array(a);
    f.HEAP16 = Ha = new Int16Array(a);
    f.HEAP32 = m = new Int32Array(a);
    f.HEAPU8 = O = new Uint8Array(a);
    f.HEAPU16 = new Uint16Array(a);
    f.HEAPU32 = new Uint32Array(a);
    f.HEAPF32 = new Float32Array(a);
    f.HEAPF64 = new Float64Array(a);
  }
  function fa(a) {
    for (; 0 < a.length;) {
      var b = a.shift();
      if ("function" == typeof b) {
        b(f);
      } else {
        var c = b.Fb;
        "number" === typeof c ? void 0 === b.sa ? f.dynCall_v(c) : f.dynCall_vi(c, b.sa) : c(void 0 === b.sa ? null : b.sa);
      }
    }
  }
  function Za() {
    U++;
    f.monitorRunDependencies && f.monitorRunDependencies(U);
  }
  function Ia() {
    U--;
    f.monitorRunDependencies && f.monitorRunDependencies(U);
    if (0 == U && (null !== Ja && (clearInterval(Ja), Ja = null), ha)) {
      var a = ha;
      ha = null;
      a();
    }
  }
  function A(a) {
    if (f.onAbort) {
      f.onAbort(a);
    }
    aa(a);
    E(a);
    Ka = !0;
    throw new WebAssembly.RuntimeError("abort(" + a + "). Build with -s ASSERTIONS=1 for more info.");
  }
  function La(a, b) {
    return String.prototype.startsWith ? a.startsWith(b) : 0 === a.indexOf(b);
  }
  function $a(a) {
    return La(a, "data:application/octet-stream;base64,");
  }
  function ab() {
    try {
      if (ia) {
        return new Uint8Array(ia);
      }
      if (qa) {
        return qa(L);
      }
      throw "both async and sync fetching of the wasm failed";
    } catch (a) {
      A(a);
    }
  }
  function vb() {
    return ia || !ra && !P || "function" !== typeof fetch || La(L, "file://") ? new Promise(function(a) {
      a(ab());
    }) : fetch(L, {credentials:"same-origin"}).then(function(a) {
      if (!a.ok) {
        throw "failed to load wasm binary file at '" + L + "'";
      }
      return a.arrayBuffer();
    }).catch(function() {
      return ab();
    });
  }
  function wb(a) {
    return a.replace(/\b_Z[\w\d_]+/g, function(b) {
      return b === b ? b : b + " [" + b + "]";
    });
  }
  function V(a) {
    return m[bb() >> 2] = a;
  }
  function sa() {
    void 0 === sa.start && (sa.start = Date.now());
    return 1E3 * (Date.now() - sa.start) | 0;
  }
  function ja() {
    if (!ja.u) {
      var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:ta || "./this.program"}, b;
      for (b in cb) {
        a[b] = cb[b];
      }
      var c = [];
      for (b in a) {
        c.push(b + "=" + a[b]);
      }
      ja.u = c;
    }
    return ja.u;
  }
  function db(a, b) {
    a = new Date(1000 * m[a >> 2]);
    m[b >> 2] = a.getUTCSeconds();
    m[b + 4 >> 2] = a.getUTCMinutes();
    m[b + 8 >> 2] = a.getUTCHours();
    m[b + 12 >> 2] = a.getUTCDate();
    m[b + 16 >> 2] = a.getUTCMonth();
    m[b + 20 >> 2] = a.getUTCFullYear() - 1900;
    m[b + 24 >> 2] = a.getUTCDay();
    m[b + 36 >> 2] = 0;
    m[b + 32 >> 2] = 0;
    m[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
    m[b + 40 >> 2] = xb;
    return b;
  }
  function ua() {
    function a(h) {
      return (h = h.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? h[1] : "GMT";
    }
    if (!ua.u) {
      ua.u = !0;
      m[eb() >> 2] = 60 * (new Date).getTimezoneOffset();
      var b = (new Date).getFullYear(), c = new Date(b, 0, 1);
      b = new Date(b, 6, 1);
      m[fb() >> 2] = Number(c.getTimezoneOffset() != b.getTimezoneOffset());
      var e = a(c), g = a(b);
      e = Wa(e);
      g = Wa(g);
      b.getTimezoneOffset() < c.getTimezoneOffset() ? (m[ba() >> 2] = e, m[ba() + 4 >> 2] = g) : (m[ba() >> 2] = g, m[ba() + 4 >> 2] = e);
    }
  }
  function gb(a, b) {
    ua();
    a = new Date(1000 * m[a >> 2]);
    m[b >> 2] = a.getSeconds();
    m[b + 4 >> 2] = a.getMinutes();
    m[b + 8 >> 2] = a.getHours();
    m[b + 12 >> 2] = a.getDate();
    m[b + 16 >> 2] = a.getMonth();
    m[b + 20 >> 2] = a.getFullYear() - 1900;
    m[b + 24 >> 2] = a.getDay();
    var c = new Date(a.getFullYear(), 0, 1);
    m[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0;
    m[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
    var e = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
    c = c.getTimezoneOffset();
    a = (e != c && a.getTimezoneOffset() == Math.min(c, e)) | 0;
    m[b + 32 >> 2] = a;
    a = m[ba() + (a ? 4 : 0) >> 2];
    m[b + 40 >> 2] = a;
    return b;
  }
  function va(a) {
    return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
  }
  function Ma(a, b) {
    for (var c = 0, e = 0; e <= b; c += a[e++]) {
    }
    return c;
  }
  function wa(a, b) {
    for (a = new Date(a.getTime()); 0 < b;) {
      var c = va(a.getFullYear()), e = a.getMonth();
      c = (c ? xa : ya)[e];
      if (b > c - a.getDate()) {
        b -= c - a.getDate() + 1, a.setDate(1), 11 > e ? a.setMonth(e + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
      } else {
        a.setDate(a.getDate() + b);
        break;
      }
    }
    return a;
  }
  function za(a, b, c) {
    c = 0 < c ? c : ea(a) + 1;
    c = Array(c);
    a = T(a, c, 0, c.length);
    b && (c.length = a);
    return c;
  }
  function Na(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a;
  }
  function Oa(a) {
    function b() {
      if (!Aa && (Aa = !0, f.calledRun = !0, !Ka)) {
        f.noFSInit || d.R.za || d.R();
        Q.R();
        fa(hb);
        d.ab = !1;
        fa(yb);
        if (f.onRuntimeInitialized) {
          f.onRuntimeInitialized();
        }
        if (ib) {
          var c = a, e = f._main;
          c = c || [];
          var g = c.length + 1, h = Ga(4 * (g + 1));
          m[h >> 2] = Xa(ta);
          for (var l = 1; l < g; l++) {
            m[(h >> 2) + l] = Xa(c[l - 1]);
          }
          m[(h >> 2) + g] = 0;
          try {
            var p = e(g, h);
            jb(p, !0);
          } catch (t) {
            t instanceof Na || ("unwind" == t ? Ba = !0 : ((c = t) && "object" === typeof t && t.stack && (c = [t, t.stack]), E("exception thrown: " + c), da(1, t)));
          } finally {
          }
        }
        if (f.postRun) {
          for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length;) {
            kb.unshift(f.postRun.shift());
          }
        }
        fa(kb);
      }
    }
    a = a || ka;
    if (!(0 < U)) {
      if (f.preRun) {
        for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length;) {
          lb.unshift(f.preRun.shift());
        }
      }
      fa(lb);
      0 < U || (f.setStatus ? (f.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          f.setStatus("");
        }, 1);
        b();
      }, 1)) : b());
    }
  }
  function jb(a, b) {
    if (!b || !Ba || 0 !== a) {
      if (!Ba && (Ka = !0, fa(zb), d.quit(), f.onExit)) {
        f.onExit(a);
      }
      da(a, new Na(a));
    }
  }
  J = J || {};
  var Ab = A, mb, f = {};
  Object.keys(J).forEach(function(a) {
    0 > ["mounts", "MEMFS", "onExit", "chdir"].indexOf(a) && (f[a] = J[a]);
  });
  A = function(a) {
    if (arguments.length) {
      Ab(a);
    } else {
      throw new Na(0);
    }
  };
  f.stdin = f.stdin || function() {
  };
  f.stdout = f.stdout || Ua(function(a) {
    aa(a);
  });
  f.stderr = f.stderr || Ua(function(a) {
    E(a);
  });
  "object" === typeof process && (f.print = f.print || process.stdout.write.bind(process.stdout), f.printErr = f.printErr || process.stderr.write.bind(process.stderr));
  f.quit = function(a) {
    f.stdout(0, !0);
    f.stderr(0, !0);
    if (J.onExit) {
      J.onExit(a);
    }
  };
  f.preRun = function() {
    (J.mounts || []).forEach(function(a) {
      var b = d.Ta[a.type];
      if (!b) {
        throw Error("Bad mount type");
      }
      var c = a.mountpoint;
      if (!c.match(/^\/[^\/]+$/) || "/." === c || "/.." === c || "/tmp" === c || "/home" === c || "/dev" === c || "/work" === c) {
        throw Error("Bad mount point");
      }
      d.mkdir(c);
      d.l(b, a.opts, c);
    });
    d.mkdir("/work");
    d.chdir(J.chdir || "/work");
    (J.MEMFS || []).forEach(function(a) {
      if (a.name.match(/\//)) {
        throw Error("Bad file name");
      }
      var b = d.open(a.name, "w+");
      a = Ta(a.data);
      d.write(b, a, 0, a.length);
      d.close(b);
    });
  };
  f.postRun = function() {
    var a = Object.create(null);
    (J.MEMFS || []).forEach(function(g) {
      a[g.name] = null;
    });
    var b = {}, c = [], e = function(g) {
      var h = d.h(g).node.c;
      g = Object.keys(h);
      h.__proto__ && "__proto__" === h.__proto__.name && g.push("__proto__");
      return g.map(function(l) {
        return h[l];
      });
    }("/work").filter(function(g) {
      return !(g.name in a);
    }).map(function(g) {
      var h = Ta(g.c);
      b[g.name] = h;
      c.push(h.buffer);
      return b;
    });
    self.postMessage({type:"done", data:b}, c);
    mb = {MEMFS:e};
  };
  var la = {}, R;
  for (R in f) {
    f.hasOwnProperty(R) && (la[R] = f[R]);
  }
  var ka = [], ta = "./this.program", ra = !1, P = !1, S = !1, nb = !1;
  ra = "object" === typeof window;
  P = "function" === typeof importScripts;
  S = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
  nb = !ra && !S && !P;
  var K = "", Ca, Pa;
  if (S) {
    K = P ? require("path").dirname(K) + "/" : __dirname + "/";
    var ma = function(a, b) {
      Ca || (Ca = require("fs"));
      Pa || (Pa = require("path"));
      a = Pa.normalize(a);
      return Ca.readFileSync(a, b ? null : "utf8");
    };
    var qa = function(a) {
      a = ma(a, !0);
      a.buffer || (a = new Uint8Array(a));
      a.buffer || A("Assertion failed: undefined");
      return a;
    };
    1 < process.argv.length && (ta = process.argv[1].replace(/\\/g, "/"));
    ka = process.argv.slice(2);
    "undefined" !== typeof module && (module.exports = f);
    da = function(a) {
      process.exit(a);
    };
    f.inspect = function() {
      return "[Emscripten Module object]";
    };
  } else {
    if (nb) {
      "undefined" != typeof read && (ma = function(a) {
        return read(a);
      }), qa = function(a) {
        if ("function" === typeof readbuffer) {
          return new Uint8Array(readbuffer(a));
        }
        a = read(a, "binary");
        "object" === typeof a || A("Assertion failed: undefined");
        return a;
      }, "undefined" != typeof scriptArgs ? ka = scriptArgs : "undefined" != typeof arguments && (ka = arguments), "function" === typeof quit && (da = function(a) {
        quit(a);
      }), "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
    } else {
      if (ra || P) {
        P ? K = self.location.href : document.currentScript && (K = document.currentScript.src), K = 0 !== K.indexOf("blob:") ? K.substr(0, K.lastIndexOf("/") + 1) : "", ma = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.send(null);
          return b.responseText;
        }, P && (qa = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.responseType = "arraybuffer";
          b.send(null);
          return new Uint8Array(b.response);
        });
      }
    }
  }
  var aa = f.print || console.log.bind(console), E = f.printErr || console.warn.bind(console);
  for (R in la) {
    la.hasOwnProperty(R) && (f[R] = la[R]);
  }
  la = null;
  f.arguments && (ka = f.arguments);
  f.thisProgram && (ta = f.thisProgram);
  f.quit && (da = f.quit);
  var ia;
  f.wasmBinary && (ia = f.wasmBinary);
  var Ba;
  f.noExitRuntime && (Ba = f.noExitRuntime);
  "object" !== typeof WebAssembly && E("no native wasm support detected");
  var W, Bb = new WebAssembly.Table({initial:2920, maximum:2920, element:"anyfunc"}), Ka = !1, Va = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
  var F, O, Ha, m, ob = f.INITIAL_MEMORY || 67108864;
  f.wasmMemory ? W = f.wasmMemory : W = new WebAssembly.Memory({initial:ob / 65536, maximum:32768});
  if (W) {
    var pa = W.buffer;
  }
  ob = pa.byteLength;
  Ya(pa);
  m[583544] = 7577216;
  var lb = [], hb = [], yb = [], zb = [], kb = [], na = Math.abs, X = Math.ceil, Y = Math.floor, oa = Math.min, U = 0, Ja = null, ha = null;
  f.preloadedImages = {};
  f.preloadedAudios = {};
  var L = "ffmpeg-mp4.wasm";
  $a(L) || (L = tb(L));
  var y, G;
  hb.push({Fb:function() {
    pb();
  }});
  var w = {eb:function(a) {
    return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  }, Fa:function(a, b) {
    for (var c = 0, e = a.length - 1; 0 <= e; e--) {
      var g = a[e];
      "." === g ? a.splice(e, 1) : ".." === g ? (a.splice(e, 1), c++) : c && (a.splice(e, 1), c--);
    }
    if (b) {
      for (; c; c--) {
        a.unshift("..");
      }
    }
    return a;
  }, normalize:function(a) {
    var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
    (a = w.Fa(a.split("/").filter(function(e) {
      return !!e;
    }), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a;
  }, dirname:function(a) {
    var b = w.eb(a);
    a = b[0];
    b = b[1];
    if (!a && !b) {
      return ".";
    }
    b && (b = b.substr(0, b.length - 1));
    return a + b;
  }, basename:function(a) {
    if ("/" === a) {
      return "/";
    }
    var b = a.lastIndexOf("/");
    return -1 === b ? a : a.substr(b + 1);
  }, extname:function(a) {
    return w.eb(a)[3];
  }, join:function() {
    var a = Array.prototype.slice.call(arguments, 0);
    return w.normalize(a.join("/"));
  }, K:function(a, b) {
    return w.normalize(a + "/" + b);
  }}, M = {resolve:function() {
    for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
      b = 0 <= c ? arguments[c] : d.cwd();
      if ("string" !== typeof b) {
        throw new TypeError("Arguments to path.resolve must be strings");
      }
      if (!b) {
        return "";
      }
      a = b + "/" + a;
      b = "/" === b.charAt(0);
    }
    a = w.Fa(a.split("/").filter(function(e) {
      return !!e;
    }), !b).join("/");
    return (b ? "/" : "") + a || ".";
  }, relative:function(a, b) {
    function c(l) {
      for (var p = 0; p < l.length && "" === l[p]; p++) {
      }
      for (var t = l.length - 1; 0 <= t && "" === l[t]; t--) {
      }
      return p > t ? [] : l.slice(p, t - p + 1);
    }
    a = M.resolve(a).substr(1);
    b = M.resolve(b).substr(1);
    a = c(a.split("/"));
    b = c(b.split("/"));
    for (var e = Math.min(a.length, b.length), g = e, h = 0; h < e; h++) {
      if (a[h] !== b[h]) {
        g = h;
        break;
      }
    }
    e = [];
    for (h = g; h < a.length; h++) {
      e.push("..");
    }
    e = e.concat(b.slice(g));
    return e.join("/");
  }}, Q = {hb:[], R:function() {
  }, Ec:function() {
  }, register:function(a, b) {
    Q.hb[a] = {input:[], output:[], X:b};
    d.Ja(a, Q.g);
  }, g:{open:function(a) {
    var b = Q.hb[a.node.rdev];
    if (!b) {
      throw new d.b(43);
    }
    a.tty = b;
    a.seekable = !1;
  }, close:function(a) {
    a.tty.X.flush(a.tty);
  }, flush:function(a) {
    a.tty.X.flush(a.tty);
  }, read:function(a, b, c, e) {
    if (!a.tty || !a.tty.X.Xa) {
      throw new d.b(60);
    }
    for (var g = 0, h = 0; h < e; h++) {
      try {
        var l = a.tty.X.Xa(a.tty);
      } catch (p) {
        throw new d.b(29);
      }
      if (void 0 === l && 0 === g) {
        throw new d.b(6);
      }
      if (null === l || void 0 === l) {
        break;
      }
      g++;
      b[c + h] = l;
    }
    g && (a.node.timestamp = Date.now());
    return g;
  }, write:function(a, b, c, e) {
    if (!a.tty || !a.tty.X.Ga) {
      throw new d.b(60);
    }
    try {
      for (var g = 0; g < e; g++) {
        a.tty.X.Ga(a.tty, b[c + g]);
      }
    } catch (h) {
      throw new d.b(29);
    }
    e && (a.node.timestamp = Date.now());
    return g;
  }}, Bb:{Xa:function(a) {
    if (!a.input.length) {
      var b = null;
      if (S) {
        var c = Buffer.u ? Buffer.u(256) : new Buffer(256), e = 0;
        try {
          e = Ca.readSync(process.stdin.fd, c, 0, 256, null);
        } catch (g) {
          if (-1 != g.toString().indexOf("EOF")) {
            e = 0;
          } else {
            throw g;
          }
        }
        0 < e ? b = c.slice(0, e).toString("utf-8") : b = null;
      } else {
        "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
      }
      if (!b) {
        return null;
      }
      a.input = za(b, !0);
    }
    return a.input.shift();
  }, Ga:function(a, b) {
    null === b || 10 === b ? (aa(N(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
  }, flush:function(a) {
    a.output && 0 < a.output.length && (aa(N(a.output, 0)), a.output = []);
  }}, Ab:{Ga:function(a, b) {
    null === b || 10 === b ? (E(N(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
  }, flush:function(a) {
    a.output && 0 < a.output.length && (E(N(a.output, 0)), a.output = []);
  }}}, u = {J:null, l:function() {
    return u.createNode(null, "/", 16895, 0);
  }, createNode:function(a, b, c, e) {
    if (d.Hb(c) || d.isFIFO(c)) {
      throw new d.b(63);
    }
    u.J || (u.J = {dir:{node:{F:u.f.F, s:u.f.s, lookup:u.f.lookup, H:u.f.H, rename:u.f.rename, unlink:u.f.unlink, rmdir:u.f.rmdir, readdir:u.f.readdir, symlink:u.f.symlink}, stream:{A:u.g.A}}, file:{node:{F:u.f.F, s:u.f.s}, stream:{A:u.g.A, read:u.g.read, write:u.g.write, aa:u.g.aa, ea:u.g.ea, W:u.g.W}}, link:{node:{F:u.f.F, s:u.f.s, readlink:u.f.readlink}, stream:{}}, Na:{node:{F:u.f.F, s:u.f.s}, stream:d.sb}});
    c = d.createNode(a, b, c, e);
    d.m(c.mode) ? (c.f = u.J.dir.node, c.g = u.J.dir.stream, c.c = {}) : d.isFile(c.mode) ? (c.f = u.J.file.node, c.g = u.J.file.stream, c.i = 0, c.c = null) : d.S(c.mode) ? (c.f = u.J.link.node, c.g = u.J.link.stream) : d.ba(c.mode) && (c.f = u.J.Na.node, c.g = u.J.Na.stream);
    c.timestamp = Date.now();
    a && (a.c[b] = c);
    return c;
  }, sc:function(a) {
    if (a.c && a.c.subarray) {
      for (var b = [], c = 0; c < a.i; ++c) {
        b.push(a.c[c]);
      }
      return b;
    }
    return a.c;
  }, tc:function(a) {
    return a.c ? a.c.subarray ? a.c.subarray(0, a.i) : new Uint8Array(a.c) : new Uint8Array(0);
  }, Sa:function(a, b) {
    var c = a.c ? a.c.length : 0;
    c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.c, a.c = new Uint8Array(b), 0 < a.i && a.c.set(c.subarray(0, a.i), 0));
  }, Sb:function(a, b) {
    if (a.i != b) {
      if (0 == b) {
        a.c = null, a.i = 0;
      } else {
        if (!a.c || a.c.subarray) {
          var c = a.c;
          a.c = new Uint8Array(b);
          c && a.c.set(c.subarray(0, Math.min(b, a.i)));
        } else {
          if (a.c || (a.c = []), a.c.length > b) {
            a.c.length = b;
          } else {
            for (; a.c.length < b;) {
              a.c.push(0);
            }
          }
        }
        a.i = b;
      }
    }
  }, f:{F:function(a) {
    var b = {};
    b.dev = d.ba(a.mode) ? a.id : 1;
    b.ino = a.id;
    b.mode = a.mode;
    b.nlink = 1;
    b.uid = 0;
    b.gid = 0;
    b.rdev = a.rdev;
    d.m(a.mode) ? b.size = 4096 : d.isFile(a.mode) ? b.size = a.i : d.S(a.mode) ? b.size = a.link.length : b.size = 0;
    b.atime = new Date(a.timestamp);
    b.mtime = new Date(a.timestamp);
    b.ctime = new Date(a.timestamp);
    b.pb = 4096;
    b.blocks = Math.ceil(b.size / b.pb);
    return b;
  }, s:function(a, b) {
    void 0 !== b.mode && (a.mode = b.mode);
    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
    void 0 !== b.size && u.Sb(a, b.size);
  }, lookup:function() {
    throw d.wa[44];
  }, H:function(a, b, c, e) {
    return u.createNode(a, b, c, e);
  }, rename:function(a, b, c) {
    if (d.m(a.mode)) {
      try {
        var e = d.G(b, c);
      } catch (h) {
      }
      if (e) {
        for (var g in e.c) {
          throw new d.b(55);
        }
      }
    }
    delete a.parent.c[a.name];
    a.name = c;
    b.c[c] = a;
    a.parent = b;
  }, unlink:function(a, b) {
    delete a.c[b];
  }, rmdir:function(a, b) {
    var c = d.G(a, b), e;
    for (e in c.c) {
      throw new d.b(55);
    }
    delete a.c[b];
  }, readdir:function(a) {
    var b = [".", ".."], c;
    for (c in a.c) {
      a.c.hasOwnProperty(c) && b.push(c);
    }
    return b;
  }, symlink:function(a, b, c) {
    a = u.createNode(a, b, 41471, 0);
    a.link = c;
    return a;
  }, readlink:function(a) {
    if (!d.S(a.mode)) {
      throw new d.b(28);
    }
    return a.link;
  }}, g:{read:function(a, b, c, e, g) {
    var h = a.node.c;
    if (g >= a.node.i) {
      return 0;
    }
    a = Math.min(a.node.i - g, e);
    if (8 < a && h.subarray) {
      b.set(h.subarray(g, g + a), c);
    } else {
      for (e = 0; e < a; e++) {
        b[c + e] = h[g + e];
      }
    }
    return a;
  }, write:function(a, b, c, e, g, h) {
    b.buffer === F.buffer && (h = !1);
    if (!e) {
      return 0;
    }
    a = a.node;
    a.timestamp = Date.now();
    if (b.subarray && (!a.c || a.c.subarray)) {
      if (h) {
        return a.c = b.subarray(c, c + e), a.i = e;
      }
      if (0 === a.i && 0 === g) {
        return a.c = b.slice(c, c + e), a.i = e;
      }
      if (g + e <= a.i) {
        return a.c.set(b.subarray(c, c + e), g), e;
      }
    }
    u.Sa(a, g + e);
    if (a.c.subarray && b.subarray) {
      a.c.set(b.subarray(c, c + e), g);
    } else {
      for (h = 0; h < e; h++) {
        a.c[g + h] = b[c + h];
      }
    }
    a.i = Math.max(a.i, g + e);
    return e;
  }, A:function(a, b, c) {
    1 === c ? b += a.position : 2 === c && d.isFile(a.node.mode) && (b += a.node.i);
    if (0 > b) {
      throw new d.b(28);
    }
    return b;
  }, aa:function(a, b, c) {
    u.Sa(a.node, b + c);
    a.node.i = Math.max(a.node.i, b + c);
  }, ea:function(a, b, c, e, g, h, l) {
    if (!d.isFile(a.node.mode)) {
      throw new d.b(43);
    }
    a = a.node.c;
    if (l & 2 || a.buffer !== b.buffer) {
      if (0 < g || g + e < a.length) {
        a.subarray ? a = a.subarray(g, g + e) : a = Array.prototype.slice.call(a, g, g + e);
      }
      g = !0;
      l = b.buffer == F.buffer;
      e = Fa(e);
      if (!e) {
        throw new d.b(48);
      }
      (l ? F : b).set(a, e);
    } else {
      g = !1, e = a.byteOffset;
    }
    return {Cc:e, ac:g};
  }, W:function(a, b, c, e, g) {
    if (!d.isFile(a.node.mode)) {
      throw new d.b(43);
    }
    if (g & 2) {
      return 0;
    }
    u.g.write(a, b, 0, e, c, !1);
    return 0;
  }}}, d = {root:null, ga:[], Qa:{}, streams:[], Mb:1, I:null, Pa:"/", za:!1, ab:!0, o:{}, gb:{cb:{lb:1, mb:2}}, b:null, wa:{}, Ta:null, ma:0, uc:function(a) {
    if (!(a instanceof d.b)) {
      a: {
        var b = Error();
        if (!b.stack) {
          try {
            throw Error();
          } catch (c) {
            b = c;
          }
          if (!b.stack) {
            b = "(no stack trace available)";
            break a;
          }
        }
        b = b.stack.toString();
      }
      f.extraStackTrace && (b += "\n" + f.extraStackTrace());
      b = wb(b);
      throw a + " : " + b;
    }
    return V(a.j);
  }, h:function(a, b) {
    a = M.resolve(d.cwd(), a);
    b = b || {};
    if (!a) {
      return {path:"", node:null};
    }
    var c = {va:!0, Ia:0}, e;
    for (e in c) {
      void 0 === b[e] && (b[e] = c[e]);
    }
    if (8 < b.Ia) {
      throw new d.b(32);
    }
    a = w.Fa(a.split("/").filter(function(l) {
      return !!l;
    }), !1);
    var g = d.root;
    c = "/";
    for (e = 0; e < a.length; e++) {
      var h = e === a.length - 1;
      if (h && b.parent) {
        break;
      }
      g = d.G(g, a[e]);
      c = w.K(c, a[e]);
      d.T(g) && (!h || h && b.va) && (g = g.fa.root);
      if (!h || b.B) {
        for (h = 0; d.S(g.mode);) {
          if (g = d.readlink(c), c = M.resolve(w.dirname(c), g), g = d.h(c, {Ia:b.Ia}).node, 40 < h++) {
            throw new d.b(32);
          }
        }
      }
    }
    return {path:c, node:g};
  }, C:function(a) {
    for (var b;;) {
      if (d.ja(a)) {
        return a = a.l.bb, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
      }
      b = b ? a.name + "/" + b : a.name;
      a = a.parent;
    }
  }, ya:function(a, b) {
    for (var c = 0, e = 0; e < b.length; e++) {
      c = (c << 5) - c + b.charCodeAt(e) | 0;
    }
    return (a + c >>> 0) % d.I.length;
  }, Za:function(a) {
    var b = d.ya(a.parent.id, a.name);
    a.V = d.I[b];
    d.I[b] = a;
  }, $a:function(a) {
    var b = d.ya(a.parent.id, a.name);
    if (d.I[b] === a) {
      d.I[b] = a.V;
    } else {
      for (b = d.I[b]; b;) {
        if (b.V === a) {
          b.V = a.V;
          break;
        }
        b = b.V;
      }
    }
  }, G:function(a, b) {
    var c = d.Jb(a);
    if (c) {
      throw new d.b(c, a);
    }
    for (c = d.I[d.ya(a.id, b)]; c; c = c.V) {
      var e = c.name;
      if (c.parent.id === a.id && e === b) {
        return c;
      }
    }
    return d.lookup(a, b);
  }, createNode:function(a, b, c, e) {
    a = new d.jb(a, b, c, e);
    d.Za(a);
    return a;
  }, ta:function(a) {
    d.$a(a);
  }, ja:function(a) {
    return a === a.parent;
  }, T:function(a) {
    return !!a.fa;
  }, isFile:function(a) {
    return 32768 === (a & 61440);
  }, m:function(a) {
    return 16384 === (a & 61440);
  }, S:function(a) {
    return 40960 === (a & 61440);
  }, ba:function(a) {
    return 8192 === (a & 61440);
  }, Hb:function(a) {
    return 24576 === (a & 61440);
  }, isFIFO:function(a) {
    return 4096 === (a & 61440);
  }, isSocket:function(a) {
    return 49152 === (a & 49152);
  }, Eb:{r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218}, Lb:function(a) {
    var b = d.Eb[a];
    if ("undefined" === typeof b) {
      throw Error("Unknown file open mode: " + a);
    }
    return b;
  }, Ua:function(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b;
  }, N:function(a, b) {
    if (d.ab) {
      return 0;
    }
    if (-1 === b.indexOf("r") || a.mode & 292) {
      if (-1 !== b.indexOf("w") && !(a.mode & 146) || -1 !== b.indexOf("x") && !(a.mode & 73)) {
        return 2;
      }
    } else {
      return 2;
    }
    return 0;
  }, Jb:function(a) {
    var b = d.N(a, "x");
    return b ? b : a.f.lookup ? 0 : 2;
  }, Ea:function(a, b) {
    try {
      return d.G(a, b), 20;
    } catch (c) {
    }
    return d.N(a, "wx");
  }, ka:function(a, b, c) {
    try {
      var e = d.G(a, b);
    } catch (g) {
      return g.j;
    }
    if (a = d.N(a, "wx")) {
      return a;
    }
    if (c) {
      if (!d.m(e.mode)) {
        return 54;
      }
      if (d.ja(e) || d.C(e) === d.cwd()) {
        return 10;
      }
    } else {
      if (d.m(e.mode)) {
        return 31;
      }
    }
    return 0;
  }, Kb:function(a, b) {
    return a ? d.S(a.mode) ? 32 : d.m(a.mode) && ("r" !== d.Ua(b) || b & 512) ? 31 : d.N(a, d.Ua(b)) : 44;
  }, kb:4096, Nb:function(a, b) {
    b = b || d.kb;
    for (a = a || 0; a <= b; a++) {
      if (!d.streams[a]) {
        return a;
      }
    }
    throw new d.b(33);
  }, M:function(a) {
    return d.streams[a];
  }, zb:function(a, b, c) {
    d.qa || (d.qa = function() {
    }, d.qa.prototype = {object:{get:function() {
      return this.node;
    }, set:function(h) {
      this.node = h;
    }}});
    var e = new d.qa, g;
    for (g in a) {
      e[g] = a[g];
    }
    a = e;
    b = d.Nb(b, c);
    a.fd = b;
    return d.streams[b] = a;
  }, tb:function(a) {
    d.streams[a] = null;
  }, sb:{open:function(a) {
    a.g = d.Gb(a.node.rdev).g;
    a.g.open && a.g.open(a);
  }, A:function() {
    throw new d.b(70);
  }}, Da:function(a) {
    return a >> 8;
  }, yc:function(a) {
    return a & 255;
  }, U:function(a, b) {
    return a << 8 | b;
  }, Ja:function(a, b) {
    d.Qa[a] = {g:b};
  }, Gb:function(a) {
    return d.Qa[a];
  }, Wa:function(a) {
    var b = [];
    for (a = [a]; a.length;) {
      var c = a.pop();
      b.push(c);
      a.push.apply(a, c.ga);
    }
    return b;
  }, fb:function(a, b) {
    function c(l) {
      d.ma--;
      return b(l);
    }
    function e(l) {
      if (l) {
        if (!e.u) {
          return e.u = !0, c(l);
        }
      } else {
        ++h >= g.length && c(null);
      }
    }
    "function" === typeof a && (b = a, a = !1);
    d.ma++;
    1 < d.ma && E("warning: " + d.ma + " FS.syncfs operations in flight at once, probably just doing extra work");
    var g = d.Wa(d.root.l), h = 0;
    g.forEach(function(l) {
      if (!l.type.fb) {
        return e(null);
      }
      l.type.fb(l, a, e);
    });
  }, l:function(a, b, c) {
    var e = "/" === c, g = !c;
    if (e && d.root) {
      throw new d.b(10);
    }
    if (!e && !g) {
      var h = d.h(c, {va:!1});
      c = h.path;
      h = h.node;
      if (d.T(h)) {
        throw new d.b(10);
      }
      if (!d.m(h.mode)) {
        throw new d.b(54);
      }
    }
    b = {type:a, Bc:b, bb:c, ga:[]};
    a = a.l(b);
    a.l = b;
    b.root = a;
    e ? d.root = a : h && (h.fa = b, h.l && h.l.ga.push(b));
    return a;
  }, Hc:function(a) {
    a = d.h(a, {va:!1});
    if (!d.T(a.node)) {
      throw new d.b(28);
    }
    a = a.node;
    var b = a.fa, c = d.Wa(b);
    Object.keys(d.I).forEach(function(e) {
      for (e = d.I[e]; e;) {
        var g = e.V;
        -1 !== c.indexOf(e.l) && d.ta(e);
        e = g;
      }
    });
    a.fa = null;
    a.l.ga.splice(a.l.ga.indexOf(b), 1);
  }, lookup:function(a, b) {
    return a.f.lookup(a, b);
  }, H:function(a, b, c) {
    var e = d.h(a, {parent:!0}).node;
    a = w.basename(a);
    if (!a || "." === a || ".." === a) {
      throw new d.b(28);
    }
    var g = d.Ea(e, a);
    if (g) {
      throw new d.b(g);
    }
    if (!e.f.H) {
      throw new d.b(63);
    }
    return e.f.H(e, a, b, c);
  }, create:function(a, b) {
    return d.H(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
  }, mkdir:function(a, b) {
    return d.H(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
  }, zc:function(a, b) {
    a = a.split("/");
    for (var c = "", e = 0; e < a.length; ++e) {
      if (a[e]) {
        c += "/" + a[e];
        try {
          d.mkdir(c, b);
        } catch (g) {
          if (20 != g.j) {
            throw g;
          }
        }
      }
    }
  }, la:function(a, b, c) {
    "undefined" === typeof c && (c = b, b = 438);
    return d.H(a, b | 8192, c);
  }, symlink:function(a, b) {
    if (!M.resolve(a)) {
      throw new d.b(44);
    }
    var c = d.h(b, {parent:!0}).node;
    if (!c) {
      throw new d.b(44);
    }
    b = w.basename(b);
    var e = d.Ea(c, b);
    if (e) {
      throw new d.b(e);
    }
    if (!c.f.symlink) {
      throw new d.b(63);
    }
    return c.f.symlink(c, b, a);
  }, rename:function(a, b) {
    var c = w.dirname(a), e = w.dirname(b), g = w.basename(a), h = w.basename(b);
    try {
      var l = d.h(a, {parent:!0});
      var p = l.node;
      l = d.h(b, {parent:!0});
      var t = l.node;
    } catch (q) {
      throw new d.b(10);
    }
    if (!p || !t) {
      throw new d.b(44);
    }
    if (p.l !== t.l) {
      throw new d.b(75);
    }
    l = d.G(p, g);
    e = M.relative(a, e);
    if ("." !== e.charAt(0)) {
      throw new d.b(28);
    }
    e = M.relative(b, c);
    if ("." !== e.charAt(0)) {
      throw new d.b(55);
    }
    try {
      var n = d.G(t, h);
    } catch (q) {
    }
    if (l !== n) {
      c = d.m(l.mode);
      if (g = d.ka(p, g, c)) {
        throw new d.b(g);
      }
      if (g = n ? d.ka(t, h, c) : d.Ea(t, h)) {
        throw new d.b(g);
      }
      if (!p.f.rename) {
        throw new d.b(63);
      }
      if (d.T(l) || n && d.T(n)) {
        throw new d.b(10);
      }
      if (t !== p && (g = d.N(p, "w"))) {
        throw new d.b(g);
      }
      try {
        d.o.willMovePath && d.o.willMovePath(a, b);
      } catch (q) {
        E("FS.trackingDelegate['willMovePath']('" + a + "', '" + b + "') threw an exception: " + q.message);
      }
      d.$a(l);
      try {
        p.f.rename(l, t, h);
      } catch (q) {
        throw q;
      } finally {
        d.Za(l);
      }
      try {
        if (d.o.onMovePath) {
          d.o.onMovePath(a, b);
        }
      } catch (q) {
        E("FS.trackingDelegate['onMovePath']('" + a + "', '" + b + "') threw an exception: " + q.message);
      }
    }
  }, rmdir:function(a) {
    var b = d.h(a, {parent:!0}).node, c = w.basename(a), e = d.G(b, c), g = d.ka(b, c, !0);
    if (g) {
      throw new d.b(g);
    }
    if (!b.f.rmdir) {
      throw new d.b(63);
    }
    if (d.T(e)) {
      throw new d.b(10);
    }
    try {
      d.o.willDeletePath && d.o.willDeletePath(a);
    } catch (h) {
      E("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message);
    }
    b.f.rmdir(b, c);
    d.ta(e);
    try {
      if (d.o.onDeletePath) {
        d.o.onDeletePath(a);
      }
    } catch (h) {
      E("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + h.message);
    }
  }, readdir:function(a) {
    a = d.h(a, {B:!0}).node;
    if (!a.f.readdir) {
      throw new d.b(54);
    }
    return a.f.readdir(a);
  }, unlink:function(a) {
    var b = d.h(a, {parent:!0}).node, c = w.basename(a), e = d.G(b, c), g = d.ka(b, c, !1);
    if (g) {
      throw new d.b(g);
    }
    if (!b.f.unlink) {
      throw new d.b(63);
    }
    if (d.T(e)) {
      throw new d.b(10);
    }
    try {
      d.o.willDeletePath && d.o.willDeletePath(a);
    } catch (h) {
      E("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message);
    }
    b.f.unlink(b, c);
    d.ta(e);
    try {
      if (d.o.onDeletePath) {
        d.o.onDeletePath(a);
      }
    } catch (h) {
      E("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + h.message);
    }
  }, readlink:function(a) {
    a = d.h(a).node;
    if (!a) {
      throw new d.b(44);
    }
    if (!a.f.readlink) {
      throw new d.b(28);
    }
    return M.resolve(d.C(a.parent), a.f.readlink(a));
  }, stat:function(a, b) {
    a = d.h(a, {B:!b}).node;
    if (!a) {
      throw new d.b(44);
    }
    if (!a.f.F) {
      throw new d.b(63);
    }
    return a.f.F(a);
  }, lstat:function(a) {
    return d.stat(a, !0);
  }, chmod:function(a, b, c) {
    var e;
    "string" === typeof a ? e = d.h(a, {B:!c}).node : e = a;
    if (!e.f.s) {
      throw new d.b(63);
    }
    e.f.s(e, {mode:b & 4095 | e.mode & -4096, timestamp:Date.now()});
  }, lchmod:function(a, b) {
    d.chmod(a, b, !0);
  }, fchmod:function(a, b) {
    a = d.M(a);
    if (!a) {
      throw new d.b(8);
    }
    d.chmod(a.node, b);
  }, chown:function(a, b, c, e) {
    var g;
    "string" === typeof a ? g = d.h(a, {B:!e}).node : g = a;
    if (!g.f.s) {
      throw new d.b(63);
    }
    g.f.s(g, {timestamp:Date.now()});
  }, lchown:function(a, b, c) {
    d.chown(a, b, c, !0);
  }, fchown:function(a, b, c) {
    a = d.M(a);
    if (!a) {
      throw new d.b(8);
    }
    d.chown(a.node, b, c);
  }, truncate:function(a, b) {
    if (0 > b) {
      throw new d.b(28);
    }
    var c;
    "string" === typeof a ? c = d.h(a, {B:!0}).node : c = a;
    if (!c.f.s) {
      throw new d.b(63);
    }
    if (d.m(c.mode)) {
      throw new d.b(31);
    }
    if (!d.isFile(c.mode)) {
      throw new d.b(28);
    }
    if (a = d.N(c, "w")) {
      throw new d.b(a);
    }
    c.f.s(c, {size:b, timestamp:Date.now()});
  }, qc:function(a, b) {
    a = d.M(a);
    if (!a) {
      throw new d.b(8);
    }
    if (0 === (a.flags & 2097155)) {
      throw new d.b(28);
    }
    d.truncate(a.node, b);
  }, Ic:function(a, b, c) {
    a = d.h(a, {B:!0}).node;
    a.f.s(a, {timestamp:Math.max(b, c)});
  }, open:function(a, b, c, e, g) {
    if ("" === a) {
      throw new d.b(44);
    }
    b = "string" === typeof b ? d.Lb(b) : b;
    c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" === typeof a) {
      var h = a;
    } else {
      a = w.normalize(a);
      try {
        h = d.h(a, {B:!(b & 131072)}).node;
      } catch (p) {
      }
    }
    var l = !1;
    if (b & 64) {
      if (h) {
        if (b & 128) {
          throw new d.b(20);
        }
      } else {
        h = d.H(a, c, 0), l = !0;
      }
    }
    if (!h) {
      throw new d.b(44);
    }
    d.ba(h.mode) && (b &= -513);
    if (b & 65536 && !d.m(h.mode)) {
      throw new d.b(54);
    }
    if (!l && (c = d.Kb(h, b))) {
      throw new d.b(c);
    }
    b & 512 && d.truncate(h, 0);
    b &= -131713;
    e = d.zb({node:h, path:d.C(h), flags:b, seekable:!0, position:0, g:h.g, Zb:[], error:!1}, e, g);
    e.g.open && e.g.open(e);
    !f.logReadFiles || b & 1 || (d.Ha || (d.Ha = {}), a in d.Ha || (d.Ha[a] = 1, E("FS.trackingDelegate error on read file: " + a)));
    try {
      d.o.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= d.gb.cb.lb), 0 !== (b & 2097155) && (g |= d.gb.cb.mb), d.o.onOpenFile(a, g));
    } catch (p) {
      E("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + p.message);
    }
    return e;
  }, close:function(a) {
    if (d.da(a)) {
      throw new d.b(8);
    }
    a.P && (a.P = null);
    try {
      a.g.close && a.g.close(a);
    } catch (b) {
      throw b;
    } finally {
      d.tb(a.fd);
    }
    a.fd = null;
  }, da:function(a) {
    return null === a.fd;
  }, A:function(a, b, c) {
    if (d.da(a)) {
      throw new d.b(8);
    }
    if (!a.seekable || !a.g.A) {
      throw new d.b(70);
    }
    if (0 != c && 1 != c && 2 != c) {
      throw new d.b(28);
    }
    a.position = a.g.A(a, b, c);
    a.Zb = [];
    return a.position;
  }, read:function(a, b, c, e, g) {
    if (0 > e || 0 > g) {
      throw new d.b(28);
    }
    if (d.da(a)) {
      throw new d.b(8);
    }
    if (1 === (a.flags & 2097155)) {
      throw new d.b(8);
    }
    if (d.m(a.node.mode)) {
      throw new d.b(31);
    }
    if (!a.g.read) {
      throw new d.b(28);
    }
    var h = "undefined" !== typeof g;
    if (!h) {
      g = a.position;
    } else {
      if (!a.seekable) {
        throw new d.b(70);
      }
    }
    b = a.g.read(a, b, c, e, g);
    h || (a.position += b);
    return b;
  }, write:function(a, b, c, e, g, h) {
    if (0 > e || 0 > g) {
      throw new d.b(28);
    }
    if (d.da(a)) {
      throw new d.b(8);
    }
    if (0 === (a.flags & 2097155)) {
      throw new d.b(8);
    }
    if (d.m(a.node.mode)) {
      throw new d.b(31);
    }
    if (!a.g.write) {
      throw new d.b(28);
    }
    a.seekable && a.flags & 1024 && d.A(a, 0, 2);
    var l = "undefined" !== typeof g;
    if (!l) {
      g = a.position;
    } else {
      if (!a.seekable) {
        throw new d.b(70);
      }
    }
    b = a.g.write(a, b, c, e, g, h);
    l || (a.position += b);
    try {
      if (a.path && d.o.onWriteToFile) {
        d.o.onWriteToFile(a.path);
      }
    } catch (p) {
      E("FS.trackingDelegate['onWriteToFile']('" + a.path + "') threw an exception: " + p.message);
    }
    return b;
  }, aa:function(a, b, c) {
    if (d.da(a)) {
      throw new d.b(8);
    }
    if (0 > b || 0 >= c) {
      throw new d.b(28);
    }
    if (0 === (a.flags & 2097155)) {
      throw new d.b(8);
    }
    if (!d.isFile(a.node.mode) && !d.m(a.node.mode)) {
      throw new d.b(43);
    }
    if (!a.g.aa) {
      throw new d.b(138);
    }
    a.g.aa(a, b, c);
  }, ea:function(a, b, c, e, g, h, l) {
    if (0 !== (h & 2) && 0 === (l & 2) && 2 !== (a.flags & 2097155)) {
      throw new d.b(2);
    }
    if (1 === (a.flags & 2097155)) {
      throw new d.b(2);
    }
    if (!a.g.ea) {
      throw new d.b(43);
    }
    return a.g.ea(a, b, c, e, g, h, l);
  }, W:function(a, b, c, e, g) {
    return a && a.g.W ? a.g.W(a, b, c, e, g) : 0;
  }, Ac:function() {
    return 0;
  }, Aa:function(a, b, c) {
    if (!a.g.Aa) {
      throw new d.b(59);
    }
    return a.g.Aa(a, b, c);
  }, readFile:function(a, b) {
    b = b || {};
    b.flags = b.flags || "r";
    b.encoding = b.encoding || "binary";
    if ("utf8" !== b.encoding && "binary" !== b.encoding) {
      throw Error('Invalid encoding type "' + b.encoding + '"');
    }
    var c, e = d.open(a, b.flags);
    a = d.stat(a).size;
    var g = new Uint8Array(a);
    d.read(e, g, 0, a, 0);
    "utf8" === b.encoding ? c = N(g, 0) : "binary" === b.encoding && (c = g);
    d.close(e);
    return c;
  }, writeFile:function(a, b, c) {
    c = c || {};
    c.flags = c.flags || "w";
    a = d.open(a, c.flags, c.mode);
    if ("string" === typeof b) {
      var e = new Uint8Array(ea(b) + 1);
      b = T(b, e, 0, e.length);
      d.write(a, e, 0, b, void 0, c.rb);
    } else {
      if (ArrayBuffer.isView(b)) {
        d.write(a, b, 0, b.byteLength, void 0, c.rb);
      } else {
        throw Error("Unsupported data type");
      }
    }
    d.close(a);
  }, cwd:function() {
    return d.Pa;
  }, chdir:function(a) {
    a = d.h(a, {B:!0});
    if (null === a.node) {
      throw new d.b(44);
    }
    if (!d.m(a.node.mode)) {
      throw new d.b(54);
    }
    var b = d.N(a.node, "x");
    if (b) {
      throw new d.b(b);
    }
    d.Pa = a.path;
  }, vb:function() {
    d.mkdir("/tmp");
    d.mkdir("/home");
    d.mkdir("/home/web_user");
  }, ub:function() {
    d.mkdir("/dev");
    d.Ja(d.U(1, 3), {read:function() {
      return 0;
    }, write:function(e, g, h, l) {
      return l;
    }});
    d.la("/dev/null", d.U(1, 3));
    Q.register(d.U(5, 0), Q.Bb);
    Q.register(d.U(6, 0), Q.Ab);
    d.la("/dev/tty", d.U(5, 0));
    d.la("/dev/tty1", d.U(6, 0));
    if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
      var a = new Uint8Array(1);
      var b = function() {
        crypto.getRandomValues(a);
        return a[0];
      };
    } else {
      if (S) {
        try {
          var c = require("crypto");
          b = function() {
            return c.randomBytes(1)[0];
          };
        } catch (e) {
        }
      }
    }
    b || (b = function() {
      A("random_device");
    });
    d.L("/dev", "random", b);
    d.L("/dev", "urandom", b);
    d.mkdir("/dev/shm");
    d.mkdir("/dev/shm/tmp");
  }, xb:function() {
    d.mkdir("/proc");
    d.mkdir("/proc/self");
    d.mkdir("/proc/self/fd");
    d.l({l:function() {
      var a = d.createNode("/proc/self", "fd", 16895, 73);
      a.f = {lookup:function(b, c) {
        var e = d.M(+c);
        if (!e) {
          throw new d.b(8);
        }
        b = {parent:null, l:{bb:"fake"}, f:{readlink:function() {
          return e.path;
        }}};
        return b.parent = b;
      }};
      return a;
    }}, {}, "/proc/self/fd");
  }, yb:function() {
    f.stdin ? d.L("/dev", "stdin", f.stdin) : d.symlink("/dev/tty", "/dev/stdin");
    f.stdout ? d.L("/dev", "stdout", null, f.stdout) : d.symlink("/dev/tty", "/dev/stdout");
    f.stderr ? d.L("/dev", "stderr", null, f.stderr) : d.symlink("/dev/tty1", "/dev/stderr");
    d.open("/dev/stdin", "r");
    d.open("/dev/stdout", "w");
    d.open("/dev/stderr", "w");
  }, Ra:function() {
    d.b || (d.b = function(a, b) {
      this.node = b;
      this.Tb = function(c) {
        this.j = c;
      };
      this.Tb(a);
      this.message = "FS error";
    }, d.b.prototype = Error(), d.b.prototype.constructor = d.b, [44].forEach(function(a) {
      d.wa[a] = new d.b(a);
      d.wa[a].stack = "<generic error, no stack>";
    }));
  }, Ub:function() {
    d.Ra();
    d.I = Array(4096);
    d.l(u, {}, "/");
    d.vb();
    d.ub();
    d.xb();
    d.Ta = {MEMFS:u};
  }, R:function(a, b, c) {
    d.R.za = !0;
    d.Ra();
    f.stdin = a || f.stdin;
    f.stdout = b || f.stdout;
    f.stderr = c || f.stderr;
    d.yb();
  }, quit:function() {
    d.R.za = !1;
    var a = f._fflush;
    a && a(0);
    for (a = 0; a < d.streams.length; a++) {
      var b = d.streams[a];
      b && d.close(b);
    }
  }, ia:function(a, b) {
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c;
  }, vc:function(a, b) {
    a = w.join.apply(null, a);
    b && "/" == a[0] && (a = a.substr(1));
    return a;
  }, $b:function(a, b) {
    return M.resolve(b, a);
  }, Fc:function(a) {
    return w.normalize(a);
  }, pc:function(a, b) {
    a = d.ra(a, b);
    if (a.exists) {
      return a.object;
    }
    V(a.error);
    return null;
  }, ra:function(a, b) {
    try {
      var c = d.h(a, {B:!b});
      a = c.path;
    } catch (g) {
    }
    var e = {ja:!1, exists:!1, error:0, name:null, path:null, object:null, Ob:!1, Qb:null, Pb:null};
    try {
      c = d.h(a, {parent:!0}), e.Ob = !0, e.Qb = c.path, e.Pb = c.node, e.name = w.basename(a), c = d.h(a, {B:!b}), e.exists = !0, e.path = c.path, e.object = c.node, e.name = c.node.name, e.ja = "/" === c.path;
    } catch (g) {
      e.error = g.j;
    }
    return e;
  }, dc:function(a, b, c, e) {
    a = w.K("string" === typeof a ? a : d.C(a), b);
    return d.mkdir(a, d.ia(c, e));
  }, hc:function(a, b) {
    a = "string" === typeof a ? a : d.C(a);
    for (b = b.split("/").reverse(); b.length;) {
      var c = b.pop();
      if (c) {
        var e = w.K(a, c);
        try {
          d.mkdir(e);
        } catch (g) {
        }
        a = e;
      }
    }
    return e;
  }, wb:function(a, b, c, e, g) {
    a = w.K("string" === typeof a ? a : d.C(a), b);
    return d.create(a, d.ia(e, g));
  }, Oa:function(a, b, c, e, g, h) {
    a = b ? w.K("string" === typeof a ? a : d.C(a), b) : a;
    e = d.ia(e, g);
    g = d.create(a, e);
    if (c) {
      if ("string" === typeof c) {
        a = Array(c.length);
        b = 0;
        for (var l = c.length; b < l; ++b) {
          a[b] = c.charCodeAt(b);
        }
        c = a;
      }
      d.chmod(g, e | 146);
      a = d.open(g, "w");
      d.write(a, c, 0, c.length, 0, h);
      d.close(a);
      d.chmod(g, e);
    }
    return g;
  }, L:function(a, b, c, e) {
    a = w.K("string" === typeof a ? a : d.C(a), b);
    b = d.ia(!!c, !!e);
    d.L.Da || (d.L.Da = 64);
    var g = d.U(d.L.Da++, 0);
    d.Ja(g, {open:function(h) {
      h.seekable = !1;
    }, close:function() {
      e && e.buffer && e.buffer.length && e(10);
    }, read:function(h, l, p, t) {
      for (var n = 0, q = 0; q < t; q++) {
        try {
          var z = c();
        } catch (C) {
          throw new d.b(29);
        }
        if (void 0 === z && 0 === n) {
          throw new d.b(6);
        }
        if (null === z || void 0 === z) {
          break;
        }
        n++;
        l[p + q] = z;
      }
      n && (h.node.timestamp = Date.now());
      return n;
    }, write:function(h, l, p, t) {
      for (var n = 0; n < t; n++) {
        try {
          e(l[p + n]);
        } catch (q) {
          throw new d.b(29);
        }
      }
      t && (h.node.timestamp = Date.now());
      return n;
    }});
    return d.la(a, b, g);
  }, fc:function(a, b, c) {
    a = w.K("string" === typeof a ? a : d.C(a), b);
    return d.symlink(c, a);
  }, Va:function(a) {
    if (a.Ba || a.Ib || a.link || a.c) {
      return !0;
    }
    var b = !0;
    if ("undefined" !== typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    if (ma) {
      try {
        a.c = za(ma(a.url), !0), a.i = a.c.length;
      } catch (c) {
        b = !1;
      }
    } else {
      throw Error("Cannot load without read() or XMLHttpRequest.");
    }
    b || V(29);
    return b;
  }, ec:function(a, b, c, e, g) {
    function h() {
      this.Ca = !1;
      this.u = [];
    }
    h.prototype.get = function(n) {
      if (!(n > this.length - 1 || 0 > n)) {
        var q = n % this.chunkSize;
        return this.Ya(n / this.chunkSize | 0)[q];
      }
    };
    h.prototype.qb = function(n) {
      this.Ya = n;
    };
    h.prototype.Ma = function() {
      var n = new XMLHttpRequest;
      n.open("HEAD", c, !1);
      n.send(null);
      if (!(200 <= n.status && 300 > n.status || 304 === n.status)) {
        throw Error("Couldn't load " + c + ". Status: " + n.status);
      }
      var q = Number(n.getResponseHeader("Content-length")), z, C = (z = n.getResponseHeader("Accept-Ranges")) && "bytes" === z;
      n = (z = n.getResponseHeader("Content-Encoding")) && "gzip" === z;
      var k = 1048576;
      C || (k = q);
      var r = this;
      r.qb(function(x) {
        var D = x * k, I = (x + 1) * k - 1;
        I = Math.min(I, q - 1);
        if ("undefined" === typeof r.u[x]) {
          var Qa = r.u;
          if (D > I) {
            throw Error("invalid range (" + D + ", " + I + ") or no bytes requested!");
          }
          if (I > q - 1) {
            throw Error("only " + q + " bytes available! programmer error!");
          }
          var B = new XMLHttpRequest;
          B.open("GET", c, !1);
          q !== k && B.setRequestHeader("Range", "bytes=" + D + "-" + I);
          "undefined" != typeof Uint8Array && (B.responseType = "arraybuffer");
          B.overrideMimeType && B.overrideMimeType("text/plain; charset=x-user-defined");
          B.send(null);
          if (!(200 <= B.status && 300 > B.status || 304 === B.status)) {
            throw Error("Couldn't load " + c + ". Status: " + B.status);
          }
          D = void 0 !== B.response ? new Uint8Array(B.response || []) : za(B.responseText || "", !0);
          Qa[x] = D;
        }
        if ("undefined" === typeof r.u[x]) {
          throw Error("doXHR failed!");
        }
        return r.u[x];
      });
      if (n || !q) {
        k = q = 1, k = q = this.Ya(0).length, aa("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.ob = q;
      this.nb = k;
      this.Ca = !0;
    };
    if ("undefined" !== typeof XMLHttpRequest) {
      if (!P) {
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      }
      var l = new h;
      Object.defineProperties(l, {length:{get:function() {
        this.Ca || this.Ma();
        return this.ob;
      }}, chunkSize:{get:function() {
        this.Ca || this.Ma();
        return this.nb;
      }}});
      l = {Ba:!1, c:l};
    } else {
      l = {Ba:!1, url:c};
    }
    var p = d.wb(a, b, l, e, g);
    l.c ? p.c = l.c : l.url && (p.c = null, p.url = l.url);
    Object.defineProperties(p, {i:{get:function() {
      return this.c.length;
    }}});
    var t = {};
    Object.keys(p.g).forEach(function(n) {
      var q = p.g[n];
      t[n] = function() {
        if (!d.Va(p)) {
          throw new d.b(29);
        }
        return q.apply(null, arguments);
      };
    });
    t.read = function(n, q, z, C, k) {
      if (!d.Va(p)) {
        throw new d.b(29);
      }
      n = n.node.c;
      if (k >= n.length) {
        return 0;
      }
      C = Math.min(n.length - k, C);
      if (n.slice) {
        for (var r = 0; r < C; r++) {
          q[z + r] = n[k + r];
        }
      } else {
        for (r = 0; r < C; r++) {
          q[z + r] = n.get(k + r);
        }
      }
      return C;
    };
    p.g = t;
    return p;
  }, ic:function(a, b, c, e, g, h, l, p, t, n) {
    function q(k) {
      function r(D) {
        n && n();
        p || d.Oa(a, b, D, e, g, t);
        h && h();
        Ia(C);
      }
      var x = !1;
      f.preloadPlugins.forEach(function(D) {
        !x && D.canHandle(z) && (D.handle(k, z, r, function() {
          l && l();
          Ia(C);
        }), x = !0);
      });
      x || r(k);
    }
    qb.R();
    var z = b ? M.resolve(w.K(a, b)) : a, C = "cp " + z;
    Za(C);
    "string" == typeof c ? qb.bc(c, function(k) {
      q(k);
    }, l) : q(c);
  }, indexedDB:function() {
    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  }, Ka:function() {
    return "EM_FS_" + window.location.pathname;
  }, La:20, $:"FILE_DATA", Dc:function(a, b, c) {
    b = b || function() {
    };
    c = c || function() {
    };
    var e = d.indexedDB();
    try {
      var g = e.open(d.Ka(), d.La);
    } catch (h) {
      return c(h);
    }
    g.onupgradeneeded = function() {
      aa("creating db");
      g.result.createObjectStore(d.$);
    };
    g.onsuccess = function() {
      var h = g.result.transaction([d.$], "readwrite"), l = h.objectStore(d.$), p = 0, t = 0, n = a.length;
      a.forEach(function(q) {
        q = l.put(d.ra(q).object.c, q);
        q.onsuccess = function() {
          p++;
          p + t == n && (0 == t ? b() : c());
        };
        q.onerror = function() {
          t++;
          p + t == n && (0 == t ? b() : c());
        };
      });
      h.onerror = c;
    };
    g.onerror = c;
  }, wc:function(a, b, c) {
    b = b || function() {
    };
    c = c || function() {
    };
    var e = d.indexedDB();
    try {
      var g = e.open(d.Ka(), d.La);
    } catch (h) {
      return c(h);
    }
    g.onupgradeneeded = c;
    g.onsuccess = function() {
      var h = g.result;
      try {
        var l = h.transaction([d.$], "readonly");
      } catch (z) {
        c(z);
        return;
      }
      var p = l.objectStore(d.$), t = 0, n = 0, q = a.length;
      a.forEach(function(z) {
        var C = p.get(z);
        C.onsuccess = function() {
          d.ra(z).exists && d.unlink(z);
          d.Oa(w.dirname(z), w.basename(z), C.result, !0, !0, !0);
          t++;
          t + n == q && (0 == n ? b() : c());
        };
        C.onerror = function() {
          n++;
          t + n == q && (0 == n ? b() : c());
        };
      });
      l.onerror = c;
    };
    g.onerror = c;
  }}, v = {xc:{}, ib:5, umask:511, cc:function(a, b) {
    if ("/" !== b[0]) {
      if (-100 === a) {
        a = d.cwd();
      } else {
        a = d.M(a);
        if (!a) {
          throw new d.b(8);
        }
        a = a.path;
      }
      b = w.K(a, b);
    }
    return b;
  }, ua:function(a, b, c) {
    try {
      var e = a(b);
    } catch (g) {
      if (g && g.node && w.normalize(b) !== w.normalize(d.C(g.node))) {
        return -54;
      }
      throw g;
    }
    m[c >> 2] = e.dev;
    m[c + 4 >> 2] = 0;
    m[c + 8 >> 2] = e.ino;
    m[c + 12 >> 2] = e.mode;
    m[c + 16 >> 2] = e.nlink;
    m[c + 20 >> 2] = e.uid;
    m[c + 24 >> 2] = e.gid;
    m[c + 28 >> 2] = e.rdev;
    m[c + 32 >> 2] = 0;
    G = [e.size >>> 0, (y = e.size, 1.0 <= +na(y) ? 0.0 < y ? (oa(+Y(y / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+X((y - +(~~y >>> 0)) / 4294967296.0) >>> 0 : 0)];
    m[c + 40 >> 2] = G[0];
    m[c + 44 >> 2] = G[1];
    m[c + 48 >> 2] = 4096;
    m[c + 52 >> 2] = e.blocks;
    m[c + 56 >> 2] = e.atime.getTime() / 1000 | 0;
    m[c + 60 >> 2] = 0;
    m[c + 64 >> 2] = e.mtime.getTime() / 1000 | 0;
    m[c + 68 >> 2] = 0;
    m[c + 72 >> 2] = e.ctime.getTime() / 1000 | 0;
    m[c + 76 >> 2] = 0;
    G = [e.ino >>> 0, (y = e.ino, 1.0 <= +na(y) ? 0.0 < y ? (oa(+Y(y / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+X((y - +(~~y >>> 0)) / 4294967296.0) >>> 0 : 0)];
    m[c + 80 >> 2] = G[0];
    m[c + 84 >> 2] = G[1];
    return 0;
  }, nc:function(a, b, c, e, g) {
    a = O.slice(a, a + c);
    d.W(b, a, g, c, e);
  }, lc:function(a, b) {
    a = w.normalize(a);
    "/" === a[a.length - 1] && (a = a.substr(0, a.length - 1));
    d.mkdir(a, b, 0);
    return 0;
  }, mc:function(a, b, c) {
    switch(b & 61440) {
      case 32768:
      case 8192:
      case 24576:
      case 4096:
      case 49152:
        break;
      default:
        return -28;
    }
    d.H(a, b, c);
    return 0;
  }, oc:function(a, b, c) {
    if (0 >= c) {
      return -28;
    }
    a = d.readlink(a);
    var e = Math.min(c, ea(a)), g = F[b + e];
    T(a, O, b, c + 1);
    F[b + e] = g;
    return e;
  }, jc:function(a, b) {
    if (b & -8) {
      return -28;
    }
    a = d.h(a, {B:!0}).node;
    if (!a) {
      return -44;
    }
    var c = "";
    b & 4 && (c += "r");
    b & 2 && (c += "w");
    b & 1 && (c += "x");
    return c && d.N(a, c) ? -2 : 0;
  }, kc:function(a, b, c) {
    var e = d.M(c);
    e && d.close(e);
    return d.open(a, b, 0, c, c).fd;
  }, Cb:function(a, b, c, e) {
    for (var g = 0, h = 0; h < c; h++) {
      var l = m[b + (8 * h + 4) >> 2], p = d.read(a, F, m[b + 8 * h >> 2], l, e);
      if (0 > p) {
        return -1;
      }
      g += p;
      if (p < l) {
        break;
      }
    }
    return g;
  }, Db:function(a, b, c, e) {
    for (var g = 0, h = 0; h < c; h++) {
      var l = d.write(a, F, m[b + 8 * h >> 2], m[b + (8 * h + 4) >> 2], e);
      if (0 > l) {
        return -1;
      }
      g += l;
    }
    return g;
  }, Z:void 0, get:function() {
    v.Z += 4;
    return m[v.Z - 4 >> 2];
  }, O:function(a) {
    return Z(a);
  }, D:function(a) {
    a = d.M(a);
    if (!a) {
      throw new d.b(8);
    }
    return a;
  }, rc:function(a) {
    return a;
  }}, ca;
  S ? ca = function() {
    var a = process.hrtime();
    return 1e3 * a[0] + a[1] / 1e6;
  } : "undefined" !== typeof dateNow ? ca = dateNow : ca = function() {
    return performance.now();
  };
  var cb = {}, xb = (T("GMT", O, 2334240, 4), 2334240), xa = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ya = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  Object.defineProperties(Sa.prototype, {read:{get:function() {
    return 365 === (this.mode & 365);
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }}, write:{get:function() {
    return 146 === (this.mode & 146);
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }}, Ib:{get:function() {
    return d.m(this.mode);
  }}, Ba:{get:function() {
    return d.ba(this.mode);
  }}});
  d.jb = Sa;
  d.Ub();
  var qb, rb = {__assert_fail:function(a, b, c, e) {
    A("Assertion failed: " + Z(a) + ", at: " + [b ? Z(b) : "unknown filename", c, e ? Z(e) : "unknown function"]);
  }, __sys__newselect:function(a, b, c, e) {
    for (var g = 0, h = b ? m[b >> 2] : 0, l = b ? m[b + 4 >> 2] : 0, p = c ? m[c >> 2] : 0, t = c ? m[c + 4 >> 2] : 0, n = e ? m[e >> 2] : 0, q = e ? m[e + 4 >> 2] : 0, z = 0, C = 0, k = 0, r = 0, x = 0, D = 0, I = (b ? m[b >> 2] : 0) | (c ? m[c >> 2] : 0) | (e ? m[e >> 2] : 0), Qa = (b ? m[b + 4 >> 2] : 0) | (c ? m[c + 4 >> 2] : 0) | (e ? m[e + 4 >> 2] : 0), B = 0; B < a; B++) {
      var H = 1 << B % 32;
      if (32 > B ? I & H : Qa & H) {
        var Da = d.M(B);
        if (!Da) {
          throw new d.b(8);
        }
        var Ea = v.ib;
        Da.g.Rb && (Ea = Da.g.Rb(Da));
        Ea & 1 && (32 > B ? h & H : l & H) && (32 > B ? z |= H : C |= H, g++);
        Ea & 4 && (32 > B ? p & H : t & H) && (32 > B ? k |= H : r |= H, g++);
        Ea & 2 && (32 > B ? n & H : q & H) && (32 > B ? x |= H : D |= H, g++);
      }
    }
    b && (m[b >> 2] = z, m[b + 4 >> 2] = C);
    c && (m[c >> 2] = k, m[c + 4 >> 2] = r);
    e && (m[e >> 2] = x, m[e + 4 >> 2] = D);
    return g;
  }, __sys_fcntl64:function(a, b, c) {
    v.Z = c;
    try {
      var e = v.D(a);
      switch(b) {
        case 0:
          var g = v.get();
          return 0 > g ? -28 : d.open(e.path, e.flags, 0, g).fd;
        case 1:
        case 2:
          return 0;
        case 3:
          return e.flags;
        case 4:
          return g = v.get(), e.flags |= g, 0;
        case 12:
          return g = v.get(), Ha[g + 0 >> 1] = 2, 0;
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          return V(28), -1;
        default:
          return -28;
      }
    } catch (h) {
      return "undefined" !== typeof d && h instanceof d.b || A(h), -h.j;
    }
  }, __sys_fstat64:function(a, b) {
    try {
      var c = v.D(a);
      return v.ua(d.stat, c.path, b);
    } catch (e) {
      return "undefined" !== typeof d && e instanceof d.b || A(e), -e.j;
    }
  }, __sys_getdents64:function(a, b, c) {
    try {
      var e = v.D(a);
      e.P || (e.P = d.readdir(e.path));
      a = 0;
      for (var g = d.A(e, 0, 1), h = Math.floor(g / 280); h < e.P.length && a + 280 <= c;) {
        var l = e.P[h];
        if ("." === l[0]) {
          var p = 1;
          var t = 4;
        } else {
          var n = d.G(e.node, l);
          p = n.id;
          t = d.ba(n.mode) ? 2 : d.m(n.mode) ? 4 : d.S(n.mode) ? 10 : 8;
        }
        G = [p >>> 0, (y = p, 1.0 <= +na(y) ? 0.0 < y ? (oa(+Y(y / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+X((y - +(~~y >>> 0)) / 4294967296.0) >>> 0 : 0)];
        m[b + a >> 2] = G[0];
        m[b + a + 4 >> 2] = G[1];
        G = [280 * (h + 1) >>> 0, (y = 280 * (h + 1), 1.0 <= +na(y) ? 0.0 < y ? (oa(+Y(y / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+X((y - +(~~y >>> 0)) / 4294967296.0) >>> 0 : 0)];
        m[b + a + 8 >> 2] = G[0];
        m[b + a + 12 >> 2] = G[1];
        Ha[b + a + 16 >> 1] = 280;
        F[b + a + 18 >> 0] = t;
        T(l, O, b + a + 19, 256);
        a += 280;
        h += 1;
      }
      d.A(e, 280 * h, 0);
      return a;
    } catch (q) {
      return "undefined" !== typeof d && q instanceof d.b || A(q), -q.j;
    }
  }, __sys_ioctl:function(a, b, c) {
    v.Z = c;
    try {
      var e = v.D(a);
      switch(b) {
        case 21509:
        case 21505:
          return e.tty ? 0 : -59;
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
          return e.tty ? 0 : -59;
        case 21519:
          if (!e.tty) {
            return -59;
          }
          var g = v.get();
          return m[g >> 2] = 0;
        case 21520:
          return e.tty ? -28 : -59;
        case 21531:
          return g = v.get(), d.Aa(e, b, g);
        case 21523:
          return e.tty ? 0 : -59;
        case 21524:
          return e.tty ? 0 : -59;
        default:
          A("bad ioctl syscall " + b);
      }
    } catch (h) {
      return "undefined" !== typeof d && h instanceof d.b || A(h), -h.j;
    }
  }, __sys_lstat64:function(a, b) {
    try {
      return a = v.O(a), v.ua(d.lstat, a, b);
    } catch (c) {
      return "undefined" !== typeof d && c instanceof d.b || A(c), -c.j;
    }
  }, __sys_madvise1:function() {
    return 0;
  }, __sys_open:function(a, b, c) {
    v.Z = c;
    try {
      var e = v.O(a), g = v.get();
      return d.open(e, b, g).fd;
    } catch (h) {
      return "undefined" !== typeof d && h instanceof d.b || A(h), -h.j;
    }
  }, __sys_read:function(a, b, c) {
    try {
      var e = v.D(a);
      return d.read(e, F, b, c);
    } catch (g) {
      return "undefined" !== typeof d && g instanceof d.b || A(g), -g.j;
    }
  }, __sys_rename:function(a, b) {
    try {
      return a = v.O(a), b = v.O(b), d.rename(a, b), 0;
    } catch (c) {
      return "undefined" !== typeof d && c instanceof d.b || A(c), -c.j;
    }
  }, __sys_rmdir:function(a) {
    try {
      return a = v.O(a), d.rmdir(a), 0;
    } catch (b) {
      return "undefined" !== typeof d && b instanceof d.b || A(b), -b.j;
    }
  }, __sys_stat64:function(a, b) {
    try {
      return a = v.O(a), v.ua(d.stat, a, b);
    } catch (c) {
      return "undefined" !== typeof d && c instanceof d.b || A(c), -c.j;
    }
  }, __sys_unlink:function(a) {
    try {
      return a = v.O(a), d.unlink(a), 0;
    } catch (b) {
      return "undefined" !== typeof d && b instanceof d.b || A(b), -b.j;
    }
  }, abort:function() {
    A();
  }, clock:sa, clock_gettime:function(a, b) {
    if (0 === a) {
      a = Date.now();
    } else {
      if (1 === a || 4 === a) {
        a = ca();
      } else {
        return V(28), -1;
      }
    }
    m[b >> 2] = a / 1000 | 0;
    m[b + 4 >> 2] = a % 1000 * 1E6 | 0;
    return 0;
  }, emscripten_get_sbrk_ptr:function() {
    return 2334176;
  }, emscripten_memcpy_big:function(a, b, c) {
    O.copyWithin(a, b, b + c);
  }, emscripten_resize_heap:function(a) {
    var b = O.length;
    if (2147483648 < a) {
      return !1;
    }
    for (var c = 1; 4 >= c; c *= 2) {
      var e = b * (1 + 0.2 / c);
      e = Math.min(e, a + 100663296);
      e = Math.min(2147483648, ub(Math.max(16777216, a, e), 65536));
      a: {
        try {
          W.grow(e - pa.byteLength + 65535 >>> 16);
          Ya(W.buffer);
          var g = 1;
          break a;
        } catch (h) {
        }
        g = void 0;
      }
      if (g) {
        return !0;
      }
    }
    return !1;
  }, environ_get:function(a, b) {
    var c = 0;
    ja().forEach(function(e, g) {
      var h = b + c;
      g = m[a + 4 * g >> 2] = h;
      for (h = 0; h < e.length; ++h) {
        F[g++ >> 0] = e.charCodeAt(h);
      }
      F[g >> 0] = 0;
      c += e.length + 1;
    });
    return 0;
  }, environ_sizes_get:function(a, b) {
    var c = ja();
    m[a >> 2] = c.length;
    var e = 0;
    c.forEach(function(g) {
      e += g.length + 1;
    });
    m[b >> 2] = e;
    return 0;
  }, exit:function(a) {
    jb(a);
  }, fd_close:function(a) {
    try {
      var b = v.D(a);
      d.close(b);
      return 0;
    } catch (c) {
      return "undefined" !== typeof d && c instanceof d.b || A(c), c.j;
    }
  }, fd_fdstat_get:function(a, b) {
    try {
      var c = v.D(a);
      F[b >> 0] = c.tty ? 2 : d.m(c.mode) ? 3 : d.S(c.mode) ? 7 : 4;
      return 0;
    } catch (e) {
      return "undefined" !== typeof d && e instanceof d.b || A(e), e.j;
    }
  }, fd_read:function(a, b, c, e) {
    try {
      var g = v.D(a), h = v.Cb(g, b, c);
      m[e >> 2] = h;
      return 0;
    } catch (l) {
      return "undefined" !== typeof d && l instanceof d.b || A(l), l.j;
    }
  }, fd_seek:function(a, b, c, e, g) {
    try {
      var h = v.D(a);
      a = 4294967296 * c + (b >>> 0);
      if (-9007199254740992 >= a || 9007199254740992 <= a) {
        return -61;
      }
      d.A(h, a, e);
      G = [h.position >>> 0, (y = h.position, 1.0 <= +na(y) ? 0.0 < y ? (oa(+Y(y / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+X((y - +(~~y >>> 0)) / 4294967296.0) >>> 0 : 0)];
      m[g >> 2] = G[0];
      m[g + 4 >> 2] = G[1];
      h.P && 0 === a && 0 === e && (h.P = null);
      return 0;
    } catch (l) {
      return "undefined" !== typeof d && l instanceof d.b || A(l), l.j;
    }
  }, fd_write:function(a, b, c, e) {
    try {
      var g = v.D(a), h = v.Db(g, b, c);
      m[e >> 2] = h;
      return 0;
    } catch (l) {
      return "undefined" !== typeof d && l instanceof d.b || A(l), l.j;
    }
  }, gmtime:function(a) {
    return db(a, 2334192);
  }, gmtime_r:db, localtime:function(a) {
    return gb(a, 2334192);
  }, localtime_r:gb, memory:W, mktime:function(a) {
    ua();
    var b = new Date(m[a + 20 >> 2] + 1900, m[a + 16 >> 2], m[a + 12 >> 2], m[a + 8 >> 2], m[a + 4 >> 2], m[a >> 2], 0), c = m[a + 32 >> 2], e = b.getTimezoneOffset(), g = new Date(b.getFullYear(), 0, 1), h = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(), l = g.getTimezoneOffset(), p = Math.min(l, h);
    0 > c ? m[a + 32 >> 2] = Number(h != l && p == e) : 0 < c != (p == e) && (h = Math.max(l, h), b.setTime(b.getTime() + 60000 * ((0 < c ? p : h) - e)));
    m[a + 24 >> 2] = b.getDay();
    m[a + 28 >> 2] = (b.getTime() - g.getTime()) / 864E5 | 0;
    return b.getTime() / 1000 | 0;
  }, nanosleep:function(a, b) {
    if (0 === a) {
      return V(28), -1;
    }
    var c = m[a >> 2];
    a = m[a + 4 >> 2];
    if (0 > a || 999999999 < a || 0 > c) {
      return V(28), -1;
    }
    0 !== b && (m[b >> 2] = 0, m[b + 4 >> 2] = 0);
    b = 1e6 * c + a / 1000;
    for (c = ca(); ca() - c < b / 1000;) {
    }
  }, round:function(a) {
    a = +a;
    return 0 <= a ? +Y(a + 0.5) : +X(a - 0.5);
  }, roundf:function(a) {
    a = +a;
    return 0 <= a ? +Y(a + 0.5) : +X(a - 0.5);
  }, setTempRet0:function() {
  }, signal:function() {
    return 0;
  }, strftime:function(a, b, c, e) {
    function g(k, r, x) {
      for (k = "number" === typeof k ? k.toString() : k || ""; k.length < r;) {
        k = x[0] + k;
      }
      return k;
    }
    function h(k, r) {
      return g(k, r, "0");
    }
    function l(k, r) {
      function x(I) {
        return 0 > I ? -1 : 0 < I ? 1 : 0;
      }
      var D;
      0 === (D = x(k.getFullYear() - r.getFullYear())) && 0 === (D = x(k.getMonth() - r.getMonth())) && (D = x(k.getDate() - r.getDate()));
      return D;
    }
    function p(k) {
      switch(k.getDay()) {
        case 0:
          return new Date(k.getFullYear() - 1, 11, 29);
        case 1:
          return k;
        case 2:
          return new Date(k.getFullYear(), 0, 3);
        case 3:
          return new Date(k.getFullYear(), 0, 2);
        case 4:
          return new Date(k.getFullYear(), 0, 1);
        case 5:
          return new Date(k.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(k.getFullYear() - 1, 11, 30);
      }
    }
    function t(k) {
      k = wa(new Date(k.v + 1900, 0, 1), k.pa);
      var r = new Date(k.getFullYear() + 1, 0, 4), x = p(new Date(k.getFullYear(), 0, 4));
      r = p(r);
      return 0 >= l(x, k) ? 0 >= l(r, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
    }
    var n = m[e + 40 >> 2];
    e = {Xb:m[e >> 2], Wb:m[e + 4 >> 2], na:m[e + 8 >> 2], ha:m[e + 12 >> 2], Y:m[e + 16 >> 2], v:m[e + 20 >> 2], oa:m[e + 24 >> 2], pa:m[e + 28 >> 2], Gc:m[e + 32 >> 2], Vb:m[e + 36 >> 2], Yb:n ? Z(n) : ""};
    c = Z(c);
    n = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
    for (var q in n) {
      c = c.replace(new RegExp(q, "g"), n[q]);
    }
    var z = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), C = "January February March April May June July August September October November December".split(" ");
    n = {"%a":function(k) {
      return z[k.oa].substring(0, 3);
    }, "%A":function(k) {
      return z[k.oa];
    }, "%b":function(k) {
      return C[k.Y].substring(0, 3);
    }, "%B":function(k) {
      return C[k.Y];
    }, "%C":function(k) {
      return h((k.v + 1900) / 100 | 0, 2);
    }, "%d":function(k) {
      return h(k.ha, 2);
    }, "%e":function(k) {
      return g(k.ha, 2, " ");
    }, "%g":function(k) {
      return t(k).toString().substring(2);
    }, "%G":function(k) {
      return t(k);
    }, "%H":function(k) {
      return h(k.na, 2);
    }, "%I":function(k) {
      k = k.na;
      0 == k ? k = 12 : 12 < k && (k -= 12);
      return h(k, 2);
    }, "%j":function(k) {
      return h(k.ha + Ma(va(k.v + 1900) ? xa : ya, k.Y - 1), 3);
    }, "%m":function(k) {
      return h(k.Y + 1, 2);
    }, "%M":function(k) {
      return h(k.Wb, 2);
    }, "%n":function() {
      return "\n";
    }, "%p":function(k) {
      return 0 <= k.na && 12 > k.na ? "AM" : "PM";
    }, "%S":function(k) {
      return h(k.Xb, 2);
    }, "%t":function() {
      return "\t";
    }, "%u":function(k) {
      return k.oa || 7;
    }, "%U":function(k) {
      var r = new Date(k.v + 1900, 0, 1), x = 0 === r.getDay() ? r : wa(r, 7 - r.getDay());
      k = new Date(k.v + 1900, k.Y, k.ha);
      return 0 > l(x, k) ? (r = Ma(va(k.getFullYear()) ? xa : ya, k.getMonth() - 1) - 31, h(Math.ceil((31 - x.getDate() + r + k.getDate()) / 7), 2)) : 0 === l(x, r) ? "01" : "00";
    }, "%V":function(k) {
      var r = new Date(k.v + 1901, 0, 4), x = p(new Date(k.v + 1900, 0, 4));
      r = p(r);
      var D = wa(new Date(k.v + 1900, 0, 1), k.pa);
      return 0 > l(D, x) ? "53" : 0 >= l(r, D) ? "01" : h(Math.ceil((x.getFullYear() < k.v + 1900 ? k.pa + 32 - x.getDate() : k.pa + 1 - x.getDate()) / 7), 2);
    }, "%w":function(k) {
      return k.oa;
    }, "%W":function(k) {
      var r = new Date(k.v, 0, 1), x = 1 === r.getDay() ? r : wa(r, 0 === r.getDay() ? 1 : 7 - r.getDay() + 1);
      k = new Date(k.v + 1900, k.Y, k.ha);
      return 0 > l(x, k) ? (r = Ma(va(k.getFullYear()) ? xa : ya, k.getMonth() - 1) - 31, h(Math.ceil((31 - x.getDate() + r + k.getDate()) / 7), 2)) : 0 === l(x, r) ? "01" : "00";
    }, "%y":function(k) {
      return (k.v + 1900).toString().substring(2);
    }, "%Y":function(k) {
      return k.v + 1900;
    }, "%z":function(k) {
      k = k.Vb;
      var r = 0 <= k;
      k = Math.abs(k) / 60;
      return (r ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
    }, "%Z":function(k) {
      return k.Yb;
    }, "%%":function() {
      return "%";
    }};
    for (q in n) {
      0 <= c.indexOf(q) && (c = c.replace(new RegExp(q, "g"), n[q](e)));
    }
    q = za(c, !1);
    if (q.length > b) {
      return 0;
    }
    F.set(q, a);
    return q.length - 1;
  }, table:Bb, time:function(a) {
    var b = Date.now() / 1000 | 0;
    a && (m[a >> 2] = b);
    return b;
  }}, sb = function() {
    function a(g) {
      f.asm = g.exports;
      Ia("wasm-instantiate");
    }
    function b(g) {
      a(g.instance);
    }
    function c(g) {
      return vb().then(function(h) {
        return WebAssembly.instantiate(h, e);
      }).then(g, function(h) {
        E("failed to asynchronously prepare wasm: " + h);
        A(h);
      });
    }
    var e = {env:rb, wasi_snapshot_preview1:rb};
    Za("wasm-instantiate");
    if (f.instantiateWasm) {
      try {
        return f.instantiateWasm(e, a);
      } catch (g) {
        return E("Module.instantiateWasm callback failed with error: " + g), !1;
      }
    }
    (function() {
      if (ia || "function" !== typeof WebAssembly.instantiateStreaming || $a(L) || La(L, "file://") || "function" !== typeof fetch) {
        return c(b);
      }
      fetch(L, {credentials:"same-origin"}).then(function(g) {
        return WebAssembly.instantiateStreaming(g, e).then(b, function(h) {
          E("wasm streaming compile failed: " + h);
          E("falling back to ArrayBuffer instantiation");
          c(b);
        });
      });
    })();
    return {};
  }();
  f.asm = sb;
  var pb = f.___wasm_call_ctors = function() {
    return (pb = f.___wasm_call_ctors = f.asm.__wasm_call_ctors).apply(null, arguments);
  }, bb = f.___errno_location = function() {
    return (bb = f.___errno_location = f.asm.__errno_location).apply(null, arguments);
  };
  f._fflush = function() {
    return (f._fflush = f.asm.fflush).apply(null, arguments);
  };
  f._main = function() {
    return (f._main = f.asm.main).apply(null, arguments);
  };
  f._free = function() {
    return (f._free = f.asm.free).apply(null, arguments);
  };
  var Fa = f._malloc = function() {
    return (Fa = f._malloc = f.asm.malloc).apply(null, arguments);
  }, ba = f.__get_tzname = function() {
    return (ba = f.__get_tzname = f.asm._get_tzname).apply(null, arguments);
  }, fb = f.__get_daylight = function() {
    return (fb = f.__get_daylight = f.asm._get_daylight).apply(null, arguments);
  }, eb = f.__get_timezone = function() {
    return (eb = f.__get_timezone = f.asm._get_timezone).apply(null, arguments);
  };
  f.stackSave = function() {
    return (f.stackSave = f.asm.stackSave).apply(null, arguments);
  };
  var Ga = f.stackAlloc = function() {
    return (Ga = f.stackAlloc = f.asm.stackAlloc).apply(null, arguments);
  };
  f.stackRestore = function() {
    return (f.stackRestore = f.asm.stackRestore).apply(null, arguments);
  };
  f.__growWasmMemory = function() {
    return (f.__growWasmMemory = f.asm.__growWasmMemory).apply(null, arguments);
  };
  f.dynCall_iii = function() {
    return (f.dynCall_iii = f.asm.dynCall_iii).apply(null, arguments);
  };
  f.dynCall_viiii = function() {
    return (f.dynCall_viiii = f.asm.dynCall_viiii).apply(null, arguments);
  };
  f.dynCall_vi = function() {
    return (f.dynCall_vi = f.asm.dynCall_vi).apply(null, arguments);
  };
  f.dynCall_iiii = function() {
    return (f.dynCall_iiii = f.asm.dynCall_iiii).apply(null, arguments);
  };
  f.dynCall_ii = function() {
    return (f.dynCall_ii = f.asm.dynCall_ii).apply(null, arguments);
  };
  f.dynCall_iiiiii = function() {
    return (f.dynCall_iiiiii = f.asm.dynCall_iiiiii).apply(null, arguments);
  };
  f.dynCall_iiiii = function() {
    return (f.dynCall_iiiii = f.asm.dynCall_iiiii).apply(null, arguments);
  };
  f.dynCall_iiiiiiiii = function() {
    return (f.dynCall_iiiiiiiii = f.asm.dynCall_iiiiiiiii).apply(null, arguments);
  };
  f.dynCall_vii = function() {
    return (f.dynCall_vii = f.asm.dynCall_vii).apply(null, arguments);
  };
  f.dynCall_jiji = function() {
    return (f.dynCall_jiji = f.asm.dynCall_jiji).apply(null, arguments);
  };
  f.dynCall_jiiji = function() {
    return (f.dynCall_jiiji = f.asm.dynCall_jiiji).apply(null, arguments);
  };
  f.dynCall_viiiiiiff = function() {
    return (f.dynCall_viiiiiiff = f.asm.dynCall_viiiiiiff).apply(null, arguments);
  };
  f.dynCall_viii = function() {
    return (f.dynCall_viii = f.asm.dynCall_viii).apply(null, arguments);
  };
  f.dynCall_viiiii = function() {
    return (f.dynCall_viiiii = f.asm.dynCall_viiiii).apply(null, arguments);
  };
  f.dynCall_viiiiiifi = function() {
    return (f.dynCall_viiiiiifi = f.asm.dynCall_viiiiiifi).apply(null, arguments);
  };
  f.dynCall_iiiiiii = function() {
    return (f.dynCall_iiiiiii = f.asm.dynCall_iiiiiii).apply(null, arguments);
  };
  f.dynCall_viiiiii = function() {
    return (f.dynCall_viiiiii = f.asm.dynCall_viiiiii).apply(null, arguments);
  };
  f.dynCall_viiiiiiiii = function() {
    return (f.dynCall_viiiiiiiii = f.asm.dynCall_viiiiiiiii).apply(null, arguments);
  };
  f.dynCall_viiiiiiii = function() {
    return (f.dynCall_viiiiiiii = f.asm.dynCall_viiiiiiii).apply(null, arguments);
  };
  f.dynCall_fiiii = function() {
    return (f.dynCall_fiiii = f.asm.dynCall_fiiii).apply(null, arguments);
  };
  f.dynCall_iiiiiiiiiiiiiifii = function() {
    return (f.dynCall_iiiiiiiiiiiiiifii = f.asm.dynCall_iiiiiiiiiiiiiifii).apply(null, arguments);
  };
  f.dynCall_fiifi = function() {
    return (f.dynCall_fiifi = f.asm.dynCall_fiifi).apply(null, arguments);
  };
  f.dynCall_viiiiiii = function() {
    return (f.dynCall_viiiiiii = f.asm.dynCall_viiiiiii).apply(null, arguments);
  };
  f.dynCall_viiiifii = function() {
    return (f.dynCall_viiiifii = f.asm.dynCall_viiiifii).apply(null, arguments);
  };
  f.dynCall_fii = function() {
    return (f.dynCall_fii = f.asm.dynCall_fii).apply(null, arguments);
  };
  f.dynCall_viiiiiiiiii = function() {
    return (f.dynCall_viiiiiiiiii = f.asm.dynCall_viiiiiiiiii).apply(null, arguments);
  };
  f.dynCall_viiiiiiiiiiii = function() {
    return (f.dynCall_viiiiiiiiiiii = f.asm.dynCall_viiiiiiiiiiii).apply(null, arguments);
  };
  f.dynCall_iiiiiiii = function() {
    return (f.dynCall_iiiiiiii = f.asm.dynCall_iiiiiiii).apply(null, arguments);
  };
  f.dynCall_dd = function() {
    return (f.dynCall_dd = f.asm.dynCall_dd).apply(null, arguments);
  };
  f.dynCall_viifi = function() {
    return (f.dynCall_viifi = f.asm.dynCall_viifi).apply(null, arguments);
  };
  f.dynCall_fiii = function() {
    return (f.dynCall_fiii = f.asm.dynCall_fiii).apply(null, arguments);
  };
  f.dynCall_viidi = function() {
    return (f.dynCall_viidi = f.asm.dynCall_viidi).apply(null, arguments);
  };
  f.dynCall_did = function() {
    return (f.dynCall_did = f.asm.dynCall_did).apply(null, arguments);
  };
  f.dynCall_fiiiiiiiiffii = function() {
    return (f.dynCall_fiiiiiiiiffii = f.asm.dynCall_fiiiiiiiiffii).apply(null, arguments);
  };
  f.dynCall_viiif = function() {
    return (f.dynCall_viiif = f.asm.dynCall_viiif).apply(null, arguments);
  };
  f.dynCall_viiiif = function() {
    return (f.dynCall_viiiif = f.asm.dynCall_viiiif).apply(null, arguments);
  };
  f.dynCall_viiiiiiifi = function() {
    return (f.dynCall_viiiiiiifi = f.asm.dynCall_viiiiiiifi).apply(null, arguments);
  };
  f.dynCall_viiijj = function() {
    return (f.dynCall_viiijj = f.asm.dynCall_viiijj).apply(null, arguments);
  };
  f.dynCall_iiiiiiidiiddii = function() {
    return (f.dynCall_iiiiiiidiiddii = f.asm.dynCall_iiiiiiidiiddii).apply(null, arguments);
  };
  f.dynCall_jij = function() {
    return (f.dynCall_jij = f.asm.dynCall_jij).apply(null, arguments);
  };
  f.dynCall_jii = function() {
    return (f.dynCall_jii = f.asm.dynCall_jii).apply(null, arguments);
  };
  f.dynCall_iiijjji = function() {
    return (f.dynCall_iiijjji = f.asm.dynCall_iiijjji).apply(null, arguments);
  };
  f.dynCall_iiiji = function() {
    return (f.dynCall_iiiji = f.asm.dynCall_iiiji).apply(null, arguments);
  };
  f.dynCall_jiiij = function() {
    return (f.dynCall_jiiij = f.asm.dynCall_jiiij).apply(null, arguments);
  };
  f.dynCall_v = function() {
    return (f.dynCall_v = f.asm.dynCall_v).apply(null, arguments);
  };
  f.dynCall_iiifii = function() {
    return (f.dynCall_iiifii = f.asm.dynCall_iiifii).apply(null, arguments);
  };
  f.dynCall_iidiiii = function() {
    return (f.dynCall_iidiiii = f.asm.dynCall_iidiiii).apply(null, arguments);
  };
  f.dynCall_iij = function() {
    return (f.dynCall_iij = f.asm.dynCall_iij).apply(null, arguments);
  };
  f.dynCall_iiiiiiiiii = function() {
    return (f.dynCall_iiiiiiiiii = f.asm.dynCall_iiiiiiiiii).apply(null, arguments);
  };
  f.dynCall_viiiiiiiiiii = function() {
    return (f.dynCall_viiiiiiiiiii = f.asm.dynCall_viiiiiiiiiii).apply(null, arguments);
  };
  f.asm = sb;
  var Aa;
  ha = function b() {
    Aa || Oa();
    Aa || (ha = b);
  };
  f.run = Oa;
  if (f.preInit) {
    for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length;) {
      f.preInit.pop()();
    }
  }
  var ib = !0;
  f.noInitialRun && (ib = !1);
  Oa();
  return mb;
};

