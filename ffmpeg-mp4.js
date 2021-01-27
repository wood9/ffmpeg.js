
var $a;
$a || ($a = typeof Module !== 'undefined' ? Module : {});
module.exports = function(M) {
  function ab(a, b, c, f) {
    a || (a = this);
    this.parent = a;
    this.l = a.l;
    this.fa = null;
    this.id = e.Mb++;
    this.name = b;
    this.mode = c;
    this.f = {};
    this.g = {};
    this.rdev = f;
  }
  function ja(a, b) {
    throw b;
  }
  function bb(a) {
    Array.isArray(a) || a instanceof ArrayBuffer ? a = new Uint8Array(a) : a ? a instanceof Uint8Array || (a = new Uint8Array(a.buffer)) : a = new Uint8Array(0);
    return a;
  }
  function cb(a) {
    var b = [];
    return function(c, f) {
      if (f && b.length) {
        return a(Q(b, 0));
      }
      10 === c || 13 === c ? (W && b.push(c), a(Q(b, 0)), b = []) : 0 !== c && b.push(c);
    };
  }
  function Cb(a) {
    return d.locateFile ? d.locateFile(a, N) : N + a;
  }
  function R(a) {
    R.m || (R.m = {});
    R.m[a] || (R.m[a] = 1, E(a));
  }
  function k(a, b) {
    a || l("Assertion failed: " + b);
  }
  function Q(a, b, c) {
    var f = b + c;
    for (c = b; a[c] && !(c >= f);) {
      ++c;
    }
    if (16 < c - b && a.subarray && db) {
      return db.decode(a.subarray(b, c));
    }
    for (f = ""; b < c;) {
      var g = a[b++];
      if (g & 128) {
        var h = a[b++] & 63;
        if (192 == (g & 224)) {
          f += String.fromCharCode((g & 31) << 6 | h);
        } else {
          var m = a[b++] & 63;
          224 == (g & 240) ? g = (g & 15) << 12 | h << 6 | m : (240 != (g & 248) && R("Invalid UTF-8 leading byte 0x" + g.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"), g = (g & 7) << 18 | h << 12 | m << 6 | a[b++] & 63);
          65536 > g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
        }
      } else {
        f += String.fromCharCode(g);
      }
    }
    return f;
  }
  function ca(a, b) {
    return a ? Q(da, a, b) : "";
  }
  function ka(a, b, c, f) {
    if (!(0 < f)) {
      return 0;
    }
    var g = c;
    f = c + f - 1;
    for (var h = 0; h < a.length; ++h) {
      var m = a.charCodeAt(h);
      if (55296 <= m && 57343 >= m) {
        var r = a.charCodeAt(++h);
        m = 65536 + ((m & 1023) << 10) | r & 1023;
      }
      if (127 >= m) {
        if (c >= f) {
          break;
        }
        b[c++] = m;
      } else {
        if (2047 >= m) {
          if (c + 1 >= f) {
            break;
          }
          b[c++] = 192 | m >> 6;
        } else {
          if (65535 >= m) {
            if (c + 2 >= f) {
              break;
            }
            b[c++] = 224 | m >> 12;
          } else {
            if (c + 3 >= f) {
              break;
            }
            2097152 <= m && R("Invalid Unicode code point 0x" + m.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
            b[c++] = 240 | m >> 18;
            b[c++] = 128 | m >> 12 & 63;
          }
          b[c++] = 128 | m >> 6 & 63;
        }
        b[c++] = 128 | m & 63;
      }
    }
    b[c] = 0;
    return c - g;
  }
  function Qa(a, b, c) {
    k("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
    return ka(a, da, b, c);
  }
  function la(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
      var f = a.charCodeAt(c);
      55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | a.charCodeAt(++c) & 1023);
      127 >= f ? ++b : b = 2047 >= f ? b + 2 : 65535 >= f ? b + 3 : b + 4;
    }
    return b;
  }
  function eb(a) {
    var b = la(a) + 1, c = fb(b);
    c && ka(a, I, c, b);
    return c;
  }
  function gb(a) {
    var b = la(a) + 1, c = za(b);
    ka(a, I, c, b);
    return c;
  }
  function Db(a, b) {
    k(0 <= a.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
    I.set(a, b);
  }
  function Eb(a, b) {
    0 < a % b && (a += b - a % b);
    return a;
  }
  function hb(a) {
    ma = a;
    d.HEAP8 = I = new Int8Array(a);
    d.HEAP16 = Ra = new Int16Array(a);
    d.HEAP32 = p = new Int32Array(a);
    d.HEAPU8 = da = new Uint8Array(a);
    d.HEAPU16 = new Uint16Array(a);
    d.HEAPU32 = na = new Uint32Array(a);
    d.HEAPF32 = new Float32Array(a);
    d.HEAPF64 = new Float64Array(a);
  }
  function ib() {
    k(!0);
    na[583585] = 34821223;
    na[583586] = 2310721022;
    p[0] = 1668509029;
  }
  function ea() {
    var a = na[583585], b = na[583586];
    34821223 == a && 2310721022 == b || l("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + b.toString(16) + " " + a.toString(16));
    1668509029 !== p[0] && l("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
  function oa(a) {
    for (; 0 < a.length;) {
      var b = a.shift();
      if ("function" == typeof b) {
        b(d);
      } else {
        var c = b.Fb;
        "number" === typeof c ? void 0 === b.ta ? d.dynCall_v(c) : d.dynCall_vi(c, b.ta) : c(void 0 === b.ta ? null : b.ta);
      }
    }
  }
  function Fb(a) {
    for (var b = a;;) {
      if (!fa[a]) {
        return a;
      }
      a = b + Math.random();
    }
  }
  function jb(a) {
    S++;
    d.monitorRunDependencies && d.monitorRunDependencies(S);
    a ? (k(!fa[a]), fa[a] = 1, null === X && "undefined" !== typeof setInterval && (X = setInterval(function() {
      if (Aa) {
        clearInterval(X), X = null;
      } else {
        var b = !1, c;
        for (c in fa) {
          b || (b = !0, E("still waiting on run dependencies:")), E("dependency: " + c);
        }
        b && E("(end of list)");
      }
    }, 10000))) : E("warning: run dependency added without ID");
  }
  function Sa(a) {
    S--;
    d.monitorRunDependencies && d.monitorRunDependencies(S);
    a ? (k(fa[a]), delete fa[a]) : E("warning: run dependency removed without ID");
    0 == S && (null !== X && (clearInterval(X), X = null), pa && (a = pa, pa = null, a()));
  }
  function l(a) {
    if (d.onAbort) {
      d.onAbort(a);
    }
    ha(a);
    E(a);
    Aa = !0;
    a = "abort(" + a + ") at " + kb();
    throw new WebAssembly.RuntimeError(a);
  }
  function Ta(a, b) {
    return String.prototype.startsWith ? a.startsWith(b) : 0 === a.indexOf(b);
  }
  function lb(a) {
    return Ta(a, "data:application/octet-stream;base64,");
  }
  function mb() {
    try {
      if (qa) {
        return new Uint8Array(qa);
      }
      if (Ba) {
        return Ba(O);
      }
      throw "both async and sync fetching of the wasm failed";
    } catch (a) {
      l(a);
    }
  }
  function Gb() {
    return qa || !Ca && !T || "function" !== typeof fetch || Ta(O, "file://") ? new Promise(function(a) {
      a(mb());
    }) : fetch(O, {credentials:"same-origin"}).then(function(a) {
      if (!a.ok) {
        throw "failed to load wasm binary file at '" + O + "'";
      }
      return a.arrayBuffer();
    }).catch(function() {
      return mb();
    });
  }
  function nb(a) {
    return a.replace(/\b_Z[\w\d_]+/g, function(b) {
      R("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
      return b === b ? b : b + " [" + b + "]";
    });
  }
  function kb() {
    a: {
      var a = Error();
      if (!a.stack) {
        try {
          throw Error();
        } catch (b) {
          a = b;
        }
        if (!a.stack) {
          a = "(no stack trace available)";
          break a;
        }
      }
      a = a.stack.toString();
    }
    d.extraStackTrace && (a += "\n" + d.extraStackTrace());
    return nb(a);
  }
  function Y(a) {
    return p[Hb() >> 2] = a;
  }
  function Da() {
    void 0 === Da.start && (Da.start = Date.now());
    return 1E3 * (Date.now() - Da.start) | 0;
  }
  function ra() {
    if (!ra.m) {
      var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:Ea || "./this.program"}, b;
      for (b in ob) {
        a[b] = ob[b];
      }
      var c = [];
      for (b in a) {
        c.push(b + "=" + a[b]);
      }
      ra.m = c;
    }
    return ra.m;
  }
  function pb(a, b) {
    a = new Date(1000 * p[a >> 2]);
    p[b >> 2] = a.getUTCSeconds();
    p[b + 4 >> 2] = a.getUTCMinutes();
    p[b + 8 >> 2] = a.getUTCHours();
    p[b + 12 >> 2] = a.getUTCDate();
    p[b + 16 >> 2] = a.getUTCMonth();
    p[b + 20 >> 2] = a.getUTCFullYear() - 1900;
    p[b + 24 >> 2] = a.getUTCDay();
    p[b + 36 >> 2] = 0;
    p[b + 32 >> 2] = 0;
    p[b + 28 >> 2] = (a.getTime() - Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864E5 | 0;
    p[b + 40 >> 2] = Ib;
    return b;
  }
  function Fa() {
    function a(h) {
      return (h = h.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? h[1] : "GMT";
    }
    if (!Fa.m) {
      Fa.m = !0;
      p[Jb() >> 2] = 60 * (new Date).getTimezoneOffset();
      var b = (new Date).getFullYear(), c = new Date(b, 0, 1);
      b = new Date(b, 6, 1);
      p[Kb() >> 2] = Number(c.getTimezoneOffset() != b.getTimezoneOffset());
      var f = a(c), g = a(b);
      f = eb(f);
      g = eb(g);
      b.getTimezoneOffset() < c.getTimezoneOffset() ? (p[sa() >> 2] = f, p[sa() + 4 >> 2] = g) : (p[sa() >> 2] = g, p[sa() + 4 >> 2] = f);
    }
  }
  function qb(a, b) {
    Fa();
    a = new Date(1000 * p[a >> 2]);
    p[b >> 2] = a.getSeconds();
    p[b + 4 >> 2] = a.getMinutes();
    p[b + 8 >> 2] = a.getHours();
    p[b + 12 >> 2] = a.getDate();
    p[b + 16 >> 2] = a.getMonth();
    p[b + 20 >> 2] = a.getFullYear() - 1900;
    p[b + 24 >> 2] = a.getDay();
    var c = new Date(a.getFullYear(), 0, 1);
    p[b + 28 >> 2] = (a.getTime() - c.getTime()) / 864E5 | 0;
    p[b + 36 >> 2] = -(60 * a.getTimezoneOffset());
    var f = (new Date(a.getFullYear(), 6, 1)).getTimezoneOffset();
    c = c.getTimezoneOffset();
    a = (f != c && a.getTimezoneOffset() == Math.min(c, f)) | 0;
    p[b + 32 >> 2] = a;
    a = p[sa() + (a ? 4 : 0) >> 2];
    p[b + 40 >> 2] = a;
    return b;
  }
  function Ga(a) {
    return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
  }
  function Ua(a, b) {
    for (var c = 0, f = 0; f <= b; c += a[f++]) {
    }
    return c;
  }
  function Ha(a, b) {
    for (a = new Date(a.getTime()); 0 < b;) {
      var c = Ga(a.getFullYear()), f = a.getMonth();
      c = (c ? Ia : Ja)[f];
      if (b > c - a.getDate()) {
        b -= c - a.getDate() + 1, a.setDate(1), 11 > f ? a.setMonth(f + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
      } else {
        a.setDate(a.getDate() + b);
        break;
      }
    }
    return a;
  }
  function Ka(a, b, c) {
    c = 0 < c ? c : la(a) + 1;
    c = Array(c);
    a = ka(a, c, 0, c.length);
    b && (c.length = a);
    return c;
  }
  function Va(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a;
  }
  function Wa(a) {
    function b() {
      if (!La && (La = !0, d.calledRun = !0, !Aa)) {
        ea();
        k(!t);
        t = !0;
        d.noFSInit || e.N.ka || e.N();
        U.N();
        oa(rb);
        ea();
        e.ab = !1;
        oa(Lb);
        if (d.onRuntimeInitialized) {
          d.onRuntimeInitialized();
        }
        if (sb) {
          var c = a;
          k(0 == S, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
          k(0 == Xa.length, "cannot call main when preRun functions remain to be called");
          var f = d._main;
          c = c || [];
          var g = c.length + 1, h = za(4 * (g + 1));
          p[h >> 2] = gb(Ea);
          for (var m = 1; m < g; m++) {
            p[(h >> 2) + m] = gb(c[m - 1]);
          }
          p[(h >> 2) + g] = 0;
          try {
            d.___set_stack_limit(2334336);
            var r = f(g, h);
            tb(r, !0);
          } catch (x) {
            x instanceof Va || ("unwind" == x ? Ma = !0 : ((c = x) && "object" === typeof x && x.stack && (c = [x, x.stack]), E("exception thrown: " + c), ja(1, x)));
          } finally {
          }
        }
        ea();
        if (d.postRun) {
          for ("function" == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length;) {
            ub.unshift(d.postRun.shift());
          }
        }
        oa(ub);
      }
    }
    a = a || ta;
    if (!(0 < S)) {
      ib();
      if (d.preRun) {
        for ("function" == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length;) {
          Xa.unshift(d.preRun.shift());
        }
      }
      oa(Xa);
      0 < S || (d.setStatus ? (d.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          d.setStatus("");
        }, 1);
        b();
      }, 1)) : b(), ea());
    }
  }
  function tb(a, b) {
    if (!b || !Ma || 0 !== a) {
      if (Ma) {
        b || E("program exited (with status: " + a + "), but noExitRuntime is set due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)");
      } else {
        if (Aa = !0, ea(), oa(Mb), e.quit(), u = !0, d.onExit) {
          d.onExit(a);
        }
      }
      ja(a, new Va(a));
    }
  }
  M = M || {};
  var Nb = l, vb, d = {};
  Object.keys(M).forEach(function(a) {
    0 > ["mounts", "MEMFS", "onExit", "chdir"].indexOf(a) && (d[a] = M[a]);
  });
  l = function(a) {
    if (arguments.length) {
      Nb(a);
    } else {
      throw new Va(0);
    }
  };
  d.stdin = d.stdin || function() {
  };
  d.stdout = d.stdout || cb(function(a) {
    ha(a);
  });
  d.stderr = d.stderr || cb(function(a) {
    E(a);
  });
  "object" === typeof process && (d.print = d.print || process.stdout.write.bind(process.stdout), d.printErr = d.printErr || process.stderr.write.bind(process.stderr));
  d.quit = function(a) {
    d.stdout(0, !0);
    d.stderr(0, !0);
    if (M.onExit) {
      M.onExit(a);
    }
  };
  d.preRun = function() {
    (M.mounts || []).forEach(function(a) {
      var b = e.Ta[a.type];
      if (!b) {
        throw Error("Bad mount type");
      }
      var c = a.mountpoint;
      if (!c.match(/^\/[^\/]+$/) || "/." === c || "/.." === c || "/tmp" === c || "/home" === c || "/dev" === c || "/work" === c) {
        throw Error("Bad mount point");
      }
      e.mkdir(c);
      e.l(b, a.opts, c);
    });
    e.mkdir("/work");
    e.chdir(M.chdir || "/work");
    (M.MEMFS || []).forEach(function(a) {
      if (a.name.match(/\//)) {
        throw Error("Bad file name");
      }
      var b = e.open(a.name, "w+");
      a = bb(a.data);
      e.write(b, a, 0, a.length);
      e.close(b);
    });
  };
  d.postRun = function() {
    var a = Object.create(null);
    (M.MEMFS || []).forEach(function(b) {
      a[b.name] = null;
    });
    vb = {MEMFS:function(b) {
      var c = e.h(b).node.c;
      b = Object.keys(c);
      c.__proto__ && "__proto__" === c.__proto__.name && b.push("__proto__");
      return b.map(function(f) {
        return c[f];
      });
    }("/work").filter(function(b) {
      return !(b.name in a);
    }).map(function(b) {
      var c = bb(b.c);
      return {name:b.name, data:c};
    })};
  };
  var ua = {}, V;
  for (V in d) {
    d.hasOwnProperty(V) && (ua[V] = d[V]);
  }
  var ta = [], Ea = "./this.program", Ca = !1, T = !1, W = !1, wb = !1;
  Ca = "object" === typeof window;
  T = "function" === typeof importScripts;
  W = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
  wb = !Ca && !W && !T;
  if (d.ENVIRONMENT) {
    throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
  }
  var N = "", Na, Ya;
  if (W) {
    N = T ? require("path").dirname(N) + "/" : __dirname + "/";
    var va = function(a, b) {
      Na || (Na = require("fs"));
      Ya || (Ya = require("path"));
      a = Ya.normalize(a);
      return Na.readFileSync(a, b ? null : "utf8");
    };
    var Ba = function(a) {
      a = va(a, !0);
      a.buffer || (a = new Uint8Array(a));
      k(a.buffer);
      return a;
    };
    1 < process.argv.length && (Ea = process.argv[1].replace(/\\/g, "/"));
    ta = process.argv.slice(2);
    "undefined" !== typeof module && (module.exports = d);
    ja = function(a) {
      process.exit(a);
    };
    d.inspect = function() {
      return "[Emscripten Module object]";
    };
  } else {
    if (wb) {
      "undefined" != typeof read && (va = function(a) {
        return read(a);
      }), Ba = function(a) {
        if ("function" === typeof readbuffer) {
          return new Uint8Array(readbuffer(a));
        }
        a = read(a, "binary");
        k("object" === typeof a);
        return a;
      }, "undefined" != typeof scriptArgs ? ta = scriptArgs : "undefined" != typeof arguments && (ta = arguments), "function" === typeof quit && (ja = function(a) {
        quit(a);
      }), "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
    } else {
      if (Ca || T) {
        T ? N = self.location.href : document.currentScript && (N = document.currentScript.src), N = 0 !== N.indexOf("blob:") ? N.substr(0, N.lastIndexOf("/") + 1) : "", va = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.send(null);
          return b.responseText;
        }, T && (Ba = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.responseType = "arraybuffer";
          b.send(null);
          return new Uint8Array(b.response);
        });
      } else {
        throw Error("environment detection error");
      }
    }
  }
  var ha = d.print || console.log.bind(console), E = d.printErr || console.warn.bind(console);
  for (V in ua) {
    ua.hasOwnProperty(V) && (d[V] = ua[V]);
  }
  ua = null;
  d.arguments && (ta = d.arguments);
  Object.getOwnPropertyDescriptor(d, "arguments") || Object.defineProperty(d, "arguments", {configurable:!0, get:function() {
    l("Module.arguments has been replaced with plain arguments_");
  }});
  d.thisProgram && (Ea = d.thisProgram);
  Object.getOwnPropertyDescriptor(d, "thisProgram") || Object.defineProperty(d, "thisProgram", {configurable:!0, get:function() {
    l("Module.thisProgram has been replaced with plain thisProgram");
  }});
  d.quit && (ja = d.quit);
  Object.getOwnPropertyDescriptor(d, "quit") || Object.defineProperty(d, "quit", {configurable:!0, get:function() {
    l("Module.quit has been replaced with plain quit_");
  }});
  k("undefined" === typeof d.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
  k("undefined" === typeof d.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
  k("undefined" === typeof d.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
  k("undefined" === typeof d.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
  k("undefined" === typeof d.read, "Module.read option was removed (modify read_ in JS)");
  k("undefined" === typeof d.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
  k("undefined" === typeof d.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
  k("undefined" === typeof d.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
  k("undefined" === typeof d.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
  Object.getOwnPropertyDescriptor(d, "read") || Object.defineProperty(d, "read", {configurable:!0, get:function() {
    l("Module.read has been replaced with plain read_");
  }});
  Object.getOwnPropertyDescriptor(d, "readAsync") || Object.defineProperty(d, "readAsync", {configurable:!0, get:function() {
    l("Module.readAsync has been replaced with plain readAsync");
  }});
  Object.getOwnPropertyDescriptor(d, "readBinary") || Object.defineProperty(d, "readBinary", {configurable:!0, get:function() {
    l("Module.readBinary has been replaced with plain readBinary");
  }});
  Object.getOwnPropertyDescriptor(d, "setWindowTitle") || Object.defineProperty(d, "setWindowTitle", {configurable:!0, get:function() {
    l("Module.setWindowTitle has been replaced with plain setWindowTitle");
  }});
  var za;
  var xb = za = function() {
    l("cannot use the stack before compiled code is ready to run, and has provided stack access");
  };
  var qa;
  d.wasmBinary && (qa = d.wasmBinary);
  Object.getOwnPropertyDescriptor(d, "wasmBinary") || Object.defineProperty(d, "wasmBinary", {configurable:!0, get:function() {
    l("Module.wasmBinary has been replaced with plain wasmBinary");
  }});
  var Ma;
  d.noExitRuntime && (Ma = d.noExitRuntime);
  Object.getOwnPropertyDescriptor(d, "noExitRuntime") || Object.defineProperty(d, "noExitRuntime", {configurable:!0, get:function() {
    l("Module.noExitRuntime has been replaced with plain noExitRuntime");
  }});
  "object" !== typeof WebAssembly && l("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");
  var Z, Ob = new WebAssembly.Table({initial:2920, maximum:2920, element:"anyfunc"}), Aa = !1, db = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
  var I, da, Ra, p, na;
  k(!0, "stack must start aligned");
  k(!0, "heap must start aligned");
  d.TOTAL_STACK && k(5242880 === d.TOTAL_STACK, "the stack size can no longer be determined at runtime");
  var wa = d.INITIAL_MEMORY || 67108864;
  Object.getOwnPropertyDescriptor(d, "INITIAL_MEMORY") || Object.defineProperty(d, "INITIAL_MEMORY", {configurable:!0, get:function() {
    l("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY");
  }});
  k(5242880 <= wa, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + wa + "! (TOTAL_STACK=5242880)");
  k("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
  d.wasmMemory ? Z = d.wasmMemory : Z = new WebAssembly.Memory({initial:wa / 65536, maximum:32768});
  if (Z) {
    var ma = Z.buffer;
  }
  wa = ma.byteLength;
  k(0 === wa % 65536);
  k(!0);
  hb(ma);
  p[583544] = 7577216;
  (function() {
    var a = new Int16Array(1), b = new Int8Array(a.buffer);
    a[0] = 25459;
    if (115 !== b[0] || 99 !== b[1]) {
      throw "Runtime error: expected the system to be little-endian!";
    }
  })();
  var Xa = [], rb = [], Lb = [], Mb = [], ub = [], t = !1, u = !1;
  k(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  k(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  k(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  k(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  var xa = Math.abs, aa = Math.ceil, ba = Math.floor, ya = Math.min, S = 0, X = null, pa = null, fa = {};
  d.preloadedImages = {};
  d.preloadedAudios = {};
  var O = "ffmpeg-mp4.wasm";
  lb(O) || (O = Cb(O));
  var C, J;
  rb.push({Fb:function() {
    Pb();
  }});
  var A = {eb:function(a) {
    return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  }, Fa:function(a, b) {
    for (var c = 0, f = a.length - 1; 0 <= f; f--) {
      var g = a[f];
      "." === g ? a.splice(f, 1) : ".." === g ? (a.splice(f, 1), c++) : c && (a.splice(f, 1), c--);
    }
    if (b) {
      for (; c; c--) {
        a.unshift("..");
      }
    }
    return a;
  }, normalize:function(a) {
    var b = "/" === a.charAt(0), c = "/" === a.substr(-1);
    (a = A.Fa(a.split("/").filter(function(f) {
      return !!f;
    }), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a;
  }, dirname:function(a) {
    var b = A.eb(a);
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
    return A.eb(a)[3];
  }, join:function() {
    var a = Array.prototype.slice.call(arguments, 0);
    return A.normalize(a.join("/"));
  }, K:function(a, b) {
    return A.normalize(a + "/" + b);
  }}, P = {resolve:function() {
    for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
      b = 0 <= c ? arguments[c] : e.cwd();
      if ("string" !== typeof b) {
        throw new TypeError("Arguments to path.resolve must be strings");
      }
      if (!b) {
        return "";
      }
      a = b + "/" + a;
      b = "/" === b.charAt(0);
    }
    a = A.Fa(a.split("/").filter(function(f) {
      return !!f;
    }), !b).join("/");
    return (b ? "/" : "") + a || ".";
  }, relative:function(a, b) {
    function c(m) {
      for (var r = 0; r < m.length && "" === m[r]; r++) {
      }
      for (var x = m.length - 1; 0 <= x && "" === m[x]; x--) {
      }
      return r > x ? [] : m.slice(r, x - r + 1);
    }
    a = P.resolve(a).substr(1);
    b = P.resolve(b).substr(1);
    a = c(a.split("/"));
    b = c(b.split("/"));
    for (var f = Math.min(a.length, b.length), g = f, h = 0; h < f; h++) {
      if (a[h] !== b[h]) {
        g = h;
        break;
      }
    }
    f = [];
    for (h = g; h < a.length; h++) {
      f.push("..");
    }
    f = f.concat(b.slice(g));
    return f.join("/");
  }}, U = {hb:[], N:function() {
  }, Ve:function() {
  }, register:function(a, b) {
    U.hb[a] = {input:[], output:[], Y:b};
    e.Ja(a, U.g);
  }, g:{open:function(a) {
    var b = U.hb[a.node.rdev];
    if (!b) {
      throw new e.b(43);
    }
    a.tty = b;
    a.seekable = !1;
  }, close:function(a) {
    a.tty.Y.flush(a.tty);
  }, flush:function(a) {
    a.tty.Y.flush(a.tty);
  }, read:function(a, b, c, f) {
    if (!a.tty || !a.tty.Y.Xa) {
      throw new e.b(60);
    }
    for (var g = 0, h = 0; h < f; h++) {
      try {
        var m = a.tty.Y.Xa(a.tty);
      } catch (r) {
        throw new e.b(29);
      }
      if (void 0 === m && 0 === g) {
        throw new e.b(6);
      }
      if (null === m || void 0 === m) {
        break;
      }
      g++;
      b[c + h] = m;
    }
    g && (a.node.timestamp = Date.now());
    return g;
  }, write:function(a, b, c, f) {
    if (!a.tty || !a.tty.Y.Ga) {
      throw new e.b(60);
    }
    try {
      for (var g = 0; g < f; g++) {
        a.tty.Y.Ga(a.tty, b[c + g]);
      }
    } catch (h) {
      throw new e.b(29);
    }
    f && (a.node.timestamp = Date.now());
    return g;
  }}, Bb:{Xa:function(a) {
    if (!a.input.length) {
      var b = null;
      if (W) {
        var c = Buffer.m ? Buffer.m(256) : new Buffer(256), f = 0;
        try {
          f = Na.readSync(process.stdin.fd, c, 0, 256, null);
        } catch (g) {
          if (-1 != g.toString().indexOf("EOF")) {
            f = 0;
          } else {
            throw g;
          }
        }
        0 < f ? b = c.slice(0, f).toString("utf-8") : b = null;
      } else {
        "undefined" != typeof window && "function" == typeof window.prompt ? (b = window.prompt("Input: "), null !== b && (b += "\n")) : "function" == typeof readline && (b = readline(), null !== b && (b += "\n"));
      }
      if (!b) {
        return null;
      }
      a.input = Ka(b, !0);
    }
    return a.input.shift();
  }, Ga:function(a, b) {
    null === b || 10 === b ? (ha(Q(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
  }, flush:function(a) {
    a.output && 0 < a.output.length && (ha(Q(a.output, 0)), a.output = []);
  }}, Ab:{Ga:function(a, b) {
    null === b || 10 === b ? (E(Q(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
  }, flush:function(a) {
    a.output && 0 < a.output.length && (E(Q(a.output, 0)), a.output = []);
  }}}, y = {J:null, l:function() {
    return y.createNode(null, "/", 16895, 0);
  }, createNode:function(a, b, c, f) {
    if (e.Hb(c) || e.isFIFO(c)) {
      throw new e.b(63);
    }
    y.J || (y.J = {dir:{node:{F:y.f.F, u:y.f.u, lookup:y.f.lookup, H:y.f.H, rename:y.f.rename, unlink:y.f.unlink, rmdir:y.f.rmdir, readdir:y.f.readdir, symlink:y.f.symlink}, stream:{A:y.g.A}}, file:{node:{F:y.f.F, u:y.f.u}, stream:{A:y.g.A, read:y.g.read, write:y.g.write, aa:y.g.aa, ea:y.g.ea, X:y.g.X}}, link:{node:{F:y.f.F, u:y.f.u, readlink:y.f.readlink}, stream:{}}, Na:{node:{F:y.f.F, u:y.f.u}, stream:e.sb}});
    c = e.createNode(a, b, c, f);
    e.o(c.mode) ? (c.f = y.J.dir.node, c.g = y.J.dir.stream, c.c = {}) : e.isFile(c.mode) ? (c.f = y.J.file.node, c.g = y.J.file.stream, c.i = 0, c.c = null) : e.S(c.mode) ? (c.f = y.J.link.node, c.g = y.J.link.stream) : e.ba(c.mode) && (c.f = y.J.Na.node, c.g = y.J.Na.stream);
    c.timestamp = Date.now();
    a && (a.c[b] = c);
    return c;
  }, Je:function(a) {
    if (a.c && a.c.subarray) {
      for (var b = [], c = 0; c < a.i; ++c) {
        b.push(a.c[c]);
      }
      return b;
    }
    return a.c;
  }, Ke:function(a) {
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
    b.dev = e.ba(a.mode) ? a.id : 1;
    b.ino = a.id;
    b.mode = a.mode;
    b.nlink = 1;
    b.uid = 0;
    b.gid = 0;
    b.rdev = a.rdev;
    e.o(a.mode) ? b.size = 4096 : e.isFile(a.mode) ? b.size = a.i : e.S(a.mode) ? b.size = a.link.length : b.size = 0;
    b.atime = new Date(a.timestamp);
    b.mtime = new Date(a.timestamp);
    b.ctime = new Date(a.timestamp);
    b.pb = 4096;
    b.blocks = Math.ceil(b.size / b.pb);
    return b;
  }, u:function(a, b) {
    void 0 !== b.mode && (a.mode = b.mode);
    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
    void 0 !== b.size && y.Sb(a, b.size);
  }, lookup:function() {
    throw e.ya[44];
  }, H:function(a, b, c, f) {
    return y.createNode(a, b, c, f);
  }, rename:function(a, b, c) {
    if (e.o(a.mode)) {
      try {
        var f = e.G(b, c);
      } catch (h) {
      }
      if (f) {
        for (var g in f.c) {
          throw new e.b(55);
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
    var c = e.G(a, b), f;
    for (f in c.c) {
      throw new e.b(55);
    }
    delete a.c[b];
  }, readdir:function(a) {
    var b = [".", ".."], c;
    for (c in a.c) {
      a.c.hasOwnProperty(c) && b.push(c);
    }
    return b;
  }, symlink:function(a, b, c) {
    a = y.createNode(a, b, 41471, 0);
    a.link = c;
    return a;
  }, readlink:function(a) {
    if (!e.S(a.mode)) {
      throw new e.b(28);
    }
    return a.link;
  }}, g:{read:function(a, b, c, f, g) {
    var h = a.node.c;
    if (g >= a.node.i) {
      return 0;
    }
    a = Math.min(a.node.i - g, f);
    k(0 <= a);
    if (8 < a && h.subarray) {
      b.set(h.subarray(g, g + a), c);
    } else {
      for (f = 0; f < a; f++) {
        b[c + f] = h[g + f];
      }
    }
    return a;
  }, write:function(a, b, c, f, g, h) {
    k(!(b instanceof ArrayBuffer));
    b.buffer === I.buffer && (h && R("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)"), h = !1);
    if (!f) {
      return 0;
    }
    a = a.node;
    a.timestamp = Date.now();
    if (b.subarray && (!a.c || a.c.subarray)) {
      if (h) {
        return k(0 === g, "canOwn must imply no weird position inside the file"), a.c = b.subarray(c, c + f), a.i = f;
      }
      if (0 === a.i && 0 === g) {
        return a.c = b.slice(c, c + f), a.i = f;
      }
      if (g + f <= a.i) {
        return a.c.set(b.subarray(c, c + f), g), f;
      }
    }
    y.Sa(a, g + f);
    if (a.c.subarray && b.subarray) {
      a.c.set(b.subarray(c, c + f), g);
    } else {
      for (h = 0; h < f; h++) {
        a.c[g + h] = b[c + h];
      }
    }
    a.i = Math.max(a.i, g + f);
    return f;
  }, A:function(a, b, c) {
    1 === c ? b += a.position : 2 === c && e.isFile(a.node.mode) && (b += a.node.i);
    if (0 > b) {
      throw new e.b(28);
    }
    return b;
  }, aa:function(a, b, c) {
    y.Sa(a.node, b + c);
    a.node.i = Math.max(a.node.i, b + c);
  }, ea:function(a, b, c, f, g, h, m) {
    k(!(b instanceof ArrayBuffer));
    if (!e.isFile(a.node.mode)) {
      throw new e.b(43);
    }
    a = a.node.c;
    if (m & 2 || a.buffer !== b.buffer) {
      if (0 < g || g + f < a.length) {
        a.subarray ? a = a.subarray(g, g + f) : a = Array.prototype.slice.call(a, g, g + f);
      }
      g = !0;
      m = b.buffer == I.buffer;
      f = fb(f);
      if (!f) {
        throw new e.b(48);
      }
      (m ? I : b).set(a, f);
    } else {
      g = !1, f = a.byteOffset;
    }
    return {Te:f, se:g};
  }, X:function(a, b, c, f, g) {
    if (!e.isFile(a.node.mode)) {
      throw new e.b(43);
    }
    if (g & 2) {
      return 0;
    }
    y.g.write(a, b, 0, f, c, !1);
    return 0;
  }}}, Qb = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
  18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
  38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
  55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
  75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
  118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
  133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized"}, yb = {Sd:63, rd:44, ee:71, Mc:27, Oc:29, Od:60, $b:1, sd:45, jc:8, sc:12, fc:6, oe:6, wd:48, ac:2, Fc:21, Fd:105, qc:10, Ec:20, pe:75, qd:43, Hd:54, Qc:31, Nc:28, ld:41, 
  bd:33, Md:59, le:74, Gc:22, Bd:51, de:70, ae:69, cd:34, Ud:64, Bc:18, Yd:68, xd:49, Jc:24, tc:106, Sc:156, Tc:107, Uc:108, $c:109, me:110, od:111, Rc:112, yc:16, td:46, ic:113, mc:114, qe:115, md:104, nc:103, oc:102, zc:16, pc:101, Dd:100, pd:116, ie:117, Cd:118, yd:119, zd:120, $d:121, ud:47, dc:122, fe:123, uc:124, Vd:65, ed:36, Cc:125, lc:9, Nd:126, kc:127, Zd:128, Vc:129, Wc:130, Zc:131, Yc:132, Xc:133, Ed:52, Id:55, gd:37, ad:32, Pd:138, Td:139, xc:15, nd:42, ec:5, Xd:67, Kd:57, Ad:50, be:140, 
  wc:14, bc:3, vc:13, kd:40, hd:38, je:73, Hc:142, Ic:23, Lc:26, hc:7, Ac:17, dd:35, Wd:66, ce:137, cc:4, jd:39, Pc:30, Gd:53, ke:141, ne:136, Dc:19, ge:72, Ld:138, vd:148, Kc:25, Qd:61, rc:11, Jd:56, Rd:62, he:135}, e = {root:null, ga:[], Qa:{}, streams:[], Mb:1, I:null, Pa:"/", ka:!1, ab:!0, s:{}, gb:{cb:{lb:1, mb:2}}, b:null, ya:{}, Ta:null, ha:0, Le:function(a) {
    if (!(a instanceof e.b)) {
      throw a + " : " + kb();
    }
    return Y(a.j);
  }, h:function(a, b) {
    a = P.resolve(e.cwd(), a);
    b = b || {};
    if (!a) {
      return {path:"", node:null};
    }
    var c = {wa:!0, Ia:0}, f;
    for (f in c) {
      void 0 === b[f] && (b[f] = c[f]);
    }
    if (8 < b.Ia) {
      throw new e.b(32);
    }
    a = A.Fa(a.split("/").filter(function(m) {
      return !!m;
    }), !1);
    var g = e.root;
    c = "/";
    for (f = 0; f < a.length; f++) {
      var h = f === a.length - 1;
      if (h && b.parent) {
        break;
      }
      g = e.G(g, a[f]);
      c = A.K(c, a[f]);
      e.T(g) && (!h || h && b.wa) && (g = g.fa.root);
      if (!h || b.B) {
        for (h = 0; e.S(g.mode);) {
          if (g = e.readlink(c), c = P.resolve(A.dirname(c), g), g = e.h(c, {Ia:b.Ia}).node, 40 < h++) {
            throw new e.b(32);
          }
        }
      }
    }
    return {path:c, node:g};
  }, C:function(a) {
    for (var b;;) {
      if (e.la(a)) {
        return a = a.l.bb, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
      }
      b = b ? a.name + "/" + b : a.name;
      a = a.parent;
    }
  }, za:function(a, b) {
    for (var c = 0, f = 0; f < b.length; f++) {
      c = (c << 5) - c + b.charCodeAt(f) | 0;
    }
    return (a + c >>> 0) % e.I.length;
  }, Za:function(a) {
    var b = e.za(a.parent.id, a.name);
    a.V = e.I[b];
    e.I[b] = a;
  }, $a:function(a) {
    var b = e.za(a.parent.id, a.name);
    if (e.I[b] === a) {
      e.I[b] = a.V;
    } else {
      for (b = e.I[b]; b;) {
        if (b.V === a) {
          b.V = a.V;
          break;
        }
        b = b.V;
      }
    }
  }, G:function(a, b) {
    var c = e.Jb(a);
    if (c) {
      throw new e.b(c, a);
    }
    for (c = e.I[e.za(a.id, b)]; c; c = c.V) {
      var f = c.name;
      if (c.parent.id === a.id && f === b) {
        return c;
      }
    }
    return e.lookup(a, b);
  }, createNode:function(a, b, c, f) {
    a = new e.jb(a, b, c, f);
    e.Za(a);
    return a;
  }, ua:function(a) {
    e.$a(a);
  }, la:function(a) {
    return a === a.parent;
  }, T:function(a) {
    return !!a.fa;
  }, isFile:function(a) {
    return 32768 === (a & 61440);
  }, o:function(a) {
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
    var b = e.Eb[a];
    if ("undefined" === typeof b) {
      throw Error("Unknown file open mode: " + a);
    }
    return b;
  }, Ua:function(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b;
  }, O:function(a, b) {
    if (e.ab) {
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
    var b = e.O(a, "x");
    return b ? b : a.f.lookup ? 0 : 2;
  }, Ea:function(a, b) {
    try {
      return e.G(a, b), 20;
    } catch (c) {
    }
    return e.O(a, "wx");
  }, ma:function(a, b, c) {
    try {
      var f = e.G(a, b);
    } catch (g) {
      return g.j;
    }
    if (a = e.O(a, "wx")) {
      return a;
    }
    if (c) {
      if (!e.o(f.mode)) {
        return 54;
      }
      if (e.la(f) || e.C(f) === e.cwd()) {
        return 10;
      }
    } else {
      if (e.o(f.mode)) {
        return 31;
      }
    }
    return 0;
  }, Kb:function(a, b) {
    return a ? e.S(a.mode) ? 32 : e.o(a.mode) && ("r" !== e.Ua(b) || b & 512) ? 31 : e.O(a, e.Ua(b)) : 44;
  }, kb:4096, Nb:function(a, b) {
    b = b || e.kb;
    for (a = a || 0; a <= b; a++) {
      if (!e.streams[a]) {
        return a;
      }
    }
    throw new e.b(33);
  }, M:function(a) {
    return e.streams[a];
  }, zb:function(a, b, c) {
    e.ra || (e.ra = function() {
    }, e.ra.prototype = {object:{get:function() {
      return this.node;
    }, set:function(h) {
      this.node = h;
    }}});
    var f = new e.ra, g;
    for (g in a) {
      f[g] = a[g];
    }
    a = f;
    b = e.Nb(b, c);
    a.fd = b;
    return e.streams[b] = a;
  }, tb:function(a) {
    e.streams[a] = null;
  }, sb:{open:function(a) {
    a.g = e.Gb(a.node.rdev).g;
    a.g.open && a.g.open(a);
  }, A:function() {
    throw new e.b(70);
  }}, Da:function(a) {
    return a >> 8;
  }, Pe:function(a) {
    return a & 255;
  }, U:function(a, b) {
    return a << 8 | b;
  }, Ja:function(a, b) {
    e.Qa[a] = {g:b};
  }, Gb:function(a) {
    return e.Qa[a];
  }, Wa:function(a) {
    var b = [];
    for (a = [a]; a.length;) {
      var c = a.pop();
      b.push(c);
      a.push.apply(a, c.ga);
    }
    return b;
  }, fb:function(a, b) {
    function c(m) {
      k(0 < e.ha);
      e.ha--;
      return b(m);
    }
    function f(m) {
      if (m) {
        if (!f.m) {
          return f.m = !0, c(m);
        }
      } else {
        ++h >= g.length && c(null);
      }
    }
    "function" === typeof a && (b = a, a = !1);
    e.ha++;
    1 < e.ha && E("warning: " + e.ha + " FS.syncfs operations in flight at once, probably just doing extra work");
    var g = e.Wa(e.root.l), h = 0;
    g.forEach(function(m) {
      if (!m.type.fb) {
        return f(null);
      }
      m.type.fb(m, a, f);
    });
  }, l:function(a, b, c) {
    if ("string" === typeof a) {
      throw a;
    }
    var f = "/" === c, g = !c;
    if (f && e.root) {
      throw new e.b(10);
    }
    if (!f && !g) {
      var h = e.h(c, {wa:!1});
      c = h.path;
      h = h.node;
      if (e.T(h)) {
        throw new e.b(10);
      }
      if (!e.o(h.mode)) {
        throw new e.b(54);
      }
    }
    b = {type:a, Se:b, bb:c, ga:[]};
    a = a.l(b);
    a.l = b;
    b.root = a;
    f ? e.root = a : h && (h.fa = b, h.l && h.l.ga.push(b));
    return a;
  }, Ye:function(a) {
    a = e.h(a, {wa:!1});
    if (!e.T(a.node)) {
      throw new e.b(28);
    }
    a = a.node;
    var b = a.fa, c = e.Wa(b);
    Object.keys(e.I).forEach(function(f) {
      for (f = e.I[f]; f;) {
        var g = f.V;
        -1 !== c.indexOf(f.l) && e.ua(f);
        f = g;
      }
    });
    a.fa = null;
    b = a.l.ga.indexOf(b);
    k(-1 !== b);
    a.l.ga.splice(b, 1);
  }, lookup:function(a, b) {
    return a.f.lookup(a, b);
  }, H:function(a, b, c) {
    var f = e.h(a, {parent:!0}).node;
    a = A.basename(a);
    if (!a || "." === a || ".." === a) {
      throw new e.b(28);
    }
    var g = e.Ea(f, a);
    if (g) {
      throw new e.b(g);
    }
    if (!f.f.H) {
      throw new e.b(63);
    }
    return f.f.H(f, a, b, c);
  }, create:function(a, b) {
    return e.H(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
  }, mkdir:function(a, b) {
    return e.H(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
  }, Qe:function(a, b) {
    a = a.split("/");
    for (var c = "", f = 0; f < a.length; ++f) {
      if (a[f]) {
        c += "/" + a[f];
        try {
          e.mkdir(c, b);
        } catch (g) {
          if (20 != g.j) {
            throw g;
          }
        }
      }
    }
  }, na:function(a, b, c) {
    "undefined" === typeof c && (c = b, b = 438);
    return e.H(a, b | 8192, c);
  }, symlink:function(a, b) {
    if (!P.resolve(a)) {
      throw new e.b(44);
    }
    var c = e.h(b, {parent:!0}).node;
    if (!c) {
      throw new e.b(44);
    }
    b = A.basename(b);
    var f = e.Ea(c, b);
    if (f) {
      throw new e.b(f);
    }
    if (!c.f.symlink) {
      throw new e.b(63);
    }
    return c.f.symlink(c, b, a);
  }, rename:function(a, b) {
    var c = A.dirname(a), f = A.dirname(b), g = A.basename(a), h = A.basename(b);
    try {
      var m = e.h(a, {parent:!0});
      var r = m.node;
      m = e.h(b, {parent:!0});
      var x = m.node;
    } catch (v) {
      throw new e.b(10);
    }
    if (!r || !x) {
      throw new e.b(44);
    }
    if (r.l !== x.l) {
      throw new e.b(75);
    }
    m = e.G(r, g);
    f = P.relative(a, f);
    if ("." !== f.charAt(0)) {
      throw new e.b(28);
    }
    f = P.relative(b, c);
    if ("." !== f.charAt(0)) {
      throw new e.b(55);
    }
    try {
      var q = e.G(x, h);
    } catch (v) {
    }
    if (m !== q) {
      c = e.o(m.mode);
      if (g = e.ma(r, g, c)) {
        throw new e.b(g);
      }
      if (g = q ? e.ma(x, h, c) : e.Ea(x, h)) {
        throw new e.b(g);
      }
      if (!r.f.rename) {
        throw new e.b(63);
      }
      if (e.T(m) || q && e.T(q)) {
        throw new e.b(10);
      }
      if (x !== r && (g = e.O(r, "w"))) {
        throw new e.b(g);
      }
      try {
        e.s.willMovePath && e.s.willMovePath(a, b);
      } catch (v) {
        E("FS.trackingDelegate['willMovePath']('" + a + "', '" + b + "') threw an exception: " + v.message);
      }
      e.$a(m);
      try {
        r.f.rename(m, x, h);
      } catch (v) {
        throw v;
      } finally {
        e.Za(m);
      }
      try {
        if (e.s.onMovePath) {
          e.s.onMovePath(a, b);
        }
      } catch (v) {
        E("FS.trackingDelegate['onMovePath']('" + a + "', '" + b + "') threw an exception: " + v.message);
      }
    }
  }, rmdir:function(a) {
    var b = e.h(a, {parent:!0}).node, c = A.basename(a), f = e.G(b, c), g = e.ma(b, c, !0);
    if (g) {
      throw new e.b(g);
    }
    if (!b.f.rmdir) {
      throw new e.b(63);
    }
    if (e.T(f)) {
      throw new e.b(10);
    }
    try {
      e.s.willDeletePath && e.s.willDeletePath(a);
    } catch (h) {
      E("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message);
    }
    b.f.rmdir(b, c);
    e.ua(f);
    try {
      if (e.s.onDeletePath) {
        e.s.onDeletePath(a);
      }
    } catch (h) {
      E("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + h.message);
    }
  }, readdir:function(a) {
    a = e.h(a, {B:!0}).node;
    if (!a.f.readdir) {
      throw new e.b(54);
    }
    return a.f.readdir(a);
  }, unlink:function(a) {
    var b = e.h(a, {parent:!0}).node, c = A.basename(a), f = e.G(b, c), g = e.ma(b, c, !1);
    if (g) {
      throw new e.b(g);
    }
    if (!b.f.unlink) {
      throw new e.b(63);
    }
    if (e.T(f)) {
      throw new e.b(10);
    }
    try {
      e.s.willDeletePath && e.s.willDeletePath(a);
    } catch (h) {
      E("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message);
    }
    b.f.unlink(b, c);
    e.ua(f);
    try {
      if (e.s.onDeletePath) {
        e.s.onDeletePath(a);
      }
    } catch (h) {
      E("FS.trackingDelegate['onDeletePath']('" + a + "') threw an exception: " + h.message);
    }
  }, readlink:function(a) {
    a = e.h(a).node;
    if (!a) {
      throw new e.b(44);
    }
    if (!a.f.readlink) {
      throw new e.b(28);
    }
    return P.resolve(e.C(a.parent), a.f.readlink(a));
  }, stat:function(a, b) {
    a = e.h(a, {B:!b}).node;
    if (!a) {
      throw new e.b(44);
    }
    if (!a.f.F) {
      throw new e.b(63);
    }
    return a.f.F(a);
  }, lstat:function(a) {
    return e.stat(a, !0);
  }, chmod:function(a, b, c) {
    var f;
    "string" === typeof a ? f = e.h(a, {B:!c}).node : f = a;
    if (!f.f.u) {
      throw new e.b(63);
    }
    f.f.u(f, {mode:b & 4095 | f.mode & -4096, timestamp:Date.now()});
  }, lchmod:function(a, b) {
    e.chmod(a, b, !0);
  }, fchmod:function(a, b) {
    a = e.M(a);
    if (!a) {
      throw new e.b(8);
    }
    e.chmod(a.node, b);
  }, chown:function(a, b, c, f) {
    var g;
    "string" === typeof a ? g = e.h(a, {B:!f}).node : g = a;
    if (!g.f.u) {
      throw new e.b(63);
    }
    g.f.u(g, {timestamp:Date.now()});
  }, lchown:function(a, b, c) {
    e.chown(a, b, c, !0);
  }, fchown:function(a, b, c) {
    a = e.M(a);
    if (!a) {
      throw new e.b(8);
    }
    e.chown(a.node, b, c);
  }, truncate:function(a, b) {
    if (0 > b) {
      throw new e.b(28);
    }
    var c;
    "string" === typeof a ? c = e.h(a, {B:!0}).node : c = a;
    if (!c.f.u) {
      throw new e.b(63);
    }
    if (e.o(c.mode)) {
      throw new e.b(31);
    }
    if (!e.isFile(c.mode)) {
      throw new e.b(28);
    }
    if (a = e.O(c, "w")) {
      throw new e.b(a);
    }
    c.f.u(c, {size:b, timestamp:Date.now()});
  }, He:function(a, b) {
    a = e.M(a);
    if (!a) {
      throw new e.b(8);
    }
    if (0 === (a.flags & 2097155)) {
      throw new e.b(28);
    }
    e.truncate(a.node, b);
  }, Ze:function(a, b, c) {
    a = e.h(a, {B:!0}).node;
    a.f.u(a, {timestamp:Math.max(b, c)});
  }, open:function(a, b, c, f, g) {
    if ("" === a) {
      throw new e.b(44);
    }
    b = "string" === typeof b ? e.Lb(b) : b;
    c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" === typeof a) {
      var h = a;
    } else {
      a = A.normalize(a);
      try {
        h = e.h(a, {B:!(b & 131072)}).node;
      } catch (r) {
      }
    }
    var m = !1;
    if (b & 64) {
      if (h) {
        if (b & 128) {
          throw new e.b(20);
        }
      } else {
        h = e.H(a, c, 0), m = !0;
      }
    }
    if (!h) {
      throw new e.b(44);
    }
    e.ba(h.mode) && (b &= -513);
    if (b & 65536 && !e.o(h.mode)) {
      throw new e.b(54);
    }
    if (!m && (c = e.Kb(h, b))) {
      throw new e.b(c);
    }
    b & 512 && e.truncate(h, 0);
    b &= -131713;
    f = e.zb({node:h, path:e.C(h), flags:b, seekable:!0, position:0, g:h.g, Zb:[], error:!1}, f, g);
    f.g.open && f.g.open(f);
    !d.logReadFiles || b & 1 || (e.Ha || (e.Ha = {}), a in e.Ha || (e.Ha[a] = 1, E("FS.trackingDelegate error on read file: " + a)));
    try {
      e.s.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= e.gb.cb.lb), 0 !== (b & 2097155) && (g |= e.gb.cb.mb), e.s.onOpenFile(a, g));
    } catch (r) {
      E("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + r.message);
    }
    return f;
  }, close:function(a) {
    if (e.da(a)) {
      throw new e.b(8);
    }
    a.R && (a.R = null);
    try {
      a.g.close && a.g.close(a);
    } catch (b) {
      throw b;
    } finally {
      e.tb(a.fd);
    }
    a.fd = null;
  }, da:function(a) {
    return null === a.fd;
  }, A:function(a, b, c) {
    if (e.da(a)) {
      throw new e.b(8);
    }
    if (!a.seekable || !a.g.A) {
      throw new e.b(70);
    }
    if (0 != c && 1 != c && 2 != c) {
      throw new e.b(28);
    }
    a.position = a.g.A(a, b, c);
    a.Zb = [];
    return a.position;
  }, read:function(a, b, c, f, g) {
    if (0 > f || 0 > g) {
      throw new e.b(28);
    }
    if (e.da(a)) {
      throw new e.b(8);
    }
    if (1 === (a.flags & 2097155)) {
      throw new e.b(8);
    }
    if (e.o(a.node.mode)) {
      throw new e.b(31);
    }
    if (!a.g.read) {
      throw new e.b(28);
    }
    var h = "undefined" !== typeof g;
    if (!h) {
      g = a.position;
    } else {
      if (!a.seekable) {
        throw new e.b(70);
      }
    }
    b = a.g.read(a, b, c, f, g);
    h || (a.position += b);
    return b;
  }, write:function(a, b, c, f, g, h) {
    if (0 > f || 0 > g) {
      throw new e.b(28);
    }
    if (e.da(a)) {
      throw new e.b(8);
    }
    if (0 === (a.flags & 2097155)) {
      throw new e.b(8);
    }
    if (e.o(a.node.mode)) {
      throw new e.b(31);
    }
    if (!a.g.write) {
      throw new e.b(28);
    }
    a.seekable && a.flags & 1024 && e.A(a, 0, 2);
    var m = "undefined" !== typeof g;
    if (!m) {
      g = a.position;
    } else {
      if (!a.seekable) {
        throw new e.b(70);
      }
    }
    b = a.g.write(a, b, c, f, g, h);
    m || (a.position += b);
    try {
      if (a.path && e.s.onWriteToFile) {
        e.s.onWriteToFile(a.path);
      }
    } catch (r) {
      E("FS.trackingDelegate['onWriteToFile']('" + a.path + "') threw an exception: " + r.message);
    }
    return b;
  }, aa:function(a, b, c) {
    if (e.da(a)) {
      throw new e.b(8);
    }
    if (0 > b || 0 >= c) {
      throw new e.b(28);
    }
    if (0 === (a.flags & 2097155)) {
      throw new e.b(8);
    }
    if (!e.isFile(a.node.mode) && !e.o(a.node.mode)) {
      throw new e.b(43);
    }
    if (!a.g.aa) {
      throw new e.b(138);
    }
    a.g.aa(a, b, c);
  }, ea:function(a, b, c, f, g, h, m) {
    if (0 !== (h & 2) && 0 === (m & 2) && 2 !== (a.flags & 2097155)) {
      throw new e.b(2);
    }
    if (1 === (a.flags & 2097155)) {
      throw new e.b(2);
    }
    if (!a.g.ea) {
      throw new e.b(43);
    }
    return a.g.ea(a, b, c, f, g, h, m);
  }, X:function(a, b, c, f, g) {
    return a && a.g.X ? a.g.X(a, b, c, f, g) : 0;
  }, Re:function() {
    return 0;
  }, Aa:function(a, b, c) {
    if (!a.g.Aa) {
      throw new e.b(59);
    }
    return a.g.Aa(a, b, c);
  }, readFile:function(a, b) {
    b = b || {};
    b.flags = b.flags || "r";
    b.encoding = b.encoding || "binary";
    if ("utf8" !== b.encoding && "binary" !== b.encoding) {
      throw Error('Invalid encoding type "' + b.encoding + '"');
    }
    var c, f = e.open(a, b.flags);
    a = e.stat(a).size;
    var g = new Uint8Array(a);
    e.read(f, g, 0, a, 0);
    "utf8" === b.encoding ? c = Q(g, 0) : "binary" === b.encoding && (c = g);
    e.close(f);
    return c;
  }, writeFile:function(a, b, c) {
    c = c || {};
    c.flags = c.flags || "w";
    a = e.open(a, c.flags, c.mode);
    if ("string" === typeof b) {
      var f = new Uint8Array(la(b) + 1);
      b = ka(b, f, 0, f.length);
      e.write(a, f, 0, b, void 0, c.rb);
    } else {
      if (ArrayBuffer.isView(b)) {
        e.write(a, b, 0, b.byteLength, void 0, c.rb);
      } else {
        throw Error("Unsupported data type");
      }
    }
    e.close(a);
  }, cwd:function() {
    return e.Pa;
  }, chdir:function(a) {
    a = e.h(a, {B:!0});
    if (null === a.node) {
      throw new e.b(44);
    }
    if (!e.o(a.node.mode)) {
      throw new e.b(54);
    }
    var b = e.O(a.node, "x");
    if (b) {
      throw new e.b(b);
    }
    e.Pa = a.path;
  }, vb:function() {
    e.mkdir("/tmp");
    e.mkdir("/home");
    e.mkdir("/home/web_user");
  }, ub:function() {
    e.mkdir("/dev");
    e.Ja(e.U(1, 3), {read:function() {
      return 0;
    }, write:function(f, g, h, m) {
      return m;
    }});
    e.na("/dev/null", e.U(1, 3));
    U.register(e.U(5, 0), U.Bb);
    U.register(e.U(6, 0), U.Ab);
    e.na("/dev/tty", e.U(5, 0));
    e.na("/dev/tty1", e.U(6, 0));
    if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
      var a = new Uint8Array(1);
      var b = function() {
        crypto.getRandomValues(a);
        return a[0];
      };
    } else {
      if (W) {
        try {
          var c = require("crypto");
          b = function() {
            return c.randomBytes(1)[0];
          };
        } catch (f) {
        }
      }
    }
    b || (b = function() {
      l("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
    });
    e.L("/dev", "random", b);
    e.L("/dev", "urandom", b);
    e.mkdir("/dev/shm");
    e.mkdir("/dev/shm/tmp");
  }, xb:function() {
    e.mkdir("/proc");
    e.mkdir("/proc/self");
    e.mkdir("/proc/self/fd");
    e.l({l:function() {
      var a = e.createNode("/proc/self", "fd", 16895, 73);
      a.f = {lookup:function(b, c) {
        var f = e.M(+c);
        if (!f) {
          throw new e.b(8);
        }
        b = {parent:null, l:{bb:"fake"}, f:{readlink:function() {
          return f.path;
        }}};
        return b.parent = b;
      }};
      return a;
    }}, {}, "/proc/self/fd");
  }, yb:function() {
    d.stdin ? e.L("/dev", "stdin", d.stdin) : e.symlink("/dev/tty", "/dev/stdin");
    d.stdout ? e.L("/dev", "stdout", null, d.stdout) : e.symlink("/dev/tty", "/dev/stdout");
    d.stderr ? e.L("/dev", "stderr", null, d.stderr) : e.symlink("/dev/tty1", "/dev/stderr");
    var a = e.open("/dev/stdin", "r"), b = e.open("/dev/stdout", "w"), c = e.open("/dev/stderr", "w");
    k(0 === a.fd, "invalid handle for stdin (" + a.fd + ")");
    k(1 === b.fd, "invalid handle for stdout (" + b.fd + ")");
    k(2 === c.fd, "invalid handle for stderr (" + c.fd + ")");
  }, Ra:function() {
    e.b || (e.b = function(a, b) {
      this.node = b;
      this.Tb = function(c) {
        this.j = c;
        for (var f in yb) {
          if (yb[f] === c) {
            this.code = f;
            break;
          }
        }
      };
      this.Tb(a);
      this.message = Qb[a];
      this.stack && (Object.defineProperty(this, "stack", {value:Error().stack, writable:!0}), this.stack = nb(this.stack));
    }, e.b.prototype = Error(), e.b.prototype.constructor = e.b, [44].forEach(function(a) {
      e.ya[a] = new e.b(a);
      e.ya[a].stack = "<generic error, no stack>";
    }));
  }, Ub:function() {
    e.Ra();
    e.I = Array(4096);
    e.l(y, {}, "/");
    e.vb();
    e.ub();
    e.xb();
    e.Ta = {MEMFS:y};
  }, N:function(a, b, c) {
    k(!e.N.ka, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    e.N.ka = !0;
    e.Ra();
    d.stdin = a || d.stdin;
    d.stdout = b || d.stdout;
    d.stderr = c || d.stderr;
    e.yb();
  }, quit:function() {
    e.N.ka = !1;
    var a = d._fflush;
    a && a(0);
    for (a = 0; a < e.streams.length; a++) {
      var b = e.streams[a];
      b && e.close(b);
    }
  }, ja:function(a, b) {
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c;
  }, Me:function(a, b) {
    a = A.join.apply(null, a);
    b && "/" == a[0] && (a = a.substr(1));
    return a;
  }, re:function(a, b) {
    return P.resolve(b, a);
  }, We:function(a) {
    return A.normalize(a);
  }, Ge:function(a, b) {
    a = e.sa(a, b);
    if (a.exists) {
      return a.object;
    }
    Y(a.error);
    return null;
  }, sa:function(a, b) {
    try {
      var c = e.h(a, {B:!b});
      a = c.path;
    } catch (g) {
    }
    var f = {la:!1, exists:!1, error:0, name:null, path:null, object:null, Ob:!1, Qb:null, Pb:null};
    try {
      c = e.h(a, {parent:!0}), f.Ob = !0, f.Qb = c.path, f.Pb = c.node, f.name = A.basename(a), c = e.h(a, {B:!b}), f.exists = !0, f.path = c.path, f.object = c.node, f.name = c.node.name, f.la = "/" === c.path;
    } catch (g) {
      f.error = g.j;
    }
    return f;
  }, ve:function(a, b, c, f) {
    a = A.K("string" === typeof a ? a : e.C(a), b);
    return e.mkdir(a, e.ja(c, f));
  }, ye:function(a, b) {
    a = "string" === typeof a ? a : e.C(a);
    for (b = b.split("/").reverse(); b.length;) {
      var c = b.pop();
      if (c) {
        var f = A.K(a, c);
        try {
          e.mkdir(f);
        } catch (g) {
        }
        a = f;
      }
    }
    return f;
  }, wb:function(a, b, c, f, g) {
    a = A.K("string" === typeof a ? a : e.C(a), b);
    return e.create(a, e.ja(f, g));
  }, Oa:function(a, b, c, f, g, h) {
    a = b ? A.K("string" === typeof a ? a : e.C(a), b) : a;
    f = e.ja(f, g);
    g = e.create(a, f);
    if (c) {
      if ("string" === typeof c) {
        a = Array(c.length);
        b = 0;
        for (var m = c.length; b < m; ++b) {
          a[b] = c.charCodeAt(b);
        }
        c = a;
      }
      e.chmod(g, f | 146);
      a = e.open(g, "w");
      e.write(a, c, 0, c.length, 0, h);
      e.close(a);
      e.chmod(g, f);
    }
    return g;
  }, L:function(a, b, c, f) {
    a = A.K("string" === typeof a ? a : e.C(a), b);
    b = e.ja(!!c, !!f);
    e.L.Da || (e.L.Da = 64);
    var g = e.U(e.L.Da++, 0);
    e.Ja(g, {open:function(h) {
      h.seekable = !1;
    }, close:function() {
      f && f.buffer && f.buffer.length && f(10);
    }, read:function(h, m, r, x) {
      for (var q = 0, v = 0; v < x; v++) {
        try {
          var D = c();
        } catch (G) {
          throw new e.b(29);
        }
        if (void 0 === D && 0 === q) {
          throw new e.b(6);
        }
        if (null === D || void 0 === D) {
          break;
        }
        q++;
        m[r + v] = D;
      }
      q && (h.node.timestamp = Date.now());
      return q;
    }, write:function(h, m, r, x) {
      for (var q = 0; q < x; q++) {
        try {
          f(m[r + q]);
        } catch (v) {
          throw new e.b(29);
        }
      }
      x && (h.node.timestamp = Date.now());
      return q;
    }});
    return e.na(a, b, g);
  }, xe:function(a, b, c) {
    a = A.K("string" === typeof a ? a : e.C(a), b);
    return e.symlink(c, a);
  }, Va:function(a) {
    if (a.Ba || a.Ib || a.link || a.c) {
      return !0;
    }
    var b = !0;
    if ("undefined" !== typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    if (va) {
      try {
        a.c = Ka(va(a.url), !0), a.i = a.c.length;
      } catch (c) {
        b = !1;
      }
    } else {
      throw Error("Cannot load without read() or XMLHttpRequest.");
    }
    b || Y(29);
    return b;
  }, we:function(a, b, c, f, g) {
    function h() {
      this.Ca = !1;
      this.m = [];
    }
    h.prototype.get = function(q) {
      if (!(q > this.length - 1 || 0 > q)) {
        var v = q % this.chunkSize;
        return this.Ya(q / this.chunkSize | 0)[v];
      }
    };
    h.prototype.qb = function(q) {
      this.Ya = q;
    };
    h.prototype.Ma = function() {
      var q = new XMLHttpRequest;
      q.open("HEAD", c, !1);
      q.send(null);
      if (!(200 <= q.status && 300 > q.status || 304 === q.status)) {
        throw Error("Couldn't load " + c + ". Status: " + q.status);
      }
      var v = Number(q.getResponseHeader("Content-length")), D, G = (D = q.getResponseHeader("Accept-Ranges")) && "bytes" === D;
      q = (D = q.getResponseHeader("Content-Encoding")) && "gzip" === D;
      var n = 1048576;
      G || (n = v);
      var w = this;
      w.qb(function(B) {
        var H = B * n, L = (B + 1) * n - 1;
        L = Math.min(L, v - 1);
        if ("undefined" === typeof w.m[B]) {
          var Za = w.m;
          if (H > L) {
            throw Error("invalid range (" + H + ", " + L + ") or no bytes requested!");
          }
          if (L > v - 1) {
            throw Error("only " + v + " bytes available! programmer error!");
          }
          var F = new XMLHttpRequest;
          F.open("GET", c, !1);
          v !== n && F.setRequestHeader("Range", "bytes=" + H + "-" + L);
          "undefined" != typeof Uint8Array && (F.responseType = "arraybuffer");
          F.overrideMimeType && F.overrideMimeType("text/plain; charset=x-user-defined");
          F.send(null);
          if (!(200 <= F.status && 300 > F.status || 304 === F.status)) {
            throw Error("Couldn't load " + c + ". Status: " + F.status);
          }
          H = void 0 !== F.response ? new Uint8Array(F.response || []) : Ka(F.responseText || "", !0);
          Za[B] = H;
        }
        if ("undefined" === typeof w.m[B]) {
          throw Error("doXHR failed!");
        }
        return w.m[B];
      });
      if (q || !v) {
        n = v = 1, n = v = this.Ya(0).length, ha("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.ob = v;
      this.nb = n;
      this.Ca = !0;
    };
    if ("undefined" !== typeof XMLHttpRequest) {
      if (!T) {
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      }
      var m = new h;
      Object.defineProperties(m, {length:{get:function() {
        this.Ca || this.Ma();
        return this.ob;
      }}, chunkSize:{get:function() {
        this.Ca || this.Ma();
        return this.nb;
      }}});
      m = {Ba:!1, c:m};
    } else {
      m = {Ba:!1, url:c};
    }
    var r = e.wb(a, b, m, f, g);
    m.c ? r.c = m.c : m.url && (r.c = null, r.url = m.url);
    Object.defineProperties(r, {i:{get:function() {
      return this.c.length;
    }}});
    var x = {};
    Object.keys(r.g).forEach(function(q) {
      var v = r.g[q];
      x[q] = function() {
        if (!e.Va(r)) {
          throw new e.b(29);
        }
        return v.apply(null, arguments);
      };
    });
    x.read = function(q, v, D, G, n) {
      if (!e.Va(r)) {
        throw new e.b(29);
      }
      q = q.node.c;
      if (n >= q.length) {
        return 0;
      }
      G = Math.min(q.length - n, G);
      k(0 <= G);
      if (q.slice) {
        for (var w = 0; w < G; w++) {
          v[D + w] = q[n + w];
        }
      } else {
        for (w = 0; w < G; w++) {
          v[D + w] = q.get(n + w);
        }
      }
      return G;
    };
    r.g = x;
    return r;
  }, ze:function(a, b, c, f, g, h, m, r, x, q) {
    function v(n) {
      function w(H) {
        q && q();
        r || e.Oa(a, b, H, f, g, x);
        h && h();
        Sa(G);
      }
      var B = !1;
      d.preloadPlugins.forEach(function(H) {
        !B && H.canHandle(D) && (H.handle(n, D, w, function() {
          m && m();
          Sa(G);
        }), B = !0);
      });
      B || w(n);
    }
    zb.N();
    var D = b ? P.resolve(A.K(a, b)) : a, G = Fb("cp " + D);
    jb(G);
    "string" == typeof c ? zb.te(c, function(n) {
      v(n);
    }, m) : v(c);
  }, indexedDB:function() {
    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  }, Ka:function() {
    return "EM_FS_" + window.location.pathname;
  }, La:20, $:"FILE_DATA", Ue:function(a, b, c) {
    b = b || function() {
    };
    c = c || function() {
    };
    var f = e.indexedDB();
    try {
      var g = f.open(e.Ka(), e.La);
    } catch (h) {
      return c(h);
    }
    g.onupgradeneeded = function() {
      ha("creating db");
      g.result.createObjectStore(e.$);
    };
    g.onsuccess = function() {
      var h = g.result.transaction([e.$], "readwrite"), m = h.objectStore(e.$), r = 0, x = 0, q = a.length;
      a.forEach(function(v) {
        v = m.put(e.sa(v).object.c, v);
        v.onsuccess = function() {
          r++;
          r + x == q && (0 == x ? b() : c());
        };
        v.onerror = function() {
          x++;
          r + x == q && (0 == x ? b() : c());
        };
      });
      h.onerror = c;
    };
    g.onerror = c;
  }, Ne:function(a, b, c) {
    b = b || function() {
    };
    c = c || function() {
    };
    var f = e.indexedDB();
    try {
      var g = f.open(e.Ka(), e.La);
    } catch (h) {
      return c(h);
    }
    g.onupgradeneeded = c;
    g.onsuccess = function() {
      var h = g.result;
      try {
        var m = h.transaction([e.$], "readonly");
      } catch (D) {
        c(D);
        return;
      }
      var r = m.objectStore(e.$), x = 0, q = 0, v = a.length;
      a.forEach(function(D) {
        var G = r.get(D);
        G.onsuccess = function() {
          e.sa(D).exists && e.unlink(D);
          e.Oa(A.dirname(D), A.basename(D), G.result, !0, !0, !0);
          x++;
          x + q == v && (0 == q ? b() : c());
        };
        G.onerror = function() {
          q++;
          x + q == v && (0 == q ? b() : c());
        };
      });
      m.onerror = c;
    };
    g.onerror = c;
  }}, z = {Oe:{}, ib:5, umask:511, ue:function(a, b) {
    if ("/" !== b[0]) {
      if (-100 === a) {
        a = e.cwd();
      } else {
        a = e.M(a);
        if (!a) {
          throw new e.b(8);
        }
        a = a.path;
      }
      b = A.K(a, b);
    }
    return b;
  }, va:function(a, b, c) {
    try {
      var f = a(b);
    } catch (g) {
      if (g && g.node && A.normalize(b) !== A.normalize(e.C(g.node))) {
        return -54;
      }
      throw g;
    }
    p[c >> 2] = f.dev;
    p[c + 4 >> 2] = 0;
    p[c + 8 >> 2] = f.ino;
    p[c + 12 >> 2] = f.mode;
    p[c + 16 >> 2] = f.nlink;
    p[c + 20 >> 2] = f.uid;
    p[c + 24 >> 2] = f.gid;
    p[c + 28 >> 2] = f.rdev;
    p[c + 32 >> 2] = 0;
    J = [f.size >>> 0, (C = f.size, 1.0 <= +xa(C) ? 0.0 < C ? (ya(+ba(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+aa((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
    p[c + 40 >> 2] = J[0];
    p[c + 44 >> 2] = J[1];
    p[c + 48 >> 2] = 4096;
    p[c + 52 >> 2] = f.blocks;
    p[c + 56 >> 2] = f.atime.getTime() / 1000 | 0;
    p[c + 60 >> 2] = 0;
    p[c + 64 >> 2] = f.mtime.getTime() / 1000 | 0;
    p[c + 68 >> 2] = 0;
    p[c + 72 >> 2] = f.ctime.getTime() / 1000 | 0;
    p[c + 76 >> 2] = 0;
    J = [f.ino >>> 0, (C = f.ino, 1.0 <= +xa(C) ? 0.0 < C ? (ya(+ba(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+aa((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
    p[c + 80 >> 2] = J[0];
    p[c + 84 >> 2] = J[1];
    return 0;
  }, Ee:function(a, b, c, f, g) {
    a = da.slice(a, a + c);
    e.X(b, a, g, c, f);
  }, Ce:function(a, b) {
    a = A.normalize(a);
    "/" === a[a.length - 1] && (a = a.substr(0, a.length - 1));
    e.mkdir(a, b, 0);
    return 0;
  }, De:function(a, b, c) {
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
    e.H(a, b, c);
    return 0;
  }, Fe:function(a, b, c) {
    if (0 >= c) {
      return -28;
    }
    a = e.readlink(a);
    var f = Math.min(c, la(a)), g = I[b + f];
    Qa(a, b, c + 1);
    I[b + f] = g;
    return f;
  }, Ae:function(a, b) {
    if (b & -8) {
      return -28;
    }
    a = e.h(a, {B:!0}).node;
    if (!a) {
      return -44;
    }
    var c = "";
    b & 4 && (c += "r");
    b & 2 && (c += "w");
    b & 1 && (c += "x");
    return c && e.O(a, c) ? -2 : 0;
  }, Be:function(a, b, c) {
    var f = e.M(c);
    f && e.close(f);
    return e.open(a, b, 0, c, c).fd;
  }, Cb:function(a, b, c, f) {
    for (var g = 0, h = 0; h < c; h++) {
      var m = p[b + (8 * h + 4) >> 2], r = e.read(a, I, p[b + 8 * h >> 2], m, f);
      if (0 > r) {
        return -1;
      }
      g += r;
      if (r < m) {
        break;
      }
    }
    return g;
  }, Db:function(a, b, c, f) {
    for (var g = 0, h = 0; h < c; h++) {
      var m = e.write(a, I, p[b + 8 * h >> 2], p[b + (8 * h + 4) >> 2], f);
      if (0 > m) {
        return -1;
      }
      g += m;
    }
    return g;
  }, W:void 0, get:function() {
    k(void 0 != z.W);
    z.W += 4;
    return p[z.W - 4 >> 2];
  }, P:function(a) {
    return ca(a);
  }, D:function(a) {
    a = e.M(a);
    if (!a) {
      throw new e.b(8);
    }
    return a;
  }, Ie:function(a, b) {
    0 <= a ? k(0 === b) : k(-1 === b);
    return a;
  }}, ia;
  W ? ia = function() {
    var a = process.hrtime();
    return 1e3 * a[0] + a[1] / 1e6;
  } : "undefined" !== typeof dateNow ? ia = dateNow : ia = function() {
    return performance.now();
  };
  var ob = {}, Ib = (Qa("GMT", 2334240, 4), 2334240), Ia = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ja = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  Object.defineProperties(ab.prototype, {read:{get:function() {
    return 365 === (this.mode & 365);
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }}, write:{get:function() {
    return 146 === (this.mode & 146);
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }}, Ib:{get:function() {
    return e.o(this.mode);
  }}, Ba:{get:function() {
    return e.ba(this.mode);
  }}});
  e.jb = ab;
  e.Ub();
  var zb, Ab = {__assert_fail:function(a, b, c, f) {
    l("Assertion failed: " + ca(a) + ", at: " + [b ? ca(b) : "unknown filename", c, f ? ca(f) : "unknown function"]);
  }, __handle_stack_overflow:function() {
    l("stack overflow");
  }, __sys__newselect:function(a, b, c, f) {
    k(64 >= a, "nfds must be less than or equal to 64");
    k(!f, "exceptfds not supported");
    for (var g = 0, h = b ? p[b >> 2] : 0, m = b ? p[b + 4 >> 2] : 0, r = c ? p[c >> 2] : 0, x = c ? p[c + 4 >> 2] : 0, q = f ? p[f >> 2] : 0, v = f ? p[f + 4 >> 2] : 0, D = 0, G = 0, n = 0, w = 0, B = 0, H = 0, L = (b ? p[b >> 2] : 0) | (c ? p[c >> 2] : 0) | (f ? p[f >> 2] : 0), Za = (b ? p[b + 4 >> 2] : 0) | (c ? p[c + 4 >> 2] : 0) | (f ? p[f + 4 >> 2] : 0), F = 0; F < a; F++) {
      var K = 1 << F % 32;
      if (32 > F ? L & K : Za & K) {
        var Oa = e.M(F);
        if (!Oa) {
          throw new e.b(8);
        }
        var Pa = z.ib;
        Oa.g.Rb && (Pa = Oa.g.Rb(Oa));
        Pa & 1 && (32 > F ? h & K : m & K) && (32 > F ? D |= K : G |= K, g++);
        Pa & 4 && (32 > F ? r & K : x & K) && (32 > F ? n |= K : w |= K, g++);
        Pa & 2 && (32 > F ? q & K : v & K) && (32 > F ? B |= K : H |= K, g++);
      }
    }
    b && (p[b >> 2] = D, p[b + 4 >> 2] = G);
    c && (p[c >> 2] = n, p[c + 4 >> 2] = w);
    f && (p[f >> 2] = B, p[f + 4 >> 2] = H);
    return g;
  }, __sys_fcntl64:function(a, b, c) {
    z.W = c;
    try {
      var f = z.D(a);
      switch(b) {
        case 0:
          var g = z.get();
          return 0 > g ? -28 : e.open(f.path, f.flags, 0, g).fd;
        case 1:
        case 2:
          return 0;
        case 3:
          return f.flags;
        case 4:
          return g = z.get(), f.flags |= g, 0;
        case 12:
          return g = z.get(), Ra[g + 0 >> 1] = 2, 0;
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          return Y(28), -1;
        default:
          return -28;
      }
    } catch (h) {
      return "undefined" !== typeof e && h instanceof e.b || l(h), -h.j;
    }
  }, __sys_fstat64:function(a, b) {
    try {
      var c = z.D(a);
      return z.va(e.stat, c.path, b);
    } catch (f) {
      return "undefined" !== typeof e && f instanceof e.b || l(f), -f.j;
    }
  }, __sys_getdents64:function(a, b, c) {
    try {
      var f = z.D(a);
      f.R || (f.R = e.readdir(f.path));
      a = 0;
      for (var g = e.A(f, 0, 1), h = Math.floor(g / 280); h < f.R.length && a + 280 <= c;) {
        var m = f.R[h];
        if ("." === m[0]) {
          var r = 1;
          var x = 4;
        } else {
          var q = e.G(f.node, m);
          r = q.id;
          x = e.ba(q.mode) ? 2 : e.o(q.mode) ? 4 : e.S(q.mode) ? 10 : 8;
        }
        J = [r >>> 0, (C = r, 1.0 <= +xa(C) ? 0.0 < C ? (ya(+ba(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+aa((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
        p[b + a >> 2] = J[0];
        p[b + a + 4 >> 2] = J[1];
        J = [280 * (h + 1) >>> 0, (C = 280 * (h + 1), 1.0 <= +xa(C) ? 0.0 < C ? (ya(+ba(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+aa((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
        p[b + a + 8 >> 2] = J[0];
        p[b + a + 12 >> 2] = J[1];
        Ra[b + a + 16 >> 1] = 280;
        I[b + a + 18 >> 0] = x;
        Qa(m, b + a + 19, 256);
        a += 280;
        h += 1;
      }
      e.A(f, 280 * h, 0);
      return a;
    } catch (v) {
      return "undefined" !== typeof e && v instanceof e.b || l(v), -v.j;
    }
  }, __sys_ioctl:function(a, b, c) {
    z.W = c;
    try {
      var f = z.D(a);
      switch(b) {
        case 21509:
        case 21505:
          return f.tty ? 0 : -59;
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
          return f.tty ? 0 : -59;
        case 21519:
          if (!f.tty) {
            return -59;
          }
          var g = z.get();
          return p[g >> 2] = 0;
        case 21520:
          return f.tty ? -28 : -59;
        case 21531:
          return g = z.get(), e.Aa(f, b, g);
        case 21523:
          return f.tty ? 0 : -59;
        case 21524:
          return f.tty ? 0 : -59;
        default:
          l("bad ioctl syscall " + b);
      }
    } catch (h) {
      return "undefined" !== typeof e && h instanceof e.b || l(h), -h.j;
    }
  }, __sys_lstat64:function(a, b) {
    try {
      return a = z.P(a), z.va(e.lstat, a, b);
    } catch (c) {
      return "undefined" !== typeof e && c instanceof e.b || l(c), -c.j;
    }
  }, __sys_madvise1:function() {
    return 0;
  }, __sys_open:function(a, b, c) {
    z.W = c;
    try {
      var f = z.P(a), g = z.get();
      return e.open(f, b, g).fd;
    } catch (h) {
      return "undefined" !== typeof e && h instanceof e.b || l(h), -h.j;
    }
  }, __sys_read:function(a, b, c) {
    try {
      var f = z.D(a);
      return e.read(f, I, b, c);
    } catch (g) {
      return "undefined" !== typeof e && g instanceof e.b || l(g), -g.j;
    }
  }, __sys_rename:function(a, b) {
    try {
      return a = z.P(a), b = z.P(b), e.rename(a, b), 0;
    } catch (c) {
      return "undefined" !== typeof e && c instanceof e.b || l(c), -c.j;
    }
  }, __sys_rmdir:function(a) {
    try {
      return a = z.P(a), e.rmdir(a), 0;
    } catch (b) {
      return "undefined" !== typeof e && b instanceof e.b || l(b), -b.j;
    }
  }, __sys_stat64:function(a, b) {
    try {
      return a = z.P(a), z.va(e.stat, a, b);
    } catch (c) {
      return "undefined" !== typeof e && c instanceof e.b || l(c), -c.j;
    }
  }, __sys_unlink:function(a) {
    try {
      return a = z.P(a), e.unlink(a), 0;
    } catch (b) {
      return "undefined" !== typeof e && b instanceof e.b || l(b), -b.j;
    }
  }, abort:function() {
    l();
  }, clock:Da, clock_gettime:function(a, b) {
    if (0 === a) {
      a = Date.now();
    } else {
      if (1 === a || 4 === a) {
        a = ia();
      } else {
        return Y(28), -1;
      }
    }
    p[b >> 2] = a / 1000 | 0;
    p[b + 4 >> 2] = a % 1000 * 1E6 | 0;
    return 0;
  }, emscripten_get_sbrk_ptr:function() {
    return 2334176;
  }, emscripten_memcpy_big:function(a, b, c) {
    da.copyWithin(a, b, b + c);
  }, emscripten_resize_heap:function(a) {
    var b = da.length;
    k(a > b);
    if (2147483648 < a) {
      return E("Cannot enlarge memory, asked to go up to " + a + " bytes, but the limit is 2147483648 bytes!"), !1;
    }
    for (var c = 1; 4 >= c; c *= 2) {
      var f = b * (1 + 0.2 / c);
      f = Math.min(f, a + 100663296);
      f = Math.min(2147483648, Eb(Math.max(16777216, a, f), 65536));
      a: {
        var g = f;
        try {
          Z.grow(g - ma.byteLength + 65535 >>> 16);
          hb(Z.buffer);
          var h = 1;
          break a;
        } catch (m) {
          console.error("emscripten_realloc_buffer: Attempted to grow heap from " + ma.byteLength + " bytes to " + g + " bytes, but got error: " + m);
        }
        h = void 0;
      }
      if (h) {
        return !0;
      }
    }
    E("Failed to grow the heap from " + b + " bytes to " + f + " bytes, not enough memory!");
    return !1;
  }, environ_get:function(a, b) {
    var c = 0;
    ra().forEach(function(f, g) {
      var h = b + c;
      g = p[a + 4 * g >> 2] = h;
      for (h = 0; h < f.length; ++h) {
        k(f.charCodeAt(h) === f.charCodeAt(h) & 255), I[g++ >> 0] = f.charCodeAt(h);
      }
      I[g >> 0] = 0;
      c += f.length + 1;
    });
    return 0;
  }, environ_sizes_get:function(a, b) {
    var c = ra();
    p[a >> 2] = c.length;
    var f = 0;
    c.forEach(function(g) {
      f += g.length + 1;
    });
    p[b >> 2] = f;
    return 0;
  }, exit:function(a) {
    tb(a);
  }, fd_close:function(a) {
    try {
      var b = z.D(a);
      e.close(b);
      return 0;
    } catch (c) {
      return "undefined" !== typeof e && c instanceof e.b || l(c), c.j;
    }
  }, fd_fdstat_get:function(a, b) {
    try {
      var c = z.D(a);
      I[b >> 0] = c.tty ? 2 : e.o(c.mode) ? 3 : e.S(c.mode) ? 7 : 4;
      return 0;
    } catch (f) {
      return "undefined" !== typeof e && f instanceof e.b || l(f), f.j;
    }
  }, fd_read:function(a, b, c, f) {
    try {
      var g = z.D(a), h = z.Cb(g, b, c);
      p[f >> 2] = h;
      return 0;
    } catch (m) {
      return "undefined" !== typeof e && m instanceof e.b || l(m), m.j;
    }
  }, fd_seek:function(a, b, c, f, g) {
    try {
      var h = z.D(a);
      a = 4294967296 * c + (b >>> 0);
      if (-9007199254740992 >= a || 9007199254740992 <= a) {
        return -61;
      }
      e.A(h, a, f);
      J = [h.position >>> 0, (C = h.position, 1.0 <= +xa(C) ? 0.0 < C ? (ya(+ba(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+aa((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
      p[g >> 2] = J[0];
      p[g + 4 >> 2] = J[1];
      h.R && 0 === a && 0 === f && (h.R = null);
      return 0;
    } catch (m) {
      return "undefined" !== typeof e && m instanceof e.b || l(m), m.j;
    }
  }, fd_write:function(a, b, c, f) {
    try {
      var g = z.D(a), h = z.Db(g, b, c);
      p[f >> 2] = h;
      return 0;
    } catch (m) {
      return "undefined" !== typeof e && m instanceof e.b || l(m), m.j;
    }
  }, gmtime:function(a) {
    return pb(a, 2334192);
  }, gmtime_r:pb, localtime:function(a) {
    return qb(a, 2334192);
  }, localtime_r:qb, memory:Z, mktime:function(a) {
    Fa();
    var b = new Date(p[a + 20 >> 2] + 1900, p[a + 16 >> 2], p[a + 12 >> 2], p[a + 8 >> 2], p[a + 4 >> 2], p[a >> 2], 0), c = p[a + 32 >> 2], f = b.getTimezoneOffset(), g = new Date(b.getFullYear(), 0, 1), h = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(), m = g.getTimezoneOffset(), r = Math.min(m, h);
    0 > c ? p[a + 32 >> 2] = Number(h != m && r == f) : 0 < c != (r == f) && (h = Math.max(m, h), b.setTime(b.getTime() + 60000 * ((0 < c ? r : h) - f)));
    p[a + 24 >> 2] = b.getDay();
    p[a + 28 >> 2] = (b.getTime() - g.getTime()) / 864E5 | 0;
    return b.getTime() / 1000 | 0;
  }, nanosleep:function(a, b) {
    if (0 === a) {
      return Y(28), -1;
    }
    var c = p[a >> 2];
    a = p[a + 4 >> 2];
    if (0 > a || 999999999 < a || 0 > c) {
      return Y(28), -1;
    }
    0 !== b && (p[b >> 2] = 0, p[b + 4 >> 2] = 0);
    b = 1e6 * c + a / 1000;
    for (c = ia(); ia() - c < b / 1000;) {
    }
  }, round:function(a) {
    a = +a;
    return 0 <= a ? +ba(a + 0.5) : +aa(a - 0.5);
  }, roundf:function(a) {
    a = +a;
    return 0 <= a ? +ba(a + 0.5) : +aa(a - 0.5);
  }, setTempRet0:function() {
  }, signal:function(a) {
    14 != a && E("Calling stub instead of signal()");
    return 0;
  }, strftime:function(a, b, c, f) {
    function g(n, w, B) {
      for (n = "number" === typeof n ? n.toString() : n || ""; n.length < w;) {
        n = B[0] + n;
      }
      return n;
    }
    function h(n, w) {
      return g(n, w, "0");
    }
    function m(n, w) {
      function B(L) {
        return 0 > L ? -1 : 0 < L ? 1 : 0;
      }
      var H;
      0 === (H = B(n.getFullYear() - w.getFullYear())) && 0 === (H = B(n.getMonth() - w.getMonth())) && (H = B(n.getDate() - w.getDate()));
      return H;
    }
    function r(n) {
      switch(n.getDay()) {
        case 0:
          return new Date(n.getFullYear() - 1, 11, 29);
        case 1:
          return n;
        case 2:
          return new Date(n.getFullYear(), 0, 3);
        case 3:
          return new Date(n.getFullYear(), 0, 2);
        case 4:
          return new Date(n.getFullYear(), 0, 1);
        case 5:
          return new Date(n.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(n.getFullYear() - 1, 11, 30);
      }
    }
    function x(n) {
      n = Ha(new Date(n.v + 1900, 0, 1), n.qa);
      var w = new Date(n.getFullYear() + 1, 0, 4), B = r(new Date(n.getFullYear(), 0, 4));
      w = r(w);
      return 0 >= m(B, n) ? 0 >= m(w, n) ? n.getFullYear() + 1 : n.getFullYear() : n.getFullYear() - 1;
    }
    var q = p[f + 40 >> 2];
    f = {Xb:p[f >> 2], Wb:p[f + 4 >> 2], oa:p[f + 8 >> 2], ia:p[f + 12 >> 2], Z:p[f + 16 >> 2], v:p[f + 20 >> 2], pa:p[f + 24 >> 2], qa:p[f + 28 >> 2], Xe:p[f + 32 >> 2], Vb:p[f + 36 >> 2], Yb:q ? ca(q) : ""};
    c = ca(c);
    q = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
    for (var v in q) {
      c = c.replace(new RegExp(v, "g"), q[v]);
    }
    var D = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), G = "January February March April May June July August September October November December".split(" ");
    q = {"%a":function(n) {
      return D[n.pa].substring(0, 3);
    }, "%A":function(n) {
      return D[n.pa];
    }, "%b":function(n) {
      return G[n.Z].substring(0, 3);
    }, "%B":function(n) {
      return G[n.Z];
    }, "%C":function(n) {
      return h((n.v + 1900) / 100 | 0, 2);
    }, "%d":function(n) {
      return h(n.ia, 2);
    }, "%e":function(n) {
      return g(n.ia, 2, " ");
    }, "%g":function(n) {
      return x(n).toString().substring(2);
    }, "%G":function(n) {
      return x(n);
    }, "%H":function(n) {
      return h(n.oa, 2);
    }, "%I":function(n) {
      n = n.oa;
      0 == n ? n = 12 : 12 < n && (n -= 12);
      return h(n, 2);
    }, "%j":function(n) {
      return h(n.ia + Ua(Ga(n.v + 1900) ? Ia : Ja, n.Z - 1), 3);
    }, "%m":function(n) {
      return h(n.Z + 1, 2);
    }, "%M":function(n) {
      return h(n.Wb, 2);
    }, "%n":function() {
      return "\n";
    }, "%p":function(n) {
      return 0 <= n.oa && 12 > n.oa ? "AM" : "PM";
    }, "%S":function(n) {
      return h(n.Xb, 2);
    }, "%t":function() {
      return "\t";
    }, "%u":function(n) {
      return n.pa || 7;
    }, "%U":function(n) {
      var w = new Date(n.v + 1900, 0, 1), B = 0 === w.getDay() ? w : Ha(w, 7 - w.getDay());
      n = new Date(n.v + 1900, n.Z, n.ia);
      return 0 > m(B, n) ? (w = Ua(Ga(n.getFullYear()) ? Ia : Ja, n.getMonth() - 1) - 31, h(Math.ceil((31 - B.getDate() + w + n.getDate()) / 7), 2)) : 0 === m(B, w) ? "01" : "00";
    }, "%V":function(n) {
      var w = new Date(n.v + 1901, 0, 4), B = r(new Date(n.v + 1900, 0, 4));
      w = r(w);
      var H = Ha(new Date(n.v + 1900, 0, 1), n.qa);
      return 0 > m(H, B) ? "53" : 0 >= m(w, H) ? "01" : h(Math.ceil((B.getFullYear() < n.v + 1900 ? n.qa + 32 - B.getDate() : n.qa + 1 - B.getDate()) / 7), 2);
    }, "%w":function(n) {
      return n.pa;
    }, "%W":function(n) {
      var w = new Date(n.v, 0, 1), B = 1 === w.getDay() ? w : Ha(w, 0 === w.getDay() ? 1 : 7 - w.getDay() + 1);
      n = new Date(n.v + 1900, n.Z, n.ia);
      return 0 > m(B, n) ? (w = Ua(Ga(n.getFullYear()) ? Ia : Ja, n.getMonth() - 1) - 31, h(Math.ceil((31 - B.getDate() + w + n.getDate()) / 7), 2)) : 0 === m(B, w) ? "01" : "00";
    }, "%y":function(n) {
      return (n.v + 1900).toString().substring(2);
    }, "%Y":function(n) {
      return n.v + 1900;
    }, "%z":function(n) {
      n = n.Vb;
      var w = 0 <= n;
      n = Math.abs(n) / 60;
      return (w ? "+" : "-") + String("0000" + (n / 60 * 100 + n % 60)).slice(-4);
    }, "%Z":function(n) {
      return n.Yb;
    }, "%%":function() {
      return "%";
    }};
    for (v in q) {
      0 <= c.indexOf(v) && (c = c.replace(new RegExp(v, "g"), q[v](f)));
    }
    v = Ka(c, !1);
    if (v.length > b) {
      return 0;
    }
    Db(v, a);
    return v.length - 1;
  }, table:Ob, time:function(a) {
    var b = Date.now() / 1000 | 0;
    a && (p[a >> 2] = b);
    return b;
  }}, Bb = function() {
    function a(h) {
      d.asm = h.exports;
      Sa("wasm-instantiate");
    }
    function b(h) {
      k(d === g, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
      g = null;
      a(h.instance);
    }
    function c(h) {
      return Gb().then(function(m) {
        return WebAssembly.instantiate(m, f);
      }).then(h, function(m) {
        E("failed to asynchronously prepare wasm: " + m);
        l(m);
      });
    }
    var f = {env:Ab, wasi_snapshot_preview1:Ab};
    jb("wasm-instantiate");
    var g = d;
    if (d.instantiateWasm) {
      try {
        return d.instantiateWasm(f, a);
      } catch (h) {
        return E("Module.instantiateWasm callback failed with error: " + h), !1;
      }
    }
    (function() {
      if (qa || "function" !== typeof WebAssembly.instantiateStreaming || lb(O) || Ta(O, "file://") || "function" !== typeof fetch) {
        return c(b);
      }
      fetch(O, {credentials:"same-origin"}).then(function(h) {
        return WebAssembly.instantiateStreaming(h, f).then(b, function(m) {
          E("wasm streaming compile failed: " + m);
          E("falling back to ArrayBuffer instantiation");
          c(b);
        });
      });
    })();
    return {};
  }();
  d.asm = Bb;
  var Pb = d.___wasm_call_ctors = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.__wasm_call_ctors.apply(null, arguments);
  }, Hb = d.___errno_location = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.__errno_location.apply(null, arguments);
  };
  d._fflush = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.fflush.apply(null, arguments);
  };
  d._main = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.main.apply(null, arguments);
  };
  d._free = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.free.apply(null, arguments);
  };
  var fb = d._malloc = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.malloc.apply(null, arguments);
  }, sa = d.__get_tzname = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm._get_tzname.apply(null, arguments);
  }, Kb = d.__get_daylight = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm._get_daylight.apply(null, arguments);
  }, Jb = d.__get_timezone = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm._get_timezone.apply(null, arguments);
  };
  d.___set_stack_limit = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.__set_stack_limit.apply(null, arguments);
  };
  xb = d.stackSave = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.stackSave.apply(null, arguments);
  };
  za = d.stackAlloc = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.stackAlloc.apply(null, arguments);
  };
  d.stackRestore = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.stackRestore.apply(null, arguments);
  };
  d.__growWasmMemory = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.__growWasmMemory.apply(null, arguments);
  };
  d.dynCall_iii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iii.apply(null, arguments);
  };
  d.dynCall_viiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiii.apply(null, arguments);
  };
  d.dynCall_vi = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_vi.apply(null, arguments);
  };
  d.dynCall_iiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiii.apply(null, arguments);
  };
  d.dynCall_ii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_ii.apply(null, arguments);
  };
  d.dynCall_iiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiiii.apply(null, arguments);
  };
  d.dynCall_iiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiii.apply(null, arguments);
  };
  d.dynCall_iiiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiiiiiii.apply(null, arguments);
  };
  d.dynCall_vii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_vii.apply(null, arguments);
  };
  d.dynCall_jiji = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_jiji.apply(null, arguments);
  };
  d.dynCall_jiiji = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_jiiji.apply(null, arguments);
  };
  d.dynCall_viiiiiiff = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiiff.apply(null, arguments);
  };
  d.dynCall_viii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viii.apply(null, arguments);
  };
  d.dynCall_viiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiii.apply(null, arguments);
  };
  d.dynCall_viiiiiifi = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiifi.apply(null, arguments);
  };
  d.dynCall_iiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiiiii.apply(null, arguments);
  };
  d.dynCall_viiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiii.apply(null, arguments);
  };
  d.dynCall_viiiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiiiii.apply(null, arguments);
  };
  d.dynCall_viiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiiii.apply(null, arguments);
  };
  d.dynCall_fiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_fiiii.apply(null, arguments);
  };
  d.dynCall_iiiiiiiiiiiiiifii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiiiiiiiiiiiifii.apply(null, arguments);
  };
  d.dynCall_fiifi = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_fiifi.apply(null, arguments);
  };
  d.dynCall_viiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiii.apply(null, arguments);
  };
  d.dynCall_viiiifii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiifii.apply(null, arguments);
  };
  d.dynCall_fii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_fii.apply(null, arguments);
  };
  d.dynCall_viiiiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiiiiii.apply(null, arguments);
  };
  d.dynCall_viiiiiiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiiiiiiii.apply(null, arguments);
  };
  d.dynCall_iiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiiiiii.apply(null, arguments);
  };
  d.dynCall_dd = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_dd.apply(null, arguments);
  };
  d.dynCall_viifi = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viifi.apply(null, arguments);
  };
  d.dynCall_fiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_fiii.apply(null, arguments);
  };
  d.dynCall_viidi = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viidi.apply(null, arguments);
  };
  d.dynCall_did = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_did.apply(null, arguments);
  };
  d.dynCall_fiiiiiiiiffii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_fiiiiiiiiffii.apply(null, arguments);
  };
  d.dynCall_viiif = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiif.apply(null, arguments);
  };
  d.dynCall_viiiif = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiif.apply(null, arguments);
  };
  d.dynCall_viiiiiiifi = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiiifi.apply(null, arguments);
  };
  d.dynCall_viiijj = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiijj.apply(null, arguments);
  };
  d.dynCall_iiiiiiidiiddii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiiiiidiiddii.apply(null, arguments);
  };
  d.dynCall_jij = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_jij.apply(null, arguments);
  };
  d.dynCall_jii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_jii.apply(null, arguments);
  };
  d.dynCall_iiijjji = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiijjji.apply(null, arguments);
  };
  d.dynCall_iiiji = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiji.apply(null, arguments);
  };
  d.dynCall_jiiij = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_jiiij.apply(null, arguments);
  };
  d.dynCall_v = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_v.apply(null, arguments);
  };
  d.dynCall_iiifii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiifii.apply(null, arguments);
  };
  d.dynCall_iidiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iidiiii.apply(null, arguments);
  };
  d.dynCall_iij = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iij.apply(null, arguments);
  };
  d.dynCall_iiiiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_iiiiiiiiii.apply(null, arguments);
  };
  d.dynCall_viiiiiiiiiii = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.dynCall_viiiiiiiiiii.apply(null, arguments);
  };
  d.asm = Bb;
  Object.getOwnPropertyDescriptor(d, "intArrayFromString") || (d.intArrayFromString = function() {
    l("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "intArrayToString") || (d.intArrayToString = function() {
    l("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "ccall") || (d.ccall = function() {
    l("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "cwrap") || (d.cwrap = function() {
    l("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "setValue") || (d.setValue = function() {
    l("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getValue") || (d.getValue = function() {
    l("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "allocate") || (d.allocate = function() {
    l("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getMemory") || (d.getMemory = function() {
    l("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "UTF8ArrayToString") || (d.UTF8ArrayToString = function() {
    l("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "UTF8ToString") || (d.UTF8ToString = function() {
    l("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stringToUTF8Array") || (d.stringToUTF8Array = function() {
    l("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stringToUTF8") || (d.stringToUTF8 = function() {
    l("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "lengthBytesUTF8") || (d.lengthBytesUTF8 = function() {
    l("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stackTrace") || (d.stackTrace = function() {
    l("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "addOnPreRun") || (d.addOnPreRun = function() {
    l("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "addOnInit") || (d.addOnInit = function() {
    l("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "addOnPreMain") || (d.addOnPreMain = function() {
    l("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "addOnExit") || (d.addOnExit = function() {
    l("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "addOnPostRun") || (d.addOnPostRun = function() {
    l("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeStringToMemory") || (d.writeStringToMemory = function() {
    l("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeArrayToMemory") || (d.writeArrayToMemory = function() {
    l("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeAsciiToMemory") || (d.writeAsciiToMemory = function() {
    l("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "addRunDependency") || (d.addRunDependency = function() {
    l("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "removeRunDependency") || (d.removeRunDependency = function() {
    l("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_createFolder") || (d.FS_createFolder = function() {
    l("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_createPath") || (d.FS_createPath = function() {
    l("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_createDataFile") || (d.FS_createDataFile = function() {
    l("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_createPreloadedFile") || (d.FS_createPreloadedFile = function() {
    l("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_createLazyFile") || (d.FS_createLazyFile = function() {
    l("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_createLink") || (d.FS_createLink = function() {
    l("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_createDevice") || (d.FS_createDevice = function() {
    l("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "FS_unlink") || (d.FS_unlink = function() {
    l("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
  });
  Object.getOwnPropertyDescriptor(d, "dynamicAlloc") || (d.dynamicAlloc = function() {
    l("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "loadDynamicLibrary") || (d.loadDynamicLibrary = function() {
    l("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "loadWebAssemblyModule") || (d.loadWebAssemblyModule = function() {
    l("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getLEB") || (d.getLEB = function() {
    l("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getFunctionTables") || (d.getFunctionTables = function() {
    l("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "alignFunctionTables") || (d.alignFunctionTables = function() {
    l("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "registerFunctions") || (d.registerFunctions = function() {
    l("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "addFunction") || (d.addFunction = function() {
    l("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "removeFunction") || (d.removeFunction = function() {
    l("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getFuncWrapper") || (d.getFuncWrapper = function() {
    l("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "prettyPrint") || (d.prettyPrint = function() {
    l("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "makeBigInt") || (d.makeBigInt = function() {
    l("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "dynCall") || (d.dynCall = function() {
    l("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getCompilerSetting") || (d.getCompilerSetting = function() {
    l("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "print") || (d.print = function() {
    l("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "printErr") || (d.printErr = function() {
    l("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getTempRet0") || (d.getTempRet0 = function() {
    l("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "setTempRet0") || (d.setTempRet0 = function() {
    l("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "callMain") || (d.callMain = function() {
    l("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "abort") || (d.abort = function() {
    l("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stringToNewUTF8") || (d.stringToNewUTF8 = function() {
    l("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "emscripten_realloc_buffer") || (d.emscripten_realloc_buffer = function() {
    l("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "ENV") || (d.ENV = function() {
    l("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "setjmpId") || (d.setjmpId = function() {
    l("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "ERRNO_CODES") || (d.ERRNO_CODES = function() {
    l("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "ERRNO_MESSAGES") || (d.ERRNO_MESSAGES = function() {
    l("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "setErrNo") || (d.setErrNo = function() {
    l("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "DNS") || (d.DNS = function() {
    l("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "GAI_ERRNO_MESSAGES") || (d.GAI_ERRNO_MESSAGES = function() {
    l("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "Protocols") || (d.Protocols = function() {
    l("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "Sockets") || (d.Sockets = function() {
    l("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "UNWIND_CACHE") || (d.UNWIND_CACHE = function() {
    l("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "readAsmConstArgs") || (d.readAsmConstArgs = function() {
    l("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "jstoi_q") || (d.jstoi_q = function() {
    l("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "jstoi_s") || (d.jstoi_s = function() {
    l("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "PATH") || (d.PATH = function() {
    l("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "PATH_FS") || (d.PATH_FS = function() {
    l("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "SYSCALLS") || (d.SYSCALLS = function() {
    l("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "syscallMmap2") || (d.syscallMmap2 = function() {
    l("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "syscallMunmap") || (d.syscallMunmap = function() {
    l("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "JSEvents") || (d.JSEvents = function() {
    l("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "demangle") || (d.demangle = function() {
    l("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "demangleAll") || (d.demangleAll = function() {
    l("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "jsStackTrace") || (d.jsStackTrace = function() {
    l("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stackTrace") || (d.stackTrace = function() {
    l("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "getEnvStrings") || (d.getEnvStrings = function() {
    l("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeI53ToI64") || (d.writeI53ToI64 = function() {
    l("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeI53ToI64Clamped") || (d.writeI53ToI64Clamped = function() {
    l("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeI53ToI64Signaling") || (d.writeI53ToI64Signaling = function() {
    l("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeI53ToU64Clamped") || (d.writeI53ToU64Clamped = function() {
    l("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "writeI53ToU64Signaling") || (d.writeI53ToU64Signaling = function() {
    l("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "readI53FromI64") || (d.readI53FromI64 = function() {
    l("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "readI53FromU64") || (d.readI53FromU64 = function() {
    l("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "convertI32PairToI53") || (d.convertI32PairToI53 = function() {
    l("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "convertU32PairToI53") || (d.convertU32PairToI53 = function() {
    l("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "Browser") || (d.Browser = function() {
    l("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "FS") || (d.FS = function() {
    l("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "MEMFS") || (d.MEMFS = function() {
    l("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "TTY") || (d.TTY = function() {
    l("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "PIPEFS") || (d.PIPEFS = function() {
    l("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "SOCKFS") || (d.SOCKFS = function() {
    l("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "GL") || (d.GL = function() {
    l("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGet") || (d.emscriptenWebGLGet = function() {
    l("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGetTexPixelData") || (d.emscriptenWebGLGetTexPixelData = function() {
    l("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGetUniform") || (d.emscriptenWebGLGetUniform = function() {
    l("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "emscriptenWebGLGetVertexAttrib") || (d.emscriptenWebGLGetVertexAttrib = function() {
    l("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "AL") || (d.AL = function() {
    l("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "SDL_unicode") || (d.SDL_unicode = function() {
    l("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "SDL_ttfContext") || (d.SDL_ttfContext = function() {
    l("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "SDL_audio") || (d.SDL_audio = function() {
    l("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "SDL") || (d.SDL = function() {
    l("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "SDL_gfx") || (d.SDL_gfx = function() {
    l("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "GLUT") || (d.GLUT = function() {
    l("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "EGL") || (d.EGL = function() {
    l("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "GLFW_Window") || (d.GLFW_Window = function() {
    l("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "GLFW") || (d.GLFW = function() {
    l("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "GLEW") || (d.GLEW = function() {
    l("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "IDBStore") || (d.IDBStore = function() {
    l("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "runAndAbortIfError") || (d.runAndAbortIfError = function() {
    l("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "warnOnce") || (d.warnOnce = function() {
    l("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stackSave") || (d.stackSave = function() {
    l("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stackRestore") || (d.stackRestore = function() {
    l("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stackAlloc") || (d.stackAlloc = function() {
    l("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "AsciiToString") || (d.AsciiToString = function() {
    l("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stringToAscii") || (d.stringToAscii = function() {
    l("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "UTF16ToString") || (d.UTF16ToString = function() {
    l("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stringToUTF16") || (d.stringToUTF16 = function() {
    l("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "lengthBytesUTF16") || (d.lengthBytesUTF16 = function() {
    l("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "UTF32ToString") || (d.UTF32ToString = function() {
    l("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "stringToUTF32") || (d.stringToUTF32 = function() {
    l("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "lengthBytesUTF32") || (d.lengthBytesUTF32 = function() {
    l("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "allocateUTF8") || (d.allocateUTF8 = function() {
    l("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  Object.getOwnPropertyDescriptor(d, "allocateUTF8OnStack") || (d.allocateUTF8OnStack = function() {
    l("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  });
  d.writeStackCookie = ib;
  d.checkStackCookie = ea;
  d.abortStackOverflow = function(a) {
    l("Stack overflow! Attempted to allocate " + a + " bytes on the stack, but stack has only " + (2334336 - xb() + a) + " bytes available!");
  };
  Object.getOwnPropertyDescriptor(d, "ALLOC_NORMAL") || Object.defineProperty(d, "ALLOC_NORMAL", {configurable:!0, get:function() {
    l("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  }});
  Object.getOwnPropertyDescriptor(d, "ALLOC_STACK") || Object.defineProperty(d, "ALLOC_STACK", {configurable:!0, get:function() {
    l("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  }});
  Object.getOwnPropertyDescriptor(d, "ALLOC_DYNAMIC") || Object.defineProperty(d, "ALLOC_DYNAMIC", {configurable:!0, get:function() {
    l("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  }});
  Object.getOwnPropertyDescriptor(d, "ALLOC_NONE") || Object.defineProperty(d, "ALLOC_NONE", {configurable:!0, get:function() {
    l("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
  }});
  var La;
  pa = function b() {
    La || Wa();
    La || (pa = b);
  };
  d.run = Wa;
  if (d.preInit) {
    for ("function" == typeof d.preInit && (d.preInit = [d.preInit]); 0 < d.preInit.length;) {
      d.preInit.pop()();
    }
  }
  var sb = !1;
  d.noInitialRun && (sb = !1);
  Wa();
  return vb;
};

