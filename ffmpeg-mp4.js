
var ab;
ab || (ab = typeof Module !== 'undefined' ? Module : {});
module.exports = function(N) {
  function bb(a, b, c, f) {
    a || (a = this);
    this.parent = a;
    this.l = a.l;
    this.ga = null;
    this.id = e.Qb++;
    this.name = b;
    this.mode = c;
    this.f = {};
    this.g = {};
    this.rdev = f;
  }
  function ka(a, b) {
    throw b;
  }
  function cb(a) {
    Array.isArray(a) || a instanceof ArrayBuffer ? a = new Uint8Array(a) : a ? a instanceof Uint8Array || (a = new Uint8Array(a.buffer)) : a = new Uint8Array(0);
    return a;
  }
  function db(a) {
    var b = [];
    return function(c, f) {
      if (f && b.length) {
        return a(S(b, 0));
      }
      10 === c || 13 === c ? (X && b.push(c), a(S(b, 0)), b = []) : 0 !== c && b.push(c);
    };
  }
  function Db(a) {
    return d.locateFile ? d.locateFile(a, O) : O + a;
  }
  function T(a) {
    T.m || (T.m = {});
    T.m[a] || (T.m[a] = 1, E(a));
  }
  function k(a, b) {
    a || l("Assertion failed: " + b);
  }
  function S(a, b, c) {
    var f = b + c;
    for (c = b; a[c] && !(c >= f);) {
      ++c;
    }
    if (16 < c - b && a.subarray && eb) {
      return eb.decode(a.subarray(b, c));
    }
    for (f = ""; b < c;) {
      var g = a[b++];
      if (g & 128) {
        var h = a[b++] & 63;
        if (192 == (g & 224)) {
          f += String.fromCharCode((g & 31) << 6 | h);
        } else {
          var m = a[b++] & 63;
          224 == (g & 240) ? g = (g & 15) << 12 | h << 6 | m : (240 != (g & 248) && T("Invalid UTF-8 leading byte 0x" + g.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"), g = (g & 7) << 18 | h << 12 | m << 6 | a[b++] & 63);
          65536 > g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
        }
      } else {
        f += String.fromCharCode(g);
      }
    }
    return f;
  }
  function da(a, b) {
    return a ? S(ea, a, b) : "";
  }
  function la(a, b, c, f) {
    if (!(0 < f)) {
      return 0;
    }
    var g = c;
    f = c + f - 1;
    for (var h = 0; h < a.length; ++h) {
      var m = a.charCodeAt(h);
      if (55296 <= m && 57343 >= m) {
        var q = a.charCodeAt(++h);
        m = 65536 + ((m & 1023) << 10) | q & 1023;
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
            2097152 <= m && T("Invalid Unicode code point 0x" + m.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
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
  function Ra(a, b, c) {
    k("number" == typeof c, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
    return la(a, ea, b, c);
  }
  function ma(a) {
    for (var b = 0, c = 0; c < a.length; ++c) {
      var f = a.charCodeAt(c);
      55296 <= f && 57343 >= f && (f = 65536 + ((f & 1023) << 10) | a.charCodeAt(++c) & 1023);
      127 >= f ? ++b : b = 2047 >= f ? b + 2 : 65535 >= f ? b + 3 : b + 4;
    }
    return b;
  }
  function fb(a) {
    var b = ma(a) + 1, c = gb(b);
    c && la(a, J, c, b);
    return c;
  }
  function hb(a) {
    var b = ma(a) + 1, c = Aa(b);
    la(a, J, c, b);
    return c;
  }
  function Eb(a, b) {
    k(0 <= a.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
    J.set(a, b);
  }
  function Fb(a, b) {
    0 < a % b && (a += b - a % b);
    return a;
  }
  function ib(a) {
    na = a;
    d.HEAP8 = J = new Int8Array(a);
    d.HEAP16 = Sa = new Int16Array(a);
    d.HEAP32 = p = new Int32Array(a);
    d.HEAPU8 = ea = new Uint8Array(a);
    d.HEAPU16 = new Uint16Array(a);
    d.HEAPU32 = oa = new Uint32Array(a);
    d.HEAPF32 = new Float32Array(a);
    d.HEAPF64 = new Float64Array(a);
  }
  function jb() {
    k(!0);
    oa[583585] = 34821223;
    oa[583586] = 2310721022;
    p[0] = 1668509029;
  }
  function fa() {
    var a = oa[583585], b = oa[583586];
    34821223 == a && 2310721022 == b || l("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + b.toString(16) + " " + a.toString(16));
    1668509029 !== p[0] && l("Runtime error: The application has corrupted its heap memory area (address zero)!");
  }
  function pa(a) {
    for (; 0 < a.length;) {
      var b = a.shift();
      if ("function" == typeof b) {
        b(d);
      } else {
        var c = b.Jb;
        "number" === typeof c ? void 0 === b.va ? d.dynCall_v(c) : d.dynCall_vi(c, b.va) : c(void 0 === b.va ? null : b.va);
      }
    }
  }
  function Gb(a) {
    for (var b = a;;) {
      if (!ha[a]) {
        return a;
      }
      a = b + Math.random();
    }
  }
  function kb(a) {
    U++;
    d.monitorRunDependencies && d.monitorRunDependencies(U);
    a ? (k(!ha[a]), ha[a] = 1, null === Y && "undefined" !== typeof setInterval && (Y = setInterval(function() {
      if (Ba) {
        clearInterval(Y), Y = null;
      } else {
        var b = !1, c;
        for (c in ha) {
          b || (b = !0, E("still waiting on run dependencies:")), E("dependency: " + c);
        }
        b && E("(end of list)");
      }
    }, 10000))) : E("warning: run dependency added without ID");
  }
  function Ta(a) {
    U--;
    d.monitorRunDependencies && d.monitorRunDependencies(U);
    a ? (k(ha[a]), delete ha[a]) : E("warning: run dependency removed without ID");
    0 == U && (null !== Y && (clearInterval(Y), Y = null), qa && (a = qa, qa = null, a()));
  }
  function l(a) {
    if (d.onAbort) {
      d.onAbort(a);
    }
    ia(a);
    E(a);
    Ba = !0;
    a = "abort(" + a + ") at " + lb();
    throw new WebAssembly.RuntimeError(a);
  }
  function Ua(a, b) {
    return String.prototype.startsWith ? a.startsWith(b) : 0 === a.indexOf(b);
  }
  function mb(a) {
    return Ua(a, "data:application/octet-stream;base64,");
  }
  function nb() {
    try {
      if (ra) {
        return new Uint8Array(ra);
      }
      if (Ca) {
        return Ca(P);
      }
      throw "both async and sync fetching of the wasm failed";
    } catch (a) {
      l(a);
    }
  }
  function Hb() {
    return ra || !Da && !R || "function" !== typeof fetch || Ua(P, "file://") ? new Promise(function(a) {
      a(nb());
    }) : fetch(P, {credentials:"same-origin"}).then(function(a) {
      if (!a.ok) {
        throw "failed to load wasm binary file at '" + P + "'";
      }
      return a.arrayBuffer();
    }).catch(function() {
      return nb();
    });
  }
  function ob(a) {
    return a.replace(/\b_Z[\w\d_]+/g, function(b) {
      T("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
      return b === b ? b : b + " [" + b + "]";
    });
  }
  function lb() {
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
    return ob(a);
  }
  function Z(a) {
    return p[Ib() >> 2] = a;
  }
  function Ea() {
    void 0 === Ea.start && (Ea.start = Date.now());
    return 1E3 * (Date.now() - Ea.start) | 0;
  }
  function sa() {
    if (!sa.m) {
      var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:Fa || "./this.program"}, b;
      for (b in pb) {
        a[b] = pb[b];
      }
      var c = [];
      for (b in a) {
        c.push(b + "=" + a[b]);
      }
      sa.m = c;
    }
    return sa.m;
  }
  function qb(a, b) {
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
    p[b + 40 >> 2] = Jb;
    return b;
  }
  function Ga() {
    function a(h) {
      return (h = h.toTimeString().match(/\(([A-Za-z ]+)\)$/)) ? h[1] : "GMT";
    }
    if (!Ga.m) {
      Ga.m = !0;
      p[Kb() >> 2] = 60 * (new Date).getTimezoneOffset();
      var b = (new Date).getFullYear(), c = new Date(b, 0, 1);
      b = new Date(b, 6, 1);
      p[Lb() >> 2] = Number(c.getTimezoneOffset() != b.getTimezoneOffset());
      var f = a(c), g = a(b);
      f = fb(f);
      g = fb(g);
      b.getTimezoneOffset() < c.getTimezoneOffset() ? (p[ta() >> 2] = f, p[ta() + 4 >> 2] = g) : (p[ta() >> 2] = g, p[ta() + 4 >> 2] = f);
    }
  }
  function rb(a, b) {
    Ga();
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
    a = p[ta() + (a ? 4 : 0) >> 2];
    p[b + 40 >> 2] = a;
    return b;
  }
  function Ha(a) {
    return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
  }
  function Va(a, b) {
    for (var c = 0, f = 0; f <= b; c += a[f++]) {
    }
    return c;
  }
  function Ia(a, b) {
    for (a = new Date(a.getTime()); 0 < b;) {
      var c = Ha(a.getFullYear()), f = a.getMonth();
      c = (c ? Ja : Ka)[f];
      if (b > c - a.getDate()) {
        b -= c - a.getDate() + 1, a.setDate(1), 11 > f ? a.setMonth(f + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
      } else {
        a.setDate(a.getDate() + b);
        break;
      }
    }
    return a;
  }
  function La(a, b, c) {
    c = 0 < c ? c : ma(a) + 1;
    c = Array(c);
    a = la(a, c, 0, c.length);
    b && (c.length = a);
    return c;
  }
  function Wa(a) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + a + ")";
    this.status = a;
  }
  function Xa(a) {
    function b() {
      if (!Ma && (Ma = !0, d.calledRun = !0, !Ba)) {
        fa();
        k(!t);
        t = !0;
        d.noFSInit || e.N.la || e.N();
        V.N();
        pa(sb);
        fa();
        e.gb = !1;
        pa(Mb);
        if (d.onRuntimeInitialized) {
          d.onRuntimeInitialized();
        }
        if (tb) {
          var c = a;
          k(0 == U, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
          k(0 == Ya.length, "cannot call main when preRun functions remain to be called");
          var f = d._main;
          c = c || [];
          var g = c.length + 1, h = Aa(4 * (g + 1));
          p[h >> 2] = hb(Fa);
          for (var m = 1; m < g; m++) {
            p[(h >> 2) + m] = hb(c[m - 1]);
          }
          p[(h >> 2) + g] = 0;
          try {
            d.___set_stack_limit(2334336);
            var q = f(g, h);
            ub(q, !0);
          } catch (x) {
            x instanceof Wa || ("unwind" == x ? Na = !0 : ((c = x) && "object" === typeof x && x.stack && (c = [x, x.stack]), E("exception thrown: " + c), ka(1, x)));
          } finally {
          }
        }
        fa();
        if (d.postRun) {
          for ("function" == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length;) {
            vb.unshift(d.postRun.shift());
          }
        }
        pa(vb);
      }
    }
    a = a || ua;
    if (!(0 < U)) {
      jb();
      if (d.preRun) {
        for ("function" == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length;) {
          Ya.unshift(d.preRun.shift());
        }
      }
      pa(Ya);
      0 < U || (d.setStatus ? (d.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          d.setStatus("");
        }, 1);
        b();
      }, 1)) : b(), fa());
    }
  }
  function ub(a, b) {
    if (!b || !Na || 0 !== a) {
      if (Na) {
        b || E("program exited (with status: " + a + "), but noExitRuntime is set due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)");
      } else {
        if (Ba = !0, fa(), pa(Nb), e.quit(), u = !0, d.onExit) {
          d.onExit(a);
        }
      }
      ka(a, new Wa(a));
    }
  }
  N = N || {};
  var Ob = l, wb, d = {};
  Object.keys(N).forEach(function(a) {
    0 > ["mounts", "MEMFS", "onExit", "chdir"].indexOf(a) && (d[a] = N[a]);
  });
  l = function(a) {
    if (arguments.length) {
      Ob(a);
    } else {
      throw new Wa(0);
    }
  };
  d.stdin = d.stdin || function() {
  };
  d.stdout = d.stdout || db(function(a) {
    ia(a);
  });
  d.stderr = d.stderr || db(function(a) {
    E(a);
  });
  "object" === typeof process && (d.print = d.print || process.stdout.write.bind(process.stdout), d.printErr = d.printErr || process.stderr.write.bind(process.stderr));
  d.quit = function(a) {
    d.stdout(0, !0);
    d.stderr(0, !0);
    if (N.onExit) {
      N.onExit(a);
    }
  };
  d.preRun = function() {
    (N.mounts || []).forEach(function(a) {
      var b = e.Ya[a.type];
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
    e.chdir(N.chdir || "/work");
    (N.MEMFS || []).forEach(function(a) {
      if (a.name.match(/\//)) {
        throw Error("Bad file name");
      }
      var b = e.open(a.name, "w+");
      a = cb(a.data);
      e.write(b, a, 0, a.length);
      e.close(b);
    });
  };
  d.postRun = function() {
    var a = Object.create(null);
    (N.MEMFS || []).forEach(function(g) {
      a[g.name] = null;
    });
    var b = {}, c = [], f = function(g) {
      var h = e.h(g).node.c;
      g = Object.keys(h);
      h.__proto__ && "__proto__" === h.__proto__.name && g.push("__proto__");
      return g.map(function(m) {
        return h[m];
      });
    }("/work").filter(function(g) {
      return !(g.name in a);
    }).map(function(g) {
      var h = cb(g.c);
      b[g.name] = h;
      c.push(h.buffer);
      return b;
    });
    self.postMessage({type:"done", data:b}, c);
    wb = {MEMFS:f};
  };
  var va = {}, W;
  for (W in d) {
    d.hasOwnProperty(W) && (va[W] = d[W]);
  }
  var ua = [], Fa = "./this.program", Da = !1, R = !1, X = !1, xb = !1;
  Da = "object" === typeof window;
  R = "function" === typeof importScripts;
  X = "object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node;
  xb = !Da && !X && !R;
  if (d.ENVIRONMENT) {
    throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
  }
  var O = "", Oa, Za;
  if (X) {
    O = R ? require("path").dirname(O) + "/" : __dirname + "/";
    var wa = function(a, b) {
      Oa || (Oa = require("fs"));
      Za || (Za = require("path"));
      a = Za.normalize(a);
      return Oa.readFileSync(a, b ? null : "utf8");
    };
    var Ca = function(a) {
      a = wa(a, !0);
      a.buffer || (a = new Uint8Array(a));
      k(a.buffer);
      return a;
    };
    1 < process.argv.length && (Fa = process.argv[1].replace(/\\/g, "/"));
    ua = process.argv.slice(2);
    "undefined" !== typeof module && (module.exports = d);
    ka = function(a) {
      process.exit(a);
    };
    d.inspect = function() {
      return "[Emscripten Module object]";
    };
  } else {
    if (xb) {
      "undefined" != typeof read && (wa = function(a) {
        return read(a);
      }), Ca = function(a) {
        if ("function" === typeof readbuffer) {
          return new Uint8Array(readbuffer(a));
        }
        a = read(a, "binary");
        k("object" === typeof a);
        return a;
      }, "undefined" != typeof scriptArgs ? ua = scriptArgs : "undefined" != typeof arguments && (ua = arguments), "function" === typeof quit && (ka = function(a) {
        quit(a);
      }), "undefined" !== typeof print && ("undefined" === typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" !== typeof printErr ? printErr : print);
    } else {
      if (Da || R) {
        R ? O = self.location.href : document.currentScript && (O = document.currentScript.src), O = 0 !== O.indexOf("blob:") ? O.substr(0, O.lastIndexOf("/") + 1) : "", wa = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !1);
          b.send(null);
          return b.responseText;
        }, R && (Ca = function(a) {
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
  var ia = d.print || console.log.bind(console), E = d.printErr || console.warn.bind(console);
  for (W in va) {
    va.hasOwnProperty(W) && (d[W] = va[W]);
  }
  va = null;
  d.arguments && (ua = d.arguments);
  Object.getOwnPropertyDescriptor(d, "arguments") || Object.defineProperty(d, "arguments", {configurable:!0, get:function() {
    l("Module.arguments has been replaced with plain arguments_");
  }});
  d.thisProgram && (Fa = d.thisProgram);
  Object.getOwnPropertyDescriptor(d, "thisProgram") || Object.defineProperty(d, "thisProgram", {configurable:!0, get:function() {
    l("Module.thisProgram has been replaced with plain thisProgram");
  }});
  d.quit && (ka = d.quit);
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
  var Aa;
  var yb = Aa = function() {
    l("cannot use the stack before compiled code is ready to run, and has provided stack access");
  };
  var ra;
  d.wasmBinary && (ra = d.wasmBinary);
  Object.getOwnPropertyDescriptor(d, "wasmBinary") || Object.defineProperty(d, "wasmBinary", {configurable:!0, get:function() {
    l("Module.wasmBinary has been replaced with plain wasmBinary");
  }});
  var Na;
  d.noExitRuntime && (Na = d.noExitRuntime);
  Object.getOwnPropertyDescriptor(d, "noExitRuntime") || Object.defineProperty(d, "noExitRuntime", {configurable:!0, get:function() {
    l("Module.noExitRuntime has been replaced with plain noExitRuntime");
  }});
  "object" !== typeof WebAssembly && l("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");
  var aa, Pb = new WebAssembly.Table({initial:2920, maximum:2920, element:"anyfunc"}), Ba = !1, eb = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
  "undefined" !== typeof TextDecoder && new TextDecoder("utf-16le");
  var J, ea, Sa, p, oa;
  k(!0, "stack must start aligned");
  k(!0, "heap must start aligned");
  d.TOTAL_STACK && k(5242880 === d.TOTAL_STACK, "the stack size can no longer be determined at runtime");
  var xa = d.INITIAL_MEMORY || 67108864;
  Object.getOwnPropertyDescriptor(d, "INITIAL_MEMORY") || Object.defineProperty(d, "INITIAL_MEMORY", {configurable:!0, get:function() {
    l("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY");
  }});
  k(5242880 <= xa, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + xa + "! (TOTAL_STACK=5242880)");
  k("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
  d.wasmMemory ? aa = d.wasmMemory : aa = new WebAssembly.Memory({initial:xa / 65536, maximum:32768});
  if (aa) {
    var na = aa.buffer;
  }
  xa = na.byteLength;
  k(0 === xa % 65536);
  k(!0);
  ib(na);
  p[583544] = 7577216;
  (function() {
    var a = new Int16Array(1), b = new Int8Array(a.buffer);
    a[0] = 25459;
    if (115 !== b[0] || 99 !== b[1]) {
      throw "Runtime error: expected the system to be little-endian!";
    }
  })();
  var Ya = [], sb = [], Mb = [], Nb = [], vb = [], t = !1, u = !1;
  k(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  k(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  k(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  k(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
  var ya = Math.abs, ba = Math.ceil, ca = Math.floor, za = Math.min, U = 0, Y = null, qa = null, ha = {};
  d.preloadedImages = {};
  d.preloadedAudios = {};
  var P = "ffmpeg-mp4.wasm";
  mb(P) || (P = Db(P));
  var C, K;
  sb.push({Jb:function() {
    Qb();
  }});
  var A = {jb:function(a) {
    return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  }, Ha:function(a, b) {
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
    (a = A.Ha(a.split("/").filter(function(f) {
      return !!f;
    }), !b).join("/")) || b || (a = ".");
    a && c && (a += "/");
    return (b ? "/" : "") + a;
  }, dirname:function(a) {
    var b = A.jb(a);
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
    return A.jb(a)[3];
  }, join:function() {
    var a = Array.prototype.slice.call(arguments, 0);
    return A.normalize(a.join("/"));
  }, K:function(a, b) {
    return A.normalize(a + "/" + b);
  }}, Q = {resolve:function() {
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
    a = A.Ha(a.split("/").filter(function(f) {
      return !!f;
    }), !b).join("/");
    return (b ? "/" : "") + a || ".";
  }, relative:function(a, b) {
    function c(m) {
      for (var q = 0; q < m.length && "" === m[q]; q++) {
      }
      for (var x = m.length - 1; 0 <= x && "" === m[x]; x--) {
      }
      return q > x ? [] : m.slice(q, x - q + 1);
    }
    a = Q.resolve(a).substr(1);
    b = Q.resolve(b).substr(1);
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
  }}, V = {mb:[], N:function() {
  }, Ye:function() {
  }, register:function(a, b) {
    V.mb[a] = {input:[], output:[], Y:b};
    e.Na(a, V.g);
  }, g:{open:function(a) {
    var b = V.mb[a.node.rdev];
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
    if (!a.tty || !a.tty.Y.bb) {
      throw new e.b(60);
    }
    for (var g = 0, h = 0; h < f; h++) {
      try {
        var m = a.tty.Y.bb(a.tty);
      } catch (q) {
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
    if (!a.tty || !a.tty.Y.Ja) {
      throw new e.b(60);
    }
    try {
      for (var g = 0; g < f; g++) {
        a.tty.Y.Ja(a.tty, b[c + g]);
      }
    } catch (h) {
      throw new e.b(29);
    }
    f && (a.node.timestamp = Date.now());
    return g;
  }}, Fb:{bb:function(a) {
    if (!a.input.length) {
      var b = null;
      if (X) {
        var c = Buffer.m ? Buffer.m(256) : new Buffer(256), f = 0;
        try {
          f = Oa.readSync(process.stdin.fd, c, 0, 256, null);
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
      a.input = La(b, !0);
    }
    return a.input.shift();
  }, Ja:function(a, b) {
    null === b || 10 === b ? (ia(S(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
  }, flush:function(a) {
    a.output && 0 < a.output.length && (ia(S(a.output, 0)), a.output = []);
  }}, Eb:{Ja:function(a, b) {
    null === b || 10 === b ? (E(S(a.output, 0)), a.output = []) : 0 != b && a.output.push(b);
  }, flush:function(a) {
    a.output && 0 < a.output.length && (E(S(a.output, 0)), a.output = []);
  }}}, y = {J:null, l:function() {
    return y.createNode(null, "/", 16895, 0);
  }, createNode:function(a, b, c, f) {
    if (e.Lb(c) || e.isFIFO(c)) {
      throw new e.b(63);
    }
    y.J || (y.J = {dir:{node:{C:y.f.C, s:y.f.s, lookup:y.f.lookup, D:y.f.D, rename:y.f.rename, unlink:y.f.unlink, rmdir:y.f.rmdir, readdir:y.f.readdir, symlink:y.f.symlink}, stream:{v:y.g.v}}, file:{node:{C:y.f.C, s:y.f.s}, stream:{v:y.g.v, read:y.g.read, write:y.g.write, ba:y.g.ba, fa:y.g.fa, X:y.g.X}}, link:{node:{C:y.f.C, s:y.f.s, readlink:y.f.readlink}, stream:{}}, Sa:{node:{C:y.f.C, s:y.f.s}, stream:e.wb}});
    c = e.createNode(a, b, c, f);
    e.o(c.mode) ? (c.f = y.J.dir.node, c.g = y.J.dir.stream, c.c = {}) : e.isFile(c.mode) ? (c.f = y.J.file.node, c.g = y.J.file.stream, c.i = 0, c.c = null) : e.S(c.mode) ? (c.f = y.J.link.node, c.g = y.J.link.stream) : e.da(c.mode) && (c.f = y.J.Sa.node, c.g = y.J.Sa.stream);
    c.timestamp = Date.now();
    a && (a.c[b] = c);
    return c;
  }, Ne:function(a) {
    if (a.c && a.c.subarray) {
      for (var b = [], c = 0; c < a.i; ++c) {
        b.push(a.c[c]);
      }
      return b;
    }
    return a.c;
  }, Oe:function(a) {
    return a.c ? a.c.subarray ? a.c.subarray(0, a.i) : new Uint8Array(a.c) : new Uint8Array(0);
  }, Xa:function(a, b) {
    var c = a.c ? a.c.length : 0;
    c >= b || (b = Math.max(b, c * (1048576 > c ? 2.0 : 1.125) >>> 0), 0 != c && (b = Math.max(b, 256)), c = a.c, a.c = new Uint8Array(b), 0 < a.i && a.c.set(c.subarray(0, a.i), 0));
  }, Wb:function(a, b) {
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
  }, f:{C:function(a) {
    var b = {};
    b.dev = e.da(a.mode) ? a.id : 1;
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
    b.Qa = 4096;
    b.blocks = Math.ceil(b.size / b.Qa);
    return b;
  }, s:function(a, b) {
    void 0 !== b.mode && (a.mode = b.mode);
    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
    void 0 !== b.size && y.Wb(a, b.size);
  }, lookup:function() {
    throw e.Aa[44];
  }, D:function(a, b, c, f) {
    return y.createNode(a, b, c, f);
  }, rename:function(a, b, c) {
    if (e.o(a.mode)) {
      try {
        var f = e.H(b, c);
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
    var c = e.H(a, b), f;
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
    b.buffer === J.buffer && (h && T("file packager has copied file data into memory, but in memory growth we are forced to copy it again (see --no-heap-copy)"), h = !1);
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
    y.Xa(a, g + f);
    if (a.c.subarray && b.subarray) {
      a.c.set(b.subarray(c, c + f), g);
    } else {
      for (h = 0; h < f; h++) {
        a.c[g + h] = b[c + h];
      }
    }
    a.i = Math.max(a.i, g + f);
    return f;
  }, v:function(a, b, c) {
    1 === c ? b += a.position : 2 === c && e.isFile(a.node.mode) && (b += a.node.i);
    if (0 > b) {
      throw new e.b(28);
    }
    return b;
  }, ba:function(a, b, c) {
    y.Xa(a.node, b + c);
    a.node.i = Math.max(a.node.i, b + c);
  }, fa:function(a, b, c, f, g, h, m) {
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
      m = b.buffer == J.buffer;
      f = gb(f);
      if (!f) {
        throw new e.b(48);
      }
      (m ? J : b).set(a, f);
    } else {
      g = !1, f = a.byteOffset;
    }
    return {We:f, we:g};
  }, X:function(a, b, c, f, g) {
    if (!e.isFile(a.node.mode)) {
      throw new e.b(43);
    }
    if (g & 2) {
      return 0;
    }
    y.g.write(a, b, 0, f, c, !1);
    return 0;
  }}}, I = {sa:16895, aa:33279, La:null, l:function(a) {
    function b(h) {
      h = h.split("/");
      for (var m = f, q = 0; q < h.length - 1; q++) {
        var x = h.slice(0, q + 1).join("/");
        g[x] || (g[x] = I.createNode(m, h[q], I.sa, 0));
        m = g[x];
      }
      return m;
    }
    function c(h) {
      h = h.split("/");
      return h[h.length - 1];
    }
    k(R);
    I.La || (I.La = new FileReaderSync);
    var f = I.createNode(null, "/", I.sa, 0), g = {};
    Array.prototype.forEach.call(a.Ia.files || [], function(h) {
      I.createNode(b(h.name), c(h.name), I.aa, 0, h, h.lastModifiedDate);
    });
    (a.Ia.blobs || []).forEach(function(h) {
      I.createNode(b(h.name), c(h.name), I.aa, 0, h.data);
    });
    (a.Ia.packages || []).forEach(function(h) {
      h.metadata.files.forEach(function(m) {
        var q = m.filename.substr(1);
        I.createNode(b(q), c(q), I.aa, 0, h.blob.slice(m.start, m.end));
      });
    });
    return f;
  }, createNode:function(a, b, c, f, g, h) {
    f = e.createNode(a, b, c);
    f.mode = c;
    f.f = I.f;
    f.g = I.g;
    f.timestamp = (h || new Date).getTime();
    k(I.aa !== I.sa);
    c === I.aa ? (f.size = g.size, f.c = g) : (f.size = 4096, f.c = {});
    a && (a.c[b] = f);
    return f;
  }, f:{C:function(a) {
    return {dev:1, ino:a.id, mode:a.mode, nlink:1, uid:0, gid:0, rdev:void 0, size:a.size, atime:new Date(a.timestamp), mtime:new Date(a.timestamp), ctime:new Date(a.timestamp), Qa:4096, blocks:Math.ceil(a.size / 4096)};
  }, s:function(a, b) {
    void 0 !== b.mode && (a.mode = b.mode);
    void 0 !== b.timestamp && (a.timestamp = b.timestamp);
  }, lookup:function() {
    throw new e.b(44);
  }, D:function() {
    throw new e.b(63);
  }, rename:function() {
    throw new e.b(63);
  }, unlink:function() {
    throw new e.b(63);
  }, rmdir:function() {
    throw new e.b(63);
  }, readdir:function(a) {
    var b = [".", ".."], c;
    for (c in a.c) {
      a.c.hasOwnProperty(c) && b.push(c);
    }
    return b;
  }, symlink:function() {
    throw new e.b(63);
  }, readlink:function() {
    throw new e.b(63);
  }}, g:{read:function(a, b, c, f, g) {
    if (g >= a.node.size) {
      return 0;
    }
    a = a.node.c.slice(g, g + f);
    f = I.La.readAsArrayBuffer(a);
    b.set(new Uint8Array(f), c);
    return a.size;
  }, write:function() {
    throw new e.b(29);
  }, v:function(a, b, c) {
    1 === c ? b += a.position : 2 === c && e.isFile(a.node.mode) && (b += a.node.size);
    if (0 > b) {
      throw new e.b(28);
    }
    return b;
  }}}, Rb = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
  18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
  38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
  55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
  75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
  118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
  133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized"}, zb = {Wd:63, vd:44, ie:71, Qc:27, Sc:29, Sd:60, dc:1, wd:45, nc:8, wc:12, kc:6, se:6, Ad:48, ec:2, Jc:21, Jd:105, uc:10, Ic:20, te:75, ud:43, Ld:54, Uc:31, Rc:28, pd:41, 
  gd:33, Qd:59, pe:74, Kc:22, Fd:51, he:70, ee:69, hd:34, Yd:64, Fc:18, be:68, Bd:49, Nc:24, xc:106, Wc:156, Xc:107, Yc:108, dd:109, qe:110, sd:111, Vc:112, Cc:16, xd:46, mc:113, qc:114, ue:115, qd:104, rc:103, sc:102, Dc:16, tc:101, Hd:100, td:116, me:117, Gd:118, Cd:119, Dd:120, de:121, yd:47, ic:122, je:123, yc:124, Zd:65, kd:36, Gc:125, pc:9, Rd:126, oc:127, ce:128, Zc:129, $c:130, cd:131, bd:132, ad:133, Id:52, Md:55, ld:37, ed:32, Td:138, Xd:139, Bc:15, rd:42, jc:5, ae:67, Od:57, Ed:50, fe:140, 
  Ac:14, fc:3, zc:13, od:40, md:38, ne:73, Lc:142, Mc:23, Pc:26, lc:7, Ec:17, jd:35, $d:66, ge:137, hc:4, nd:39, Tc:30, Kd:53, oe:141, re:136, Hc:19, ke:72, Pd:138, zd:148, Oc:25, Ud:61, vc:11, Nd:56, Vd:62, le:135}, e = {root:null, ha:[], Va:{}, streams:[], Qb:1, I:null, Ua:"/", la:!1, gb:!0, u:{}, lb:{ib:{qb:1, rb:2}}, b:null, Aa:{}, Ya:null, ia:0, Pe:function(a) {
    if (!(a instanceof e.b)) {
      throw a + " : " + lb();
    }
    return Z(a.j);
  }, h:function(a, b) {
    a = Q.resolve(e.cwd(), a);
    b = b || {};
    if (!a) {
      return {path:"", node:null};
    }
    var c = {za:!0, Ma:0}, f;
    for (f in c) {
      void 0 === b[f] && (b[f] = c[f]);
    }
    if (8 < b.Ma) {
      throw new e.b(32);
    }
    a = A.Ha(a.split("/").filter(function(m) {
      return !!m;
    }), !1);
    var g = e.root;
    c = "/";
    for (f = 0; f < a.length; f++) {
      var h = f === a.length - 1;
      if (h && b.parent) {
        break;
      }
      g = e.H(g, a[f]);
      c = A.K(c, a[f]);
      e.T(g) && (!h || h && b.za) && (g = g.ga.root);
      if (!h || b.B) {
        for (h = 0; e.S(g.mode);) {
          if (g = e.readlink(c), c = Q.resolve(A.dirname(c), g), g = e.h(c, {Ma:b.Ma}).node, 40 < h++) {
            throw new e.b(32);
          }
        }
      }
    }
    return {path:c, node:g};
  }, F:function(a) {
    for (var b;;) {
      if (e.ma(a)) {
        return a = a.l.hb, b ? "/" !== a[a.length - 1] ? a + "/" + b : a + b : a;
      }
      b = b ? a.name + "/" + b : a.name;
      a = a.parent;
    }
  }, Ba:function(a, b) {
    for (var c = 0, f = 0; f < b.length; f++) {
      c = (c << 5) - c + b.charCodeAt(f) | 0;
    }
    return (a + c >>> 0) % e.I.length;
  }, eb:function(a) {
    var b = e.Ba(a.parent.id, a.name);
    a.V = e.I[b];
    e.I[b] = a;
  }, fb:function(a) {
    var b = e.Ba(a.parent.id, a.name);
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
  }, H:function(a, b) {
    var c = e.Nb(a);
    if (c) {
      throw new e.b(c, a);
    }
    for (c = e.I[e.Ba(a.id, b)]; c; c = c.V) {
      var f = c.name;
      if (c.parent.id === a.id && f === b) {
        return c;
      }
    }
    return e.lookup(a, b);
  }, createNode:function(a, b, c, f) {
    a = new e.ob(a, b, c, f);
    e.eb(a);
    return a;
  }, wa:function(a) {
    e.fb(a);
  }, ma:function(a) {
    return a === a.parent;
  }, T:function(a) {
    return !!a.ga;
  }, isFile:function(a) {
    return 32768 === (a & 61440);
  }, o:function(a) {
    return 16384 === (a & 61440);
  }, S:function(a) {
    return 40960 === (a & 61440);
  }, da:function(a) {
    return 8192 === (a & 61440);
  }, Lb:function(a) {
    return 24576 === (a & 61440);
  }, isFIFO:function(a) {
    return 4096 === (a & 61440);
  }, isSocket:function(a) {
    return 49152 === (a & 49152);
  }, Ib:{r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218}, Pb:function(a) {
    var b = e.Ib[a];
    if ("undefined" === typeof b) {
      throw Error("Unknown file open mode: " + a);
    }
    return b;
  }, Za:function(a) {
    var b = ["r", "w", "rw"][a & 3];
    a & 512 && (b += "w");
    return b;
  }, O:function(a, b) {
    if (e.gb) {
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
  }, Nb:function(a) {
    var b = e.O(a, "x");
    return b ? b : a.f.lookup ? 0 : 2;
  }, Ga:function(a, b) {
    try {
      return e.H(a, b), 20;
    } catch (c) {
    }
    return e.O(a, "wx");
  }, na:function(a, b, c) {
    try {
      var f = e.H(a, b);
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
      if (e.ma(f) || e.F(f) === e.cwd()) {
        return 10;
      }
    } else {
      if (e.o(f.mode)) {
        return 31;
      }
    }
    return 0;
  }, Ob:function(a, b) {
    return a ? e.S(a.mode) ? 32 : e.o(a.mode) && ("r" !== e.Za(b) || b & 512) ? 31 : e.O(a, e.Za(b)) : 44;
  }, pb:4096, Rb:function(a, b) {
    b = b || e.pb;
    for (a = a || 0; a <= b; a++) {
      if (!e.streams[a]) {
        return a;
      }
    }
    throw new e.b(33);
  }, M:function(a) {
    return e.streams[a];
  }, Db:function(a, b, c) {
    e.ta || (e.ta = function() {
    }, e.ta.prototype = {object:{get:function() {
      return this.node;
    }, set:function(h) {
      this.node = h;
    }}});
    var f = new e.ta, g;
    for (g in a) {
      f[g] = a[g];
    }
    a = f;
    b = e.Rb(b, c);
    a.fd = b;
    return e.streams[b] = a;
  }, xb:function(a) {
    e.streams[a] = null;
  }, wb:{open:function(a) {
    a.g = e.Kb(a.node.rdev).g;
    a.g.open && a.g.open(a);
  }, v:function() {
    throw new e.b(70);
  }}, Fa:function(a) {
    return a >> 8;
  }, Te:function(a) {
    return a & 255;
  }, U:function(a, b) {
    return a << 8 | b;
  }, Na:function(a, b) {
    e.Va[a] = {g:b};
  }, Kb:function(a) {
    return e.Va[a];
  }, ab:function(a) {
    var b = [];
    for (a = [a]; a.length;) {
      var c = a.pop();
      b.push(c);
      a.push.apply(a, c.ha);
    }
    return b;
  }, kb:function(a, b) {
    function c(m) {
      k(0 < e.ia);
      e.ia--;
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
    e.ia++;
    1 < e.ia && E("warning: " + e.ia + " FS.syncfs operations in flight at once, probably just doing extra work");
    var g = e.ab(e.root.l), h = 0;
    g.forEach(function(m) {
      if (!m.type.kb) {
        return f(null);
      }
      m.type.kb(m, a, f);
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
      var h = e.h(c, {za:!1});
      c = h.path;
      h = h.node;
      if (e.T(h)) {
        throw new e.b(10);
      }
      if (!e.o(h.mode)) {
        throw new e.b(54);
      }
    }
    b = {type:a, Ia:b, hb:c, ha:[]};
    a = a.l(b);
    a.l = b;
    b.root = a;
    f ? e.root = a : h && (h.ga = b, h.l && h.l.ha.push(b));
    return a;
  }, af:function(a) {
    a = e.h(a, {za:!1});
    if (!e.T(a.node)) {
      throw new e.b(28);
    }
    a = a.node;
    var b = a.ga, c = e.ab(b);
    Object.keys(e.I).forEach(function(f) {
      for (f = e.I[f]; f;) {
        var g = f.V;
        -1 !== c.indexOf(f.l) && e.wa(f);
        f = g;
      }
    });
    a.ga = null;
    b = a.l.ha.indexOf(b);
    k(-1 !== b);
    a.l.ha.splice(b, 1);
  }, lookup:function(a, b) {
    return a.f.lookup(a, b);
  }, D:function(a, b, c) {
    var f = e.h(a, {parent:!0}).node;
    a = A.basename(a);
    if (!a || "." === a || ".." === a) {
      throw new e.b(28);
    }
    var g = e.Ga(f, a);
    if (g) {
      throw new e.b(g);
    }
    if (!f.f.D) {
      throw new e.b(63);
    }
    return f.f.D(f, a, b, c);
  }, create:function(a, b) {
    return e.D(a, (void 0 !== b ? b : 438) & 4095 | 32768, 0);
  }, mkdir:function(a, b) {
    return e.D(a, (void 0 !== b ? b : 511) & 1023 | 16384, 0);
  }, Ue:function(a, b) {
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
  }, oa:function(a, b, c) {
    "undefined" === typeof c && (c = b, b = 438);
    return e.D(a, b | 8192, c);
  }, symlink:function(a, b) {
    if (!Q.resolve(a)) {
      throw new e.b(44);
    }
    var c = e.h(b, {parent:!0}).node;
    if (!c) {
      throw new e.b(44);
    }
    b = A.basename(b);
    var f = e.Ga(c, b);
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
      var q = m.node;
      m = e.h(b, {parent:!0});
      var x = m.node;
    } catch (v) {
      throw new e.b(10);
    }
    if (!q || !x) {
      throw new e.b(44);
    }
    if (q.l !== x.l) {
      throw new e.b(75);
    }
    m = e.H(q, g);
    f = Q.relative(a, f);
    if ("." !== f.charAt(0)) {
      throw new e.b(28);
    }
    f = Q.relative(b, c);
    if ("." !== f.charAt(0)) {
      throw new e.b(55);
    }
    try {
      var r = e.H(x, h);
    } catch (v) {
    }
    if (m !== r) {
      c = e.o(m.mode);
      if (g = e.na(q, g, c)) {
        throw new e.b(g);
      }
      if (g = r ? e.na(x, h, c) : e.Ga(x, h)) {
        throw new e.b(g);
      }
      if (!q.f.rename) {
        throw new e.b(63);
      }
      if (e.T(m) || r && e.T(r)) {
        throw new e.b(10);
      }
      if (x !== q && (g = e.O(q, "w"))) {
        throw new e.b(g);
      }
      try {
        e.u.willMovePath && e.u.willMovePath(a, b);
      } catch (v) {
        E("FS.trackingDelegate['willMovePath']('" + a + "', '" + b + "') threw an exception: " + v.message);
      }
      e.fb(m);
      try {
        q.f.rename(m, x, h);
      } catch (v) {
        throw v;
      } finally {
        e.eb(m);
      }
      try {
        if (e.u.onMovePath) {
          e.u.onMovePath(a, b);
        }
      } catch (v) {
        E("FS.trackingDelegate['onMovePath']('" + a + "', '" + b + "') threw an exception: " + v.message);
      }
    }
  }, rmdir:function(a) {
    var b = e.h(a, {parent:!0}).node, c = A.basename(a), f = e.H(b, c), g = e.na(b, c, !0);
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
      e.u.willDeletePath && e.u.willDeletePath(a);
    } catch (h) {
      E("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message);
    }
    b.f.rmdir(b, c);
    e.wa(f);
    try {
      if (e.u.onDeletePath) {
        e.u.onDeletePath(a);
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
    var b = e.h(a, {parent:!0}).node, c = A.basename(a), f = e.H(b, c), g = e.na(b, c, !1);
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
      e.u.willDeletePath && e.u.willDeletePath(a);
    } catch (h) {
      E("FS.trackingDelegate['willDeletePath']('" + a + "') threw an exception: " + h.message);
    }
    b.f.unlink(b, c);
    e.wa(f);
    try {
      if (e.u.onDeletePath) {
        e.u.onDeletePath(a);
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
    return Q.resolve(e.F(a.parent), a.f.readlink(a));
  }, stat:function(a, b) {
    a = e.h(a, {B:!b}).node;
    if (!a) {
      throw new e.b(44);
    }
    if (!a.f.C) {
      throw new e.b(63);
    }
    return a.f.C(a);
  }, lstat:function(a) {
    return e.stat(a, !0);
  }, chmod:function(a, b, c) {
    var f;
    "string" === typeof a ? f = e.h(a, {B:!c}).node : f = a;
    if (!f.f.s) {
      throw new e.b(63);
    }
    f.f.s(f, {mode:b & 4095 | f.mode & -4096, timestamp:Date.now()});
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
    if (!g.f.s) {
      throw new e.b(63);
    }
    g.f.s(g, {timestamp:Date.now()});
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
    if (!c.f.s) {
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
    c.f.s(c, {size:b, timestamp:Date.now()});
  }, Le:function(a, b) {
    a = e.M(a);
    if (!a) {
      throw new e.b(8);
    }
    if (0 === (a.flags & 2097155)) {
      throw new e.b(28);
    }
    e.truncate(a.node, b);
  }, bf:function(a, b, c) {
    a = e.h(a, {B:!0}).node;
    a.f.s(a, {timestamp:Math.max(b, c)});
  }, open:function(a, b, c, f, g) {
    if ("" === a) {
      throw new e.b(44);
    }
    b = "string" === typeof b ? e.Pb(b) : b;
    c = b & 64 ? ("undefined" === typeof c ? 438 : c) & 4095 | 32768 : 0;
    if ("object" === typeof a) {
      var h = a;
    } else {
      a = A.normalize(a);
      try {
        h = e.h(a, {B:!(b & 131072)}).node;
      } catch (q) {
      }
    }
    var m = !1;
    if (b & 64) {
      if (h) {
        if (b & 128) {
          throw new e.b(20);
        }
      } else {
        h = e.D(a, c, 0), m = !0;
      }
    }
    if (!h) {
      throw new e.b(44);
    }
    e.da(h.mode) && (b &= -513);
    if (b & 65536 && !e.o(h.mode)) {
      throw new e.b(54);
    }
    if (!m && (c = e.Ob(h, b))) {
      throw new e.b(c);
    }
    b & 512 && e.truncate(h, 0);
    b &= -131713;
    f = e.Db({node:h, path:e.F(h), flags:b, seekable:!0, position:0, g:h.g, cc:[], error:!1}, f, g);
    f.g.open && f.g.open(f);
    !d.logReadFiles || b & 1 || (e.Ka || (e.Ka = {}), a in e.Ka || (e.Ka[a] = 1, E("FS.trackingDelegate error on read file: " + a)));
    try {
      e.u.onOpenFile && (g = 0, 1 !== (b & 2097155) && (g |= e.lb.ib.qb), 0 !== (b & 2097155) && (g |= e.lb.ib.rb), e.u.onOpenFile(a, g));
    } catch (q) {
      E("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + q.message);
    }
    return f;
  }, close:function(a) {
    if (e.ea(a)) {
      throw new e.b(8);
    }
    a.R && (a.R = null);
    try {
      a.g.close && a.g.close(a);
    } catch (b) {
      throw b;
    } finally {
      e.xb(a.fd);
    }
    a.fd = null;
  }, ea:function(a) {
    return null === a.fd;
  }, v:function(a, b, c) {
    if (e.ea(a)) {
      throw new e.b(8);
    }
    if (!a.seekable || !a.g.v) {
      throw new e.b(70);
    }
    if (0 != c && 1 != c && 2 != c) {
      throw new e.b(28);
    }
    a.position = a.g.v(a, b, c);
    a.cc = [];
    return a.position;
  }, read:function(a, b, c, f, g) {
    if (0 > f || 0 > g) {
      throw new e.b(28);
    }
    if (e.ea(a)) {
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
    if (e.ea(a)) {
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
    a.seekable && a.flags & 1024 && e.v(a, 0, 2);
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
      if (a.path && e.u.onWriteToFile) {
        e.u.onWriteToFile(a.path);
      }
    } catch (q) {
      E("FS.trackingDelegate['onWriteToFile']('" + a.path + "') threw an exception: " + q.message);
    }
    return b;
  }, ba:function(a, b, c) {
    if (e.ea(a)) {
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
    if (!a.g.ba) {
      throw new e.b(138);
    }
    a.g.ba(a, b, c);
  }, fa:function(a, b, c, f, g, h, m) {
    if (0 !== (h & 2) && 0 === (m & 2) && 2 !== (a.flags & 2097155)) {
      throw new e.b(2);
    }
    if (1 === (a.flags & 2097155)) {
      throw new e.b(2);
    }
    if (!a.g.fa) {
      throw new e.b(43);
    }
    return a.g.fa(a, b, c, f, g, h, m);
  }, X:function(a, b, c, f, g) {
    return a && a.g.X ? a.g.X(a, b, c, f, g) : 0;
  }, Ve:function() {
    return 0;
  }, Ca:function(a, b, c) {
    if (!a.g.Ca) {
      throw new e.b(59);
    }
    return a.g.Ca(a, b, c);
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
    "utf8" === b.encoding ? c = S(g, 0) : "binary" === b.encoding && (c = g);
    e.close(f);
    return c;
  }, writeFile:function(a, b, c) {
    c = c || {};
    c.flags = c.flags || "w";
    a = e.open(a, c.flags, c.mode);
    if ("string" === typeof b) {
      var f = new Uint8Array(ma(b) + 1);
      b = la(b, f, 0, f.length);
      e.write(a, f, 0, b, void 0, c.vb);
    } else {
      if (ArrayBuffer.isView(b)) {
        e.write(a, b, 0, b.byteLength, void 0, c.vb);
      } else {
        throw Error("Unsupported data type");
      }
    }
    e.close(a);
  }, cwd:function() {
    return e.Ua;
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
    e.Ua = a.path;
  }, zb:function() {
    e.mkdir("/tmp");
    e.mkdir("/home");
    e.mkdir("/home/web_user");
  }, yb:function() {
    e.mkdir("/dev");
    e.Na(e.U(1, 3), {read:function() {
      return 0;
    }, write:function(f, g, h, m) {
      return m;
    }});
    e.oa("/dev/null", e.U(1, 3));
    V.register(e.U(5, 0), V.Fb);
    V.register(e.U(6, 0), V.Eb);
    e.oa("/dev/tty", e.U(5, 0));
    e.oa("/dev/tty1", e.U(6, 0));
    if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
      var a = new Uint8Array(1);
      var b = function() {
        crypto.getRandomValues(a);
        return a[0];
      };
    } else {
      if (X) {
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
  }, Bb:function() {
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
        b = {parent:null, l:{hb:"fake"}, f:{readlink:function() {
          return f.path;
        }}};
        return b.parent = b;
      }};
      return a;
    }}, {}, "/proc/self/fd");
  }, Cb:function() {
    d.stdin ? e.L("/dev", "stdin", d.stdin) : e.symlink("/dev/tty", "/dev/stdin");
    d.stdout ? e.L("/dev", "stdout", null, d.stdout) : e.symlink("/dev/tty", "/dev/stdout");
    d.stderr ? e.L("/dev", "stderr", null, d.stderr) : e.symlink("/dev/tty1", "/dev/stderr");
    var a = e.open("/dev/stdin", "r"), b = e.open("/dev/stdout", "w"), c = e.open("/dev/stderr", "w");
    k(0 === a.fd, "invalid handle for stdin (" + a.fd + ")");
    k(1 === b.fd, "invalid handle for stdout (" + b.fd + ")");
    k(2 === c.fd, "invalid handle for stderr (" + c.fd + ")");
  }, Wa:function() {
    e.b || (e.b = function(a, b) {
      this.node = b;
      this.Xb = function(c) {
        this.j = c;
        for (var f in zb) {
          if (zb[f] === c) {
            this.code = f;
            break;
          }
        }
      };
      this.Xb(a);
      this.message = Rb[a];
      this.stack && (Object.defineProperty(this, "stack", {value:Error().stack, writable:!0}), this.stack = ob(this.stack));
    }, e.b.prototype = Error(), e.b.prototype.constructor = e.b, [44].forEach(function(a) {
      e.Aa[a] = new e.b(a);
      e.Aa[a].stack = "<generic error, no stack>";
    }));
  }, Yb:function() {
    e.Wa();
    e.I = Array(4096);
    e.l(y, {}, "/");
    e.zb();
    e.yb();
    e.Bb();
    e.Ya = {MEMFS:y, WORKERFS:I};
  }, N:function(a, b, c) {
    k(!e.N.la, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
    e.N.la = !0;
    e.Wa();
    d.stdin = a || d.stdin;
    d.stdout = b || d.stdout;
    d.stderr = c || d.stderr;
    e.Cb();
  }, quit:function() {
    e.N.la = !1;
    var a = d._fflush;
    a && a(0);
    for (a = 0; a < e.streams.length; a++) {
      var b = e.streams[a];
      b && e.close(b);
    }
  }, ka:function(a, b) {
    var c = 0;
    a && (c |= 365);
    b && (c |= 146);
    return c;
  }, Qe:function(a, b) {
    a = A.join.apply(null, a);
    b && "/" == a[0] && (a = a.substr(1));
    return a;
  }, ve:function(a, b) {
    return Q.resolve(b, a);
  }, Ze:function(a) {
    return A.normalize(a);
  }, Ke:function(a, b) {
    a = e.ua(a, b);
    if (a.exists) {
      return a.object;
    }
    Z(a.error);
    return null;
  }, ua:function(a, b) {
    try {
      var c = e.h(a, {B:!b});
      a = c.path;
    } catch (g) {
    }
    var f = {ma:!1, exists:!1, error:0, name:null, path:null, object:null, Sb:!1, Ub:null, Tb:null};
    try {
      c = e.h(a, {parent:!0}), f.Sb = !0, f.Ub = c.path, f.Tb = c.node, f.name = A.basename(a), c = e.h(a, {B:!b}), f.exists = !0, f.path = c.path, f.object = c.node, f.name = c.node.name, f.ma = "/" === c.path;
    } catch (g) {
      f.error = g.j;
    }
    return f;
  }, ze:function(a, b, c, f) {
    a = A.K("string" === typeof a ? a : e.F(a), b);
    return e.mkdir(a, e.ka(c, f));
  }, Ce:function(a, b) {
    a = "string" === typeof a ? a : e.F(a);
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
  }, Ab:function(a, b, c, f, g) {
    a = A.K("string" === typeof a ? a : e.F(a), b);
    return e.create(a, e.ka(f, g));
  }, Ta:function(a, b, c, f, g, h) {
    a = b ? A.K("string" === typeof a ? a : e.F(a), b) : a;
    f = e.ka(f, g);
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
    a = A.K("string" === typeof a ? a : e.F(a), b);
    b = e.ka(!!c, !!f);
    e.L.Fa || (e.L.Fa = 64);
    var g = e.U(e.L.Fa++, 0);
    e.Na(g, {open:function(h) {
      h.seekable = !1;
    }, close:function() {
      f && f.buffer && f.buffer.length && f(10);
    }, read:function(h, m, q, x) {
      for (var r = 0, v = 0; v < x; v++) {
        try {
          var D = c();
        } catch (G) {
          throw new e.b(29);
        }
        if (void 0 === D && 0 === r) {
          throw new e.b(6);
        }
        if (null === D || void 0 === D) {
          break;
        }
        r++;
        m[q + v] = D;
      }
      r && (h.node.timestamp = Date.now());
      return r;
    }, write:function(h, m, q, x) {
      for (var r = 0; r < x; r++) {
        try {
          f(m[q + r]);
        } catch (v) {
          throw new e.b(29);
        }
      }
      x && (h.node.timestamp = Date.now());
      return r;
    }});
    return e.oa(a, b, g);
  }, Be:function(a, b, c) {
    a = A.K("string" === typeof a ? a : e.F(a), b);
    return e.symlink(c, a);
  }, $a:function(a) {
    if (a.Da || a.Mb || a.link || a.c) {
      return !0;
    }
    var b = !0;
    if ("undefined" !== typeof XMLHttpRequest) {
      throw Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    }
    if (wa) {
      try {
        a.c = La(wa(a.url), !0), a.i = a.c.length;
      } catch (c) {
        b = !1;
      }
    } else {
      throw Error("Cannot load without read() or XMLHttpRequest.");
    }
    b || Z(29);
    return b;
  }, Ae:function(a, b, c, f, g) {
    function h() {
      this.Ea = !1;
      this.m = [];
    }
    h.prototype.get = function(r) {
      if (!(r > this.length - 1 || 0 > r)) {
        var v = r % this.chunkSize;
        return this.cb(r / this.chunkSize | 0)[v];
      }
    };
    h.prototype.ub = function(r) {
      this.cb = r;
    };
    h.prototype.Ra = function() {
      var r = new XMLHttpRequest;
      r.open("HEAD", c, !1);
      r.send(null);
      if (!(200 <= r.status && 300 > r.status || 304 === r.status)) {
        throw Error("Couldn't load " + c + ". Status: " + r.status);
      }
      var v = Number(r.getResponseHeader("Content-length")), D, G = (D = r.getResponseHeader("Accept-Ranges")) && "bytes" === D;
      r = (D = r.getResponseHeader("Content-Encoding")) && "gzip" === D;
      var n = 1048576;
      G || (n = v);
      var w = this;
      w.ub(function(B) {
        var H = B * n, M = (B + 1) * n - 1;
        M = Math.min(M, v - 1);
        if ("undefined" === typeof w.m[B]) {
          var $a = w.m;
          if (H > M) {
            throw Error("invalid range (" + H + ", " + M + ") or no bytes requested!");
          }
          if (M > v - 1) {
            throw Error("only " + v + " bytes available! programmer error!");
          }
          var F = new XMLHttpRequest;
          F.open("GET", c, !1);
          v !== n && F.setRequestHeader("Range", "bytes=" + H + "-" + M);
          "undefined" != typeof Uint8Array && (F.responseType = "arraybuffer");
          F.overrideMimeType && F.overrideMimeType("text/plain; charset=x-user-defined");
          F.send(null);
          if (!(200 <= F.status && 300 > F.status || 304 === F.status)) {
            throw Error("Couldn't load " + c + ". Status: " + F.status);
          }
          H = void 0 !== F.response ? new Uint8Array(F.response || []) : La(F.responseText || "", !0);
          $a[B] = H;
        }
        if ("undefined" === typeof w.m[B]) {
          throw Error("doXHR failed!");
        }
        return w.m[B];
      });
      if (r || !v) {
        n = v = 1, n = v = this.cb(0).length, ia("LazyFiles on gzip forces download of the whole file when length is accessed");
      }
      this.tb = v;
      this.sb = n;
      this.Ea = !0;
    };
    if ("undefined" !== typeof XMLHttpRequest) {
      if (!R) {
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      }
      var m = new h;
      Object.defineProperties(m, {length:{get:function() {
        this.Ea || this.Ra();
        return this.tb;
      }}, chunkSize:{get:function() {
        this.Ea || this.Ra();
        return this.sb;
      }}});
      m = {Da:!1, c:m};
    } else {
      m = {Da:!1, url:c};
    }
    var q = e.Ab(a, b, m, f, g);
    m.c ? q.c = m.c : m.url && (q.c = null, q.url = m.url);
    Object.defineProperties(q, {i:{get:function() {
      return this.c.length;
    }}});
    var x = {};
    Object.keys(q.g).forEach(function(r) {
      var v = q.g[r];
      x[r] = function() {
        if (!e.$a(q)) {
          throw new e.b(29);
        }
        return v.apply(null, arguments);
      };
    });
    x.read = function(r, v, D, G, n) {
      if (!e.$a(q)) {
        throw new e.b(29);
      }
      r = r.node.c;
      if (n >= r.length) {
        return 0;
      }
      G = Math.min(r.length - n, G);
      k(0 <= G);
      if (r.slice) {
        for (var w = 0; w < G; w++) {
          v[D + w] = r[n + w];
        }
      } else {
        for (w = 0; w < G; w++) {
          v[D + w] = r.get(n + w);
        }
      }
      return G;
    };
    q.g = x;
    return q;
  }, De:function(a, b, c, f, g, h, m, q, x, r) {
    function v(n) {
      function w(H) {
        r && r();
        q || e.Ta(a, b, H, f, g, x);
        h && h();
        Ta(G);
      }
      var B = !1;
      d.preloadPlugins.forEach(function(H) {
        !B && H.canHandle(D) && (H.handle(n, D, w, function() {
          m && m();
          Ta(G);
        }), B = !0);
      });
      B || w(n);
    }
    Ab.N();
    var D = b ? Q.resolve(A.K(a, b)) : a, G = Gb("cp " + D);
    kb(G);
    "string" == typeof c ? Ab.xe(c, function(n) {
      v(n);
    }, m) : v(c);
  }, indexedDB:function() {
    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  }, Oa:function() {
    return "EM_FS_" + window.location.pathname;
  }, Pa:20, $:"FILE_DATA", Xe:function(a, b, c) {
    b = b || function() {
    };
    c = c || function() {
    };
    var f = e.indexedDB();
    try {
      var g = f.open(e.Oa(), e.Pa);
    } catch (h) {
      return c(h);
    }
    g.onupgradeneeded = function() {
      ia("creating db");
      g.result.createObjectStore(e.$);
    };
    g.onsuccess = function() {
      var h = g.result.transaction([e.$], "readwrite"), m = h.objectStore(e.$), q = 0, x = 0, r = a.length;
      a.forEach(function(v) {
        v = m.put(e.ua(v).object.c, v);
        v.onsuccess = function() {
          q++;
          q + x == r && (0 == x ? b() : c());
        };
        v.onerror = function() {
          x++;
          q + x == r && (0 == x ? b() : c());
        };
      });
      h.onerror = c;
    };
    g.onerror = c;
  }, Re:function(a, b, c) {
    b = b || function() {
    };
    c = c || function() {
    };
    var f = e.indexedDB();
    try {
      var g = f.open(e.Oa(), e.Pa);
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
      var q = m.objectStore(e.$), x = 0, r = 0, v = a.length;
      a.forEach(function(D) {
        var G = q.get(D);
        G.onsuccess = function() {
          e.ua(D).exists && e.unlink(D);
          e.Ta(A.dirname(D), A.basename(D), G.result, !0, !0, !0);
          x++;
          x + r == v && (0 == r ? b() : c());
        };
        G.onerror = function() {
          r++;
          x + r == v && (0 == r ? b() : c());
        };
      });
      m.onerror = c;
    };
    g.onerror = c;
  }}, z = {Se:{}, nb:5, umask:511, ye:function(a, b) {
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
  }, ya:function(a, b, c) {
    try {
      var f = a(b);
    } catch (g) {
      if (g && g.node && A.normalize(b) !== A.normalize(e.F(g.node))) {
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
    K = [f.size >>> 0, (C = f.size, 1.0 <= +ya(C) ? 0.0 < C ? (za(+ca(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+ba((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
    p[c + 40 >> 2] = K[0];
    p[c + 44 >> 2] = K[1];
    p[c + 48 >> 2] = 4096;
    p[c + 52 >> 2] = f.blocks;
    p[c + 56 >> 2] = f.atime.getTime() / 1000 | 0;
    p[c + 60 >> 2] = 0;
    p[c + 64 >> 2] = f.mtime.getTime() / 1000 | 0;
    p[c + 68 >> 2] = 0;
    p[c + 72 >> 2] = f.ctime.getTime() / 1000 | 0;
    p[c + 76 >> 2] = 0;
    K = [f.ino >>> 0, (C = f.ino, 1.0 <= +ya(C) ? 0.0 < C ? (za(+ca(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+ba((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
    p[c + 80 >> 2] = K[0];
    p[c + 84 >> 2] = K[1];
    return 0;
  }, Ie:function(a, b, c, f, g) {
    a = ea.slice(a, a + c);
    e.X(b, a, g, c, f);
  }, Ge:function(a, b) {
    a = A.normalize(a);
    "/" === a[a.length - 1] && (a = a.substr(0, a.length - 1));
    e.mkdir(a, b, 0);
    return 0;
  }, He:function(a, b, c) {
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
    e.D(a, b, c);
    return 0;
  }, Je:function(a, b, c) {
    if (0 >= c) {
      return -28;
    }
    a = e.readlink(a);
    var f = Math.min(c, ma(a)), g = J[b + f];
    Ra(a, b, c + 1);
    J[b + f] = g;
    return f;
  }, Ee:function(a, b) {
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
  }, Fe:function(a, b, c) {
    var f = e.M(c);
    f && e.close(f);
    return e.open(a, b, 0, c, c).fd;
  }, Gb:function(a, b, c, f) {
    for (var g = 0, h = 0; h < c; h++) {
      var m = p[b + (8 * h + 4) >> 2], q = e.read(a, J, p[b + 8 * h >> 2], m, f);
      if (0 > q) {
        return -1;
      }
      g += q;
      if (q < m) {
        break;
      }
    }
    return g;
  }, Hb:function(a, b, c, f) {
    for (var g = 0, h = 0; h < c; h++) {
      var m = e.write(a, J, p[b + 8 * h >> 2], p[b + (8 * h + 4) >> 2], f);
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
    return da(a);
  }, G:function(a) {
    a = e.M(a);
    if (!a) {
      throw new e.b(8);
    }
    return a;
  }, Me:function(a, b) {
    0 <= a ? k(0 === b) : k(-1 === b);
    return a;
  }}, ja;
  X ? ja = function() {
    var a = process.hrtime();
    return 1e3 * a[0] + a[1] / 1e6;
  } : "undefined" !== typeof dateNow ? ja = dateNow : ja = function() {
    return performance.now();
  };
  var pb = {}, Jb = (Ra("GMT", 2334240, 4), 2334240), Ja = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ka = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  Object.defineProperties(bb.prototype, {read:{get:function() {
    return 365 === (this.mode & 365);
  }, set:function(a) {
    a ? this.mode |= 365 : this.mode &= -366;
  }}, write:{get:function() {
    return 146 === (this.mode & 146);
  }, set:function(a) {
    a ? this.mode |= 146 : this.mode &= -147;
  }}, Mb:{get:function() {
    return e.o(this.mode);
  }}, Da:{get:function() {
    return e.da(this.mode);
  }}});
  e.ob = bb;
  e.Yb();
  var Ab, Bb = {__assert_fail:function(a, b, c, f) {
    l("Assertion failed: " + da(a) + ", at: " + [b ? da(b) : "unknown filename", c, f ? da(f) : "unknown function"]);
  }, __handle_stack_overflow:function() {
    l("stack overflow");
  }, __sys__newselect:function(a, b, c, f) {
    k(64 >= a, "nfds must be less than or equal to 64");
    k(!f, "exceptfds not supported");
    for (var g = 0, h = b ? p[b >> 2] : 0, m = b ? p[b + 4 >> 2] : 0, q = c ? p[c >> 2] : 0, x = c ? p[c + 4 >> 2] : 0, r = f ? p[f >> 2] : 0, v = f ? p[f + 4 >> 2] : 0, D = 0, G = 0, n = 0, w = 0, B = 0, H = 0, M = (b ? p[b >> 2] : 0) | (c ? p[c >> 2] : 0) | (f ? p[f >> 2] : 0), $a = (b ? p[b + 4 >> 2] : 0) | (c ? p[c + 4 >> 2] : 0) | (f ? p[f + 4 >> 2] : 0), F = 0; F < a; F++) {
      var L = 1 << F % 32;
      if (32 > F ? M & L : $a & L) {
        var Pa = e.M(F);
        if (!Pa) {
          throw new e.b(8);
        }
        var Qa = z.nb;
        Pa.g.Vb && (Qa = Pa.g.Vb(Pa));
        Qa & 1 && (32 > F ? h & L : m & L) && (32 > F ? D |= L : G |= L, g++);
        Qa & 4 && (32 > F ? q & L : x & L) && (32 > F ? n |= L : w |= L, g++);
        Qa & 2 && (32 > F ? r & L : v & L) && (32 > F ? B |= L : H |= L, g++);
      }
    }
    b && (p[b >> 2] = D, p[b + 4 >> 2] = G);
    c && (p[c >> 2] = n, p[c + 4 >> 2] = w);
    f && (p[f >> 2] = B, p[f + 4 >> 2] = H);
    return g;
  }, __sys_fcntl64:function(a, b, c) {
    z.W = c;
    try {
      var f = z.G(a);
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
          return g = z.get(), Sa[g + 0 >> 1] = 2, 0;
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          return Z(28), -1;
        default:
          return -28;
      }
    } catch (h) {
      return "undefined" !== typeof e && h instanceof e.b || l(h), -h.j;
    }
  }, __sys_fstat64:function(a, b) {
    try {
      var c = z.G(a);
      return z.ya(e.stat, c.path, b);
    } catch (f) {
      return "undefined" !== typeof e && f instanceof e.b || l(f), -f.j;
    }
  }, __sys_getdents64:function(a, b, c) {
    try {
      var f = z.G(a);
      f.R || (f.R = e.readdir(f.path));
      a = 0;
      for (var g = e.v(f, 0, 1), h = Math.floor(g / 280); h < f.R.length && a + 280 <= c;) {
        var m = f.R[h];
        if ("." === m[0]) {
          var q = 1;
          var x = 4;
        } else {
          var r = e.H(f.node, m);
          q = r.id;
          x = e.da(r.mode) ? 2 : e.o(r.mode) ? 4 : e.S(r.mode) ? 10 : 8;
        }
        K = [q >>> 0, (C = q, 1.0 <= +ya(C) ? 0.0 < C ? (za(+ca(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+ba((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
        p[b + a >> 2] = K[0];
        p[b + a + 4 >> 2] = K[1];
        K = [280 * (h + 1) >>> 0, (C = 280 * (h + 1), 1.0 <= +ya(C) ? 0.0 < C ? (za(+ca(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+ba((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
        p[b + a + 8 >> 2] = K[0];
        p[b + a + 12 >> 2] = K[1];
        Sa[b + a + 16 >> 1] = 280;
        J[b + a + 18 >> 0] = x;
        Ra(m, b + a + 19, 256);
        a += 280;
        h += 1;
      }
      e.v(f, 280 * h, 0);
      return a;
    } catch (v) {
      return "undefined" !== typeof e && v instanceof e.b || l(v), -v.j;
    }
  }, __sys_ioctl:function(a, b, c) {
    z.W = c;
    try {
      var f = z.G(a);
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
          return g = z.get(), e.Ca(f, b, g);
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
      return a = z.P(a), z.ya(e.lstat, a, b);
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
      var f = z.G(a);
      return e.read(f, J, b, c);
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
      return a = z.P(a), z.ya(e.stat, a, b);
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
  }, clock:Ea, clock_gettime:function(a, b) {
    if (0 === a) {
      a = Date.now();
    } else {
      if (1 === a || 4 === a) {
        a = ja();
      } else {
        return Z(28), -1;
      }
    }
    p[b >> 2] = a / 1000 | 0;
    p[b + 4 >> 2] = a % 1000 * 1E6 | 0;
    return 0;
  }, emscripten_get_sbrk_ptr:function() {
    return 2334176;
  }, emscripten_memcpy_big:function(a, b, c) {
    ea.copyWithin(a, b, b + c);
  }, emscripten_resize_heap:function(a) {
    var b = ea.length;
    k(a > b);
    if (2147483648 < a) {
      return E("Cannot enlarge memory, asked to go up to " + a + " bytes, but the limit is 2147483648 bytes!"), !1;
    }
    for (var c = 1; 4 >= c; c *= 2) {
      var f = b * (1 + 0.2 / c);
      f = Math.min(f, a + 100663296);
      f = Math.min(2147483648, Fb(Math.max(16777216, a, f), 65536));
      a: {
        var g = f;
        try {
          aa.grow(g - na.byteLength + 65535 >>> 16);
          ib(aa.buffer);
          var h = 1;
          break a;
        } catch (m) {
          console.error("emscripten_realloc_buffer: Attempted to grow heap from " + na.byteLength + " bytes to " + g + " bytes, but got error: " + m);
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
    sa().forEach(function(f, g) {
      var h = b + c;
      g = p[a + 4 * g >> 2] = h;
      for (h = 0; h < f.length; ++h) {
        k(f.charCodeAt(h) === f.charCodeAt(h) & 255), J[g++ >> 0] = f.charCodeAt(h);
      }
      J[g >> 0] = 0;
      c += f.length + 1;
    });
    return 0;
  }, environ_sizes_get:function(a, b) {
    var c = sa();
    p[a >> 2] = c.length;
    var f = 0;
    c.forEach(function(g) {
      f += g.length + 1;
    });
    p[b >> 2] = f;
    return 0;
  }, exit:function(a) {
    ub(a);
  }, fd_close:function(a) {
    try {
      var b = z.G(a);
      e.close(b);
      return 0;
    } catch (c) {
      return "undefined" !== typeof e && c instanceof e.b || l(c), c.j;
    }
  }, fd_fdstat_get:function(a, b) {
    try {
      var c = z.G(a);
      J[b >> 0] = c.tty ? 2 : e.o(c.mode) ? 3 : e.S(c.mode) ? 7 : 4;
      return 0;
    } catch (f) {
      return "undefined" !== typeof e && f instanceof e.b || l(f), f.j;
    }
  }, fd_read:function(a, b, c, f) {
    try {
      var g = z.G(a), h = z.Gb(g, b, c);
      p[f >> 2] = h;
      return 0;
    } catch (m) {
      return "undefined" !== typeof e && m instanceof e.b || l(m), m.j;
    }
  }, fd_seek:function(a, b, c, f, g) {
    try {
      var h = z.G(a);
      a = 4294967296 * c + (b >>> 0);
      if (-9007199254740992 >= a || 9007199254740992 <= a) {
        return -61;
      }
      e.v(h, a, f);
      K = [h.position >>> 0, (C = h.position, 1.0 <= +ya(C) ? 0.0 < C ? (za(+ca(C / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+ba((C - +(~~C >>> 0)) / 4294967296.0) >>> 0 : 0)];
      p[g >> 2] = K[0];
      p[g + 4 >> 2] = K[1];
      h.R && 0 === a && 0 === f && (h.R = null);
      return 0;
    } catch (m) {
      return "undefined" !== typeof e && m instanceof e.b || l(m), m.j;
    }
  }, fd_write:function(a, b, c, f) {
    try {
      var g = z.G(a), h = z.Hb(g, b, c);
      p[f >> 2] = h;
      return 0;
    } catch (m) {
      return "undefined" !== typeof e && m instanceof e.b || l(m), m.j;
    }
  }, gmtime:function(a) {
    return qb(a, 2334192);
  }, gmtime_r:qb, localtime:function(a) {
    return rb(a, 2334192);
  }, localtime_r:rb, memory:aa, mktime:function(a) {
    Ga();
    var b = new Date(p[a + 20 >> 2] + 1900, p[a + 16 >> 2], p[a + 12 >> 2], p[a + 8 >> 2], p[a + 4 >> 2], p[a >> 2], 0), c = p[a + 32 >> 2], f = b.getTimezoneOffset(), g = new Date(b.getFullYear(), 0, 1), h = (new Date(b.getFullYear(), 6, 1)).getTimezoneOffset(), m = g.getTimezoneOffset(), q = Math.min(m, h);
    0 > c ? p[a + 32 >> 2] = Number(h != m && q == f) : 0 < c != (q == f) && (h = Math.max(m, h), b.setTime(b.getTime() + 60000 * ((0 < c ? q : h) - f)));
    p[a + 24 >> 2] = b.getDay();
    p[a + 28 >> 2] = (b.getTime() - g.getTime()) / 864E5 | 0;
    return b.getTime() / 1000 | 0;
  }, nanosleep:function(a, b) {
    if (0 === a) {
      return Z(28), -1;
    }
    var c = p[a >> 2];
    a = p[a + 4 >> 2];
    if (0 > a || 999999999 < a || 0 > c) {
      return Z(28), -1;
    }
    0 !== b && (p[b >> 2] = 0, p[b + 4 >> 2] = 0);
    b = 1e6 * c + a / 1000;
    for (c = ja(); ja() - c < b / 1000;) {
    }
  }, round:function(a) {
    a = +a;
    return 0 <= a ? +ca(a + 0.5) : +ba(a - 0.5);
  }, roundf:function(a) {
    a = +a;
    return 0 <= a ? +ca(a + 0.5) : +ba(a - 0.5);
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
      function B(M) {
        return 0 > M ? -1 : 0 < M ? 1 : 0;
      }
      var H;
      0 === (H = B(n.getFullYear() - w.getFullYear())) && 0 === (H = B(n.getMonth() - w.getMonth())) && (H = B(n.getDate() - w.getDate()));
      return H;
    }
    function q(n) {
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
      n = Ia(new Date(n.A + 1900, 0, 1), n.ra);
      var w = new Date(n.getFullYear() + 1, 0, 4), B = q(new Date(n.getFullYear(), 0, 4));
      w = q(w);
      return 0 >= m(B, n) ? 0 >= m(w, n) ? n.getFullYear() + 1 : n.getFullYear() : n.getFullYear() - 1;
    }
    var r = p[f + 40 >> 2];
    f = {ac:p[f >> 2], $b:p[f + 4 >> 2], pa:p[f + 8 >> 2], ja:p[f + 12 >> 2], Z:p[f + 16 >> 2], A:p[f + 20 >> 2], qa:p[f + 24 >> 2], ra:p[f + 28 >> 2], $e:p[f + 32 >> 2], Zb:p[f + 36 >> 2], bc:r ? da(r) : ""};
    c = da(c);
    r = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
    for (var v in r) {
      c = c.replace(new RegExp(v, "g"), r[v]);
    }
    var D = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), G = "January February March April May June July August September October November December".split(" ");
    r = {"%a":function(n) {
      return D[n.qa].substring(0, 3);
    }, "%A":function(n) {
      return D[n.qa];
    }, "%b":function(n) {
      return G[n.Z].substring(0, 3);
    }, "%B":function(n) {
      return G[n.Z];
    }, "%C":function(n) {
      return h((n.A + 1900) / 100 | 0, 2);
    }, "%d":function(n) {
      return h(n.ja, 2);
    }, "%e":function(n) {
      return g(n.ja, 2, " ");
    }, "%g":function(n) {
      return x(n).toString().substring(2);
    }, "%G":function(n) {
      return x(n);
    }, "%H":function(n) {
      return h(n.pa, 2);
    }, "%I":function(n) {
      n = n.pa;
      0 == n ? n = 12 : 12 < n && (n -= 12);
      return h(n, 2);
    }, "%j":function(n) {
      return h(n.ja + Va(Ha(n.A + 1900) ? Ja : Ka, n.Z - 1), 3);
    }, "%m":function(n) {
      return h(n.Z + 1, 2);
    }, "%M":function(n) {
      return h(n.$b, 2);
    }, "%n":function() {
      return "\n";
    }, "%p":function(n) {
      return 0 <= n.pa && 12 > n.pa ? "AM" : "PM";
    }, "%S":function(n) {
      return h(n.ac, 2);
    }, "%t":function() {
      return "\t";
    }, "%u":function(n) {
      return n.qa || 7;
    }, "%U":function(n) {
      var w = new Date(n.A + 1900, 0, 1), B = 0 === w.getDay() ? w : Ia(w, 7 - w.getDay());
      n = new Date(n.A + 1900, n.Z, n.ja);
      return 0 > m(B, n) ? (w = Va(Ha(n.getFullYear()) ? Ja : Ka, n.getMonth() - 1) - 31, h(Math.ceil((31 - B.getDate() + w + n.getDate()) / 7), 2)) : 0 === m(B, w) ? "01" : "00";
    }, "%V":function(n) {
      var w = new Date(n.A + 1901, 0, 4), B = q(new Date(n.A + 1900, 0, 4));
      w = q(w);
      var H = Ia(new Date(n.A + 1900, 0, 1), n.ra);
      return 0 > m(H, B) ? "53" : 0 >= m(w, H) ? "01" : h(Math.ceil((B.getFullYear() < n.A + 1900 ? n.ra + 32 - B.getDate() : n.ra + 1 - B.getDate()) / 7), 2);
    }, "%w":function(n) {
      return n.qa;
    }, "%W":function(n) {
      var w = new Date(n.A, 0, 1), B = 1 === w.getDay() ? w : Ia(w, 0 === w.getDay() ? 1 : 7 - w.getDay() + 1);
      n = new Date(n.A + 1900, n.Z, n.ja);
      return 0 > m(B, n) ? (w = Va(Ha(n.getFullYear()) ? Ja : Ka, n.getMonth() - 1) - 31, h(Math.ceil((31 - B.getDate() + w + n.getDate()) / 7), 2)) : 0 === m(B, w) ? "01" : "00";
    }, "%y":function(n) {
      return (n.A + 1900).toString().substring(2);
    }, "%Y":function(n) {
      return n.A + 1900;
    }, "%z":function(n) {
      n = n.Zb;
      var w = 0 <= n;
      n = Math.abs(n) / 60;
      return (w ? "+" : "-") + String("0000" + (n / 60 * 100 + n % 60)).slice(-4);
    }, "%Z":function(n) {
      return n.bc;
    }, "%%":function() {
      return "%";
    }};
    for (v in r) {
      0 <= c.indexOf(v) && (c = c.replace(new RegExp(v, "g"), r[v](f)));
    }
    v = La(c, !1);
    if (v.length > b) {
      return 0;
    }
    Eb(v, a);
    return v.length - 1;
  }, table:Pb, time:function(a) {
    var b = Date.now() / 1000 | 0;
    a && (p[a >> 2] = b);
    return b;
  }}, Cb = function() {
    function a(h) {
      d.asm = h.exports;
      Ta("wasm-instantiate");
    }
    function b(h) {
      k(d === g, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
      g = null;
      a(h.instance);
    }
    function c(h) {
      return Hb().then(function(m) {
        return WebAssembly.instantiate(m, f);
      }).then(h, function(m) {
        E("failed to asynchronously prepare wasm: " + m);
        l(m);
      });
    }
    var f = {env:Bb, wasi_snapshot_preview1:Bb};
    kb("wasm-instantiate");
    var g = d;
    if (d.instantiateWasm) {
      try {
        return d.instantiateWasm(f, a);
      } catch (h) {
        return E("Module.instantiateWasm callback failed with error: " + h), !1;
      }
    }
    (function() {
      if (ra || "function" !== typeof WebAssembly.instantiateStreaming || mb(P) || Ua(P, "file://") || "function" !== typeof fetch) {
        return c(b);
      }
      fetch(P, {credentials:"same-origin"}).then(function(h) {
        return WebAssembly.instantiateStreaming(h, f).then(b, function(m) {
          E("wasm streaming compile failed: " + m);
          E("falling back to ArrayBuffer instantiation");
          c(b);
        });
      });
    })();
    return {};
  }();
  d.asm = Cb;
  var Qb = d.___wasm_call_ctors = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.__wasm_call_ctors.apply(null, arguments);
  }, Ib = d.___errno_location = function() {
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
  var gb = d._malloc = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.malloc.apply(null, arguments);
  }, ta = d.__get_tzname = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm._get_tzname.apply(null, arguments);
  }, Lb = d.__get_daylight = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm._get_daylight.apply(null, arguments);
  }, Kb = d.__get_timezone = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm._get_timezone.apply(null, arguments);
  };
  d.___set_stack_limit = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.__set_stack_limit.apply(null, arguments);
  };
  yb = d.stackSave = function() {
    k(t, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
    k(!u, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
    return d.asm.stackSave.apply(null, arguments);
  };
  Aa = d.stackAlloc = function() {
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
  d.asm = Cb;
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
  Object.getOwnPropertyDescriptor(d, "WORKERFS") || (d.WORKERFS = function() {
    l("'WORKERFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
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
  d.writeStackCookie = jb;
  d.checkStackCookie = fa;
  d.abortStackOverflow = function(a) {
    l("Stack overflow! Attempted to allocate " + a + " bytes on the stack, but stack has only " + (2334336 - yb() + a) + " bytes available!");
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
  var Ma;
  qa = function b() {
    Ma || Xa();
    Ma || (qa = b);
  };
  d.run = Xa;
  if (d.preInit) {
    for ("function" == typeof d.preInit && (d.preInit = [d.preInit]); 0 < d.preInit.length;) {
      d.preInit.pop()();
    }
  }
  var tb = !0;
  d.noInitialRun && (tb = !1);
  Xa();
  return wb;
};

