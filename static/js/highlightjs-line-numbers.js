! function (e) {
    "use strict";

    function t() {
        "complete" === document.readyState ? n() : e.addEventListener("DOMContentLoaded", n)
    }

    function n() {
        try {
            var e = document.querySelectorAll("code.hljs");
            for (var t in e) e.hasOwnProperty(t) && r(e[t])
        } catch (n) {
            console.error("LineNumbers error: ", n)
        }
    }

    function r(e) {
        if ("object" == typeof e) {
            var t = e.parentNode,
                n = o(t.textContent);
            if (n > 1) {
                for (var r = "", c = 0; n > c; c++) r += c + 1 + "\n";
                var l = document.createElement("code");
                l.className = "hljs hljs-line-numbers", l.style["float"] = "left", l.textContent = r, t.insertBefore(l, e)
            }
        }
    }

    function o(e) {
        if (0 === e.length) return 0;
        var t = /\r\n|\r|\n/g,
            n = e.match(t);
        return n = n ? n.length : 0, e[e.length - 1].match(t) || (n += 1), n
    }
    "undefined" == typeof e.hljs ? console.error("highlight.js not detected!") : (e.hljs.initLineNumbersOnLoad = t, e.hljs.lineNumbersBlock = r)
}(window);