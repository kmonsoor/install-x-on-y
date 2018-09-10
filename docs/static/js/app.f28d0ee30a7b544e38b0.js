webpackJsonp([1], {
    "/7gC": function (e, n) {
        e.exports = {short: "nl", long: "Dutch", createdBy: "glenngijsberts"}
    }, "/TCW": function (e, n) {
        e.exports = {short: "es", long: "Spanish", createdBy: "Gonzalo2310"}
    }, "059H": function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "创建一个新对象",
                    desc: "创建一个带指定原型和属性的新对象。<br>\n          <br>\n          <strong>初学者请注意！</strong> 一般来说创建一个对象会像例子的上方那样做，就是直接赋值给一个变量。",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "创建一个对象的副本",
                    desc: "从一个或多个源对象中复制它们的所有可枚举属性的值到一个目标对象中。并返回目标对象。",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "一个新属性或修改现有的一个属性",
                    desc: "向对象中添加一个带给定属性描述符的已命名的属性。<br>\n          <br>\n          <strong>初学者请注意！</strong> 通常会使用小数点或方括号来创建一个新属性或修改现有属性。像这样：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。从技术上来说这不是一个内置的方法，所以没有包含进去。",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "一个或多个属性或修改现有的属性",
                    desc: "向对象中添加一个或多个带给定属性描述符的属性。<br>\n          <br>\n          <strong>初学者请注意！</strong> 通常会使用小数点或方括号来创建一个新属性或修改现有属性。像这样：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。从技术上来说这不是一个内置的方法，所以没有包含进去。",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "是否可以添加更多的属性",
                    desc: "检查是否允许扩展对象。",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "两个引用是否指向同一对象",
                    desc: "对比两个引用是否指向同一对象。NaN 与 NaN 比较会返回 true (与抽象等价比较和严格等价比较不同)（译者注：「抽象等价比较」就是带类型自动转换的比较，即“==”；「严格等价比较」则会比较两个变量的类型，即“===”）。这个有点奇怪，MDN 文档有点误导。",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "对象及其属性是否不能被修改",
                    desc: "检查一个对象是否被冻结。",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "一个对象是否不能被修改（但属性可以）",
                    desc: "检查一个对象的属性的属性描述符是否不能被修改以及不能增加新的属性。",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "对象是否在原型链里",
                    desc: "返回表示一个对象是否在另一指定对象的原型链上的布尔值。",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "让它不能添加或删除属性",
                    desc: "阻止删除一个对象的属性。现有的属性仍然能被修改。",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "让它不能添加、删除或修改属性",
                    desc: "冻结一个对象，使得它的属性不能被更改或删除。",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "让它不能添加属性",
                    desc: "阻止对象的扩展。仍然可以删除属性但不能添加属性。",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "表示这个对象的字符串",
                    desc: "<code>toString()</code> 方法返回表示这个对象的字符串。",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "表示这个对象的本地化的字符串",
                    desc: "<code>toLocaleString()</code> 方法返回表示这个对象的字符串。这个方法可以根据按不同地域需要在派生对象中被重写。例如：您有一些因地域不同而不同的数据，如日期的方法，您可以得到不同的时间格式。",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "关于属性的详细信息",
                        desc: "返回一个对象上已命名的属性的属性描述符。",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "一个对象上所有属性的详细信息",
                        desc: "返回一个包含对象上所有属性描述符的对象。",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "一个属性是否可以在 for...in 循环中遍历",
                        desc: "返回表示内部的 ECMAScript [[Enumerable]] 属性是否已设置的布尔值。这个可以用来检查一个方法是内置的还是用户定义的，因为内置属性更偏向于不可被枚举。",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "一个属性是否直接存在于对象上",
                        desc: "返回表示对象是否包含指定属性并且直接存在于对象上而不是通过原型链继承得到。",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "键",
                        desc: "返回包含对象上所有可被循环的键的名称的数组，并按照它们被循环的顺序来排序。",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "值",
                        desc: "返回包含对象上所有可被循环的值的数组，并按照它们被循环的顺序来排序。",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "键和值",
                        desc: "返回包含对象上所有可被循环的键值对的嵌套数组，并按照它们被循环的顺序来排序。",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "键，即使您不能循环它们",
                        desc: "返回包含对象上所有可枚举和不可枚举的属性的名称的数组，跟 <code>Object.keys()</code> 一样，可以得到对象的键，但 <code>getOwnPropertyNames()</code> 会包含不能通过循环来得到的属性。",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "获取对象的原型",
                    desc: "返回指定对象的原型。（例如指定对象的内部 [[Prototype]] 属性的值）",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "设置对象的原型",
                    desc: "警告：这个方法真的很慢。使用时要小心，或者用 <code>Object.create()</code> 带代替设置原型（例如内部的 [[Prototype]] 属性）。",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "知道一个对象是否在原型链上",
                    desc: "返回表示一个对象是否在另一指定对象的原型链上的布尔值。",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, "7Zqp": function (e, n) {
        e.exports = {short: "ru", long: "Russian", createdBy: "devxom"}
    }, BHfy: function (e, n) {
    }, BKTo: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "membuat sebuah objek baru",
                    desc: "Membuat sebuah objek baru dengan objek prototipe dan properti yang ditentukan.<br>\n          <br>\n          <strong>Catatan penting untuk para pemula!</strong> Cara yang lebih umum untuk membuat objek adalah dengan cara yang ditunjukkan pada bagian atas dari contoh, yaitu menetapkannya pada sebuah variabel.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "membuat salinan dari sebuah objek",
                    desc: "Menyalin seluruh nilai dari seluruh properti yang <em>enumerable</em> dari satu atau lebih objek sumber ke sebuah objek target. Metode ini akan mengembalikan objek target.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "sebuah properti baru atau memodifikasi properti yang sudah ada",
                    desc: "Menambahkan properti yang diberikan oleh deskriptor ke sebuah objek.<br>\n          <br>\n          <strong>Catatan penting untuk para pemula!</strong> Cara yang lebih umum adalah dengan menggunakan notasi dot atau kurung siku untuk membuat sebuah properti baru atau memodifikasi yang sudah ada. Seperti ini: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Secara teknis, ini bukanlah sebuah metode yang <em>built-in</em>, sehingga tidak diikutsertakan.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "satu atau lebih properti atau memodifikasi lebih dari satu properti yang sudah ada",
                    desc: "Menambahkan satu atau lebih properti yang dijelaskan oleh deskriptor yang diberikan ke sebuah objek.<br>\n          <br>\n          <strong>Catatan penting untuk para pemula!</strong> Cara yang lebih umum adalah dengan menggunakan notasi dot atau kurung siku untuk membuat sebuah properti baru atau memodifikasi yang sudah ada. Seperti ini: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Secara teknis, ini bukanlah sebuah metode yang <em>built-in</em>, sehingga tidak diikutsertakan.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "apakah saya dapat menambahkan lebih banyak properti",
                    desc: "Menentukan apakah melakukan ekstensi terhadap suatu objek diperbolehkan.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "apakah dua titik referensi menunjuk ke objek yang sama",
                    desc: "Membandingkan apakah dua titik referensi menunjuk ke objek yang sama. Seluruh nilai NaN akan dianggap sama (di mana hal ini berbeda dari Abstract Equality Comparison dan Strict Equality Comparison). Metode ini agak sedikit aneh, dan dokumentasi MDN yang terkait agak sedikit menyesatkan.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "apakah sebuah objek dan properti-propertinya tidak dapat dimodifikasi",
                    desc: "Menentukan apakah sebuah objek merupakan objek yang beku (tidak dapat dimodifikasi).",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "apakah sebuah objek tidak dapat dimodifikasi (meskipun properti-properti terkait bisa dimodifikasi)",
                    desc: "Menentukan apakah sebuah objek dan properti-propertinya disegel (<em>sealed</em>).",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "apakah objek tersebut merupakan bagian dari sebuah rantai prototipe",
                    desc: "Mengembalikan sebuah boolean yang mengindikasikan apakah objek di mana metode ini dipanggil merupakan bagian dari rantai prototipe (<em>prototype chain</em>) objek yang ditentukan.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "memastikan bahwa properti-properti tidak dapat ditambah atau dihapus",
                    desc: "Menghindari kode lain untuk menghapus properti-properti dari sebuah objek. Properti yang sudah ada sekarang masih dapat dimodifikasi.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c tidak dapat dihapus"
                }, {
                    name: "freeze",
                    shortDesc: "memastikan bahwa properti-properti tidak dapat ditambah, dihapus, atau dimodifikasi",
                    desc: "Membekukan sebuah objek: kode lain tidak dapat menghapus atau mengubah properti apapun.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//nilai tidak diubah menjadi 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "memastikan bahwa properti-properti tidak dapat ditambah",
                    desc: "Menghindari ekstensi dari sebuah objek. Properti-properti tetap dapat dihapus, namun tidak bisa ditambah.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "representasi string dari sebuah objek",
                    desc: "Metode <code>toString()</code> mengembalikan sebuah string yang merepresentasikan objek tersebut.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "representasi string yang telah dilokalisasi dari sebuah objek",
                    desc: "Metode <code>toLocaleString()</code> representasi string yang telah dilokalisasi dari sebuah objek. Metode ini dimaksudkan untuk di-<em>override</em> oleh objek turunan untuk tujuan yang spesifik pada lokal. Dalam bahasa manusia: ini berarti bahwa apabila Anda mempunyai sesuatu yang memiliki data berbeda berdasarkan lokasi, seperti metode tanggal, maka metode ini akan memberikan Anda format waktu yang berbeda",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "detil-detil terkait sebuah properti",
                        desc: "Mengembalikan sebuah deskriptor properti untuk sebuah properti yang diberikan pada sebuah objek.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "detil-detil mengenai seluruh properti pada sebuah objek",
                        desc: "Mengembalikan sebuah objek yang berisi seluruh deskriptor properti untuk sebuah objek.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "apakah sebuah properti dapat dilintasi dengan sebuah for...in loop",
                        desc: "Mengembalikan sebuah boolean yang mengindikasikan apakah atribut internal ECMAScript [[Enumerable]] ditentukan. Metode ini dapat digunakan untuk melihat apakah suatu metode merupakan metode <em>built-in</em> atau <em>user-defined</em>, karena properti-properti <em>built-in</em> cenderung tidak <em>enumerable</em>.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "apakah sebuah properti ada sebagai properti langsung dari sebuah objek",
                        desc: "Mengembalikan sebuah boolean yang mengindikasikan apakah sebuah objek mengandung properti yang ditentukan sebagai suatu properti langsung dari objek tersebut dan tidak diwariskan melalui rantai prototipe (<em>prototype chain</em>).",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "kunci",
                        desc: "Mengembalikan sebuah array yang berisi nama-nama dari seluruh kunci milik objek yang dapat ditelusuri, dalam urutan ketika kunci-kunci tersebut ditelusuri.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "nilai",
                        desc: "Mengembalikan sebuah array yang berisi nama-nama dari seluruh nilai milik objek yang dapat ditelusuri, dalam urutan ketika nilai-nilai tersebut ditelusuri.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "kunci dan nilai",
                        desc: "Mengembalikan sebuah nested array berisi nama-nama seluruh pasangan kunci/nilai dari objek yang dapat ditelusuri, dalam urutan ketika pasangan-pasangan tersebut ditelusuri.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "kunci, meskipun Anda tidak dapat menelusuri kunci-kunci tersebut",
                        desc: "Mengembalikan sebuah array berisi nama-nama seluruh properti objek yang diberikan yang bersifat <em>enumerable</em> maupun <em>non-enumerable</em>. Metode ini melakukan hal yang sama seperti <code>Object.keys()</code>, yaitu mengambil seluruh kunci-kunci di objek, namun <code>getOwnPropertyNames()</code> juga mengikutsertakan properti-properti yang tidak bisa ditelusuri.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "mendapatkan sebuah prototipe dari objek",
                    desc: "Mengembalikan prototipe dari objek yang ditentukan (nilai dari properti internal [[Prototype]]) dari objek yang ditentukan).",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "menentukan prototipe dari objek",
                    desc: "Peringatan: metode ini sangatlah. Gunakan dengan hati-hati, atau ganti dengan  <code>Object.create()</code>. Metode ini menentukan the prototipe (properti internal [[Prototype]]).",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "menemukan apakah sebuah objek ada pada rantai prototipe",
                    desc: "Mengembalikan sebuah boolean yang mengindikasikan apakah objek di mana metode ini dipanggil ada pada sebuah rantai prototipe (<em>prototype chain</em>) dari objek yang ditentukan.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, DERJ: function (e, n, s) {
        var t = {
            "./bg": "WbDD",
            "./bg/": "WbDD",
            "./bg/index": "WbDD",
            "./bg/index.js": "WbDD",
            "./bg/meta": "WYaq",
            "./bg/meta.json": "WYaq",
            "./cz": "vsdj",
            "./cz/": "vsdj",
            "./cz/index": "vsdj",
            "./cz/index.js": "vsdj",
            "./cz/meta": "Kx46",
            "./cz/meta.json": "Kx46",
            "./de": "I9nf",
            "./de/": "I9nf",
            "./de/index": "I9nf",
            "./de/index.js": "I9nf",
            "./de/meta": "dLso",
            "./de/meta.json": "dLso",
            "./en": "cACW",
            "./en/": "cACW",
            "./en/index": "cACW",
            "./en/index.js": "cACW",
            "./en/meta": "mJJP",
            "./en/meta.json": "mJJP",
            "./es": "lx7K",
            "./es/": "lx7K",
            "./es/index": "lx7K",
            "./es/index.js": "lx7K",
            "./es/meta": "/TCW",
            "./es/meta.json": "/TCW",
            "./fr": "YsDL",
            "./fr/": "YsDL",
            "./fr/index": "YsDL",
            "./fr/index.js": "YsDL",
            "./fr/meta": "W+34",
            "./fr/meta.json": "W+34",
            "./id": "BKTo",
            "./id/": "BKTo",
            "./id/index": "BKTo",
            "./id/index.js": "BKTo",
            "./id/meta": "GRBw",
            "./id/meta.json": "GRBw",
            "./index": "vdRI",
            "./index.js": "vdRI",
            "./it": "mfqg",
            "./it/": "mfqg",
            "./it/index": "mfqg",
            "./it/index.js": "mfqg",
            "./it/meta": "htUn",
            "./it/meta.json": "htUn",
            "./nl": "oBQB",
            "./nl/": "oBQB",
            "./nl/index": "oBQB",
            "./nl/index.js": "oBQB",
            "./nl/meta": "/7gC",
            "./nl/meta.json": "/7gC",
            "./pt_pt": "g1hL",
            "./pt_pt/": "g1hL",
            "./pt_pt/index": "g1hL",
            "./pt_pt/index.js": "g1hL",
            "./pt_pt/meta": "P/8C",
            "./pt_pt/meta.json": "P/8C",
            "./ru": "tprR",
            "./ru/": "tprR",
            "./ru/index": "tprR",
            "./ru/index.js": "tprR",
            "./ru/meta": "7Zqp",
            "./ru/meta.json": "7Zqp",
            "./zh_cn": "059H",
            "./zh_cn/": "059H",
            "./zh_cn/index": "059H",
            "./zh_cn/index.js": "059H",
            "./zh_cn/meta": "EQ+A",
            "./zh_cn/meta.json": "EQ+A",
            "./zh_hk": "DbhP",
            "./zh_hk/": "DbhP",
            "./zh_hk/index": "DbhP",
            "./zh_hk/index.js": "DbhP",
            "./zh_hk/meta": "I5cW",
            "./zh_hk/meta.json": "I5cW"
        };

        function o(e) {
            return s(a(e))
        }

        function a(e) {
            var n = t[e];
            if (!(n + 1)) throw new Error("Cannot find module '" + e + "'.");
            return n
        }

        o.keys = function () {
            return Object.keys(t)
        }, o.resolve = a, e.exports = o, o.id = "DERJ"
    }, DbhP: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "建立一個新的物件",
                    desc: "建立一個帶有指定原型和屬性的新物件。<br>\n          <br>\n          <strong>初學者請注意！</strong> 一般來說建立一個物件就像上方例子那樣直接賦予變數一個值。",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "建立一個物件複本",
                    desc: "複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件。",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "定義一個新屬性或修改一個現有的屬性",
                    desc: "直接對一個物件定義一個屬性，或是修改現有的屬性。<br>\n          <br>\n          <strong>初學者請注意！</strong> 常見的做法是使用小數點或方括號來定義一個新屬性或修改現有屬性。範例：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。從技術上來說這不是一個內置的函數，所以不包括在內。",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "定義一個或多個新屬性或修改一個或多個現有的屬性",
                    desc: "直接對一個物件定義一個或多個屬性，或是修改現有的屬性。<br>\n          <br>\n          <strong>初學者請注意！</strong> 常見的做法是使用小數點或方括號來定義一個新屬性或修改現有屬性。範例：<code>obj.a = 1</code> 或 <code>obj[a] = 1</code>。從技術上來說這不是一個內置的函數，所以不包括在內。",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "是否可以添加更多的屬性",
                    desc: "檢查是否允許擴展物件。",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "兩個引用是否指向同一物件",
                    desc: "對比兩個引用是否指向同一物件。NaN 與 NaN 比較會返回 true (與抽像相等比較和嚴格相等比較不同)（譯者註：「抽像相等比較」就是將型別一致化後比較，即“==”；「嚴格相等比較」則會比較兩個值和型別，即“===”）。這個有點奇怪，MDN 文檔有點誤導。",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "物件及其屬性是否不能被修改",
                    desc: "檢查一個物件是否被凍結。",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "一個物件是否不能被修改（但屬性可以）",
                    desc: "檢查一個物件及其屬性是否被封存。",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "物件是否在原型鏈裡",
                    desc: "返回表示一個物件是否在另一指定物件的原型鏈上的布林值。",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "讓它不能添加或刪除屬性",
                    desc: "阻止刪除一個物件的屬性。現有的屬性仍然能被修改。",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "讓它不能添加、刪除或修改屬性",
                    desc: "凍結一個物件，使得它的屬性不能被更改或刪除。",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "讓它不能添加屬性",
                    desc: "阻止物件的擴展。仍然可以刪除屬性但不能添加屬性。",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "表示這個物件的字符串",
                    desc: "<code>toString()</code> 方法返回表示這個物件的字符串。",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "表示這個物件的本地化的字符串",
                    desc: "<code>toLocaleString()</code> 方法返回表示這個對象的字符串。這個方法可以根據按不同地域需要在派生物件中被重寫。例如：您有一些因地域不同而不同的數據，如日期的方法，您可以得到不同的時間格式。",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "關於屬性的詳細信息",
                        desc: "返回一個物件上已命名的屬性的屬性描述器。",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "一個物件上所有屬性的詳細信息",
                        desc: "返回一個包含物件上所有屬性描述器的物件。",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "一個屬性是否可以在 for...in 循環中遍歷",
                        desc: "返回表示內部的 ECMAScript [[Enumerable]] 屬性是否已設置的布林值。這個可以用來檢查一個方法是內置的還是用戶定義的，因為內置屬性更偏向於不可被枚舉。",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "一個屬性是否直接存在於物件上",
                        desc: "返回表示物件是否包含指定屬性並且直接存在於物件上而不是通過原型鏈繼承得到。",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "鍵",
                        desc: "返回包含物件上所有可被循環的鍵的名稱的數組，並按照它們被循環的順序來排序。",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "值",
                        desc: "返回包含物件上所有可被循環的值的數組，並按照它們被循環的順序來排序。",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "鍵和值",
                        desc: "返回包含物件上所有可被循環的鍵值對的嵌套數組，並按照它們被循環的順序來排序。",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "鍵，即使您不能循環它們",
                        desc: "返回包含物件上所有可枚舉和不可枚舉的屬性的名稱的數組，跟 <code>Object.keys()</code> 一樣，可以得到物件的鍵，但 <code>getOwnPropertyNames()</code> 會包含不能通過循環來得到的屬性。",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "獲取物件的原型",
                    desc: "返回指定物件的原型。 （例如指定物件的內部 [[Prototype]] 屬性的值）",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "設置物件的原型",
                    desc: "警告：這個方法真的很慢。使用時要小心，或者用 <code>Object.create()</code> 來代替設置原型（例如內部的 [[Prototype]] 屬性）。",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "知道一個物件是否在原型鏈上",
                    desc: "返回表示一個物件是否在另一指定物件的原型鏈上的布林值。",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, "EQ+A": function (e, n) {
        e.exports = {short: "zh_cn", long: "Chinese (Simplified)", createdBy: "g-plane"}
    }, GRBw: function (e, n) {
        e.exports = {short: "id", long: "Indonesian", createdBy: "galuhsahid"}
    }, GUao: function (e, n) {
    }, I5cW: function (e, n) {
        e.exports = {short: "zh_hk", long: "Chinese (Traditional)", createdBy: "roger2hk"}
    }, I9nf: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "ein Objekt erstellen",
                    desc: "Erstellt ein neues Objekt mit dem vorgegebenen Prototypen und dessen Eigenschaften.<br>\n          <br>\n          <strong>Wichtiger Hinweis für Anfänger!</strong> Es ist üblicher, ein Objekt wie im obigen Beispiel zu erstellen, indem es direkt einer Variable zugewiesen wird.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "eine Kopie eines Objektes erstellen",
                    desc: "Kopiert die Werte aller eigenen aufzählbaren Eigenschaften von einem oder mehreren Quellobjekten in ein Zielobjekt. Zurückgegeben wird das Zielobjekt.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "eine neue Eingeschaft oder eine existierende bearbeiten",
                    desc: "Fügt die Eigenschaft anhand des Beschreibers dem Objekt hinzu.<br>\n          <br>\n          <strong>Wichtiger Hinweis für Anfänger!</strong> Es ist üblicher, die Punkt- oder Klammer-Notation zu verwenden, um neue Eigenschaften zu erstellen oder existierende zu bearbeiten. Beispiel: <code>obj.a = 1</code> oder <code>obj[a] = 1</code>.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "eine oder mehrere neue Eigenschaften oder existierende bearbeiten",
                    desc: "Fügt eine oder mehrere Eigenschaften definiert durch einen gegebenen Beschreiber einem Objekt hinzu.<br>\n          <br>\n          <strong>Wichtiger Hinweis für Anfänger!</strong> Es ist üblicher, die Punkt- oder Klammer-Notation zu verwenden, um neue Eigenschaften zu erstellen oder existierende zu bearbeiten. Beispiel: <code>obj.a = 1</code> oder <code>obj[a] = 1</code>.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "ob mehrere Eigenschaften hinzugefügt werden können",
                    desc: "Findet heraus, ob das Erweitern des Objektes erlaubt ist.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "ob zwei Referenzen auf das gleiche Objekt verweisen",
                    desc: "Vergleicht, ob zwei Referenzen auf das gleiche Objekt verweisen. Setzt alle NaN-Werte gleich (was sich von der losen Gleichheit (Abstract Equality Comparison) und der strikten Gleichheit (Strict Equality Comparison) unterscheidet. Diese Tatsache ist ein wenig seltsam und die MDN-Dokumentation dazu ein bisschen irreführend.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "ob ein Objekt und dessen Eigenschaften nicht bearbeitet werden können",
                    desc: 'Stellt fest, ob ein Objekt "gefroren" ist.',
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "ob ein Objekt nicht bearbeitet werden kann (dessen Eigeschaften jedoch schon)",
                    desc: 'Stellt fest, ob ein Objekt oder dessen Eingeschaften "versiegelt" sind.',
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "ob sich das Objekt in der Prototypenkette befindet.",
                    desc: "Gibt einen boolschen Wert zurück, der angibt, ob das Objekt, auf dem die Methode aufgerufen wird, sich in der Prototypenkette befindet.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "sicherstellen, dass Eigenschaften nicht hinzugefügt oder gelöscht werden",
                    desc: "Verhindert das Löschen von Objekt-Eigenschaften. Bestehende Eigenschaften können weiterhin bearbeitet werden. ",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "sicherstellen, dass Eigenschaften nicht hinzugefügt, gelöscht oder bearbeitet werden",
                    desc: "Friert ein Objekt ein: Eigenschaften können danach weder gelöscht noch bearbeitet werden.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "sicherstellen, dass Eigenschaften nicht hinzugefügt werden können.",
                    desc: "Verhindert jegliche Erweiterung des Objektes. Bestehende Eigenschaften können jedoch entfernt werden.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "eine String-Repräsentation des Objektes.",
                    desc: "Die <code>toString()</code>-Methode gibt einen String zurück, der das Objekt als Zeichenkette darstellt.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "eine String-Repräsentation des Objektes in sprachabhängiger Formatierung.",
                    desc: "Die <code>toLocaleString()</code>-Methode gibt einen String zurück, der das Objekt als Zeichenkette darstellt. Diese Methode ist dazu gedacht, um von abgeleitetn Objekten zur sprachabhängigen Formattierung überladen zu werden. In anderen Worten: Die Daten sind abhängig vom Ort, wie z.B. bei Datumsmethoden, welche dir ein anderes Format liefern.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "Details über eine Eigenschaft",
                        desc: "Liefert eine Beschreibung für eine Objekt-Eigenschaft zurück.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "Details über alle Eingeschaften auf dem Objekt",
                        desc: "Liefert ein Objekt mit allen Eigenschaftsdetails zurück.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: 'ob eine Eigenschaft mit einer "for...in"-Schleife durchlaufen werden kann',
                        desc: "Liefert einen boolschen Wert zurück, der angibt, ob das interne ECMAScript [[Enumerable]]-Attribut gesetzt ist. Dies kann zur Bestimmung, ob es sich um eine integrierte oder vom Benutzer definierte Methode handelt, verwendet werden, da integrierte Eigenschaften nicht aufgezählt werden.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "ob eine Eigenschaft direkt auf dem Objekt existiert",
                        desc: "Liefert einen boolschen Wert zurück, der angibt, ob ein Objekt die gegebene Eigenschaft als direkte Eingeschaft auf dem Objekt besitzt und nicht durch Prototypen vererbt wurde.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "Eigenschaftsnamen",
                        desc: "Liefert ein Array mit allen Eigenschaftsnamen, die auf dem Objekt definiert sind.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "Eigenschaftswerten",
                        desc: "Liefert ein Array mit allen Eigenschaftswerten vom Objekt.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "Eigenschaftsnamen und -Werten",
                        desc: "Liefert ein verschachteltes Array mit allen Eigenschaftsnamen und Werten vom Objekt.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "Namen, auch wenn sie nicht durchlaufen werden können",
                        desc: "Liefert ein Array mit allen aufzählbaren und nicht aufzählbaren Eigenschaften zurück. Liefert alle Namen wie <code>Object.keys()</code>, jedoch beinhaltet <code>getOwnPropertyNames()</code> zusätzlich noch Eigenschaften, die nicht mit einer Schleife durchlauft werden können.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "den Prototypen des Objektes erhalten.",
                    desc: "Liefert den Prototypen des Objektes zurück (den Wert der internen [[Prototype]]-Eigenschaft)).",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "den Prototypen des Objektes setzen.",
                    desc: "Achtung: Diese Methode ist ziemlich langsam. Verwende es mit Vorsicht oder setze <code>Object.create()</code> ein. Setzt die interne [[Prototype]]-Eigenschaft).",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "herausfinden, ob sich das Objekt in der Protoypenkette befindet.",
                    desc: "Liefert einen boolschen Wert zurück, der angibt, ob sich das Objekt, auf dem die Methode aufgerufen wird, sich ind der Prototypenkette befindet",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, Kx46: function (e, n) {
        e.exports = {short: "cz", long: "Czech", createdBy: "xgebi"}
    }, LIV3: function (e, n) {
    }, NHnr: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var t = s("7+uW"), o = {
            render: function () {
                var e = this, n = e.$createElement, s = e._self._c || n;
                return s("div", {staticClass: "localization-dropdown"}, [e._m(0), e._v(" "), s("br"), e._v("\n  Language:\n  "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectedLanguage,
                        expression: "selectedLanguage"
                    }], on: {
                        change: function (n) {
                            var s = Array.prototype.filter.call(n.target.options, function (e) {
                                return e.selected
                            }).map(function (e) {
                                return "_value" in e ? e._value : e.value
                            });
                            e.selectedLanguage = n.target.multiple ? s : s[0]
                        }
                    }
                }, e._l(e.languages, function (n, t) {
                    return s("option", {domProps: {value: t}}, [e._v(e._s(n.long))])
                }))])
            }, staticRenderFns: [function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("a", {attrs: {href: "https://sdras.github.io/array-explorer/"}}, [n("em", [this._v("Array Explorer")])])
            }]
        };
        var a = s("VU/8")({
            data: function () {
                return {selectedLanguage: this.$store.state.curLanguage, languages: this.$store.state.languages}
            }, watch: {
                selectedLanguage: function (e) {
                    this.$store.commit("changeLanguage", e), this.$store.commit("resetSelection")
                }
            }
        }, o, !1, function (e) {
            s("LIV3")
        }, "data-v-08cbd064", null).exports, r = {
            render: function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "600",
                        height: "450",
                        viewBox: "0 0 794.5 599.5",
                        "aria-labelledby": "anatomy",
                        role: "presentation"
                    }
                }, [n("title", {
                    attrs: {
                        id: "anatomy",
                        lang: "en"
                    }
                }, [this._v("Object Anatomy Diagram")]), this._v(" "), n("rect", {
                    attrs: {
                        fill: "#333",
                        x: "5",
                        y: "5",
                        width: "790",
                        height: "590",
                        rx: "10",
                        ry: "10",
                        stroke: "#f55e41",
                        "stroke-width": "3"
                    }
                }), this._v(" "), n("g", {
                    attrs: {
                        fill: "none",
                        stroke: "#afafaf",
                        "stroke-miterlimit": "10"
                    }
                }, [n("path", {attrs: {d: "M794 598.5v.5h-.5"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": ".999 .999",
                        d: "M792.5 599H1.5"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M1 599H.5v-.5"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "1.001 1.001",
                        d: "M.5 597.5V1.5"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M.5 1V.5H1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": ".999 .999",
                        d: "M2 .5h791"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M793.5.5h.5V1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "1.001 1.001",
                        d: "M794 2v596"
                    }
                })]), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M289.4 177.2v-18.9h-4.3v-2h6.7v18.9h4.6v2zM311.6 176.3a12.9 12.9 0 0 1-5.5 1.3 6.8 6.8 0 0 1-3.5-.9 8.4 8.4 0 0 1-2.5-10.5 7.1 7.1 0 0 1 2.5-2.9 6.8 6.8 0 0 1 3.5-1 4.9 4.9 0 0 1 4.1 1.9c1.1 1.2 1.6 3.1 1.6 5.6v.6h-10a6 6 0 0 0 .6 2.7 4.6 4.6 0 0 0 1.7 1.9 4.6 4.6 0 0 0 2.3.6 11.2 11.2 0 0 0 5.2-1.5zm-9.6-7.7h7.2v-.4a4.1 4.1 0 0 0-.9-2.8 2.8 2.8 0 0 0-2.3-1.1 3.4 3.4 0 0 0-2.5 1.1 5.1 5.1 0 0 0-1.5 3.2zM327.2 176.7l-2.5.8h-1.4a8.2 8.2 0 0 1-2.8-.5 3.7 3.7 0 0 1-1.9-1.8 7.4 7.4 0 0 1-.7-3.5v-5.8h-3.6v-2.1h3.6V158h2.5v5.8h6.4v2.1h-6.4v5.8a4.9 4.9 0 0 0 .4 2.4 2 2 0 0 0 1.1 1.1 3.8 3.8 0 0 0 1.6.3 6.8 6.8 0 0 0 3.7-1.1z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#efa8b0",
                        d: "M353.5 177.6a6.4 6.4 0 0 1-5-2.1 8.5 8.5 0 0 1-1.8-5.5 8.3 8.3 0 0 1 1.8-5.5 6.8 6.8 0 0 1 10 0 8.3 8.3 0 0 1 1.8 5.5 8.5 8.5 0 0 1-1.8 5.5 6.4 6.4 0 0 1-5 2.1zm0-2a3.7 3.7 0 0 0 3.1-1.5 7.1 7.1 0 0 0 1.1-4.1 7.5 7.5 0 0 0-1.1-4.2 4 4 0 0 0-6.2 0 7.5 7.5 0 0 0-1.1 4.2 7.1 7.1 0 0 0 1.1 4.1 3.7 3.7 0 0 0 3.1 1.5zM365.9 166a7 7 0 0 1 2.7-2.7 4.8 4.8 0 0 1 2.8-1 4.7 4.7 0 0 1 3.3 1.6 7.1 7.1 0 0 1 1.4 4.8 11.3 11.3 0 0 1-.9 4.5 8.8 8.8 0 0 1-2.6 3.1 6.5 6.5 0 0 1-4 1.1h-5.1v-21.1h2.4zm0 2.9v6.2l2.4.3a4.5 4.5 0 0 0 3.7-1.7 6.8 6.8 0 0 0 1.5-4.7 5.9 5.9 0 0 0-.8-3.3 2.6 2.6 0 0 0-1.9-1.1 4.1 4.1 0 0 0-2.5 1.2 9.8 9.8 0 0 0-2.4 3.1zM378.4 182.9v-2.2a12.2 12.2 0 0 0 3.4.6 3.9 3.9 0 0 0 2-.5 2.7 2.7 0 0 0 1.4-1.4 9.4 9.4 0 0 0 .4-3.5v-11.2h-6.1v-2h8.5v12.8c0 2.4-.2 4.1-.8 5.1a6 6 0 0 1-2.1 2.1 8.3 8.3 0 0 1-3.4.6 13.5 13.5 0 0 1-3.3-.4zm6.8-25.4a1.2 1.2 0 0 1 .6-1.2 1.6 1.6 0 0 1 1-.4 1.7 1.7 0 0 1 1.1.4 1.2 1.2 0 0 1 .6 1.2 1.4 1.4 0 0 1-.6 1.2 1.7 1.7 0 0 1-1.1.4 1.6 1.6 0 0 1-1-.4 1.4 1.4 0 0 1-.6-1.2z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M423.6 167v2h-14.1v-2zm0 4.5v2h-14.1v-2zM448.1 169a7 7 0 0 1 1.8 1.2 3.8 3.8 0 0 1 .9 1.3 6.1 6.1 0 0 1 .2 1.5c0 .4-.1 1.1-.2 1.9l-.4 1.5c-.1.8-.2 1.4-.2 1.8a1.8 1.8 0 0 0 .6 1.3 3.8 3.8 0 0 0 2.5.6h2.1v2h-2.1c-2.3 0-3.9-.4-4.6-1.2a4 4 0 0 1-1-2.6 10 10 0 0 1 .2-1.6l.2-1 .3-1.2v-.7a2.8 2.8 0 0 0 .1-.9 3.2 3.2 0 0 0-.8-2.1 4.2 4.2 0 0 0-2.9-.8h-1.1v-2h1.1a3.9 3.9 0 0 0 2.9-.9 2.9 2.9 0 0 0 .8-2.1 2.8 2.8 0 0 0-.1-.9v-.7l-.3-1.1-.2-1a11.1 11.1 0 0 1-.2-1.7 4.2 4.2 0 0 1 1-2.6c.7-.7 2.3-1.1 4.6-1.1h2.1v2h-2.1a4.7 4.7 0 0 0-2.5.5 2 2 0 0 0-.6 1.4c0 .4.1 1 .2 1.8l.4 1.5a17.6 17.6 0 0 1 .2 1.9 6.8 6.8 0 0 1-.2 1.5 4.7 4.7 0 0 1-.9 1.2 7 7 0 0 1-1.8 1.3z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#6eceb7",
                        d: "M327.5 210.4a7 7 0 0 1-2.7 2.7 5.4 5.4 0 0 1-2.8.9 4.4 4.4 0 0 1-3.3-1.6 6.9 6.9 0 0 1-1.4-4.7 10.6 10.6 0 0 1 .9-4.5 8.3 8.3 0 0 1 2.6-3.2 7.2 7.2 0 0 1 4-1.1h5.1v10.2a12.7 12.7 0 0 0 .6 4.3H328a19.7 19.7 0 0 1-.5-3zm0-2.9v-6.3l-2.4-.3a4.8 4.8 0 0 0-3.7 1.7 7.2 7.2 0 0 0-1.5 4.7 5.7 5.7 0 0 0 .8 3.3 2.6 2.6 0 0 0 1.9 1.1 4.1 4.1 0 0 0 2.5-1.2 9.3 9.3 0 0 0 2.4-3z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M337.3 202.9a2.1 2.1 0 1 1 1.5-.6 2 2 0 0 1-1.5.6zm0 11.3a2.1 2.1 0 1 1 1.5-.6 2 2 0 0 1-1.5.6z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#dc935f",
                        d: "M369.1 211.6V196l-2.1 1.5-2.8 1.3v-2.2a16.6 16.6 0 0 0 4.9-3.2h2.5v18.2h4.8v2h-12.2v-2z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M380.8 219.2v-1.6a2.6 2.6 0 0 0 1.4-.7 4.4 4.4 0 0 0 .8-1.1 4.8 4.8 0 0 0 .3-1.8 2.4 2.4 0 0 1-1.8-.6 2.4 2.4 0 0 1-.6-1.5 2 2 0 0 1 .6-1.5 2.4 2.4 0 0 1 1.5-.6 2.5 2.5 0 0 1 1.9.9 4 4 0 0 1 .8 2.6 6.6 6.6 0 0 1-.6 2.7 5.8 5.8 0 0 1-1.7 2.1 4.7 4.7 0 0 1-2.6 1.1z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#6eceb7",
                        d: "M320.2 238.7a7 7 0 0 1 2.7-2.7 5.4 5.4 0 0 1 2.8-.9 4.6 4.6 0 0 1 3.3 1.5 7.4 7.4 0 0 1 1.4 4.8 10.6 10.6 0 0 1-.9 4.5 8 8 0 0 1-2.6 3.1 6.5 6.5 0 0 1-4 1.2l-2.1-.2h-3v-21h2.4zm0 2.9v6.2a7.5 7.5 0 0 0 2.4.4 4.6 4.6 0 0 0 3.7-1.8 6.8 6.8 0 0 0 1.5-4.7 5.6 5.6 0 0 0-.8-3.2 2.3 2.3 0 0 0-1.9-1.1 4.5 4.5 0 0 0-2.5 1.1 11.1 11.1 0 0 0-2.4 3.1z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M337.1 239.3a2 2 0 0 1-1.5-.6 2 2 0 0 1 0-3 2 2 0 0 1 1.5-.6 2 2 0 0 1 1.4.6 2 2 0 0 1 0 3 2 2 0 0 1-1.4.6zm0 11.3a2 2 0 0 1-1.5-.6 2.1 2.1 0 0 1-.7-1.5 1.8 1.8 0 0 1 .7-1.5 2.1 2.1 0 0 1 1.5-.7 2.1 2.1 0 0 1 1.4.7 1.8 1.8 0 0 1 .7 1.5 2.1 2.1 0 0 1-.7 1.5 2 2 0 0 1-1.4.6z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#dc935f",
                        d: "M375.7 250h-12.2v-2.3a6.7 6.7 0 0 1 .3-1.8 9.8 9.8 0 0 1 1.4-2.2 22 22 0 0 1 2-2.3l1.4-1.4 1.8-2a16.9 16.9 0 0 0 1.9-2.4 3.5 3.5 0 0 0 .4-1.7 2.3 2.3 0 0 0-1-2 4.8 4.8 0 0 0-2.3-.7l-1.7.2-1.6.4a20.6 20.6 0 0 0-2.2.9v-2.1a14.2 14.2 0 0 1 3.3-1.1l2.7-.3a8.2 8.2 0 0 1 2.8.5 4.1 4.1 0 0 1 2 1.6 4.8 4.8 0 0 1 .7 2.3 5.1 5.1 0 0 1-.9 2.8 17.1 17.1 0 0 1-3.1 3.7l-1.5 1.5-1.2 1.2a12.8 12.8 0 0 0-1.9 2.3 4.5 4.5 0 0 0-.8 2.6h9.7z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M380.3 255.6V254a3.7 3.7 0 0 0 1.4-.7 3.6 3.6 0 0 0 .8-1.2 4.3 4.3 0 0 0 .3-1.7 2.1 2.1 0 0 1-1.8-.7 2 2 0 0 1-.6-1.4 1.8 1.8 0 0 1 .7-1.5 1.7 1.7 0 0 1 1.4-.7 2.4 2.4 0 0 1 1.9 1 4 4 0 0 1 .8 2.6 6.6 6.6 0 0 1-.6 2.7 6.8 6.8 0 0 1-1.7 2.1 4.7 4.7 0 0 1-2.6 1.1z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#6eceb7",
                        d: "M330.2 285.9a13.3 13.3 0 0 1-4.7.8 7 7 0 0 1-3.8-1 6.4 6.4 0 0 1-2.7-2.7 8 8 0 0 1-.9-3.9 7.7 7.7 0 0 1 2.1-5.5 7.4 7.4 0 0 1 5.2-2.2 14.5 14.5 0 0 1 4.8.9v2.3a10.9 10.9 0 0 0-4.6-1.2 5.9 5.9 0 0 0-2.5.7 5.1 5.1 0 0 0-1.8 2 7.5 7.5 0 0 0-.6 2.9 6.3 6.3 0 0 0 1.2 3.7 4.3 4.3 0 0 0 3.9 1.8h1.5a19.4 19.4 0 0 0 2.9-.8z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M337.2 275.7a1.8 1.8 0 0 1-1.5-.7 2 2 0 0 1-.6-1.5 2.4 2.4 0 0 1 .6-1.5 2.2 2.2 0 0 1 3 0 2.4 2.4 0 0 1 .6 1.5 2 2 0 0 1-.6 1.5 1.8 1.8 0 0 1-1.5.7zm0 11.2a2.1 2.1 0 1 1 1.5-.6 2 2 0 0 1-1.5.6z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#dc935f",
                        d: "M363.5 286v-2.6a12.3 12.3 0 0 0 5.2 1.5 4.8 4.8 0 0 0 3.3-1.2 3.9 3.9 0 0 0 1.3-3.1 4 4 0 0 0-1.4-3.1c-1-.8-2.6-1.2-4.9-1.2h-1.3v-2.1h1.8a5 5 0 0 0 3.7-1.1 3.8 3.8 0 0 0 1.1-2.5 2.6 2.6 0 0 0-.9-2.1 3.9 3.9 0 0 0-2.8-.9 10.2 10.2 0 0 0-4.6 1.2v-2.3a12.9 12.9 0 0 1 4.5-.9c2.4 0 4.1.5 5 1.4a4.5 4.5 0 0 1 1.4 3.3 4.6 4.6 0 0 1-.7 2.6 6.9 6.9 0 0 1-2.7 2.2 7 7 0 0 1 2.6 1.2 4.9 4.9 0 0 1 1.4 1.8 5.9 5.9 0 0 1 .4 2.3 5.9 5.9 0 0 1-2.1 4.7 8 8 0 0 1-5.4 1.8h-2.1z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M380.2 292v-1.6a3.7 3.7 0 0 0 1.4-.7 3.2 3.2 0 0 0 .8-1.2 4.7 4.7 0 0 0 .3-1.7 2.5 2.5 0 0 1-1.8-.7 2.7 2.7 0 0 1-.5-1.5 2.1 2.1 0 0 1 2.1-2.1 2.6 2.6 0 0 1 1.9.9 4.2 4.2 0 0 1 .8 2.6 6 6 0 0 1-.7 2.7 5.2 5.2 0 0 1-1.7 2.2 5.2 5.2 0 0 1-2.6 1.1z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#6eceb7",
                        d: "M327.7 319.4a8.1 8.1 0 0 1-2.7 2.8 5.7 5.7 0 0 1-2.8.9 4.1 4.1 0 0 1-3.3-1.6 6.5 6.5 0 0 1-1.5-4.7 9.3 9.3 0 0 1 1-4.5 7.5 7.5 0 0 1 2.6-3.2 7 7 0 0 1 4-1.1h2.7v-6.5h2.4v21h-2.4zm0-2.8v-6.3l-2.4-.3a5 5 0 0 0-3.8 1.7 7.1 7.1 0 0 0-1.4 4.7 5 5 0 0 0 .8 3.3 2.2 2.2 0 0 0 1.8 1.1 3.9 3.9 0 0 0 2.5-1.2 11.1 11.1 0 0 0 2.5-3z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M337.4 312a2.1 2.1 0 1 1 0-4.2 2.4 2.4 0 0 1 1.5.6 2.1 2.1 0 0 1-1.5 3.6zm0 11.3a2.1 2.1 0 1 1 0-4.2 2.4 2.4 0 0 1 1.5.6 2.1 2.1 0 0 1-1.5 3.6z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#dc935f",
                        d: "M367.2 322.7v-11.3H364v-2h3.2v-.7a10.6 10.6 0 0 1 .7-4.2 5.5 5.5 0 0 1 2-2.3 6.4 6.4 0 0 1 3.6-.9 19.7 19.7 0 0 1 3.4.4v2.3a10.9 10.9 0 0 0-3.3-.7 4.6 4.6 0 0 0-2.1.5 3 3 0 0 0-1.3 1.4 6.6 6.6 0 0 0-.5 3.3v.9h5.7v2h-5.7v11.3zM390.9 308.2v14.5h-2.4v-3.2a9.6 9.6 0 0 1-2.6 2.7 5.5 5.5 0 0 1-2.9.9 3.9 3.9 0 0 1-2.3-.7 3.4 3.4 0 0 1-1.5-1.8 13.8 13.8 0 0 1-.4-4.3v-8.1h2.4v8.4a15.2 15.2 0 0 0 .2 2.8 2.6 2.6 0 0 0 .7 1.1 2.8 2.8 0 0 0 1.2.4 4.1 4.1 0 0 0 2.7-1.2 9.7 9.7 0 0 0 2.5-3.1v-8.4zM394.9 322.7v-14.5h2.4v3.2a8.2 8.2 0 0 1 2.5-2.7 5.5 5.5 0 0 1 2.9-.9 4 4 0 0 1 2.4.7 2.8 2.8 0 0 1 1.4 1.8 12.5 12.5 0 0 1 .5 4.3v8.1h-2.5v-8.4a9.5 9.5 0 0 0-.2-2.8 1.9 1.9 0 0 0-.7-1.1 2.5 2.5 0 0 0-1.2-.4 4.5 4.5 0 0 0-2.7 1.2 8.9 8.9 0 0 0-2.4 3v8.5zM422.6 322.3a15.9 15.9 0 0 1-4.6.8 7.1 7.1 0 0 1-3.9-1 7.8 7.8 0 0 1-2.7-2.7 8.6 8.6 0 0 1-.9-3.9 7.5 7.5 0 0 1 2.1-5.5 7 7 0 0 1 5.2-2.2 17.2 17.2 0 0 1 4.8.8v2.4a10.9 10.9 0 0 0-4.6-1.2 4.7 4.7 0 0 0-2.5.7 5.1 5.1 0 0 0-1.8 2 7.2 7.2 0 0 0-.6 2.9 6.5 6.5 0 0 0 1.2 3.7 4.5 4.5 0 0 0 3.9 1.8h1.5l2.9-.8zM438.2 322.1l-2.4.9h-1.5a6.4 6.4 0 0 1-2.8-.6 3.9 3.9 0 0 1-1.9-1.7 7.9 7.9 0 0 1-.6-3.5v-5.9h-3.7v-2h3.7v-5.8h2.4v5.8h6.4v2h-6.4v5.8a5.1 5.1 0 0 0 .4 2.5 2.9 2.9 0 0 0 1.1 1.1 4.1 4.1 0 0 0 1.6.3 7.8 7.8 0 0 0 3.7-1.1zM445.2 322.7v-12.5h-4v-2h6.4v12.5h4.1v2zm-.4-19.7a1.5 1.5 0 0 1 .6-1.3 2.6 2.6 0 0 1 1-.4 2.5 2.5 0 0 1 1.1.4 1.5 1.5 0 0 1 .6 1.3 1.4 1.4 0 0 1-.6 1.2 2.5 2.5 0 0 1-1.1.4 2.6 2.6 0 0 1-1-.4 1.4 1.4 0 0 1-.6-1.2zM461.4 323.1a6.1 6.1 0 0 1-5-2.2 7.8 7.8 0 0 1-1.9-5.5 7.6 7.6 0 0 1 1.9-5.4 6.1 6.1 0 0 1 5-2.2 6 6 0 0 1 4.9 2.2 7.6 7.6 0 0 1 1.9 5.4 7.8 7.8 0 0 1-1.9 5.5 6 6 0 0 1-4.9 2.2zm0-2a3.6 3.6 0 0 0 3-1.5 6.6 6.6 0 0 0 1.2-4.2 6.5 6.5 0 0 0-1.2-4.1 3.6 3.6 0 0 0-3-1.5 3.6 3.6 0 0 0-3.1 1.5 6.5 6.5 0 0 0-1.2 4.1 6.6 6.6 0 0 0 1.2 4.2 3.6 3.6 0 0 0 3.1 1.5zM471.4 322.7v-14.5h2.4v3.2a9.3 9.3 0 0 1 2.5-2.7 5.8 5.8 0 0 1 3-.9 3.9 3.9 0 0 1 2.3.7 3.4 3.4 0 0 1 1.5 1.8 13.4 13.4 0 0 1 .4 4.3v8.1h-2.4v-8.4a15.2 15.2 0 0 0-.2-2.8 2.2 2.2 0 0 0-1.9-1.5 4.5 4.5 0 0 0-2.8 1.2 12.2 12.2 0 0 0-2.4 3v8.5zM498.7 327.5a11.1 11.1 0 0 1-6.1-2 12.9 12.9 0 0 1-3.9-4.9 13.4 13.4 0 0 1 0-12.3 12.9 12.9 0 0 1 3.9-4.9 12 12 0 0 1 6.1-2.1v2a8.6 8.6 0 0 0-4.7 1.9 10.1 10.1 0 0 0-3 4 11.7 11.7 0 0 0-1.2 5.2 12.1 12.1 0 0 0 1.2 5.3 10.8 10.8 0 0 0 3 4 9.3 9.3 0 0 0 4.7 1.8zM501.8 301.3a12 12 0 0 1 6.1 2.1 12.9 12.9 0 0 1 3.9 4.9 13.4 13.4 0 0 1 0 12.3 12.9 12.9 0 0 1-3.9 4.9 11.1 11.1 0 0 1-6.1 2v-2a9.3 9.3 0 0 0 4.7-1.8 10.8 10.8 0 0 0 3-4 12.1 12.1 0 0 0 1.2-5.3 11.7 11.7 0 0 0-1.2-5.2 10.1 10.1 0 0 0-3-4 8.6 8.6 0 0 0-4.7-1.9zM539.3 314.4a10.6 10.6 0 0 1 1.8 1.3 4.2 4.2 0 0 1 .8 1.2 4 4 0 0 1 .3 1.5 7.4 7.4 0 0 1-.3 1.9l-.3 1.5a6.9 6.9 0 0 0-.2 1.8 1.8 1.8 0 0 0 .6 1.4 4.4 4.4 0 0 0 2.5.5h2v2h-2c-2.4 0-3.9-.3-4.6-1.1a3.7 3.7 0 0 1-1-2.6 8.8 8.8 0 0 1 .2-1.6l.2-1.1.2-1.1.2-.7a2.8 2.8 0 0 0 .1-.9 3.2 3.2 0 0 0-.8-2.1 3.9 3.9 0 0 0-2.9-.9H535v-2h1.1a4.4 4.4 0 0 0 2.9-.8 3.2 3.2 0 0 0 .8-2.1 2.8 2.8 0 0 0-.1-.9l-.2-.7-.2-1.1-.2-1.1a10 10 0 0 1-.2-1.6 3.7 3.7 0 0 1 1-2.6c.7-.8 2.2-1.2 4.6-1.2h2v2h-2a3.6 3.6 0 0 0-2.5.6 1.8 1.8 0 0 0-.6 1.4 7.7 7.7 0 0 0 .2 1.8l.3 1.4a8.8 8.8 0 0 1 .3 2 3.2 3.2 0 0 1-.3 1.4 3.5 3.5 0 0 1-.8 1.3 7 7 0 0 1-1.8 1.2zM351.6 359.1v-14.5h2.5v3.1a7.5 7.5 0 0 1 2.6-2.7 6.6 6.6 0 0 1 3.2-.8 7.5 7.5 0 0 1 2.6.4v5.2h-2.3v-3.3h-1a4.1 4.1 0 0 0-2.6 1 12.3 12.3 0 0 0-2.5 3.2v8.5zM377.9 358.1a13.5 13.5 0 0 1-5.5 1.4 6.8 6.8 0 0 1-3.5-1 7.6 7.6 0 0 1-2.5-2.8 8.6 8.6 0 0 1-.9-3.9 8.5 8.5 0 0 1 .9-3.8 7.3 7.3 0 0 1 2.4-2.8 6.5 6.5 0 0 1 3.6-1 5.1 5.1 0 0 1 4.1 1.8c1.1 1.2 1.6 3.1 1.6 5.7v.5h-10a6.7 6.7 0 0 0 .6 2.8 4.2 4.2 0 0 0 1.7 1.8 4.2 4.2 0 0 0 2.3.7 11.5 11.5 0 0 0 5.2-1.6zm-9.7-7.7h7.3v-.4a4.3 4.3 0 0 0-.9-2.8 2.9 2.9 0 0 0-2.3-1 3.5 3.5 0 0 0-2.6 1 6.8 6.8 0 0 0-1.5 3.2zM393.5 358.5a13 13 0 0 1-2.5.8l-1.5.2a6 6 0 0 1-2.7-.6 4.8 4.8 0 0 1-2-1.7 8.4 8.4 0 0 1-.6-3.6v-5.8h-3.6v-2h3.6v-5.9h2.4v5.9h6.5v2h-6.5v5.8a6.7 6.7 0 0 0 .4 2.5 3.5 3.5 0 0 0 1.1 1 4.7 4.7 0 0 0 1.7.4 7.8 7.8 0 0 0 3.7-1.1zM408.6 344.6v14.5h-2.4v-3.2a9.6 9.6 0 0 1-2.6 2.7 5.5 5.5 0 0 1-2.9.9 4.8 4.8 0 0 1-2.3-.7 4.3 4.3 0 0 1-1.5-1.8 13.8 13.8 0 0 1-.4-4.3v-8.1h2.4v8.4a13.1 13.1 0 0 0 .2 2.7 2.1 2.1 0 0 0 .7 1.1 1.9 1.9 0 0 0 1.2.4 4.1 4.1 0 0 0 2.7-1.2 10.5 10.5 0 0 0 2.5-3v-8.4zM413.2 359.1v-14.5h2.4v3.1a7.5 7.5 0 0 1 2.6-2.7 6.6 6.6 0 0 1 3.2-.8 7.5 7.5 0 0 1 2.6.4v5.2h-2.3v-3.3h-.9a4.3 4.3 0 0 0-2.7 1 12.3 12.3 0 0 0-2.5 3.2v8.5zM427.2 359.1v-14.5h2.4v3.1a8.9 8.9 0 0 1 2.5-2.6 5.8 5.8 0 0 1 3-.9 4.6 4.6 0 0 1 2.3.6 4.3 4.3 0 0 1 1.5 1.8 14.6 14.6 0 0 1 .4 4.4v8.1h-2.4v-8.4a15.2 15.2 0 0 0-.2-2.8 2.6 2.6 0 0 0-.7-1.1 1.9 1.9 0 0 0-1.2-.4 4.1 4.1 0 0 0-2.7 1.2 10.5 10.5 0 0 0-2.5 3v8.5zM469.2 355.8a8.8 8.8 0 0 1-2.6 2.8 6 6 0 0 1-2.9.9 4.7 4.7 0 0 1-3.3-1.6 7.1 7.1 0 0 1-1.4-4.8 9.9 9.9 0 0 1 1-4.5 8.6 8.6 0 0 1 2.5-3.1 6.5 6.5 0 0 1 4-1.1h5.1v10.2a12.7 12.7 0 0 0 .6 4.3h-2.5a19.4 19.4 0 0 1-.5-3.1zm0-2.9v-6.2a9.9 9.9 0 0 0-2.4-.3 4.5 4.5 0 0 0-3.7 1.7 6.8 6.8 0 0 0-1.5 4.7 6.2 6.2 0 0 0 .8 3.3 2.6 2.6 0 0 0 1.9 1.1 4.1 4.1 0 0 0 2.5-1.2 9.8 9.8 0 0 0 2.4-3.1zM505.1 351v2h-6v6.1h-2V353H491v-2h6.1v-6h2v6zM526.8 347.8a8.7 8.7 0 0 1 2.7-2.7 5.7 5.7 0 0 1 2.8-.9 4.6 4.6 0 0 1 3.3 1.5 6.9 6.9 0 0 1 1.5 4.8 10.6 10.6 0 0 1-1 4.5 8 8 0 0 1-2.6 3.1 6.5 6.5 0 0 1-4 1.2l-2.1-.2h-3v-21h2.4zm0 2.9v6.2a12 12 0 0 0 2.4.4 4.6 4.6 0 0 0 3.7-1.8 6.8 6.8 0 0 0 1.5-4.7 4.9 4.9 0 0 0-.8-3.2 2.1 2.1 0 0 0-1.8-1.1 4.2 4.2 0 0 0-2.5 1.1 11.3 11.3 0 0 0-2.5 3.1zM541.3 364.7v-1.6a3.7 3.7 0 0 0 1.4-.7 2.5 2.5 0 0 0 .8-1.2 4.3 4.3 0 0 0 .3-1.7 2.1 2.1 0 0 1-1.8-.7 2 2 0 0 1-.6-1.4 2.1 2.1 0 0 1 .7-1.5 1.8 1.8 0 0 1 1.5-.7 2.1 2.1 0 0 1 1.8 1 3.5 3.5 0 0 1 .8 2.6 5.8 5.8 0 0 1-.6 2.6 6.2 6.2 0 0 1-1.7 2.2 4.7 4.7 0 0 1-2.6 1.1zm2.3-16.3a2 2 0 0 1-1.5-.6 2 2 0 0 1 0-3 2 2 0 0 1 1.5-.6 2.4 2.4 0 0 1 1.5.6 2.2 2.2 0 0 1 0 3 2.4 2.4 0 0 1-1.5.6zM324.8 387.2a10.6 10.6 0 0 1-1.8-1.3 4.2 4.2 0 0 1-.8-1.2 3.7 3.7 0 0 1-.3-1.5 8.1 8.1 0 0 1 .3-1.9l.3-1.5a6.9 6.9 0 0 0 .2-1.8 2 2 0 0 0-.6-1.4 4.4 4.4 0 0 0-2.5-.5h-2v-2h2c2.4 0 3.9.4 4.6 1.1a3.7 3.7 0 0 1 1 2.6 5.2 5.2 0 0 1-.2 1.7l-.2 1-.2 1.1-.2.7c0 .3-.1.6-.1 1a3.2 3.2 0 0 0 .8 2 3.9 3.9 0 0 0 2.9.9h1.2v2H328a4.1 4.1 0 0 0-2.8.8 2.9 2.9 0 0 0-.9 2.1c0 .3.1.6.1.9l.2.7.2 1.1.2 1.1a4.7 4.7 0 0 1 .2 1.6 3.5 3.5 0 0 1-1 2.6c-.7.8-2.2 1.2-4.6 1.2h-2v-2h2a3.6 3.6 0 0 0 2.5-.6 1.8 1.8 0 0 0 .6-1.4 6.6 6.6 0 0 0-.2-1.7l-.3-1.5a8.8 8.8 0 0 1-.3-2 3.2 3.2 0 0 1 .3-1.4 3.5 3.5 0 0 1 .8-1.3 7 7 0 0 1 1.8-1.2z"
                    }
                }), this._v(" "), n("path", {
                    attrs: {
                        fill: "#b3b3b3",
                        d: "M292.3 423.5a5 5 0 0 1-1.7-1.2 3.8 3.8 0 0 1-.9-1.3 3.2 3.2 0 0 1-.2-1.4 7.9 7.9 0 0 1 .2-2l.3-1.5a8.6 8.6 0 0 0 .3-1.7 1.8 1.8 0 0 0-.6-1.4 3.9 3.9 0 0 0-2.6-.6h-2v-2h2.1c2.3 0 3.9.4 4.5 1.2a3.8 3.8 0 0 1 1.1 2.6 10 10 0 0 1-.2 1.6l-.3 1.1-.2 1.1v.7a3.4 3.4 0 0 0 .7 3 4.1 4.1 0 0 0 2.8.8h1.2v2h-1.3a3.6 3.6 0 0 0-2.8.9 3.4 3.4 0 0 0-.7 3v.7l.2 1.1.3 1.1a10 10 0 0 1 .2 1.6 3.8 3.8 0 0 1-1.1 2.6c-.6.8-2.2 1.1-4.5 1.1H285v-2h2a4.9 4.9 0 0 0 2.6-.5 2 2 0 0 0 .6-1.4 8.2 8.2 0 0 0-.3-1.8l-.3-1.5a6.8 6.8 0 0 1-.2-1.9 3.9 3.9 0 0 1 .2-1.5 4.7 4.7 0 0 1 .9-1.2 6.7 6.7 0 0 1 1.8-1.3z"
                    }
                }), this._v(" "), n("g", {attrs: {opacity: ".49"}}, [n("g", {
                    attrs: {
                        fill: "none",
                        stroke: "#afafaf",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2"
                    }
                }, [n("path", {attrs: {d: "M454.3 218.5v1h-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.03 5.074",
                        d: "M448.3 219.5H287.4"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M284.9 219.5h-1v-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.236 5.589",
                        d: "M283.9 212.9v-20.7"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M283.9 189.4v-1h1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.03 5.074",
                        d: "M289.9 188.4h160.9"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M453.3 188.4h1v1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.236 5.589",
                        d: "M454.3 195v20.7"
                    }
                })])]), this._v(" "), n("g", {attrs: {opacity: ".49"}}, [n("g", {
                    attrs: {
                        fill: "none",
                        stroke: "#afafaf",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2"
                    }
                }, [n("path", {attrs: {d: "M453.6 254.8v1h-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.03 5.074",
                        d: "M447.5 255.8H286.7"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M284.1 255.8h-1v-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.236 5.589",
                        d: "M283.1 249.2v-20.6"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M283.1 225.8v-1h1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.03 5.074",
                        d: "M289.2 224.8H450"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M452.6 224.8h1v1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.236 5.589",
                        d: "M453.6 231.4V252"
                    }
                })])]), this._v(" "), n("g", {attrs: {opacity: ".49"}}, [n("g", {
                    attrs: {
                        fill: "none",
                        stroke: "#afafaf",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2"
                    }
                }, [n("path", {attrs: {d: "M453.6 290.4v1h-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.03 5.074",
                        d: "M447.5 291.4H286.7"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M284.1 291.4h-1v-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.236 5.589",
                        d: "M283.1 284.9v-20.7"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M283.1 261.4v-1h1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.03 5.074",
                        d: "M289.2 260.4H450"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M452.6 260.4h1v1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.236 5.589",
                        d: "M453.6 267v20.7"
                    }
                })])]), this._v(" "), n("g", {attrs: {opacity: ".49"}}, [n("g", {
                    attrs: {
                        fill: "none",
                        stroke: "#afafaf",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2"
                    }
                }, [n("path", {attrs: {d: "M558.1 404.8v1h-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.015 5.037",
                        d: "M552.1 405.8H286.6"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M284.1 405.8h-1v-1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "1.961 4.903",
                        d: "M283.1 399.9V299.4"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M283.1 297v-1h1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "2.015 5.037",
                        d: "M289.2 296h265.4"
                    }
                }), this._v(" "), n("path", {attrs: {d: "M557.1 296h1v1"}}), this._v(" "), n("path", {
                    attrs: {
                        "stroke-dasharray": "1.961 4.903",
                        d: "M558.1 301.9v100.5"
                    }
                })])]), this._v(" "), n("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#fff",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        d: "M275.7 188.9h-13.8v216.9h13.8M565.5 295.5h13.9v110h-13.9M233.7 295.3h28.2M579.8 351.3h16.4"
                    }
                }), this._v(" "), n("g", {attrs: {fill: "#fff"}}, [n("path", {attrs: {d: "M70.1 288.6h4.4l1.9.2 1.7.7a2.4 2.4 0 0 1 1.1 1.3 3.6 3.6 0 0 1 .5 1.9 3.9 3.9 0 0 1-.5 2A3 3 0 0 1 78 296a7.1 7.1 0 0 1-3.2.8h-3v6.7h-1.7zm1.7 6.6h3a3.8 3.8 0 0 0 2.2-.6 2.3 2.3 0 0 0 .8-1.9 2.2 2.2 0 0 0-.8-1.8 3.8 3.8 0 0 0-2.2-.6h-3zM85.1 288.6h3.8l2.2.2a4.1 4.1 0 0 1 1.9.5 3.7 3.7 0 0 1 1.3 1.2 3.8 3.8 0 0 1 .6 2.2 4.1 4.1 0 0 1-1 2.7 5.6 5.6 0 0 1-2.8 1.3l4.3 6.8h-2.2l-4-6.7h-2.3v6.7h-1.8zm1.8 6.6H90l1.5-.2a2.5 2.5 0 0 0 1.5-2.2 2.8 2.8 0 0 0-.3-1.3 2.2 2.2 0 0 0-.9-.7 2 2 0 0 0-1.1-.3h-3.8zM107.7 303.9a7.5 7.5 0 0 1-3.1-.6 7.2 7.2 0 0 1-2.5-1.6 8.4 8.4 0 0 1-1.6-8.8 7.8 7.8 0 0 1 1.6-2.4 7.4 7.4 0 0 1 2.5-1.7 9.6 9.6 0 0 1 3.1-.5 10.6 10.6 0 0 1 3.1.5 8.5 8.5 0 0 1 2.5 1.7 10 10 0 0 1 1.6 2.4 8.3 8.3 0 0 1 .5 3.2 8.1 8.1 0 0 1-.5 3.1 10.7 10.7 0 0 1-1.6 2.5 8.1 8.1 0 0 1-5.6 2.2zm0-1.7a6.7 6.7 0 0 0 2.4-.4 6.2 6.2 0 0 0 1.8-1.4 6.2 6.2 0 0 0 1.2-1.9 6.9 6.9 0 0 0 .5-2.4 6 6 0 0 0-.5-2.4 6.7 6.7 0 0 0-1.2-2 4.6 4.6 0 0 0-1.8-1.3 6.9 6.9 0 0 0-2.4-.5 6 6 0 0 0-2.4.5 5.9 5.9 0 0 0-1.9 1.3 6.7 6.7 0 0 0-1.2 2 6.1 6.1 0 0 0-.4 2.4 6.7 6.7 0 0 0 .4 2.4 6.2 6.2 0 0 0 1.2 1.9 8.5 8.5 0 0 0 1.9 1.4 6.1 6.1 0 0 0 2.4.4zM121.4 288.6h4.4l2 .2a5.9 5.9 0 0 1 1.6.7 3 3 0 0 1 1.2 1.3 3.6 3.6 0 0 1 .4 1.9 4 4 0 0 1-.4 2 3.8 3.8 0 0 1-1.2 1.3 4.4 4.4 0 0 1-1.6.6 5 5 0 0 1-1.7.2h-2.9v6.7h-1.8zm1.8 6.6h2.9a3.8 3.8 0 0 0 2.2-.6 2 2 0 0 0 .8-1.9 1.9 1.9 0 0 0-.8-1.8 3.8 3.8 0 0 0-2.2-.6h-2.9zM136.5 288.6h9.3v1.7h-7.5v4.6h7v1.7h-7v5.3h7.9v1.6h-9.7zM151.8 288.6h3.8l2.1.2a4.1 4.1 0 0 1 1.9.5 5.3 5.3 0 0 1 1.4 1.2 4.8 4.8 0 0 1 .5 2.2 4.1 4.1 0 0 1-1 2.7 5.7 5.7 0 0 1-2.7 1.3l4.2 6.8h-2.2l-4-6.7h-2.3v6.7h-1.7zm1.7 6.6h3.1l1.5-.2a2.8 2.8 0 0 0 1.1-.8 2.6 2.6 0 0 0 .4-1.4 2.8 2.8 0 0 0-.3-1.3 2.2 2.2 0 0 0-.9-.7 2 2 0 0 0-1.1-.3h-3.8zM177.6 290.3h-4.9v13.2h-1.8v-13.2H166v-1.7h11.6zM182.7 288.6h1.8v14.9h-1.8zM191.3 288.6h9.3v1.7H193v4.6h7.1v1.7H193v5.3h8v1.6h-9.7zM214 291.3a2.5 2.5 0 0 0-1.2-1.1 4 4 0 0 0-1.5-.3h-1.2l-1 .5a1.9 1.9 0 0 0-.7.8 2 2 0 0 0-.3 1.1 2.9 2.9 0 0 0 .2.9 1.5 1.5 0 0 0 .5.7l.9.6 1.5.5 1.7.6 1.4.8a2.3 2.3 0 0 1 1 1.2 3.4 3.4 0 0 1 .4 1.8 5.9 5.9 0 0 1-.4 2 3.7 3.7 0 0 1-1.2 1.3 5.3 5.3 0 0 1-1.7.8 6.3 6.3 0 0 1-1.9.3h-1.3l-1.3-.4-1.1-.6a2.8 2.8 0 0 1-.9-1l1.5-1.2a3.7 3.7 0 0 0 1.3 1.2 4.1 4.1 0 0 0 1.9.4h1.1l1.1-.5a2.7 2.7 0 0 0 .7-.8 2.3 2.3 0 0 0 .3-1.1 3.7 3.7 0 0 0-.2-1.2 2.3 2.3 0 0 0-.7-.7l-1.3-.6-1.7-.6-1.5-.5-1.1-.8a5 5 0 0 1-.8-1.2 3.5 3.5 0 0 1-.3-1.6 4.8 4.8 0 0 1 .4-1.8 4.1 4.1 0 0 1 1.2-1.4 8 8 0 0 1 1.6-.8 5.8 5.8 0 0 1 1.9-.2 8.5 8.5 0 0 1 2.3.3 4.9 4.9 0 0 1 1.8 1.4z"}})]), this._v(" "), n("g", {attrs: {fill: "#fff"}}, [n("path", {attrs: {d: "M610.1 343.6h2.6l5 11.7h.1l5-11.7h2.6v14.9h-1.8V346l-5.3 12.5h-1.1l-5.3-12.5h-.1v12.5h-1.7zM632.2 343.6h9.4v1.7H634v4.6h7v1.7h-7v5.3h7.9v1.6h-9.7zM658 345.3h-4.9v13.2h-1.8v-13.2h-4.9v-1.7H658zM663.1 343.6h1.7v6.3h8v-6.3h1.7v14.9h-1.7v-6.9h-8v6.9h-1.7zM688.2 358.9a8.1 8.1 0 0 1-3.1-.6 7.8 7.8 0 0 1-2.4-1.6 6.7 6.7 0 0 1-1.6-2.5 8.1 8.1 0 0 1-.6-3.1 8.3 8.3 0 0 1 .6-3.2 6.3 6.3 0 0 1 1.6-2.4 8.1 8.1 0 0 1 2.4-1.7 10.6 10.6 0 0 1 3.1-.5 10.7 10.7 0 0 1 3.2.5 8.1 8.1 0 0 1 2.4 1.7 6.3 6.3 0 0 1 1.6 2.4 8.3 8.3 0 0 1 .6 3.2 8.1 8.1 0 0 1-.6 3.1 6.7 6.7 0 0 1-1.6 2.5 7.8 7.8 0 0 1-2.4 1.6 8.3 8.3 0 0 1-3.2.6zm0-1.7a6.1 6.1 0 0 0 2.4-.4 5.5 5.5 0 0 0 1.9-1.4 6.2 6.2 0 0 0 1.2-1.9 6.7 6.7 0 0 0 .4-2.4 6.1 6.1 0 0 0-.4-2.4 6.7 6.7 0 0 0-1.2-2 4.3 4.3 0 0 0-1.9-1.3 6 6 0 0 0-2.4-.5 5.9 5.9 0 0 0-2.3.5 4.3 4.3 0 0 0-1.9 1.3 6.7 6.7 0 0 0-1.2 2 6.1 6.1 0 0 0-.4 2.4 6.7 6.7 0 0 0 .4 2.4 6.2 6.2 0 0 0 1.2 1.9 5.5 5.5 0 0 0 1.9 1.4 5.9 5.9 0 0 0 2.3.4zM701.8 343.6h5.8l1.5.2 1.6.5 1.6 1a8.6 8.6 0 0 1 1.3 1.4 6.6 6.6 0 0 1 .9 1.9 9.5 9.5 0 0 1 .3 2.5 8.8 8.8 0 0 1-.3 2.4 5.6 5.6 0 0 1-.9 1.9 5.8 5.8 0 0 1-1.3 1.4 5.4 5.4 0 0 1-1.6 1l-1.6.5-1.5.2h-5.8zm1.8 13.3h3.4a8.5 8.5 0 0 0 2.3-.4 3.9 3.9 0 0 0 1.9-1 4.6 4.6 0 0 0 1.3-1.8 6.8 6.8 0 0 0 .4-2.6 7.3 7.3 0 0 0-.4-2.7 4.6 4.6 0 0 0-1.3-1.8 4.9 4.9 0 0 0-1.9-1 8.5 8.5 0 0 0-2.3-.3h-3.4z"}})]), this._v(" "), n("g", {attrs: {opacity: ".81"}}, [n("path", {
                    attrs: {
                        fill: "#efa8b0",
                        d: "M525.5 115.5h21v21h-21z"
                    }
                }), this._v(" "), n("g", {attrs: {fill: "#fff"}}, [n("path", {attrs: {d: "M573.3 133.9a8.3 8.3 0 0 1-3.2-.6 7.8 7.8 0 0 1-2.4-1.6 6.7 6.7 0 0 1-1.6-2.5 8.1 8.1 0 0 1-.6-3.1 8.3 8.3 0 0 1 .6-3.2 6.3 6.3 0 0 1 1.6-2.4 8.1 8.1 0 0 1 2.4-1.7 10.7 10.7 0 0 1 3.2-.5 10.6 10.6 0 0 1 3.1.5 8.1 8.1 0 0 1 2.4 1.7 6.3 6.3 0 0 1 1.6 2.4 8.3 8.3 0 0 1 .6 3.2 8.1 8.1 0 0 1-.6 3.1 6.7 6.7 0 0 1-1.6 2.5 7.8 7.8 0 0 1-2.4 1.6 8.1 8.1 0 0 1-3.1.6zm0-1.7a5.9 5.9 0 0 0 2.3-.4 5.5 5.5 0 0 0 1.9-1.4 6.2 6.2 0 0 0 1.2-1.9 6.7 6.7 0 0 0 .4-2.4 6.1 6.1 0 0 0-.4-2.4 6.7 6.7 0 0 0-1.2-2 4.3 4.3 0 0 0-1.9-1.3 5.9 5.9 0 0 0-2.3-.5 6 6 0 0 0-2.4.5 5 5 0 0 0-1.9 1.3 6.7 6.7 0 0 0-1.2 2 6.1 6.1 0 0 0-.4 2.4 6.7 6.7 0 0 0 .4 2.4 6.2 6.2 0 0 0 1.2 1.9 6.7 6.7 0 0 0 1.9 1.4 6.1 6.1 0 0 0 2.4.4zM587 118.6h4.5l1.8.2a7.6 7.6 0 0 1 1.6.6 3.2 3.2 0 0 1 1.1 1.2 3.1 3.1 0 0 1-.3 3.8 3.1 3.1 0 0 1-1.9 1.2 3.3 3.3 0 0 1 1.4.4 4.1 4.1 0 0 1 1.1.7 4.7 4.7 0 0 1 .7 1.2 5.9 5.9 0 0 1 .2 1.3 4.3 4.3 0 0 1-.5 2.1 3.7 3.7 0 0 1-1.3 1.2 4.4 4.4 0 0 1-1.9.7l-2.1.2H587zm1.7 6.3h3.7a2 2 0 0 0 1.1-.3 2.7 2.7 0 0 0 .8-.7 2.5 2.5 0 0 0 .3-1.3 2 2 0 0 0-.3-1.1 2.3 2.3 0 0 0-.7-.7 2 2 0 0 0-1.1-.3h-3.8zm0 7h3l1.3-.2 1.2-.4.8-.8a2.1 2.1 0 0 0 .3-1.2 2.5 2.5 0 0 0-.3-1.3 2.4 2.4 0 0 0-.8-.9l-1.1-.4h-4.4zM610.1 129.7a4 4 0 0 1-.3 1.5 3.3 3.3 0 0 1-.7 1.3 3.4 3.4 0 0 1-1.3 1 4 4 0 0 1-2 .4 4.5 4.5 0 0 1-2.6-.8 4.2 4.2 0 0 1-1.4-2.4l1.8-.4a2.6 2.6 0 0 0 .7 1.4 2 2 0 0 0 1.5.5l1.3-.2.7-.7a3.6 3.6 0 0 0 .4-1.1 4.5 4.5 0 0 0 .1-1.2v-10.4h1.8zM616.8 118.6h9.4v1.7h-7.6v4.6h7.1v1.7h-7.1v5.3h8v1.6h-9.8zM642.4 121.7a3.9 3.9 0 0 0-1.7-1.4 4.5 4.5 0 0 0-2-.4 5.9 5.9 0 0 0-2.3.5 4.9 4.9 0 0 0-1.8 1.4 6.2 6.2 0 0 0-1.2 1.9 7.4 7.4 0 0 0 0 4.8 6.2 6.2 0 0 0 1.2 1.9 6.2 6.2 0 0 0 1.8 1.4 5.6 5.6 0 0 0 2.3.4 4.7 4.7 0 0 0 2.4-.5 7 7 0 0 0 1.9-1.5l1.3 1.1a6.1 6.1 0 0 1-2.4 1.9 6.8 6.8 0 0 1-3.2.7 7.3 7.3 0 0 1-3-.6 7.8 7.8 0 0 1-2.4-1.6 8.3 8.3 0 0 1-1.6-8.7 7 7 0 0 1 1.5-2.5 7.8 7.8 0 0 1 2.4-1.6 8.1 8.1 0 0 1 3.1-.6 7.1 7.1 0 0 1 2.9.5 5.8 5.8 0 0 1 2.3 1.8zM660.2 120.3h-4.9v13.2h-1.8v-13.2h-4.9v-1.7h11.6z"}})]), this._v(" "), n("path", {
                    attrs: {
                        fill: "#6eceb7",
                        d: "M525.5 157h21v21h-21z"
                    }
                }), this._v(" "), n("g", {attrs: {fill: "#fff"}}, [n("path", {attrs: {d: "M566.3 160.1h1.8v6.5h.3l6.7-6.5h2.6l-7.4 6.8 7.7 8.1h-2.6l-7-7.6h-.3v7.6h-1.8zM582.9 160.1h9.3v1.7h-7.6v4.6h7.1v1.7h-7.1v5.3h8v1.6h-9.7zM602.4 168.6l-5.6-8.5h2.3l4.2 6.8 4.3-6.8h2.1l-5.6 8.5v6.4h-1.7z"}})]), this._v(" "), n("g", [n("path", {
                    attrs: {
                        fill: "#dc935f",
                        d: "M525.5 198.5h21v21h-21z"
                    }
                }), this._v(" "), n("g", {attrs: {fill: "#fff"}}, [n("path", {attrs: {d: "M564.3 201.6h2l4.6 12.3 4.8-12.3h1.8l-5.8 14.9H570zM586 201.6h1.7l6.3 14.9h-2.1l-1.5-3.7H583l-1.5 3.7h-2zm.8 2.3l-3.1 7.3h6.1zM599.1 201.6h1.7v13.3h6.8v1.6h-8.5zM623.4 210.8a8.5 8.5 0 0 1-.3 2.3 6.3 6.3 0 0 1-1 2 5.5 5.5 0 0 1-1.7 1.3 7.1 7.1 0 0 1-2.6.5 6.3 6.3 0 0 1-2.6-.5 4.9 4.9 0 0 1-1.8-1.3 6.1 6.1 0 0 1-.9-2 5.9 5.9 0 0 1-.4-2.3v-9.2h1.8v9a8.8 8.8 0 0 0 .2 1.7 3.4 3.4 0 0 0 .6 1.5 4.3 4.3 0 0 0 1.2 1.1 5 5 0 0 0 1.9.3 4.8 4.8 0 0 0 1.8-.3 4.3 4.3 0 0 0 1.2-1.1 3.4 3.4 0 0 0 .6-1.5 8.8 8.8 0 0 0 .2-1.7v-9h1.8zM630.1 201.6h9.3v1.7h-7.5v4.6h7v1.7h-7v5.3h7.9v1.6h-9.7z"}})])])]), this._v(" "), n("g", {attrs: {fill: "#fff"}}, [n("path", {attrs: {d: "M189.6 39.6h4.5l1.8.2a5.9 5.9 0 0 1 1.6.6 2.5 2.5 0 0 1 1.1 1.2 2.9 2.9 0 0 1 .5 1.7 3.3 3.3 0 0 1-.7 2.1 3.5 3.5 0 0 1-1.9 1.2 3.3 3.3 0 0 1 1.3.4 4.1 4.1 0 0 1 1.1.7 4.7 4.7 0 0 1 .7 1.2 5.9 5.9 0 0 1 .2 1.3 3.5 3.5 0 0 1-.5 2.1 3.7 3.7 0 0 1-1.3 1.2 4.4 4.4 0 0 1-1.9.7l-2.1.2h-4.4zm1.8 6.3h3.6a2 2 0 0 0 1.1-.3 2.7 2.7 0 0 0 .8-.7 2.5 2.5 0 0 0 .3-1.3 2 2 0 0 0-.3-1.1 2.3 2.3 0 0 0-.7-.7 1.9 1.9 0 0 0-1-.3h-3.8zm0 7h2.9l1.3-.2 1.2-.4a3 3 0 0 0 .8-.8 2.1 2.1 0 0 0 .3-1.2 2.5 2.5 0 0 0-.3-1.3 1.8 1.8 0 0 0-.8-.9l-1.1-.4h-4.3zM210.5 39.6h1.6l6.3 14.9h-2l-1.5-3.7h-7.5l-1.5 3.7h-2zm.8 2.3h-.1l-3.1 7.3h6.1zM230.8 42.3a2.5 2.5 0 0 0-1.2-1.1 3.7 3.7 0 0 0-1.5-.3H227l-1.1.5a1.9 1.9 0 0 0-.7.8 2 2 0 0 0-.3 1.1 2.9 2.9 0 0 0 .2.9l.5.7 1 .6 1.5.5 1.6.6a5.3 5.3 0 0 1 1.5.8 4 4 0 0 1 1 1.2 4.8 4.8 0 0 1 .3 1.9 4.2 4.2 0 0 1-.4 2 3.7 3.7 0 0 1-1.2 1.3 4.5 4.5 0 0 1-1.7.8 5.8 5.8 0 0 1-1.9.3H226l-1.3-.4-1.1-.6-.9-1 1.5-1.2a3.3 3.3 0 0 0 1.4 1.2 3.7 3.7 0 0 0 1.8.4h1.1l1.1-.5a2.7 2.7 0 0 0 .7-.8 2.3 2.3 0 0 0 .3-1.1 2.2 2.2 0 0 0-.2-1.2 2.3 2.3 0 0 0-.7-.7l-1.2-.6-1.8-.6-1.4-.5a6.2 6.2 0 0 1-1.2-.8 5 5 0 0 1-.8-1.2 3.5 3.5 0 0 1-.3-1.6 3.5 3.5 0 0 1 .5-1.8 3 3 0 0 1 1.1-1.4l1.6-.8a6.2 6.2 0 0 1 1.9-.2 8 8 0 0 1 2.3.3 6.2 6.2 0 0 1 1.9 1.4zM238.5 39.6h1.8v14.9h-1.8zM257.5 42.7a4.3 4.3 0 0 0-1.6-1.4 5.2 5.2 0 0 0-2.1-.4 5.9 5.9 0 0 0-2.3.5 4.9 4.9 0 0 0-1.8 1.4 6.2 6.2 0 0 0-1.2 1.9 10 10 0 0 0-.4 2.4 10 10 0 0 0 .4 2.4 6.2 6.2 0 0 0 1.2 1.9 6.2 6.2 0 0 0 1.8 1.4 5.9 5.9 0 0 0 2.3.4 4.7 4.7 0 0 0 2.4-.5 7 7 0 0 0 1.9-1.5l1.3 1.1a6.1 6.1 0 0 1-2.4 1.9 6.6 6.6 0 0 1-3.2.7 7.3 7.3 0 0 1-3-.6 7.8 7.8 0 0 1-2.4-1.6 8.3 8.3 0 0 1-1.6-8.7 7.2 7.2 0 0 1 1.6-2.5 6.3 6.3 0 0 1 2.3-1.6 8.1 8.1 0 0 1 3.1-.6 7.1 7.1 0 0 1 2.9.5 5.8 5.8 0 0 1 2.3 1.8zM278.8 39.6h1.7l6.3 14.9h-2l-1.5-3.7h-7.5l-1.5 3.7h-2zm.8 2.3l-3.1 7.3h6.1zM291.9 39.6h2.2l8.6 12.4h.1V39.6h1.7v14.9h-2.2l-8.6-12.3h-.1v12.3h-1.7zM316.1 39.6h1.7l6.3 14.9h-2l-1.6-3.7h-7.4l-1.5 3.7h-2zm.8 2.3l-3.1 7.3h6.1zM337.5 41.3h-5v13.2h-1.7V41.3h-4.9v-1.7h11.6zM348.8 54.9a7.8 7.8 0 0 1-3.1-.6 7.2 7.2 0 0 1-2.5-1.6 8.4 8.4 0 0 1-1.6-8.8 7.8 7.8 0 0 1 1.6-2.4 7.4 7.4 0 0 1 2.5-1.7 9.9 9.9 0 0 1 6.2 0 7.4 7.4 0 0 1 2.5 1.7 7.8 7.8 0 0 1 1.6 2.4 8.3 8.3 0 0 1 .6 3.2 8.1 8.1 0 0 1-2.2 5.6 7.2 7.2 0 0 1-2.5 1.6 7.8 7.8 0 0 1-3.1.6zm0-1.7a6.1 6.1 0 0 0 2.4-.4 8.5 8.5 0 0 0 1.9-1.4 6.2 6.2 0 0 0 1.2-1.9 10 10 0 0 0 .4-2.4 8.6 8.6 0 0 0-.4-2.4 6.7 6.7 0 0 0-1.2-2 5.9 5.9 0 0 0-1.9-1.3 6 6 0 0 0-4.8 0 4.6 4.6 0 0 0-1.8 1.3 4.1 4.1 0 0 0-1.2 2 6 6 0 0 0-.5 2.4 6.9 6.9 0 0 0 .5 2.4 3.9 3.9 0 0 0 1.2 1.9 6.2 6.2 0 0 0 1.8 1.4 6.1 6.1 0 0 0 2.4.4zM362.5 39.6h2.7l5 11.7 5.1-11.7h2.6v14.9h-1.8V42l-5.4 12.5h-1L364.3 42v12.5h-1.8zM388.3 48.1l-5.5-8.5h2.2l4.2 6.8 4.3-6.8h2.1l-5.5 8.5v6.4h-1.8zM416.3 54.9a8.1 8.1 0 0 1-3.1-.6 7.8 7.8 0 0 1-2.4-1.6 6.7 6.7 0 0 1-1.6-2.5 8.1 8.1 0 0 1-.6-3.1 8.3 8.3 0 0 1 .6-3.2 6.3 6.3 0 0 1 1.6-2.4 8.1 8.1 0 0 1 2.4-1.7 10.6 10.6 0 0 1 3.1-.5 10.7 10.7 0 0 1 3.2.5 8.1 8.1 0 0 1 2.4 1.7 6.3 6.3 0 0 1 1.6 2.4 8.3 8.3 0 0 1 .6 3.2 8.1 8.1 0 0 1-.6 3.1 6.7 6.7 0 0 1-1.6 2.5 7.8 7.8 0 0 1-2.4 1.6 8.3 8.3 0 0 1-3.2.6zm0-1.7a6.1 6.1 0 0 0 2.4-.4 5.5 5.5 0 0 0 1.9-1.4 6.2 6.2 0 0 0 1.2-1.9 6.7 6.7 0 0 0 .4-2.4 6.1 6.1 0 0 0-.4-2.4 6.7 6.7 0 0 0-1.2-2 4.3 4.3 0 0 0-1.9-1.3 6 6 0 0 0-2.4-.5 5.9 5.9 0 0 0-2.3.5 4.3 4.3 0 0 0-1.9 1.3 6.7 6.7 0 0 0-1.2 2 6.1 6.1 0 0 0-.4 2.4 6.7 6.7 0 0 0 .4 2.4 6.2 6.2 0 0 0 1.2 1.9 5.5 5.5 0 0 0 1.9 1.4 5.9 5.9 0 0 0 2.3.4zM430.1 39.6h9.2v1.7h-7.5v4.9h7v1.6h-7v6.7h-1.7zM458.7 39.6h1.7l6.3 14.9h-2.1l-1.5-3.7h-7.4l-1.5 3.7h-2zm.8 2.3l-3.1 7.3h6.1zM471.7 39.6h2.3l8.6 12.4V39.6h1.8v14.9h-2.2l-8.6-12.3h-.1v12.3h-1.8zM507.1 54.9a8.1 8.1 0 0 1-3.1-.6 7.8 7.8 0 0 1-2.4-1.6 8.5 8.5 0 0 1-1.7-2.5 10.6 10.6 0 0 1-.5-3.1 10.7 10.7 0 0 1 .5-3.2 8.7 8.7 0 0 1 4.1-4.1 10.6 10.6 0 0 1 3.1-.5 10.7 10.7 0 0 1 3.2.5 8.1 8.1 0 0 1 2.4 1.7 7.8 7.8 0 0 1 1.6 2.4 8.3 8.3 0 0 1 .6 3.2 8.1 8.1 0 0 1-2.2 5.6 7.8 7.8 0 0 1-2.4 1.6 8.3 8.3 0 0 1-3.2.6zm0-1.7a6.1 6.1 0 0 0 2.4-.4 6.7 6.7 0 0 0 1.9-1.4 6.2 6.2 0 0 0 1.2-1.9 6.7 6.7 0 0 0 .4-2.4 6.1 6.1 0 0 0-.4-2.4 6.7 6.7 0 0 0-1.2-2 5 5 0 0 0-1.9-1.3 6 6 0 0 0-2.4-.5 5.9 5.9 0 0 0-2.3.5 4.3 4.3 0 0 0-1.9 1.3 6.7 6.7 0 0 0-1.2 2 6.1 6.1 0 0 0-.4 2.4 6.7 6.7 0 0 0 .4 2.4 6.2 6.2 0 0 0 1.2 1.9 5.5 5.5 0 0 0 1.9 1.4 5.9 5.9 0 0 0 2.3.4zM520.9 39.6h4.5l1.8.2a7.6 7.6 0 0 1 1.6.6 4.3 4.3 0 0 1 1.1 1.2 2.9 2.9 0 0 1 .4 1.7 2.8 2.8 0 0 1-.7 2.1 3.1 3.1 0 0 1-1.9 1.2 3.7 3.7 0 0 1 1.4.4l1 .7a2.9 2.9 0 0 1 .7 1.2 3.1 3.1 0 0 1 .3 1.3 4.3 4.3 0 0 1-.5 2.1 4.1 4.1 0 0 1-1.4 1.2 3.6 3.6 0 0 1-1.8.7l-2.1.2h-4.4zm1.7 6.3h3.7a2.3 2.3 0 0 0 1.1-.3 1.6 1.6 0 0 0 .7-.7 2.5 2.5 0 0 0 .3-1.3 3.6 3.6 0 0 0-.2-1.1 2.7 2.7 0 0 0-.8-.7 1.7 1.7 0 0 0-1-.3h-3.8zm0 7h3l1.3-.2 1.2-.4a3 3 0 0 0 .8-.8 2.1 2.1 0 0 0 .3-1.2 2.5 2.5 0 0 0-.3-1.3 2.4 2.4 0 0 0-.8-.9l-1.1-.4h-4.4zM543.9 50.7a3.9 3.9 0 0 1-.2 1.5 3.3 3.3 0 0 1-.7 1.3 4.5 4.5 0 0 1-1.3 1 4 4 0 0 1-2 .4 4.2 4.2 0 0 1-2.6-.8 4.2 4.2 0 0 1-1.4-2.4l1.8-.4a2.1 2.1 0 0 0 .7 1.4 2 2 0 0 0 1.5.5l1.3-.2.7-.7a3.6 3.6 0 0 0 .4-1.1c0-.4.1-.7.1-1.2V39.6h1.7zM550.7 39.6h9.4v1.7h-7.6v4.6h7.1v1.7h-7.1v5.3h7.9v1.6h-9.7zM576.3 42.7a4.6 4.6 0 0 0-1.7-1.4 4.5 4.5 0 0 0-2-.4 5.6 5.6 0 0 0-2.3.5 4.9 4.9 0 0 0-1.8 1.4 6.2 6.2 0 0 0-1.2 1.9 7.4 7.4 0 0 0 0 4.8 6.2 6.2 0 0 0 1.2 1.9 6.2 6.2 0 0 0 1.8 1.4 5.6 5.6 0 0 0 2.3.4 4.7 4.7 0 0 0 2.4-.5 9 9 0 0 0 1.9-1.5l1.3 1.1a6.1 6.1 0 0 1-2.4 1.9 7.1 7.1 0 0 1-3.2.7 7.3 7.3 0 0 1-3-.6 7.8 7.8 0 0 1-2.4-1.6 8.3 8.3 0 0 1-1.6-8.7 5.8 5.8 0 0 1 1.5-2.5 7.7 7.7 0 0 1 5.5-2.2 7.4 7.4 0 0 1 2.9.5 5.8 5.8 0 0 1 2.3 1.8zM594 41.3h-4.9v13.2h-1.7V41.3h-4.9v-1.7H594z"}})]), this._v(" "), n("g", {attrs: {fill: "#b3b3b3"}}, [n("path", {attrs: {d: "M172.2 519a2.2 2.2 0 0 0-1-.9 2.8 2.8 0 0 0-1.3-.3l-1 .2a3.2 3.2 0 0 0-.9.3l-.6.7a3 3 0 0 0-.2 1 1.5 1.5 0 0 0 .1.7 1 1 0 0 0 .5.6 1.6 1.6 0 0 0 .8.5l1.3.5 1.4.5a3.5 3.5 0 0 1 1.2.7 2.8 2.8 0 0 1 .9 1 4.1 4.1 0 0 1 .3 1.6 3.3 3.3 0 0 1-.4 1.7 3.5 3.5 0 0 1-1 1.1 6.1 6.1 0 0 1-1.4.7l-1.7.2h-1.1a2.3 2.3 0 0 1-1.1-.3l-.9-.5a3 3 0 0 1-.8-.8l1.3-1.1a2.9 2.9 0 0 0 1.1 1.1 4.1 4.1 0 0 0 1.6.3h1l.9-.4.6-.7a1.7 1.7 0 0 0 .3-1 3 3 0 0 0-.2-1l-.6-.6-1.1-.5-1.5-.5-1.2-.5-1-.7a3.1 3.1 0 0 1-.7-.9 5.9 5.9 0 0 1-.2-1.4 4.1 4.1 0 0 1 .3-1.6 3.6 3.6 0 0 1 1-1.1 3.7 3.7 0 0 1 1.4-.7 4.1 4.1 0 0 1 1.6-.3 4.5 4.5 0 0 1 2 .4 4.2 4.2 0 0 1 1.6 1.1zM186.7 518.2h-4.2v11.3H181v-11.3h-4.2v-1.4h9.9zM190.2 516.8h5.1a4.2 4.2 0 0 1 1.6.4 3.2 3.2 0 0 1 1.2 1.1 3.4 3.4 0 0 1 .4 1.9 3.1 3.1 0 0 1-.8 2.2 3.8 3.8 0 0 1-2.4 1.1l3.6 5.9h-1.8l-3.5-5.7h-1.9v5.8h-1.5zm1.5 5.6h2.6l1.3-.2a1.5 1.5 0 0 0 .9-.6 2.1 2.1 0 0 0 .1-2.3 2.3 2.3 0 0 0-.7-.7l-1-.3h-3.2zM212.3 524.6a6.4 6.4 0 0 1-.3 2 3.8 3.8 0 0 1-.8 1.7 5.8 5.8 0 0 1-1.5 1.1 6.2 6.2 0 0 1-4.4 0 5.8 5.8 0 0 1-1.5-1.1 3.8 3.8 0 0 1-.8-1.7 6.4 6.4 0 0 1-.3-2v-7.8h1.5v7.6a7.7 7.7 0 0 0 .2 1.5 5 5 0 0 0 .5 1.3 2.8 2.8 0 0 0 1 .9 4.4 4.4 0 0 0 3.2 0 2.8 2.8 0 0 0 1-.9 5 5 0 0 0 .5-1.3 7.7 7.7 0 0 0 .2-1.5v-7.6h1.5zM226.1 519.4a5.3 5.3 0 0 0-1.4-1.2 5.8 5.8 0 0 0-1.8-.4 4.6 4.6 0 0 0-2 .5 4.2 4.2 0 0 0-1.5 1.1 5.9 5.9 0 0 0-1 1.7 7.1 7.1 0 0 0-.4 2 6.5 6.5 0 0 0 .4 2.1 5.9 5.9 0 0 0 1 1.7 4.2 4.2 0 0 0 1.5 1.1 4.5 4.5 0 0 0 2 .4 4.6 4.6 0 0 0 2.1-.4 5.2 5.2 0 0 0 1.6-1.4l1.1 1a5 5 0 0 1-2.1 1.7 7.6 7.6 0 0 1-2.7.5 5.8 5.8 0 0 1-2.6-.5 5.6 5.6 0 0 1-2-1.4 6 6 0 0 1-1.4-2.1 7.6 7.6 0 0 1-.5-2.7 7.5 7.5 0 0 1 .5-2.6 7.4 7.4 0 0 1 1.3-2.1 6 6 0 0 1 2.1-1.4 5.5 5.5 0 0 1 2.6-.6 7 7 0 0 1 2.5.5 4.3 4.3 0 0 1 2 1.5zM240.4 518.2h-4.2v11.3h-1.5v-11.3h-4.2v-1.4h9.9zM253.5 524.6a6.4 6.4 0 0 1-.3 2 3.8 3.8 0 0 1-.8 1.7 5.8 5.8 0 0 1-1.5 1.1 6.2 6.2 0 0 1-4.4 0 5.8 5.8 0 0 1-1.5-1.1 3.8 3.8 0 0 1-.8-1.7 6.4 6.4 0 0 1-.3-2v-7.8h1.5v7.6a7.7 7.7 0 0 0 .2 1.5 5 5 0 0 0 .5 1.3 2.8 2.8 0 0 0 1 .9 4.4 4.4 0 0 0 3.2 0 2.8 2.8 0 0 0 1-.9 5 5 0 0 0 .5-1.3 7.7 7.7 0 0 0 .2-1.5v-7.6h1.5zM258.4 516.8h5.1a4.2 4.2 0 0 1 1.6.4 3.2 3.2 0 0 1 1.2 1.1 3.4 3.4 0 0 1 .4 1.9 3.1 3.1 0 0 1-.8 2.2 3.8 3.8 0 0 1-2.4 1.1l3.7 5.9h-1.9l-3.5-5.7h-1.9v5.8h-1.5zm1.5 5.6h2.7l1.2-.2a1.5 1.5 0 0 0 .9-.6 2.1 2.1 0 0 0 .1-2.3 1.6 1.6 0 0 0-.7-.7l-1-.3h-3.2zM271.1 516.8h8v1.4h-6.5v4h6.1v1.4h-6.1v4.5h6.8v1.4h-8.3zM296.3 529.8a6.5 6.5 0 0 1-6.2-4 7.6 7.6 0 0 1-.5-2.7 7.5 7.5 0 0 1 .5-2.6 5.5 5.5 0 0 1 1.4-2.2 6.6 6.6 0 0 1 4.8-1.9 7.5 7.5 0 0 1 2.6.5 6.9 6.9 0 0 1 2.2 1.4 6.7 6.7 0 0 1 1.3 2.2 5.8 5.8 0 0 1 .5 2.6 5.9 5.9 0 0 1-.5 2.7 7.4 7.4 0 0 1-1.3 2.1 5.5 5.5 0 0 1-2.2 1.4 5.8 5.8 0 0 1-2.6.5zm0-1.4a4.5 4.5 0 0 0 2-.4 4.6 4.6 0 0 0 1.6-1.1 4.2 4.2 0 0 0 1-1.7 4.9 4.9 0 0 0 .4-2.1 4.5 4.5 0 0 0-.4-2 3.7 3.7 0 0 0-1-1.7 3.6 3.6 0 0 0-1.6-1.1 4.6 4.6 0 0 0-2-.5 5 5 0 0 0-2.1.5 4.2 4.2 0 0 0-1.6 1.1 6.9 6.9 0 0 0-1 1.7 6.5 6.5 0 0 0-.4 2 7.1 7.1 0 0 0 .4 2.1 9.5 9.5 0 0 0 1 1.7 5.7 5.7 0 0 0 1.6 1.1 4.9 4.9 0 0 0 2.1.4zM307.2 516.8h7.9v1.4h-6.4v4.2h5.9v1.4h-5.9v5.7h-1.5zM334.3 518.2h-4.2v11.3h-1.5v-11.3h-4.2v-1.4h9.9zM337.8 516.8h1.5v5.4h6.8v-5.4h1.5v12.7h-1.5v-5.9h-6.8v5.9h-1.5zM352.6 516.8h8v1.4h-6.5v4h6.1v1.4h-6.1v4.5h6.8v1.4h-8.3zM371.9 516.8h1.5v12.7h-1.5zM378.3 516.8h1.5v11.3h5.9v1.4h-7.4zM389.1 516.8h1.5v11.3h5.8v1.4h-7.3zM409 524.6a6.5 6.5 0 0 1-.2 2 8.9 8.9 0 0 1-.8 1.7 5.8 5.8 0 0 1-1.5 1.1 5.3 5.3 0 0 1-2.3.4 5.1 5.1 0 0 1-2.2-.4 5.8 5.8 0 0 1-1.5-1.1 5.3 5.3 0 0 1-.8-1.7 6.4 6.4 0 0 1-.3-2v-7.8h1.5v7.6a7.7 7.7 0 0 0 .2 1.5 3.1 3.1 0 0 0 .6 1.3 1.8 1.8 0 0 0 1 .9 3.3 3.3 0 0 0 1.5.3 3.5 3.5 0 0 0 1.6-.3 2.2 2.2 0 0 0 1-.9 3.1 3.1 0 0 0 .6-1.3 7.6 7.6 0 0 0 .1-1.5v-7.6h1.5zM419.8 519a1.8 1.8 0 0 0-1-.9 2.8 2.8 0 0 0-1.3-.3l-1 .2a1.9 1.9 0 0 0-.8.3 2.3 2.3 0 0 0-.7.7 3 3 0 0 0-.2 1c0 .3.1.5.1.7a1 1 0 0 0 .5.6l.8.5 1.3.5 1.4.5a3.5 3.5 0 0 1 1.2.7 2.8 2.8 0 0 1 .9 1 4.1 4.1 0 0 1 .3 1.6 3.3 3.3 0 0 1-.4 1.7 3.5 3.5 0 0 1-1 1.1 6.1 6.1 0 0 1-1.4.7l-1.7.2h-1.1a2.3 2.3 0 0 1-1.1-.3l-.9-.5a3 3 0 0 1-.8-.8l1.3-1.1a3.8 3.8 0 0 0 1.1 1.1 4.5 4.5 0 0 0 1.6.3h1l.9-.4a1.9 1.9 0 0 0 .6-.7 1.7 1.7 0 0 0 .3-1 3 3 0 0 0-.2-1 1.7 1.7 0 0 0-.6-.6l-1.1-.5-1.4-.5-1.3-.5-1-.7a3.1 3.1 0 0 1-.7-.9 5.9 5.9 0 0 1-.2-1.4 4.1 4.1 0 0 1 .3-1.6 3.6 3.6 0 0 1 1-1.1 3.7 3.7 0 0 1 1.4-.7 4.5 4.5 0 0 1 1.6-.3 4.5 4.5 0 0 1 2 .4 4.2 4.2 0 0 1 1.6 1.1zM434.3 518.2h-4.2v11.3h-1.5v-11.3h-4.2v-1.4h9.9zM437.8 516.8h5.1a4.2 4.2 0 0 1 1.6.4 3.2 3.2 0 0 1 1.2 1.1 3.4 3.4 0 0 1 .4 1.9 3.1 3.1 0 0 1-.8 2.2 3.8 3.8 0 0 1-2.4 1.1l3.7 5.9h-1.9l-3.4-5.7h-2v5.8h-1.5zm1.5 5.6h2.7l1.2-.2a1.5 1.5 0 0 0 .9-.6 2.1 2.1 0 0 0 .1-2.3 1.6 1.6 0 0 0-.7-.7l-1-.3h-3.2zM455.2 516.8h1.4l5.4 12.7h-1.8l-1.2-3.1h-6.4l-1.3 3.1h-1.7zm.7 1.9h-.1l-2.6 6.3h5.2zM472.6 518.2h-4.2v11.3h-1.5v-11.3h-4.3v-1.4h10zM476.1 516.8h1.5v12.7h-1.5zM488.5 529.8a6.5 6.5 0 0 1-6.2-4 7.6 7.6 0 0 1-.5-2.7 7.5 7.5 0 0 1 .5-2.6 5.5 5.5 0 0 1 1.4-2.2 6.6 6.6 0 0 1 4.8-1.9 8.1 8.1 0 0 1 2.7.5 7.7 7.7 0 0 1 2.1 1.4 5.4 5.4 0 0 1 1.3 2.2 5.8 5.8 0 0 1 .5 2.6 5.9 5.9 0 0 1-.5 2.7 5.7 5.7 0 0 1-1.3 2.1 6 6 0 0 1-2.1 1.4 6.2 6.2 0 0 1-2.7.5zm0-1.4a4.5 4.5 0 0 0 2-.4 4.6 4.6 0 0 0 1.6-1.1 6.2 6.2 0 0 0 1.1-1.7 7.1 7.1 0 0 0 .3-2.1 6.4 6.4 0 0 0-.3-2 5 5 0 0 0-1.1-1.7 3.6 3.6 0 0 0-1.6-1.1 4.6 4.6 0 0 0-2-.5 5 5 0 0 0-2.1.5 4.2 4.2 0 0 0-1.6 1.1 6.9 6.9 0 0 0-1 1.7 6.5 6.5 0 0 0-.4 2 7.1 7.1 0 0 0 .4 2.1 9.5 9.5 0 0 0 1 1.7 5.7 5.7 0 0 0 1.6 1.1 4.9 4.9 0 0 0 2.1.4zM499.4 516.8h1.9l7.4 10.5v-10.5h1.5v12.7h-1.9l-7.4-10.6v10.6h-1.5zM522 516.8h1.5v12.7H522zM528.4 516.8h1.9l7.4 10.5v-10.5h1.6v12.7h-1.9l-7.4-10.6h-.1v10.6h-1.5zM544.2 516.8h7.9v1.4h-6.4v4.2h6v1.4h-6v5.7h-1.5zM555.8 516.8h1.5v11.3h5.8v1.4h-7.3zM575.7 524.6a12.3 12.3 0 0 1-.2 2 5.6 5.6 0 0 1-.9 1.7 3.7 3.7 0 0 1-1.5 1.1 6.2 6.2 0 0 1-4.4 0 5.8 5.8 0 0 1-1.5-1.1 3.8 3.8 0 0 1-.8-1.7 6.4 6.4 0 0 1-.3-2v-7.8h1.5v7.6a7.7 7.7 0 0 0 .2 1.5 5 5 0 0 0 .5 1.3 2.8 2.8 0 0 0 1 .9 4.1 4.1 0 0 0 1.6.3 3.5 3.5 0 0 0 1.6-.3 2.2 2.2 0 0 0 1-.9 2.9 2.9 0 0 0 .5-1.3 3.9 3.9 0 0 0 .2-1.5v-7.6h1.5zM580.6 516.8h8v1.4h-6.5v4h6.1v1.4h-6.1v4.5h6.8v1.4h-8.3zM592.8 516.8h1.9l7.4 10.5v-10.5h1.5v12.7h-1.9l-7.3-10.6h-.1v10.6h-1.5zM617.5 519.4a3.3 3.3 0 0 0-1.4-1.2 5.3 5.3 0 0 0-1.8-.4 5.1 5.1 0 0 0-3.4 1.6 6.2 6.2 0 0 0-1.1 1.7 6.9 6.9 0 0 0-.3 2 6.6 6.6 0 0 0 .3 2.1 9.5 9.5 0 0 0 1 1.7 5.7 5.7 0 0 0 1.6 1.1 4.1 4.1 0 0 0 1.9.4 4.6 4.6 0 0 0 2.1-.4 4.3 4.3 0 0 0 1.6-1.4l1.2 1a5.6 5.6 0 0 1-2.1 1.7 7.8 7.8 0 0 1-2.8.5 5.3 5.3 0 0 1-2.5-.5 6 6 0 0 1-2.1-1.4 7.4 7.4 0 0 1-1.3-2.1 5.9 5.9 0 0 1-.5-2.7 7.5 7.5 0 0 1 .4-2.6 7.7 7.7 0 0 1 1.4-2.1 5.6 5.6 0 0 1 2-1.4 5.8 5.8 0 0 1 2.6-.6 7 7 0 0 1 2.5.5 4.3 4.3 0 0 1 2 1.5zM622.8 516.8h8v1.4h-6.5v4h6.1v1.4h-6.1v4.5h6.9v1.4h-8.4zM634.9 516.8h6.2a3.4 3.4 0 0 1 1.4.5 5 5 0 0 1 1.4.8 4.3 4.3 0 0 1 1.1 1.2 8 8 0 0 1 .8 1.6 7.5 7.5 0 0 1 0 4.2 8.9 8.9 0 0 1-.8 1.7l-1.1 1.2-1.4.8-1.4.5h-6.2zm1.5 11.3h2.9a6.4 6.4 0 0 0 2-.3 4.6 4.6 0 0 0 1.7-.9 4 4 0 0 0 1-1.5 5.3 5.3 0 0 0 .4-2.3 5.1 5.1 0 0 0-.4-2.2 4.4 4.4 0 0 0-1-1.6 4.6 4.6 0 0 0-1.7-.9l-2-.2h-2.9zM166.5 542h5.5l1.3.5a4.7 4.7 0 0 1 1 1 3.3 3.3 0 0 1 .3 1.5 2.8 2.8 0 0 1-.6 1.8 3.1 3.1 0 0 1-1.6 1.1 2 2 0 0 1 1.1.3l1 .7.6 1a3.6 3.6 0 0 1 .2 1.1 3.5 3.5 0 0 1-.5 1.8 3.8 3.8 0 0 1-1.1 1.1l-1.6.5-1.8.2h-3.8zm1.5 5.4h3.2l.9-.3.7-.6a3.6 3.6 0 0 0 .2-1.1 3 3 0 0 0-.2-1l-.6-.6-.9-.3H168zm0 5.9h3.7l1-.4a2.3 2.3 0 0 0 .7-.7 1.7 1.7 0 0 0 .3-1 1.8 1.8 0 0 0-.3-1.1 2.7 2.7 0 0 0-.7-.8 2.9 2.9 0 0 0-1-.3H168zM182.4 549.2l-4.8-7.2h2l3.5 5.7 3.7-5.7h1.8l-4.7 7.2v5.5h-1.5zM204.7 551.4a3 3 0 0 1-.2 1.3 3.4 3.4 0 0 1-.6 1.2 3.1 3.1 0 0 1-1.1.8 4.3 4.3 0 0 1-1.7.3 3.5 3.5 0 0 1-2.3-.7 3 3 0 0 1-1.1-2l1.5-.3a2.3 2.3 0 0 0 .6 1.2 1.8 1.8 0 0 0 1.3.4l1.1-.2c.2-.2.5-.4.6-.6a1.6 1.6 0 0 0 .3-.9 3.4 3.4 0 0 0 .1-1V542h1.5zM213.6 542h1.4l5.5 12.7h-1.8l-1.3-3.1H211l-1.3 3.1H208zm.7 1.9l-2.7 6.3h5.2zM221.5 542h1.7l4 10.4 4.1-10.4h1.6l-5 12.7h-1.5zM239.5 542h1.5l5.4 12.7h-1.8l-1.3-3.1h-6.4l-1.3 3.1h-1.7zm.7 1.9l-2.7 6.3h5.2zM256.4 544.2a2.8 2.8 0 0 0-1-.9 3.5 3.5 0 0 0-1.4-.3l-.9.2a1.9 1.9 0 0 0-.9.3 1.3 1.3 0 0 0-.6.7 1.7 1.7 0 0 0-.3 1 1.4 1.4 0 0 0 .2.7.9.9 0 0 0 .4.6l.8.6 1.3.4 1.4.5 1.3.7a3.9 3.9 0 0 1 .8 1 4.1 4.1 0 0 1 .3 1.6 3.3 3.3 0 0 1-.4 1.7 2.6 2.6 0 0 1-1 1.1 4.6 4.6 0 0 1-1.4.7l-1.7.2h-1.1a1.9 1.9 0 0 1-1-.3l-1-.5a3 3 0 0 1-.8-.8l1.3-1.1a3.2 3.2 0 0 0 1.2 1.1 4 4 0 0 0 1.5.3h1l.9-.4.7-.7a2.6 2.6 0 0 0 0-2l-.6-.6-1-.5-1.5-.5-1.3-.5-1-.7a3.1 3.1 0 0 1-.7-.9 5.9 5.9 0 0 1-.2-1.4 2.9 2.9 0 0 1 .4-1.6 2.4 2.4 0 0 1 .9-1.1 3.7 3.7 0 0 1 1.4-.7 4.5 4.5 0 0 1 1.6-.3 5 5 0 0 1 3.6 1.5zM271.1 544.6a5.3 5.3 0 0 0-1.4-1.2 5.8 5.8 0 0 0-1.8-.4 4.1 4.1 0 0 0-1.9.5 5.7 5.7 0 0 0-1.6 1.1 9.5 9.5 0 0 0-1 1.7 6.9 6.9 0 0 0-.3 2 6.6 6.6 0 0 0 .3 2.1 9.5 9.5 0 0 0 1 1.7 4.6 4.6 0 0 0 1.6 1.1 3.8 3.8 0 0 0 1.9.4 4.6 4.6 0 0 0 2.1-.4 4.3 4.3 0 0 0 1.6-1.4l1.1 1a4.7 4.7 0 0 1-2 1.7 8.2 8.2 0 0 1-2.8.5 5.3 5.3 0 0 1-2.5-.5 6 6 0 0 1-2.1-1.4 6.6 6.6 0 0 1-1.9-4.8 7.5 7.5 0 0 1 .5-2.6 6 6 0 0 1 1.4-2.1 4.8 4.8 0 0 1 2-1.4 5.8 5.8 0 0 1 2.6-.6 7 7 0 0 1 2.5.5 4.3 4.3 0 0 1 2 1.5zM276.7 542h5.1a4.2 4.2 0 0 1 1.6.4 3.2 3.2 0 0 1 1.2 1.1 3.4 3.4 0 0 1 .4 1.9 3.1 3.1 0 0 1-.8 2.2 3.8 3.8 0 0 1-2.4 1.1l3.6 5.9h-1.8l-3.5-5.7h-1.9v5.7h-1.5zm1.5 5.6h2.6l1.3-.2a1.5 1.5 0 0 0 .9-.6 2.1 2.1 0 0 0 .1-2.3 2.3 2.3 0 0 0-.7-.7l-1-.3h-3.2zM289.7 542h1.5v12.7h-1.5zM296.4 542h5.4a3.9 3.9 0 0 1 1.5.6 3.6 3.6 0 0 1 1 1.1 3.8 3.8 0 0 1 .3 1.6 3.4 3.4 0 0 1-.4 1.8 3.5 3.5 0 0 1-1 1.1l-1.4.5-1.4.2h-2.5v5.7h-1.5zm1.5 5.6h2.5a3.6 3.6 0 0 0 1.9-.5 1.9 1.9 0 0 0 .7-1.6 1.7 1.7 0 0 0-.7-1.6 2.9 2.9 0 0 0-1.9-.5h-2.5zM317.7 543.4h-4.2v11.3H312v-11.3h-4.2V542h9.9zM332.8 542h1.4l5.4 12.7h-1.8l-1.3-3.1h-6.3l-1.3 3.1h-1.8zm.6 1.9l-2.6 6.3h5.2zM343.3 542h1.9l7.4 10.5V542h1.6v12.7h-1.9l-7.4-10.6h-.1v10.6h-1.5zM359.3 542h6.2a3.9 3.9 0 0 1 1.4.5 4.6 4.6 0 0 1 1.3.8 4.3 4.3 0 0 1 1.1 1.2 4.8 4.8 0 0 1 .8 1.6 7.5 7.5 0 0 1 0 4.2 5.3 5.3 0 0 1-.8 1.7l-1.1 1.2-1.3.8-1.4.5h-6.2zm1.5 11.3h2.9a6.4 6.4 0 0 0 2-.3 4.4 4.4 0 0 0 2.7-2.4 5.3 5.3 0 0 0 .4-2.3 5.1 5.1 0 0 0-.4-2.2 4.6 4.6 0 0 0-1.1-1.6 4.2 4.2 0 0 0-1.6-.9l-2-.2h-2.9zM387.5 551.4a5.9 5.9 0 0 1-.2 1.3 3.4 3.4 0 0 1-.6 1.2l-1.1.8a4.7 4.7 0 0 1-1.7.3 3.5 3.5 0 0 1-2.3-.7 3.1 3.1 0 0 1-1.2-2l1.6-.3a2.3 2.3 0 0 0 .6 1.2 1.7 1.7 0 0 0 1.3.4l1-.2.7-.6.3-.9c0-.3.1-.7.1-1V542h1.5zM405.9 554.7h-7.4a7.5 7.5 0 0 1-2.6-.5 6 6 0 0 1-2.1-1.4 7.7 7.7 0 0 1-1.4-2.1 6.6 6.6 0 0 1-.5-2.5 7.1 7.1 0 0 1 .5-2.6 6.4 6.4 0 0 1 3.5-3.5 7 7 0 0 1 5.2 0 7.7 7.7 0 0 1 2.1 1.4 7.4 7.4 0 0 1 1.3 2.1 5.5 5.5 0 0 1 .5 2.6 6.3 6.3 0 0 1-.8 3.1l-1 1.2a3 3 0 0 1-1.3.9h4zm-12.3-6.5a6.4 6.4 0 0 0 .3 2 5.7 5.7 0 0 0 1.1 1.6 4.2 4.2 0 0 0 1.5 1.1 4.5 4.5 0 0 0 2 .4 4.1 4.1 0 0 0 1.9-.4 3.8 3.8 0 0 0 1.6-1.1 3.9 3.9 0 0 0 1-1.6 4.5 4.5 0 0 0 .4-2 6.4 6.4 0 0 0-.3-2 5 5 0 0 0-1.1-1.7 5.8 5.8 0 0 0-1.5-1.1 5.2 5.2 0 0 0-4 0 5.8 5.8 0 0 0-1.5 1.1 5 5 0 0 0-1.1 1.7 6.4 6.4 0 0 0-.3 2zM419.2 549.8a6.4 6.4 0 0 1-.3 2 3.8 3.8 0 0 1-.8 1.7 5.8 5.8 0 0 1-1.5 1.1 6.3 6.3 0 0 1-4.4 0 3.7 3.7 0 0 1-1.5-1.1 5.6 5.6 0 0 1-.9-1.7 12.3 12.3 0 0 1-.2-2V542h1.5v7.6a3.9 3.9 0 0 0 .2 1.5 2.9 2.9 0 0 0 .5 1.3 2.2 2.2 0 0 0 1 .9 4.4 4.4 0 0 0 3.2 0 2.8 2.8 0 0 0 1-.9 5 5 0 0 0 .5-1.3 7.7 7.7 0 0 0 .2-1.5V542h1.5zM424.3 542h8.1v1.4h-6.5v4h6v1.4h-6v4.5h6.8v1.4h-8.4zM436.8 542h5.1a3.8 3.8 0 0 1 1.6.4 3.2 3.2 0 0 1 1.2 1.1 3.3 3.3 0 0 1 .5 1.9 2.8 2.8 0 0 1-.9 2.2 3.6 3.6 0 0 1-2.3 1.1l3.6 5.9h-1.9l-3.4-5.7h-2v5.7h-1.5zm1.5 5.6h2.7l1.2-.2a2.1 2.1 0 0 0 1-.6 2.1 2.1 0 0 0 .3-1.2 2.7 2.7 0 0 0-.2-1.1 4.6 4.6 0 0 0-.7-.7l-1-.3h-3.3zM452.6 549.2l-4.7-7.2h1.9l3.6 5.7 3.6-5.7h1.9l-4.8 7.2v5.5h-1.5zM469.4 542h5.5l1.3.5a4.7 4.7 0 0 1 1 1 3.3 3.3 0 0 1 .4 1.5 2.9 2.9 0 0 1-.7 1.8 3.1 3.1 0 0 1-1.6 1.1 2.7 2.7 0 0 1 1.2.3l.9.7.6 1a3.6 3.6 0 0 1 .2 1.1 3.4 3.4 0 0 1-.4 1.8 4.3 4.3 0 0 1-1.2 1.1l-1.6.5-1.8.2h-3.8zm1.5 5.4h3.2l.9-.3.7-.6a3.6 3.6 0 0 0 .2-1.1 1.6 1.6 0 0 0-.2-1l-.6-.6-.9-.3h-3.3zm0 5.9h3.7l1-.4a2.3 2.3 0 0 0 .7-.7 1.7 1.7 0 0 0 .3-1 1.8 1.8 0 0 0-.3-1.1 2.7 2.7 0 0 0-.7-.8 2.4 2.4 0 0 0-.9-.3h-3.8zM485.3 549.2l-4.7-7.2h1.9l3.6 5.7 3.6-5.7h1.9l-4.8 7.2v5.5h-1.5zM507.6 551.4a5.7 5.7 0 0 1-.1 1.3 7.5 7.5 0 0 1-.7 1.2 2.4 2.4 0 0 1-1.1.8 4 4 0 0 1-1.7.3 3.2 3.2 0 0 1-2.2-.7 3.1 3.1 0 0 1-1.2-2l1.5-.3a2.3 2.3 0 0 0 .6 1.2 2 2 0 0 0 1.3.4l1.1-.2a1.7 1.7 0 0 0 .6-.6 1.6 1.6 0 0 0 .3-.9 3.4 3.4 0 0 0 .1-1V542h1.5zM518.8 555a6.5 6.5 0 0 1-6.2-4 7.6 7.6 0 0 1-.5-2.7 7.5 7.5 0 0 1 .5-2.6 5.5 5.5 0 0 1 1.4-2.2 6.6 6.6 0 0 1 4.8-1.9 7.5 7.5 0 0 1 2.6.5 7.7 7.7 0 0 1 2.1 1.4 5.5 5.5 0 0 1 1.4 2.2 5.8 5.8 0 0 1 .5 2.6 6.5 6.5 0 0 1-4 6.2 5.8 5.8 0 0 1-2.6.5zm0-1.4a4.5 4.5 0 0 0 2-.4 5.7 5.7 0 0 0 1.6-1.1 5.9 5.9 0 0 0 1-1.7 4.9 4.9 0 0 0 .4-2.1 4.5 4.5 0 0 0-.4-2 4.8 4.8 0 0 0-1-1.7 4.2 4.2 0 0 0-1.6-1.1 4.6 4.6 0 0 0-2-.5 4.6 4.6 0 0 0-2.1.5 4.2 4.2 0 0 0-1.6 1.1 4.8 4.8 0 0 0-1 1.7 4.5 4.5 0 0 0-.4 2 4.9 4.9 0 0 0 .4 2.1 5.9 5.9 0 0 0 1 1.7 5.7 5.7 0 0 0 1.6 1.1 4.6 4.6 0 0 0 2.1.4zM529.9 542h1.9l7.4 10.5V542h1.5v12.7h-1.9l-7.3-10.6h-.1v10.6h-1.5zM552.8 542h6.3a3.5 3.5 0 0 1 1.3.5 3.9 3.9 0 0 1 1.4.8 4.3 4.3 0 0 1 1.1 1.2 8 8 0 0 1 .8 1.6 7.5 7.5 0 0 1 0 4.2 8.9 8.9 0 0 1-.8 1.7l-1.1 1.2-1.4.8-1.3.5h-6.3zm1.5 11.3h2.9a6.4 6.4 0 0 0 2-.3 4.6 4.6 0 0 0 1.7-.9 4 4 0 0 0 1-1.5 5.3 5.3 0 0 0 .4-2.3 5.1 5.1 0 0 0-.4-2.2 4.4 4.4 0 0 0-1-1.6 4.6 4.6 0 0 0-1.7-.9l-2-.2h-2.9zM578 549.8a6.4 6.4 0 0 1-.3 2 8.9 8.9 0 0 1-.8 1.7 5.8 5.8 0 0 1-1.5 1.1 5.1 5.1 0 0 1-2.2.4 5.3 5.3 0 0 1-2.3-.4 5.8 5.8 0 0 1-1.5-1.1 8.9 8.9 0 0 1-.8-1.7 6.4 6.4 0 0 1-.3-2V542h1.6v7.6a7.6 7.6 0 0 0 .1 1.5 3.1 3.1 0 0 0 .6 1.3 1.8 1.8 0 0 0 1 .9 3.5 3.5 0 0 0 1.6.3 3.3 3.3 0 0 0 1.5-.3 1.8 1.8 0 0 0 1-.9 3.1 3.1 0 0 0 .6-1.3 7.6 7.6 0 0 0 .1-1.5V542h1.6zM592 544.6a5.3 5.3 0 0 0-1.4-1.2 5.8 5.8 0 0 0-1.8-.4 4.1 4.1 0 0 0-1.9.5 5.7 5.7 0 0 0-1.6 1.1 9.5 9.5 0 0 0-1 1.7 6.9 6.9 0 0 0-.3 2 6.6 6.6 0 0 0 .3 2.1 9.5 9.5 0 0 0 1 1.7 5.3 5.3 0 0 0 1.5 1.1 4.5 4.5 0 0 0 2 .4 4.6 4.6 0 0 0 2.1-.4 5.2 5.2 0 0 0 1.6-1.4l1.1 1a4.7 4.7 0 0 1-2 1.7 8.2 8.2 0 0 1-2.8.5 5.3 5.3 0 0 1-2.5-.5 6 6 0 0 1-2.1-1.4 6.6 6.6 0 0 1-1.9-4.8 7.5 7.5 0 0 1 .5-2.6 6 6 0 0 1 1.4-2.1 4.8 4.8 0 0 1 2-1.4 5.8 5.8 0 0 1 2.6-.6 7 7 0 0 1 2.5.5 4.3 4.3 0 0 1 2 1.5zM597.6 542h1.5v5.5h.2l5.8-5.5h2.2l-6.3 5.8 6.6 6.9h-2.2l-6.1-6.5h-.2v6.5h-1.5zM611.1 542h8v1.4h-6.5v4h6.1v1.4h-6.1v4.5h6.9v1.4h-8.4zM632.6 543.4h-4.2v11.3h-1.5v-11.3h-4.3V542h10zM645.6 543.4h-4.2v11.3h-1.5v-11.3h-4.2V542h9.9z"}})])])
            }, staticRenderFns: []
        }, p = {
            components: {AppAnatomyDiagram: s("VU/8")(null, r, !1, null, null, null).exports}, data: function () {
                return {show: !1}
            }
        }, b = {
            render: function () {
                var e = this, n = e.$createElement, s = e._self._c || n;
                return s("div", {staticClass: "more-info-contain"}, [s("svg", {
                    attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 6.827 6.827",
                        width: "60",
                        height: "60",
                        "aria-labelledby": "skeletonicon",
                        role: "presentation"
                    }, on: {
                        mouseenter: function (n) {
                            e.show = !e.show
                        }, mouseleave: function (n) {
                            e.show = !e.show
                        }
                    }
                }, [s("title", {
                    attrs: {
                        id: "skeletonicon",
                        lang: "en"
                    }
                }, [e._v("skeleton icon")]), e._v(" "), s("g", {staticClass: "skeleton"}, [s("rect", {
                    attrs: {
                        x: "0",
                        y: "0",
                        width: "6.8",
                        height: "6.8",
                        fill: "rgba(255, 255, 255, 0)"
                    }
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M.907.853h5.066v5.12H.853V.853h.054zm4.96.107H.96v4.907h4.907V.96z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.5 1.723v1.806h-.106V1.723z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.398 1.722c.026-.083.122-.13.256-.14a1.199 1.199 0 0 1 .49.082l.032.012.002.035a.74.74 0 0 0 .06.227 4.633 4.633 0 0 0 .11.224l.039.076-.086.002a1.055 1.055 0 0 1-.187-.014 1.439 1.439 0 0 1-.2-.048 1.2 1.2 0 0 1-.386-.195c-.104-.085-.156-.178-.13-.26zm.263-.033c-.089.006-.15.028-.161.065-.012.037.025.09.095.146.082.067.205.13.35.176a1.333 1.333 0 0 0 .267.055l-.003-.006c-.02-.04-.043-.09-.068-.144a.847.847 0 0 1-.065-.228 1.092 1.092 0 0 0-.414-.065zM3.401 2.592a.197.197 0 0 1 .114-.118.544.544 0 0 1 .198-.041l.03.006a1.359 1.359 0 0 0 .29.125c.08.026.16.044.234.055.076.012.147.016.209.013l.029.007c.1.057.18.12.23.183.056.07.078.142.058.207-.03.093-.14.147-.293.158a1.401 1.401 0 0 1-.499-.071 1.402 1.402 0 0 1-.45-.228c-.12-.096-.18-.203-.15-.296zm.158-.02c-.03.013-.05.03-.056.051-.015.048.03.114.115.183.097.079.243.154.415.208.171.054.335.076.46.067.109-.008.183-.036.198-.084.01-.029-.006-.066-.039-.108a.694.694 0 0 0-.187-.15 1.198 1.198 0 0 1-.214-.014 1.672 1.672 0 0 1-.548-.185.419.419 0 0 0-.144.031z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.443 2.837a.164.164 0 0 1 .03-.042.19.19 0 0 1 .041-.032l.035-.02.029.028a.875.875 0 0 0 .191.134 1.525 1.525 0 0 0 .53.169.93.93 0 0 0 .229.003l.024-.003.018.016a.711.711 0 0 1 .165.2c.037.07.044.137.016.194-.044.088-.16.124-.314.111a1.402 1.402 0 0 1-.482-.148 1.401 1.401 0 0 1-.41-.294c-.103-.114-.145-.229-.102-.316zm.098.043a.047.047 0 0 0-.002.004c-.022.044.012.117.085.198.084.093.217.19.378.27.161.08.319.126.444.137.109.009.187-.008.21-.052.011-.024.005-.059-.016-.1a.576.576 0 0 0-.124-.151 1.071 1.071 0 0 1-.23-.006 1.645 1.645 0 0 1-.567-.182 1.064 1.064 0 0 1-.178-.118z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.427 3.311c.024-.048.07-.08.134-.094a.556.556 0 0 1 .205-.001l.023.01a1.473 1.473 0 0 0 .213.126c.061.03.122.056.181.077.06.02.119.037.173.047l.023.01a.784.784 0 0 1 .194.203c.045.074.057.145.028.204-.04.08-.146.113-.285.102a1.254 1.254 0 0 1-.431-.132 1.253 1.253 0 0 1-.367-.264c-.093-.103-.13-.208-.091-.288zm.158.01c-.032.007-.054.02-.063.037-.018.038.012.1.075.17.074.082.192.168.335.24.143.07.282.111.393.12.094.008.162-.005.18-.042.012-.024.003-.06-.023-.102a.664.664 0 0 0-.158-.166 1.705 1.705 0 0 1-.586-.259.437.437 0 0 0-.153.002zM3.39 1.754c-.012-.037-.073-.06-.162-.065a1.091 1.091 0 0 0-.387.055.842.842 0 0 1-.067.236 4.784 4.784 0 0 1-.068.145l-.001.003a1.16 1.16 0 0 0 .24-.052c.145-.046.268-.11.35-.176.069-.056.106-.11.095-.146zm-.155-.172c.134.01.23.057.256.14.026.083-.025.176-.13.26a1.2 1.2 0 0 1-.385.196 1.45 1.45 0 0 1-.185.045c-.061.01-.12.016-.175.017l-.089.001.041-.079a4.257 4.257 0 0 0 .109-.225.736.736 0 0 0 .05-.154.508.508 0 0 0 .01-.08l.002-.037.035-.012a1.455 1.455 0 0 1 .034-.011c.158-.05.31-.07.427-.06z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.386 2.173c-.006-.02-.025-.037-.054-.051a.406.406 0 0 0-.14-.032 1.325 1.325 0 0 1-.216.088c-.086.027-.17.045-.247.054a.896.896 0 0 1-.205.004.92.92 0 0 0-.263.176c-.05.052-.074.1-.063.135.015.048.09.076.199.084.125.009.288-.013.46-.067.171-.054.317-.13.415-.208.084-.069.13-.135.114-.183zm-.009-.147a.196.196 0 0 1 .111.116c.03.093-.03.2-.15.296-.107.087-.265.17-.45.228-.184.058-.361.08-.499.071-.153-.01-.263-.065-.292-.158-.024-.076.01-.16.087-.24.07-.073.178-.145.309-.206l.03-.004c.053.007.12.007.193-.002a1.295 1.295 0 0 0 .44-.138l.028-.006a.53.53 0 0 1 .193.043z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.386 2.623c-.006-.02-.026-.038-.056-.052a.419.419 0 0 0-.144-.031 1.482 1.482 0 0 1-.298.126c-.086.027-.17.047-.25.059a1.198 1.198 0 0 1-.214.014.694.694 0 0 0-.187.15c-.033.042-.048.08-.039.108.015.048.09.076.199.084.125.009.288-.013.46-.067.171-.054.317-.13.415-.208.084-.069.13-.135.114-.183zm-.012-.149a.197.197 0 0 1 .114.118c.03.093-.03.2-.15.296-.107.087-.265.17-.45.228-.184.058-.361.08-.499.071-.153-.01-.263-.065-.292-.158-.021-.065.001-.137.057-.207a.817.817 0 0 1 .23-.183l.03-.007c.061.003.132-.001.209-.013a1.566 1.566 0 0 0 .524-.18l.03-.006a.544.544 0 0 1 .197.041z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.35 2.884a.047.047 0 0 0-.002-.004c-.048.041-.109.081-.177.118a1.634 1.634 0 0 1-.569.182c-.083.01-.161.012-.23.006a.576.576 0 0 0-.123.152c-.02.04-.027.075-.015.099.022.044.1.06.21.052.124-.01.282-.057.443-.137.162-.08.294-.177.378-.27.073-.081.108-.154.085-.198zm.066-.09a.164.164 0 0 1 .03.043c.043.087.001.202-.102.316a1.401 1.401 0 0 1-.41.294 1.402 1.402 0 0 1-.482.148c-.153.013-.27-.023-.313-.11-.028-.058-.021-.125.015-.196a.711.711 0 0 1 .166-.199l.018-.016.023.003a.93.93 0 0 0 .229-.003 1.537 1.537 0 0 0 .53-.17.875.875 0 0 0 .191-.133l.03-.028.034.02a.19.19 0 0 1 .04.032h.001z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.367 3.358c-.009-.017-.03-.03-.063-.037a.437.437 0 0 0-.153-.002 1.589 1.589 0 0 1-.217.128 1.705 1.705 0 0 1-.368.131.664.664 0 0 0-.159.166c-.026.042-.035.078-.023.102.018.037.086.05.18.042.111-.009.25-.05.394-.12.142-.072.26-.158.334-.24.064-.07.094-.132.075-.17zm-.038-.141c.063.015.11.046.133.094.04.08.002.185-.091.288a1.253 1.253 0 0 1-.366.264 1.254 1.254 0 0 1-.432.132c-.139.011-.245-.022-.284-.102-.03-.06-.018-.13.027-.204a.784.784 0 0 1 .195-.203l.022-.01a1.24 1.24 0 0 0 .173-.047 1.599 1.599 0 0 0 .394-.204l.023-.01a.556.556 0 0 1 .206.002zM2.39 2.111l-.01-.01-.014-.027-.01-.057c-.019-.036-.11-.21-.193-.255-.146-.079-.068-.322-.067-.323l.01-.018s.125-.156.326-.083c.083.03.163.06.226.092.072.036.125.077.146.129.034.083.037.137.037.137v.003s0 .114-.066.26c-.03.068-.059.127-.08.17a.84.84 0 0 1-.121.004c.017-.034.059-.116.104-.217a.582.582 0 0 0 .056-.216.377.377 0 0 0-.028-.101c-.01-.024-.046-.048-.096-.074a2.128 2.128 0 0 0-.215-.087.186.186 0 0 0-.201.044c-.01.037-.037.155.02.186.122.066.24.307.24.308l.004.014.01.05.084.09-.003.002a.515.515 0 0 1-.027-.003l-.03.004-.058.03a1.51 1.51 0 0 0-.047-.05l.002-.002zM4.526 2.111l.01-.01.013-.027.011-.057c.018-.036.11-.21.192-.255.146-.079.068-.322.068-.323l-.01-.018s-.126-.156-.326-.083a2.21 2.21 0 0 0-.227.092c-.072.036-.125.077-.146.129-.034.083-.036.137-.036.137v.003s0 .114.065.26c.03.069.06.13.082.173a.828.828 0 0 0 .077.002h.033l.015.028a.096.096 0 0 1 .007.013v.001a.12.12 0 0 0 .021.027c.012.01.032.019.058-.008l.028-.03.013.006.054-.057-.002-.003zm-.078-.071l-.084.09.002.002a1.25 1.25 0 0 0-.016.018 4.353 4.353 0 0 1-.113-.234.582.582 0 0 1-.056-.216c.001-.01.006-.045.029-.101.01-.024.045-.048.095-.074.058-.03.134-.058.215-.087.107-.04.18.022.201.044.01.037.038.155-.02.186-.121.066-.24.307-.24.308l-.004.014-.01.05z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M2.027 1.618l-.065-.007-.093.031-.028.002s-.136-.03-.094.07c.086.208-.032 1.194-.033 1.197l-.001.007s-.047.181-.11.308l-.005.009-.047.062-.001.016.011.023.009.005h.01l.041-.023.004-.002s.077-.036.145-.007a.148.148 0 0 0 .046.015c.003 0-.003 0-.003-.002.005-.013-.007-.07-.02-.13-.015-.075-.03-.155-.02-.206l.001-.036V2.95l.057-.839c-.001-.034-.007-.3.076-.388h.001s.034-.035.069-.049l.042-.018c.002-.001.011-.007.013-.032 0-.005-.003-.005-.003-.005h-.002zm-.066-.114l.074.008c.012 0 .112.012.103.12-.007.091-.076.12-.076.12s-.02.01-.046.02c-.012.005-.033.025-.033.025-.056.06-.046.312-.045.312v.006l-.058.84-.001.04-.002.012c-.007.027.007.098.021.165.015.073.03.143.017.183-.018.055-.054.074-.097.075a.223.223 0 0 1-.09-.023c-.022-.01-.05.002-.057.005l-.051.029-.027.006h-.04l-.026-.008-.034-.02-.02-.022-.024-.05-.006-.024.002-.047.01-.03.056-.072c.05-.106.09-.252.098-.279.006-.057.113-.964.04-1.14-.105-.255.137-.229.2-.218l.09-.03.022-.003zM1.829 3.59l-.076.008-.098.057-.027.007s-.175-.003-.096.112c.143.212.239 1.343.239 1.347v.007s-.01.213-.05.369l-.004.01-.04.083.004.022.02.026.014.005.017-.003.042-.037.003-.002s.075-.056.155-.04a.17.17 0 0 0 .059.006l.002-.008a.608.608 0 0 0-.053-.144.692.692 0 0 1-.07-.224l-.008-.042v-.002l-.13-.952c-.007-.03-.079-.332-.005-.448v-.002s.03-.045.064-.067l.044-.03c.002-.002.014-.013.01-.047-.002-.013-.014-.011-.015-.011H1.83zm-.099-.097l.086-.009c.005 0 .119-.016.134.104.013.1-.054.146-.054.146l-.047.032a.175.175 0 0 0-.033.039c-.051.084.02.366.02.366l.001.006.13.954.008.047.001.012c-.002.033.031.11.062.183.034.078.066.152.06.198-.006.062-.039.09-.084.1a.25.25 0 0 1-.103-.006c-.03-.006-.063.016-.07.02l-.05.045-.026.012-.044.009-.027-.002-.043-.015-.025-.018-.038-.05-.01-.023-.01-.052.005-.032.046-.094c.033-.132.044-.309.046-.338-.006-.06-.097-1.11-.221-1.293-.17-.251.1-.276.17-.278l.095-.056.021-.007zM4.86 1.512l.075-.008.022.003.09.03c.063-.01.305-.037.2.217-.073.177.033 1.084.04 1.141.007.027.047.173.098.28l.055.07.01.031.003.047-.006.025-.024.049-.02.022-.034.02-.026.008h-.04l-.027-.006-.051-.03c-.006-.002-.036-.013-.058-.004a.223.223 0 0 1-.09.023c-.043 0-.078-.02-.096-.075-.013-.04.002-.11.017-.183.013-.067.028-.138.02-.165l-.001-.012-.001-.04-.058-.84V2.11s.011-.251-.046-.312c0 0-.02-.02-.032-.025-.026-.01-.046-.02-.046-.02s-.07-.029-.077-.12c-.008-.108.091-.12.103-.12zm.074.1l-.065.006h-.002s-.004 0-.003.005c.001.025.01.03.012.032l.043.018c.034.014.069.048.069.049.084.087.078.354.077.388l.057.839v.001l.001.036c.01.051-.006.131-.021.207-.012.06-.024.116-.02.13H5.08c.01.001.028-.006.046-.014.069-.03.145.006.146.007l.004.002.04.023h.011l.009-.005.01-.023v-.016l-.047-.062-.006-.009a1.985 1.985 0 0 1-.109-.308l-.001-.007c0-.003-.12-.989-.033-1.197.041-.1-.094-.07-.094-.07l-.028-.002-.093-.03zM5.08 3.484l.085.01.021.006.096.056c.07.002.34.027.17.278-.124.183-.216 1.233-.22 1.293.001.03.012.206.045.338l.045.094.005.032-.009.052-.01.024-.039.049-.024.018-.043.015-.027.002-.044-.009-.026-.012-.05-.044c-.007-.005-.04-.027-.07-.02a.25.25 0 0 1-.103.005c-.045-.01-.078-.038-.085-.1-.005-.046.027-.12.06-.198a.646.646 0 0 0 .063-.183v-.012l.008-.047.13-.954.002-.006s.07-.282.02-.366c0 0-.02-.03-.033-.039C4.999 3.736 5 3.735 5 3.735c0 0-.067-.047-.054-.147.015-.12.129-.104.134-.104zm.063.114l-.076-.008h-.002s-.012-.002-.014.011c-.004.034.008.045.01.046l.044.03c.034.023.064.068.064.068v.002c.073.116.002.419-.005.448l-.13.952v.002l-.008.042a.692.692 0 0 1-.07.224.608.608 0 0 0-.053.144c0 .006.001.008.002.008a.17.17 0 0 0 .058-.006c.08-.016.155.04.156.04l.003.002.042.037.016.003.015-.005.02-.026.004-.022-.04-.083-.003-.01c-.04-.156-.051-.369-.051-.37v-.006c0-.004.096-1.135.24-1.347.077-.115-.096-.112-.097-.112l-.027-.007-.098-.057zM2.477 5.218c0-.001-.175-.254-.207-.306a.657.657 0 0 1-.084-.214.372.372 0 0 1 .101-.345c.098-.098.204-.194.317-.243a.337.337 0 0 1 .377.052c.22.182.336.305.336.305l.008.01c0 .001.093.172.28-.013.243-.24.424-.346.424-.347l.009-.004s.38-.148.484.116c.082.208.208.378.208.378l.007.013s.082.209-.174.444a6.92 6.92 0 0 0-.313.3l-.083.288-.002.006s-.077.194-.19.205a1.065 1.065 0 0 1-.195-.002 5.933 5.933 0 0 1-.184-.091.973.973 0 0 0-.114-.035.33.33 0 0 0-.174.044c-.09.052-.162.08-.162.08l-.022.004-.184-.01-.026-.008s-.155-.097-.16-.194a1.138 1.138 0 0 0-.085-.233s-.054-.102-.097-.125a.28.28 0 0 1-.095-.075zm-.115-.36c.031.051.202.299.203.3a.179.179 0 0 0 .057.041c.072.039.14.168.141.169l.001.002s.09.195.096.274c.002.034.072.085.1.104l.157.008c.022-.01.074-.033.138-.07a.432.432 0 0 1 .231-.057c.035.001.147.041.148.042l.006.003.17.085c.003 0 .028.002.065.002a.97.97 0 0 0 .09-.004c.044-.004.092-.116.1-.136l.086-.298.012-.022s.096-.103.328-.316c.18-.164.156-.294.148-.322-.025-.035-.14-.2-.216-.395-.06-.153-.308-.07-.343-.057a2.399 2.399 0 0 0-.4.328c-.263.26-.419.038-.444-.003a4.277 4.277 0 0 0-.323-.292.238.238 0 0 0-.267-.036c-.097.042-.194.13-.283.22a.27.27 0 0 0-.072.251.552.552 0 0 0 .07.178z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.381 5.118l-.238-.247-.042-.018c-.026.007-.08.026-.076.072.002.03 0 .051-.001.071-.004.045-.007.075.14.214.033.017.188.088.306.077h.015c.12.012.278-.06.311-.077.147-.139.145-.169.14-.214a.361.361 0 0 1 0-.07c.004-.047-.05-.066-.077-.073l-.042.018-.236.244a.053.053 0 0 1-.028.018c-.016-.005-.156.001-.172-.015zm.367-.329c-.003-.006.08-.037.086-.04-.002-.005.03-.004.035-.002.032.006.185.045.172.188-.002.02 0 .037.001.052.007.077.012.127-.179.306.001.001-.013.01-.014.01-.023.012-.215.104-.37.09-.163.015-.368-.09-.37-.091l-.015-.012c-.188-.177-.183-.227-.176-.303a.274.274 0 0 0 0-.052c-.014-.157.173-.188.18-.19-.002-.004.028.004.032.006l.064.026c.002-.002.019.012.021.015.316.328.216.326.533-.003zM3.242 5.632l-.102.076-.03.022-.03-.02-.16-.106-.042-.028.024-.043.04-.07.005-.006s.053-.07.147-.01c.053.034.146.098.147.098l.061.043-.06.044zM3.107 5.6l.012-.009a3.963 3.963 0 0 0-.082-.054c-.007-.004-.008-.009-.007-.012l-.01.017.087.058zM3.26.957a.053.053 0 0 0 0 .107h.32c.017.014.043.05-.006.11h-.286a.053.053 0 0 0 0 .106h.309a.053.053 0 0 0 .038-.016c.174-.176.017-.282-.009-.298a.053.053 0 0 0-.03-.009h-.335zM3.29 3.582a.053.053 0 0 0 0 .107h.32c.016.014.042.05-.007.11h-.286a.053.053 0 0 0 0 .106h.309a.053.053 0 0 0 .038-.016c.174-.176.017-.283-.009-.298a.053.053 0 0 0-.029-.009H3.29z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.295 3.798a.053.053 0 0 0 0 .107h.32c.016.014.042.05-.007.109h-.286a.053.053 0 0 0 0 .107h.309a.053.053 0 0 0 .038-.016c.174-.177.017-.283-.009-.298a.053.053 0 0 0-.029-.009h-.336zM3.286 1.173a.053.053 0 0 0 0 .107h.239c.008.009.016.028-.006.058h-.212a.053.053 0 0 0 0 .106h.235a.053.053 0 0 0 .039-.015c.14-.142.019-.23-.007-.246a.053.053 0 0 0-.031-.01h-.257z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.344 4.014a.053.053 0 0 0 0 .107h.239c.008.009.016.028-.006.058h-.212a.053.053 0 0 0 0 .106H3.6s.036-.013.038-.015c0-.002.154-.145-.007-.246a.053.053 0 0 0-.03-.01h-.257z"}
                }), e._v(" "), s("path", {
                    staticClass: "fil0",
                    attrs: {d: "M3.339 4.177a.053.053 0 0 0 0 .107h.201c.007.01.012.028-.006.058h-.177a.053.053 0 0 0 0 .107h.204c.015 0 .03-.007.04-.02.116-.135.019-.22-.006-.24a.053.053 0 0 0-.034-.012h-.222zM3.447 1.397a.19.19 0 0 1 .168.277l-.01.021-.023.006a.194.194 0 0 0-.056.023.067.067 0 0 0-.024.023l-.014.027-.03.002h-.011a.282.282 0 0 1-.018 0L3.4 1.771l-.013-.025a.066.066 0 0 0-.022-.022.186.186 0 0 0-.053-.023l-.021-.006-.011-.02a.19.19 0 0 1 .167-.28zm.059.13a.083.083 0 0 0-.142.06c0 .007 0 .013.002.02a.266.266 0 0 1 .079.045.275.275 0 0 1 .083-.046.085.085 0 0 0-.022-.078zM3.673 5.595l.103.076.03.022.03-.02.16-.107.042-.027-.025-.043-.04-.07-.004-.007s-.053-.069-.147-.009c-.053.033-.147.098-.147.098l-.062.042.06.045zm.136-.032l-.012-.009.082-.054c.007-.004.008-.01.007-.012l.01.017-.087.058zM3.503 2.175c.006-.02.025-.037.055-.051a.406.406 0 0 1 .14-.032 1.325 1.325 0 0 0 .215.087c.086.028.17.046.248.055.075.01.144.01.204.004a.92.92 0 0 1 .263.176c.05.052.074.1.063.135-.015.047-.09.076-.198.084a1.294 1.294 0 0 1-.46-.067 1.293 1.293 0 0 1-.415-.208c-.085-.07-.13-.135-.115-.183zm.01-.147a.196.196 0 0 0-.112.115c-.029.094.03.2.15.297.107.087.266.17.45.228.185.058.362.08.5.07.153-.01.263-.064.292-.157.024-.076-.01-.16-.088-.24a1.045 1.045 0 0 0-.308-.206l-.03-.005a.767.767 0 0 1-.193-.002 1.295 1.295 0 0 1-.441-.137l-.028-.006a.53.53 0 0 0-.193.043z"}
                }), e._v(" "), s("path", {
                    attrs: {
                        fill: "none",
                        d: "M0 0h6.827v6.827H0z"
                    }
                })])]), e._v(" "), s("transition", {attrs: {name: "appear"}}, [e.show ? s("div", {staticClass: "findoutmore"}, [s("app-anatomy-diagram")], 1) : e._e()])], 1)
            }, staticRenderFns: []
        };
        var i = s("VU/8")(p, b, !1, function (e) {
                s("navW")
            }, "data-v-d5bb48e2", null).exports, c = s("Dd8w"), l = s.n(c), d = s("vdRI"),
            u = (s("NYxO"), {name: "method-base", props: {urlPath: {type: String, default: "length"}}}), h = {
                render: function () {
                    var e = this.$createElement, n = this._self._c || e;
                    return n("div", [n("h2", [this._t("title")], 2), this._v(" "), n("p", {staticClass: "desc"}, [this._t("desc")], 2), this._v(" "), n("p", {staticClass: "link"}, [n("em", [n("a", {
                        attrs: {
                            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/" + this.urlPath,
                            target: "_blank"
                        }
                    }, [this._v(this._s(this.$t("docsLink", "See the docs")) + " →")])])])])
                }, staticRenderFns: []
            };
        var m = {
            components: {
                MethodBase: s("VU/8")(u, h, !1, function (e) {
                    s("BHfy")
                }, "data-v-7577fb80", null).exports
            },
            props: {methodType: {type: String, required: !1}, options: {type: Array, required: !0}},
            data: function () {
                return {selected: ""}
            },
            computed: {
                isSelected: function () {
                    return this.$store.state.selectedMethod
                }
            },
            watch: {
                selected: function () {
                    this.$store.commit("selectionMethod", this.selected)
                }
            }
        }, j = {
            render: function () {
                var e = this, n = e.$createElement, s = e._self._c || n;
                return s("div", [s("p", [s("label", {attrs: {for: "methodoptions"}}, [e._v(e._s(e.$t("methodOptions", "I need to")) + " " + e._s(e.methodType && e.$t("methodTypes." + e.methodType)))]), e._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selected,
                        expression: "selected"
                    }], attrs: {id: "methodoptions", name: "select"}, on: {
                        change: function (n) {
                            var s = Array.prototype.filter.call(n.target.options, function (e) {
                                return e.selected
                            }).map(function (e) {
                                return "_value" in e ? e._value : e.value
                            });
                            e.selected = n.target.multiple ? s : s[0]
                        }
                    }
                }, [s("option", {
                    attrs: {
                        value: "",
                        disabled: "",
                        selected: ""
                    }
                }, [e._v("...")]), e._v(" "), e._l(e.options, function (n) {
                    return s("option", {
                        key: n.desc,
                        domProps: {value: n}
                    }, [e._v("\n        " + e._s(n.shortDesc) + "\n      ")])
                })], 2)]), e._v(" "), s("method-base", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.isSelected,
                        expression: "isSelected"
                    }], attrs: {urlPath: e.selected.name}
                }, ["length" === e.selected.name ? s("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("Array." + e._s(e.selected.name))]) : s("span", {
                    attrs: {slot: "title"},
                    slot: "title"
                }, [e._v("Object." + e._s(e.selected.name) + "()")]), e._v(" "), s("span", {
                    attrs: {slot: "desc"},
                    domProps: {innerHTML: e._s(e.selected.desc)},
                    slot: "desc"
                })])], 1)
            }, staticRenderFns: []
        };
        var g = {
            components: {
                MethodChoice: s("VU/8")(m, j, !1, function (e) {
                    s("uzJs")
                }, null, null).exports
            }, data: function () {
                return {selectedFilter: "", selectInfoProperty: ""}
            }, computed: l()({}, function (e) {
                var n = {};
                return e.forEach(function (e) {
                    return n[e] = function (n) {
                        var s = n.$store.state.curLanguage;
                        return n.$store.state[s][e]
                    }
                }), n
            }(["createObj", "createProp", "infoObj", "infoProp", "noChange", "createString", "prototype"]), {
                options: function () {
                    return this.$t("primaryOptions")
                }
            }), watch: {
                selectedFilter: function () {
                    this.$store.commit("resetSelection")
                }, selectInfoProperty: function () {
                    this.$store.commit("resetSelection")
                }
            }
        }, v = {
            render: function () {
                var e = this, n = e.$createElement, s = e._self._c || n;
                return s("div", [s("label", {attrs: {for: "firstmethod"}}, [e._v(e._s(e.$t("firstMethod", "I have an object, I would like to")))]), e._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectedFilter,
                        expression: "selectedFilter"
                    }], attrs: {id: "firstmethod", name: "select"}, on: {
                        change: function (n) {
                            var s = Array.prototype.filter.call(n.target.options, function (e) {
                                return e.selected
                            }).map(function (e) {
                                return "_value" in e ? e._value : e.value
                            });
                            e.selectedFilter = n.target.multiple ? s : s[0]
                        }
                    }
                }, [s("option", {
                    attrs: {
                        value: "",
                        disabled: "",
                        selected: ""
                    }
                }, [e._v("...")]), e._v(" "), e._l(e.options, function (n) {
                    return s("option", {key: n.name, domProps: {value: n}}, [e._v("\n      " + e._s(n) + "\n    ")])
                })], 2), e._v(" "), e.selectedFilter === e.options[0] ? s("div", [s("method-choice", {attrs: {options: e.createObj}})], 1) : e.selectedFilter === e.options[1] ? s("div", [s("method-choice", {
                    attrs: {
                        options: e.createProp,
                        methodType: "create"
                    }
                })], 1) : e.selectedFilter === e.options[2] ? s("div", [s("method-choice", {
                    attrs: {
                        options: e.infoObj,
                        methodType: "determine"
                    }
                })], 1) : e.selectedFilter === e.options[3] ? s("div", [s("p", [s("label", {attrs: {for: "infoProperty"}}, [e._v(e._s(e.$t("infoPropMethod", "I need to get")))]), e._v(" "), s("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.selectInfoProperty,
                        expression: "selectInfoProperty"
                    }], attrs: {id: "infoProperty", name: "select"}, on: {
                        change: function (n) {
                            var s = Array.prototype.filter.call(n.target.options, function (e) {
                                return e.selected
                            }).map(function (e) {
                                return "_value" in e ? e._value : e.value
                            });
                            e.selectInfoProperty = n.target.multiple ? s : s[0]
                        }
                    }
                }, [s("option", {
                    attrs: {
                        value: "",
                        disabled: "",
                        selected: ""
                    }
                }, [e._v("...")]), e._v(" "), s("option", {attrs: {value: "details"}}, [e._v(e._s(e.$t("details", "details about the property")))]), e._v(" "), s("option", {attrs: {value: "list"}}, [e._v(e._s(e.$t("list", "a list of all of the keys and/or values")))])])]), e._v(" "), "details" === e.selectInfoProperty ? s("div", [s("method-choice", {
                    attrs: {
                        options: e.infoProp.details,
                        methodType: "find out"
                    }
                })], 1) : "list" === e.selectInfoProperty ? s("div", [s("method-choice", {
                    attrs: {
                        options: e.infoProp.list,
                        methodType: "get an array of all of the"
                    }
                })], 1) : e._e()]) : e.selectedFilter === e.options[4] ? s("div", [s("method-choice", {attrs: {options: e.noChange}})], 1) : e.selectedFilter === e.options[5] ? s("div", [s("method-choice", {
                    attrs: {
                        options: e.createString,
                        methodType: "return a"
                    }
                })], 1) : e.selectedFilter === e.options[6] ? s("div", [s("method-choice", {attrs: {options: e.prototype}})], 1) : e._e()])
            }, staticRenderFns: []
        };
        var f = s("VU/8")(g, v, !1, function (e) {
            s("oEiM")
        }, "data-v-00878d94", null).exports, y = {
            render: function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("div", [n("a", {
                    staticClass: "github-corner",
                    attrs: {href: "https://github.com/sdras/object-explorer", "aria-label": "View source on Github"}
                }, [n("svg", {
                    staticStyle: {
                        fill: "#FD6C6C",
                        color: "#fff",
                        position: "absolute",
                        top: "0",
                        border: "0",
                        right: "0"
                    }, attrs: {width: "80", height: "80", viewBox: "0 0 250 250", "aria-hidden": "true"}
                }, [n("path", {attrs: {d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}), n("path", {
                    staticClass: "octo-arm",
                    staticStyle: {"transform-origin": "130px 106px"},
                    attrs: {
                        d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
                        fill: "currentColor"
                    }
                }), n("path", {
                    staticClass: "octo-body",
                    attrs: {
                        d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
                        fill: "currentColor"
                    }
                })])])])
            }, staticRenderFns: []
        };
        var O = s("VU/8")(null, y, !1, function (e) {
            s("ot5U")
        }, "data-v-6ddd1c61", null).exports, k = s("+Uzz"), z = {
            methods: {
                typeOut: function () {
                    var e = new SplitText(this.$refs.ex, {type: "chars"}),
                        n = new SplitText(this.$refs.ex2, {type: "chars"}), s = new k.TimelineMax;
                    s.add("start"), s.to(this.$refs.ex, .1, {opacity: 1}), s.staggerFromTo(e.chars, .1, {
                        opacity: 0,
                        scale: 0,
                        color: "#aeded4",
                        transformOrigin: "50% 50%"
                    }, {
                        opacity: 1,
                        scale: 1,
                        color: "#fff",
                        transformOrigin: "50% 50%",
                        ease: k.Power4.easeOut
                    }, .03, "start+=0"), s.staggerTo(e.chars, .1, {
                        color: "#aeded4",
                        ease: k.Back.easeIn
                    }, .03, "start+=0.1"), s.to(this.$refs.ex2, .1, {opacity: 1}), s.staggerFromTo(n.chars, .1, {
                        opacity: 0,
                        scale: 0,
                        color: "#aeded4",
                        transformOrigin: "50% 50%"
                    }, {
                        opacity: 1,
                        scale: 1,
                        color: "#fff",
                        transformOrigin: "50% 50%",
                        ease: k.Power4.easeOut
                    }, .03, "start1+=0"), s.staggerTo(n.chars, .1, {
                        color: "#ecc2a4",
                        ease: k.Back.easeIn
                    }, .03, "start1+=0.1")
                }
            }, computed: {
                selectedUsage: function () {
                    return this.$store.state.selectedMethod
                }
            }, watch: {
                selectedUsage: function () {
                    var e = this;
                    this.selectedUsage && (TweenMax.set([this.$refs.ex, this.$refs.ex2], {opacity: 0}), setTimeout(function () {
                        e.typeOut()
                    }, 500))
                }
            }
        }, x = {
            render: function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("aside", [n("div", {staticClass: "usage-code usage1"}, [!this.selectedUsage || this.selectedUsage && "isPrototypeOf" !== this.selectedUsage.name ? n("p", [this._m(0)]) : this._e(), this._v(" "), n("p", [this.selectedUsage ? n("span", {
                    ref: "ex",
                    staticClass: "exampleoutput",
                    domProps: {innerHTML: this._s(this.selectedUsage.example)}
                }) : this._e()])]), this._v(" "), this.selectedUsage ? n("div", {staticClass: "usage2"}, [n("h3", {staticClass: "usage-title"}, [this._v("Output")]), this._v(" "), n("div", {staticClass: "usage-code"}, [n("p", [n("span", {
                    ref: "ex2",
                    staticClass: "exampleoutput2",
                    domProps: {innerHTML: this._s(this.selectedUsage.output)}
                })])])]) : this._e()])
            }, staticRenderFns: [function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("span", [this._v("let obj = {"), n("br"), this._v(" "), n("span", [this._v("  ")]), this._v("a: 1,"), n("br"), this._v(" "), n("span", [this._v("  ")]), this._v("b: 2,"), n("br"), this._v(" "), n("span", [this._v("  ")]), this._v("c: 3"), n("br"), this._v("\n      };")])
            }]
        };
        var D = {
            components: {
                AppLocaleSwitcher: a,
                AppObjectAnatomy: i,
                AppMethodPrimary: f,
                AppGithubCorner: O,
                AppCode: s("VU/8")(z, x, !1, function (e) {
                    s("GUao")
                }, null, null).exports
            }
        }, w = {
            render: function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("div", {attrs: {id: "app"}}, [n("app-github-corner"), this._v(" "), n("app-locale-switcher"), this._v(" "), n("main", [n("section", {staticClass: "a"}, [n("h1", [this._v("JavaScript Object Explorer")]), this._v(" "), this._m(0), this._v(" "), n("app-method-primary")], 1), this._v(" "), n("section", {staticClass: "b"}, [n("h3", {staticClass: "usage"}, [this._v("Usage")]), this._v(" "), n("app-code")], 1)]), this._v(" "), n("app-object-anatomy")], 1)
            }, staticRenderFns: [function () {
                var e = this.$createElement, n = this._self._c || e;
                return n("p", {staticClass: "subtitle"}, [n("em", [this._v("Find the object method you need without digging through the docs")])])
            }]
        };
        var P = s("VU/8")(D, w, !1, function (e) {
            s("gNJs")
        }, null, null).exports, M = s("P6sg");
        t.a.use(M.a), t.a.config.productionTip = !1, new t.a({
            el: "#app",
            store: d.store,
            template: "<App/>",
            components: {App: P}
        })
    }, "P/8C": function (e, n) {
        e.exports = {short: "pt-pt", long: "Português (Portugal)", createdBy: "SaraVieira"}
    }, "W+34": function (e, n) {
        e.exports = {short: "fr", long: "French", createdBy: "Ashugeo"}
    }, WYaq: function (e, n) {
        e.exports = {short: "bg", long: "Bulgarian", createdBy: "jumpalottahigh"}
    }, WbDD: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "създам нов обект",
                    desc: "Създава нов обект със зададения прототип и свойства.<br>\n          <br>\n          <strong>Важно за начинаещи!</strong> Създаването на обект по начина показан в началото на примера е по-често срещано - чрез присвояване към променлива.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "направя копие на обект",
                    desc: "Копира стойностите на всички изброени свойства на един или повече обекти към друг обект. Връща новия обект като стойност.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "ново свойство или да променя съществуващо",
                    desc: "Добавя свойство с даденото име, определено с подадените параметри.<br>\n          <br>\n          <strong>Важно за начинаещи!</strong> По-чесно се използват точка или квадратни скоби, когато се създава ново свойство или се променя съществуващо такова. Например: <code>obj.a = 1</code> или <code>obj[a] = 1</code>. Технически, това не е вграден метод и затова не е включен.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "едно или повече свойства или да променя съществуващи",
                    desc: "Добавя едно или повече свойства към обекта, определени от параметрите.<br>\n          <br>\n          <strong>Важно за начинаещи!</strong> По-чесно се използват точка или квадратни скоби, когато се създава ново свойство или се променя съществуващо такова. Например: <code>obj.a = 1</code> или <code>obj[a] = 1</code>. Технически, това не е вграден метод и затова не е включен.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "дали повече свойства могат да бъдат добавени",
                    desc: "Определя дали удължаването на обекта е разрешено.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "дали две референции водят към същия обект",
                    desc: "Проверява дали две референции водят към същия обект. Приравнява всички NaN стойности (което се отличава от Abstract Equality Comparison и Strict Equality Comparison). Това е малко странно и MDN документите са малко подвеждащи.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "дали обектът и свойствата му не могат да бъдат променяни",
                    desc: "Проверява дали обектът е замръзен.",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "дали обектът не може да бъде променян (свойствата могат)",
                    desc: "Определя дали обектът или свойствата му са запечатани.",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "дали обектът е в прототипната верига",
                    desc: "Връща булева стойност за това дали обектът е в прототипната верига.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "забраня добавяне или премахване на свойства",
                    desc: "Предпазва свойствата на обект да бъдат изтрити от друг код. Съществуващите свойства могат да бъдат променени.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "забраня добавяне, премахване или промяна на свойства",
                    desc: "Замръзява обекта: свойствата не могат да бъдат премахнати или променени.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "забраня добавяне на свойства",
                    desc: "Предпазва обекта от удължаване. Свойства могат да бъдат изтрити, но нови не могат да бъдат добавени.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "обекта представен като низ",
                    desc: "Методът <code>toString()</code> връща низ от предоставения обект.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "локализиран низ от предоставения обект",
                    desc: "Методът <code>toLocaleString()</code> връща низ от предоставения обект. Този метод е предоставен за работа с локализации и може да бъде презаписан от производни обекти. Това означава, че ако имате обект съдържащ разнични данни в зависимост от локацията, например методи за дати, те ще продоставят различен формат.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "детайли за свойство",
                        desc: "Връща описание на свойство от обекта за свойство с това име.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "детайли за всички свойства на обекта",
                        desc: "Връща обект съдържащ всички описания на собствени свойства на обект.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "дали свойство може да бъде обходено с for...in цикъл",
                        desc: "Връща булева стойност в зависимост дали вътрешния ECMAScript [[Enumerable]] атрибут е зададен. Това може да бъде използвано за проверка дали метод е зададен по подразбиране или е зададен от потребителя, защото зададените по подразбиране свойства обикновено не са Enumerable.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "дали свойство съществува като директно свойство на обекта",
                        desc: "Връща булева стойност в зависимост дали обекта съдържа определеното свойство като директно свойство на този обект, а не наследено чрез прототипната верига.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "ключове",
                        desc: "Връща масив съдържащ имената на всички ключове на обекта. Масива може да бъде обходен в последователността, в която ключовете биха били обходени.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "стойности",
                        desc: "Връща масив съдържащ имената на всички стойности на обекта. Масива може да бъде обходен в последователността, в която стойностите биха били обходени.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "ключове и стойности",
                        desc: "Връща масив от масиви от съдържащи всички двойки ключове и стойности на обекта. Масива може да бъде обходен в последователността, в която ключовете и стойностите биха били обходени.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "ключове дори и да не могат да бъдат обходени",
                        desc: "Връща масив съдържащ всички имена на свойства на обект без значение дали могат да бъдат обходени. Прави същото като <code>Object.keys()</code> връщайки ключовете на обекта, но <code>getOwnPropertyNames()</code> също съдържа свойства който не могат да бъдат обходени.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "получа прототип на обекта",
                    desc: "Връща прототипа на подадения обект (тоест, стойността на вътрешното <code>[[Prototype]]</code> свойство).",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "задам прототип на обекта",
                    desc: "Внимание: този метод е много бавен. Използвайте внимателно или заменете с <code>Object.create()</code>. Задава прототипа (тоест, стойността на вътрешното <code>[[Prototype]]</code> свойство).",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "разбера дали обекта е в прототипната верига",
                    desc: "Връща булева стойност в зависимост дали обекта е в прототипната верига на подадения в метода обект.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, YsDL: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "créer un nouvel objet",
                    desc: "Crée un nouvel objet avec un prototype et des propriétés spécifiques.<br>\n          <br>\n          <strong>Remarque importante pour les débutants !</strong> Il est plus courant de créer un objet de la façon donnée en exemple en haut, en l'assignant à une variable.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "faire une copie d'un objet",
                    desc: "Copie les valeurs de toutes les propriétés énumérables d'un ou plusieurs objet(s) vers un objet cible, qui sera retourné.",
                    example: "const copie = Object.assign({}, obj);<br>\n        console.log(copie);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "une nouvelle propriété ou modifier une propriété existante",
                    desc: "Ajoute une propriété à un objet ou modifie une propiété existante.<br>\n          <br>\n          <strong>Remarque importante pour les débutants !</strong> Il est plus courant d'utiliser les notations avec point ou crochets pour créer une nouvelle propriété ou modifier une propriété existante, comme ceci : <code>obj.a = 1</code> ou <code>obj[a] = 1</code>.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "une ou plusieurs propriétés ou modifier des propriétés existantes",
                    desc: "Ajoute une ou plusieurs propriétés à un objet ou modifie des propriétés existantes.<br>\n          <br>\n          <strong>Remarque importante pour les débutants !</strong> Il est plus courant d'utiliser les notations avec point ou crochets pour créer une nouvelle propriété ou modifier une propriété existante, comme ceci : <code>obj.a = 1</code> ou <code>obj[a] = 1</code>.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "si plus de propriétés peuvent être ajoutées",
                    desc: "Détermine si un objet est extensible (c'est-à-dire qu'on peut lui ajouter de nouvelles propriétés).",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "si deux références pointent vers le même objet",
                    desc: "Vérifie que deux références pointent vers le même objet. Diffère des comparaisons abstraite (Abstract Equality Comparison) et stricte (Strict Equality Comparison). Celle-ci est un peu bizarre, et la documentation MDN est trompeuse.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "si un objet et ses propriétés ne peuvent pas être modifiés",
                    desc: "Détermine si un objet est gelé, c'est-à-dire si qu'on empêche d'ajouter de nouvelles propriétés, de supprimer ou d'éditer des propriétés existantes.",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "si un objet ne peut pas être modifié (mais ses propriétés oui)",
                    desc: "Détermine si un objet ou ses propriétés sont scellés : on ne peut ni ajouter ni retirer de propriétés, mais on peut modifier des propriétés existantes.",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "si l'objet est dans la chaîne de prototype.",
                    desc: "Retourne un booléen indiquant si un objet fait partie de la chaîne de prototypes d'un autre objet.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "empêcher l'ajout ou la suppression de propriétés",
                    desc: "Scelle un objet, ce qui empêche l'ajout ou la suppression de propriétés. Les propriétés existantes peuvent toujours être modifiées.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c n'est pas supprimé"
                }, {
                    name: "freeze",
                    shortDesc: "empêcher l'ajout, la suppression ou la modification de propriétés",
                    desc: "Gèle un objet, ce qui empêche l'ajout, la suppression ou la modification de propriétés.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "empêcher l'ajout de propriétés",
                    desc: "Empêche l'extention d'un objet. Les propriétés peuvent être supprimées ou modifiées mais on ne peut pas en ajouter de nouvelles.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "la représentation en chaîne de caractères d'un objet",
                    desc: "La méthode <code>toString()</code> retourne une chaîne de caractère représentant l'objet.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "la représentation en chaîne de caractères localisée d'un objet",
                    desc: "La méthode <code>toLocaleString()</code> retourne une représentation en chaîne de caractères localisée d'un objet. Cette méthode utilise des objets dérivés permettant de personnaliser le comportement de la fonction, notamment en fonction de la locale.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "des détails sur une propriété",
                        desc: "Renvoie un descripteur de la propriété propre d'un objet (c'est-à-dire une propriété directement présente et pas héritée via la chaîne de prototypes).",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "des détails sur toutes les propritétés d'un objet",
                        desc: "Retourne un objet contenant les descripteurs de toutes les propriétés d'un objet.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "si une propriété peut être parcourue par une boucle for...in",
                        desc: "Retourne un booléen indiquant si l'attribut interne ECMAScript [[Enumerable]] est défini. Cela peut être utilisé pour savoir si une méthode est native ou non, car les propriétés natives ne sont générallement pas énumérables.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "si une propriété existe comme propriété directe d'un objet",
                        desc: "Retourne une booléen indiquant si un objet contient une propriété directe et non pas héritée d'une chaîne de prototypes.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "propriétés",
                        desc: "Retourne un tableau contenant les noms de toutes les propriétés d'un objet qui peuvent être parcourues.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "valeurs",
                        desc: "Retourne un tableau contenant les noms de toutes les valeurs d'un objet qui peuvent être parcourues.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "propriétés et valeurs",
                        desc: "Retourne un tableau contenant les noms de toutes les paires propriété/valeur d'un objet qui peuvent être parcourues.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "propriétés, même non-énumérables",
                        desc: "Retourne un tableau contenant les noms de toutes les propriétés d'un objet, qu'elles soient énumérables ou non. Fait la même chose que <code>Object.keys()</code> (retourne les propriétés d'un objet), mais <code>getOwnPropertyNames()</code> inclut les propriétés non-énumérables.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "obtenir un prototype de cet objet.",
                    desc: "Retourne un protoype de l'objet spécifié, c'est-à-dire la valeur de la propriété interne [[Prototype]].",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "définir un protoype de cet objet.",
                    desc: "Attention : cette méthode est très lente. Utilisez avec précaution, ou remplacez par <code>Object.create()</code>. Définit le prototype, c'est-à-dire la propriété interne [[Prototype]].",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "savoir si cet objet est dans la chaîne de prototypes.",
                    desc: "Retourne un booléen indiquant si un objet fait partie de la chaîne de prototypes de l'objet spécifié.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, cACW: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "create a new object",
                    desc: "Creates a new object with the specified prototype object and properties.<br>\n          <br>\n          <strong>Important note for beginners!</strong> It's more common to create an object the way that it's shown at the top of the example, like this <code>let obj = { a: 1 };</code>",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "make a copy of an object",
                    desc: 'Copies the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. Though not technically a built in object method, it\'s more common when using ES6 to make use of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" target="_blank">Spread Operator</a>, by using <code>...</code>',
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "a new property or modify an existing one",
                    desc: "Adds the named property described by a given descriptor to an object.<br>\n          <br>\n          <strong>Important note for beginners!</strong> It's more common to use dot or square bracket notation to create a new property or modify an existing one. Like this: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. This isn't technically a built-in method, that's why it's not included.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "one or more properties or modify existing properties",
                    desc: "Adds one or more properties described by a given descriptor to an object.<br>\n          <br>\n          <strong>Important note for beginners!</strong> It's more common to use dot or square bracket notation to create a new property or modify an existing one. Like this: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. This isn't technically a built-in method, that's why it's not included.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "if more properties can be added",
                    desc: "Determines if extending of an object is allowed.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "if two references point to the same object",
                    desc: 'Compares if two references point to the same object. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison). This one is a little weird, and the MDN docs are a bit misleading. It\'s <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#When_to_use_Object.is_versus_triple_equals" target="_blank">more useful to use triple equals <code>===</code></a> to check equality',
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "if an object and its properties can't be modified",
                    desc: "Determines if an object is frozen.",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "if an object can't be modified (its properties can be, though)",
                    desc: "Determines if the descriptor of its properties can't be changed and new properties can't be created.",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "if the object is in the prototype chain.",
                    desc: "Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "make sure properties can't be added or deleted",
                    desc: "Prevents other code from deleting properties of an object. Existing properties can still be modified.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "make sure properties can't be added, deleted, or modified",
                    desc: "Freezes an object: other code can't delete or change any properties.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "make sure properties can't be added.",
                    desc: "Prevents any extensions of an object. I can still delete properties but can't add any new ones.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "string representation of the object.",
                    desc: 'The <code>toString()</code> method returns a string representing the object. Though this is the built-in method available, it\'s usually more useful to use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank"><code>JSON.stringify()</code></a>',
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "localized string representation of the object.",
                    desc: "The <code>toLocaleString()</code> method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes. In human terms: this means if you have something that has different data based on location, such as date methods, it will give you a different time format",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "details about a property",
                        desc: "Returns a property descriptor for a named property on an object.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "details about all the properties on an object",
                        desc: "Returns an object containing all own property descriptors for an object.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "if a property can be traversed with a for...in loop",
                        desc: "Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set. This can be used to see if something is a built-in or user-defined method because built-in properties tend to not be enumerable",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "if a property exists as a direct property of the object",
                        desc: "Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "keys",
                        desc: "Returns an array containing the names of all of the object's keys that can be looped through, in the order that they would be looped through.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "values",
                        desc: "Returns an array containing the names of all of the object's values that can be looped through, in the order that they would be looped through.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "keys and values",
                        desc: "Returns a nested array containing the names of all of the object's key/value pairs that can be looped through, in the order that they would be looped through.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "keys, even if you can't loop through them",
                        desc: "Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties. Does the same thing as <code>Object.keys()</code>, retrieving the keys in the object, but <code>getOwnPropertyNames()</code> will include properties that can't be looped through.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "get a prototype of the object.",
                    desc: "Returns the prototype of the specified object. (i.e. the value of the internal [[Prototype]] property) of the specified object).",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "set a prototype of the object.",
                    desc: "Warning: this method is really slow. Use with caution, or replace with <code>Object.create()</code>. Sets the prototype (i.e., the internal [[Prototype]] property).",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "find out if the object is in the prototype chain.",
                    desc: "Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, dLso: function (e, n) {
        e.exports = {short: "de", long: "German", createdBy: "danistefanovic"}
    }, g1hL: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "cria um novo objecto",
                    desc: "Cria um novo objecto com o objecto e propriedades do protótipo especificado.<br>\n          <br>\n          <strong>Nota importante para iniciantes!</strong> È mais comum criar um objecto da maneira demonstrada na parte de cima do exemplo, atribuindo-o a uma variável",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "fazer uma cópia do objecto",
                    desc: "Copia os valores de todas as propriedades de um ou mais objectos para um objecto novo. Retorna esse novo objecto.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "uma nova propriadade ou mudar uma existente",
                    desc: "Adiciona a propriadade descrita pelo descritor a um objecto<br>\n          <br>\n          <strong>Nota importante para iniciantes!</strong> È mais comum usar pontos finais ou parênteses rectos para criar uma nova propriadade num objecto ou modificar uma ja existente.  Assim: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Mas tecnicamente isto não é um metodo incluido nos objectos por isso nao esta incluido",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "uma ou mais novas propriedades ou mudar uma ou mais propriedades existentes",
                    desc: "Adiciona uma ou mais propriedades descritas pelo descritor a um objecto<br>\n          <br>\n          <strong>Nota importante para iniciantes!</strong> È mais comum usar pontos finais ou parênteses rectos para criar uma nova propriadade num objecto ou modificar uma ja existente.  Assim: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Mas tecnicamente isto não é um metodo incluido nos objectos por isso nao esta incluido",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "se mais propriedades podem ser adicionadas",
                    desc: "Determina se mais propriedades podem ser adicionadas a um objecto.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "se duas referências apontam para o mesmo obejcto",
                    desc: "Compara duas refereências e vê se ambas apontam para o mesmo objecto. Iguala todos os valores NaN também. Esta é um bocado estranha e a documentação da Mozilla é um bocado enganadora.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "se um objecto e as suas propriedades não podem ser modificadas",
                    desc: "Determina se um objecto está congelado",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "se um objecto não pode ser modificado (mas as suas propriedades podem)",
                    desc: "Determina se um objecto ou as suas propriedades estão seladas",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "se o objecto está na cadeia de protótipos.",
                    desc: "Retorna verdadeiro ou falso dependendo de este método ser chamado ou não na cadeia de protótipos do objecto especificado.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "definir que não se pode adicionar ou remover propriedades deste objecto",
                    desc: "Evita que outro código apague propriedades a um objecto. Propriedades já existentes podem ser modificadas normalmente.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c não foi apagado"
                }, {
                    name: "freeze",
                    shortDesc: "definir que não se pode adicionar, remover ou modificar propriedades deste objecto",
                    desc: "Congela um objecto: outro código não pode apagar ou modificar as propriedades deste objecto.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">// o valor nao mudou para 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "definir que não se pode adicionar propriedades a este objecto.",
                    desc: "Previne que se adicionem novas propriedades a um objecto. Continuas a poder apagar ou modificar as já existem.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "representação do objecto em texto.",
                    desc: "O método <code>toString()</code> retorna a representação em texto do objecto.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "representação do objecto em texto localizado.",
                    desc: "O método <code>toLocaleString()</code> retorna a representação em texto localizado do objecto. Esté metodo é suposto retornar coisas diferentes em ocasiões diferentes. Por exemplo se tiveres uma data guardada este método vai te retornar um formato de data diferente dependendo da tua localização.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "detalhes sobre uma propriedade",
                        desc: "Retorna a descrição e caracteristicas da propriedade passada á função.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "detalhes sobre todas as propriedades num objecto",
                        desc: "Retorna um objecto que contêm a descrião e caracteristicas de todas as propriedades de um objecto",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "se um propriadade pode ser enumerada através de um for...in loop",
                        desc: "Retorna verdadeiro ou falso indicando se a propriadade interna do ECMAScript [[Enumerable]] está definida. Isto pode ser usado para ver se o objecto é algo da linguagem ou definido pelo utilizador porque propriedades definidas pela linguagem tendem a não ser enumeráveis.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "se uma propriadade existe num objecto ",
                        desc: "Retorna verdadeiro ou falso dependendo se o objecto contêm a propriadade especificada como filho directo.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "keys",
                        desc: "Retorna uma array com os nomes das keys que pode ser enumerada.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "valores",
                        desc: "Retorna uma array com os valores que pode ser enumerada.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "keys e valores",
                        desc: "Retorna uma array com arrays e dentro de cada uma temos a key e o valor de uma das propriedades do objecto.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "keys, mesmo que não as consigas enumerar",
                        desc: "Retorna uma array que contêem os nomes de todas as propriedades de um objecto mesmo que estas não sejam enumeráveis. Faz o mesmo que <code>Object.keys()</code>, devolvendo todas as keys de um objecto mas <code>getOwnPropertyNames()</code> inclui propriedades que nao podem ser enumeradas em loops.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "retornar o protótipo de um objecto.",
                    desc: "Retorna o protótipo de um objecto especificado. (o valor da propriadade interna [[Prototype]]).",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "definir o protótipo do objecto.",
                    desc: "Atenção: este método é muito lento. Usar com caução ou substituir por <code>Object.create()</code>. Define o protótipo (o valor da propriadade interna [[Prototype]]).",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "descobre se o objecto está na cadeia de prototipos.",
                    desc: "Retorna verdadeiro ou falso indicando se o objecto que é usado neste método faz parte da cadeia de prototipos do objecto especificado.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, gNJs: function (e, n) {
    }, htUn: function (e, n) {
        e.exports = {short: "it", long: "Italian", createdBy: "nicolo-ribaudo"}
    }, lx7K: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "crear un nuevo objeto",
                    desc: "Crea un nuevo objeto con el objeto y propiedades del prototipo especificado.<br>\n          <br>\n          <strong>¡Nota importante para los principiantes! </strong> Es más común crear un objeto de la manera que se muestra en la parte superior del ejemplo, asignándolo a una variable.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "realizar una copia de un objeto",
                    desc: "Copiar los valores de todas la propiedades enumerables de uno o más objetos fuente a un objeto destino. Retorna el objeto destino.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "una nueva propiedad o modificar una existente",
                    desc: "Define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.<br>\n          <br>\n          <strong>¡Nota importante para los principiantes! </strong> Es más común usar notación de punto o de corchete para crear una nueva propiedad o modificar una existente. Así: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Esto no es técnicamente un método incorporado, por eso no está incluido.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "una o mas propiedades o modificar propiedades existentes",
                    desc: "Añade una o mas propiedades o modifica propiedades existentes directamente en el objeto, retornando el objeto.<br>\n          <br>\n          <strong>Nota importante para los principiantes! </strong> Es más común utilizar notación de punto o de corchete para crear una nueva propiedad o modificar una existente. Así: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Técnicamente no es un método incorporado, por eso no está incluido.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "si mas propiedades pueden ser agregadas",
                    desc: "Determina si un objeto puede tener propiedades nuevas agregadas.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "si dos referencias apuntan al mismo objeto",
                    desc: "Compara si dos referencias apuntan al mismo objeto. Iguala todos los valores NaN (que difiere tanto de la Comparación de igualdad abstracta como de la Comparación de igualdad estricta). Éste es un poco raro, y los documentos de los MDN son un poco engañosos.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "si un objeto y sus propiedades no pueden ser modificadas",
                    desc: "Determina si un objeto esta congelado",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "si un objeto no puede ser modificado (aunque sus propiedades pueden serlo)",
                    desc: "Determina si el descriptor de sus propiedades no se puede cambiar y no se pueden crear nuevas propiedades.",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "comprobar si un objeto se encuentra en la cadena de prototipado de otro.",
                    desc: "Devuelve un booleano indicando si el objeto al que se llama este método está en la cadena de prototipos del objeto especificado.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "asegurarse de que las propiedades no se pueden añadir o eliminar",
                    desc: "Impide que otro código borre las propiedades de un objeto. Las propiedades existentes todavía pueden ser modificadas.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c no se elimina"
                }, {
                    name: "freeze",
                    shortDesc: "asegurarse de que las propiedades no se pueden añadir, eliminar o modificar",
                    desc: "Congela un objeto: otro código no puede borrar o cambiar ninguna propiedad.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//el valor no se actualiza a 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "asegurarse de que no se pueden añadir propiedades.",
                    desc: "Previene cualquier extensión de un objeto. Todavía se pueden eliminar propiedades pero no se puede añadir ninguna nueva.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "cadena de caracteres representando al objeto",
                    desc: "El método <code>toString()</code> devuelve una cadena de caracteres que representa el objeto.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "devolver la representación del objeto como una cadena utilizando la configuración regional.",
                    desc: "El método <code>toLocaleString()</code> devuelve una cadena que representa el objeto. Este método debe ser sustituido por objetos derivados para fines específicos de la configuración regional. En términos humanos: esto significa que si tienes algo que tiene datos diferentes basados en la ubicación, como métodos de fecha, te dará un formato de hora diferente.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "detalles sobre una propiedad",
                        desc: "Devuelve un descriptor para una propiedad en un objeto.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "detalles sobre todas las propiedades de un objeto",
                        desc: "Devuelve un objeto que contiene todos las descripciones de propiedad propias de un objeto.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "si una propiedad puede ser recorrida con un bucle for... in",
                        desc: "Devuelve un booleano que indica si el atributo interno ECMAScript [[Enumerable]] está configurado. Esto se puede utilizar para ver si algo es un método incorporado o definido por el usuario porque las propiedades incorporadas tienden a no ser enumerables.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "si existe una propiedad como propiedad directa del objeto",
                        desc: "Devuelve un booleano indicando si un objeto contiene la propiedad especificada como una propiedad directa de ese objeto y no heredada a través de la cadena del prototipo.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "claves",
                        desc: "Devuelve un array que contiene los nombres de todas las claves del objeto por las que se puede hacer un bucle, en el orden en que se harían.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "valores",
                        desc: "Devuelve un array que contiene los nombres de todos los valores del objeto por los que se puede hacer un bucle, en el orden en que se harían.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "claves y valores",
                        desc: "Devuelve un array anidado que contiene los nombres de todos los pares clave/valor del objeto a través de los que se puede hacer un bucle, en el orden en que se harían.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "claves, incluso si no puedes pasar a través de ellas",
                        desc: "Devuelve un array que contiene los nombres de todas las propiedades enumerables y no numerables del objeto en cuestión. Hace lo mismo que <code>Object.keys()</code>, recuperando las claves del objeto, pero <code>getOwnPropertyNames()</code> incluye propiedades que no pueden ser enlazadas.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "conseguir un prototipo del objeto.",
                    desc: "Devuelve el prototipo del objeto especificado. (es decir, el valor de la propiedad interna [[Prototype]]) del objeto especificado).",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "asigna un prototipo al objeto.",
                    desc: "Advertencia: este método es realmente lento. Utilizar con precaución, o sustituir por <code>Object.create ()</code>. Establece el prototipo (es decir, la propiedad interna [[Prototype]]).",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "averiguar si el objeto está en la cadena del prototipo.",
                    desc: "Devuelve un booleano indicando si el objeto al que se llama este método está en la cadena de prototipos del objeto especificado.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, mJJP: function (e, n) {
        e.exports = {short: "en", long: "English", createdBy: "sdras"}
    }, mfqg: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "creare un nuovo oggetto",
                    desc: "Crea un nuovo oggetto a partire dal prototipo e dalle proprietà specificate.<br>\n          <br>\n          <strong>Nota per i principianti!</strong> Solitamente gli oggetti si creano com'è mostrato all'inizio dell'esempio, utilizzando le parentesi graffe.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "copiare un oggetto",
                    desc: "Copia i valori di tutte le proprietà enumerabili direttamente appartenenti a uno o più oggetti verso un oggetto di destinazione (il primo parametro). Restituisce l'oggetto di destinazione.",
                    example: "const copia = Object.assign({}, obj);<br>\n        console.log(copia);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "una nuova proprietà o modificarne una esistente",
                    desc: "Aggiunge la proprietà specificata descritta dalle opzioni specificate a un oggetto.<br>\n          <br>\n          <strong>Nota per i principianti!</strong> Solitamente si usano il punto o le parentesi quadre per creare o modificare una proprietà, così: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Tecnicamente questa non è una funzione, quindi non è includa nella lista.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "una o più nuova proprietà o modificarne di esistenti",
                    desc: "Aggiunge le proprietà specificate descritta dalle opzioni specificate a un oggetto.<br>\n          <br>\n          <strong>Nota per i principianti!</strong> Solitamente si usano il punto o le parentesi quadre per creare o modificare una proprietà, così: <code>obj.a = 1</code> o <code>obj[a] = 1</code>. Tecnicamente questa non è una funzione, quindi non è includa nella lista.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "possono essere aggiunte nuove proprietà",
                    desc: "Determina se è possibile estendere l'oggetto, ossia definirne nuove propretà.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "due riferimenti rappresentano lo stesso oggetto",
                    desc: "Determina se due riferimenti rappresentano lo stesso oggetto. Considera uguali tutti i valori <code>NaN</code> (che vengono considerati diversi sia dall'operatore <code>==</code> che <code>===</code>). Questo è leggermente unusuale, e la documentazione su MDN è poco chiara.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "un oggetto e le sue proprietà non possono essere modificati",
                    desc: "Determina se un oggetto è congelato.",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "un oggetto non può essere modificato (ma le sue proprietà si)",
                    desc: "Determina se non si possono aggiungere o togliere proprietà a un oggetto, e le descrizioni di quelle già esistenti non possono essere modificate.",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "un oggetto è prototipo di un altro",
                    desc: "Restituisce <code>true</code> o <code>false</code> per indicare se l'oggetto del quale viene richiamato questo metodo + nella catena dei prorotipi dell'oggetto specificato.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "evitare che vengano aggiunte o eliminate delle proprietà",
                    desc: "Evita che altro codice aggiunga o tolga proprietà all'oggetto specificato. Le proprietà già esistenti possono essere modificate ma non può essere modificata la loro descrizione.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c non viene cancellata"
                }, {
                    name: "freeze",
                    shortDesc: "evitare che vengano aggiunte, eliminate o modificate delle proprietà",
                    desc: "Congela un oggetto: non vi si possono più aggiungere, eliminare o modificare proprietà.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">// il valore non è diventato 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "evitare che vengano aggiunte nuove proprietà.",
                    desc: "Evita che un oggetto venga esteso. &Egrave; comunque possibile cancellare proprietà esistenti.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "una stringa che rappresenti l'oggetto.",
                    desc: "La funzione <code>toString()</code> restiuisce una stringa che rappresenta l'oggetto.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "una stringa localizzata che rappresenti l'oggetto.",
                    desc: "La funzione <code>toLocaleString()</code> restiuisce una stringa localizzata che rappresenta l'oggetto.\n        Questo metodo solitamente viene sovrascritto dagli oggetti per comportarsi in base alla lingua. In parole povere: se si lavora con qualcosa che contiene dati diversi in base alla lingua, come le date, genererà un output diverso.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        3/1/2018, 14:54:33"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "dettagli riguardo una proprietà di un oggetto",
                        desc: "Restituisce un oggetto che descive una proprietà di un oggetto, dato il suo nome.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "dettagli riguardo tutte le proprietà di un oggetto",
                        desc: "Restituisce un oggetto contenente le descrizioni di tutte le proprietà dell'oggetto specificato.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "se una proprietà viene visitata con un ciclo for...in",
                        desc: "Restituisce <code>true</code> o <code>false</code> per indicare se l'attributo interno di ECMAScript <code>[[Enumerable]]</code> è imopstato a <code>true</code>. Questa funzione può essere usata per sapere se una proprietà e predefinita o no, perché solitamente le proprietà predefinite non sono enumerabili.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "se un ogetto ha direttamente una proprietà",
                        desc: "Restituisce <code>true</code> o <code>false</code> per indicare se un oggetto contiene la proprietà specificata direttamente, e non tamite il suo prototipo.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "le chiavi",
                        desc: "Restituisce un array che contiene i nomi di tutte le proprietà dell'oggetto che verrebbero visitate da un ciclo, nell'ordine in cui verrebbero visitate.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "i valori",
                        desc: "Restituisce un array che contiene i valori di tutte le proprietà dell'oggetto che verrebbero visitate da un ciclo, nell'ordine in cui verrebbero visitate.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "le chiavi e i valori",
                        desc: "Restituisce un array che contiene le coppie nome/valore di tutte le proprietà dell'oggetto che verrebbero visitate da un ciclo, nell'ordine in cui verrebbero visitate.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "le chiavi, anche se non verrebbero visitate da un ciclo",
                        desc: "Restituisce un array che contiene i nomi di <em>tutte</em> le proprietà dell'oggetto specificato. &Egrave; simile a <code>Object.keys()</code>, ma <code>Object.getOwnPropertyNames()</code> restituisce anche le proprietà che non verrebero visitate da un ciclo <code>for...in</code>.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "leggere il prototipo di un oggetto.",
                    desc: "Restituisce il prototipo dell'oggetto specificato (quindi il valore della proprietà interna <code>[[Prototype]]</code>).",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "impostare il prototipo di un oggetto.",
                    desc: "<strong>Attenzione</strong>: questa funzione è molto lenta. Se possibile, utilizzare <code>Object.create()</code>.<br>\n        <br>Imposta il prototipo di un oggetto (la sua proprietà interna <code>[[Prototype]]</code>).",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "sapere se un oggetto è prototipo di un altro.",
                    desc: "Restituisce <code>true</code> o <code>false</code> per indicare se l'oggetto del quale viene richiamato questo metodo è nella catena dei prorotipi dell'oggetto specificato.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }]
            }
        }
    }, navW: function (e, n) {
    }, oBQB: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "een nieuw object aanmaken",
                    desc: "Maakt een nieuw object aan met het gekozen prototype object en properties.<br>\n          <br>\n          <strong>Belangrijke opmerking voor beginners!</strong> Het is gewoonlijk om een object te maken op de manier die boveaan gebruikt wordt, door een object aan een variabele toe te wijzen.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "een kopie van een object maken",
                    desc: "Kopieert de waardes van alle eigen telbare properties van een of meerdere source objecten naar een aangewezen object. Het geeft het aangewezen object terug.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "een nieuwe property of het aanpassen van een bestaande",
                    desc: "Voegt een benoemde property, beschreven door een gegeven descriptor, toe aan een object .<br>\n          <br>\n          <strong>Belangrijke opmerking voor beginners!</strong> Het is gebruikelijk om dot of square brackets notatie te gebruiken bij het aanmaken van een nieuwe of bij het bewerken van een bestaande property. Zoals: <code>obj.a = 1</code> of <code>obj[a] = 1</code>. Dit is technisch gezien geen ingebouwde methode, daarom staat dit ook niet beschreven.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "een of meerdere properties of aanpassen van bestaande properties",
                    desc: "Voegt een of meerdere properties, beschreven door een gegeven descriptor, toe aan een object <br>\n          <br>\n          <strong> Belangrijke opmerking voor beginners!</strong > Het is gebruikelijk om dot of square brackets notatie te gebruiken bij het aanmaken van een nieuwe of bij het bewerken van een bestaande property. Zoals: <code>obj.a = 1</code> of <code> obj[a] = 1</code>. Dit is technisch gezien geen ingebouwde methode, daarom staat dit ook niet beschreven.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "of er meer properties toegevoegd kunnen worden",
                    desc: "Bepaald of uitbreiding van een object toegestaan is.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "of twee referenties naar hetzelfde object wijzen",
                    desc: "Vergelijkt of twee referenties naar hetzelfde object wijzen. Het staat gelijk aan NaN waardes (Welke verschillen van zowel Abstract Equality Comparison en Strict Equality Comparison). Dit is een gekke, ook is de MDN documentatie een beetje misleidend.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "of een object en de properties niet bewerkt kunnen worden",
                    desc: "Bepaald of een object bevroren is.",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "of een object niet bewerkt kan worden (maar de properties wel)",
                    desc: "Bepaald of een object of de properties zijn afgesloten.",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "of een object onder een prototype valt",
                    desc: "Geeft een boolean terug die aangeeft of de object die in de methode aangeroepen wordt onder de prototype valt van het gespecificeerde object.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "zeker weten dat properties niet toegevoegd of verwijderd kunnen worden",
                    desc: "Voorkomt dat andere code properties van een object kan verwijderen. Bestaande properties kunnen nog steeds bewerkt worden.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "zeker weten dat properties niet toegevoegd, verwijderd of bewerkt kunnen worden",
                    desc: "Bevriesd een object: andere code kan geen properties bewerken of verwijderen.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "zeker weten dat properties niet toegevoegd kunnen worden",
                    desc: "Voorkomt uitbreiding van een object. Ik kan nog steeds properties verwijderen maar ik kan geen nieuwe toevoegen.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "een object in de vorm van een string",
                    desc: "de <code>toString()</code> methode rgeeft een object terug in de vorm van een string.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "een object in de vorm van een taalstring",
                    desc: "De <code>toLocaleString()</code> methode geeft een object terug in de vorm van een string. Deze methode is bedoeld om overschreven te worden bij een afgeleid object voor taal-specifieke doeleinde. In mensen taal: dit betekent dat als je iets hebt dat andere data heeft op basis van locatie, zoals een data methode, het jou een ander tijd format geeft.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "details over een property",
                        desc: "Geeft een property descriptor voor een benoemde property van een object.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "details over alle properties van een object",
                        desc: "Geeft een object terug bestaande uit alle eigen property descriptors van een object",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "of een property doorlopen kan worden met een for...in loop ",
                        desc: "Geeft een boolean terug die aangeeft of de interne ECMAScript [[Enumerable]] attribute actief is. Dit kan gebruikt worden of iets een standaard methode is of een gebruikers methode is, omdat standaard properties normaal gesproken niet telbaar zijn.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "of een property bestaat als een directe property van het object",
                        desc: "Geeft een boolean terug die aangeeft of een object bestaat uit een specifieke property als een directe property van dat object en dus niet geërfd is van de overkoepelende prototype.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "sleutels",
                        desc: "Geeft een array terug bestaande uit alle namen van alle object sleutels waar doorheen gelooped kan worden, in de volgorde dat deze doorgeloopt zou worden.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "waardes",
                        desc: "Geeft een array terug bestaande uit alle namen van alle object waardes waar doorheen gelooped kan worden, in de volgorde dat deze doorgeloopt zou worden.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "sleutels en waardes",
                        desc: "Geeft een genestelde array terug bestaande uit alle namen van alle object sleutel/waarde paren waar doorheen gelooped kan worden, in de volgorde dat deze doorgeloopt zou worden.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "sleutels, ookal kan je er niet doorheen loopen",
                        desc: "Geeft een array terug bestaande uit alle namen van alle object properties, zowel telbaar als niet telbaar. Doet het zelfde als <code>Object.keys()</code>, verkrijgen van de sleutels in het object, maar <code>getOwnPropertyNames()</code> bevat ook properties waar niet doorheen gelooped kan worden.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "een prototype van een object verkrijgen",
                    desc: "Geeft de prototype terug van het gespecificeerde object. Dat is de waarde van de interne [[Prototype]] property van het gespecificeerde object.",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "een prototype voor het object toewijzen",
                    desc: "Waarschuwing: deze methode is erg sloom. Gebruik dit voorzichtig, of vervang door <code>Object.create()</code>. Het wijst een prototype (dat is de interne[[Prototype]] property) toe.",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "uitzoeken of een object onder een prototype valt",
                    desc: "Geeft een boolean terug die aangeeft of het object van deze methode die aangeroepen wordt onder de prototype valt van het gespecificeerde object.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, oEiM: function (e, n) {
    }, ot5U: function (e, n) {
    }, tprR: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "создать новый объект",
                    desc: "Создает новый объект с указанным значением прототипа и свойствами объекта.<br>\n          <br>\n          <strong>Важное замечание для начинающих!</strong> Более часто используемый путь создания объекта представлен в начале примера, способ назначения и запись в переменную объекта со значениями.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "сделать копию существующего объекта",
                    desc: "Копирует значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "добавить новое свойство или изменить существующее",
                    desc: "Определяет новое или изменяет существующее свойство непосредственно на объекте, возвращая этот объект.<br>\n          <br>\n          <strong>Важное замечание для начинающих!</strong> Чаще всего использую нотацию записи через точку или квадратные скобки для создания нового свойства или изменения существующего. К примеру: <code>obj.a = 1</code> или <code>obj[a] = 1</code>. Это технически не встроеный метод языка поэтому здесь не рассмотрен.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "добавить или изменить существующие свойства объекта",
                    desc: "Добавляет одно или несколько свойств, описываемых данным дескриптором объекта.<br>\n          <br>\n          <strong>Важное замечание для начинающих!</strong> Чаще всего использую нотацию записи через точку или квадратные скобки для создания нового свойства или изменения существующего. К примеру: <code>obj.a = 1</code> or <code>obj[a] = 1</code>. Это технически не встроеный метод языка поэтому здесь не рассмотрен.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "могут ли быть добавлены еще свойства",
                    desc: "Определяет, является ли объект расширяемым (то есть, можно ли к нему добавлять новые свойства).",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "являются ли два значения одинаковыми значениями",
                    desc: "Сравнивает, если два значения указывают на один и тот же объект. Обозначает все значения NaN (которые отличаются как от сравнения абстрактного равенства, так и от строгого равенства). Это немного странно, и документация MDN вводит в заблуждение.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "что объект и его свойства не могут быть изменены",
                    desc: "Определяет заморожен ли объект. Объект является замороженным только в том случае, если он не расширяем, все его свойства являются не настраиваемыми и все его свойства данных являются не записываемыми.",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "что объект не может быть изменен (хотя его свойства могут быть)",
                    desc: "Определяет, является ли объект и его свойства запечатанными. Объект является запечатанным, если он является не расширяемым и если все его свойства являются не настраиваемыми и, следовательно, не удаляемыми (но не обязательно не записываемыми).",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "входит ли объект в цепочку прототипов другого объекта.",
                    desc: "Возвращает логическое значение, указывающее, входит ли объект, вызываемый этим методом, в цепочку прототипов указанного объекта.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "быть уверенным что свойства не будет добавленны или удалены",
                    desc: "Предотвращает добавление новых свойств к объекту и делая все существующие свойства не настраиваемыми. Значения представленных свойств всё ещё могут изменяться, поскольку они остаются записываемыми.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "быть уверенным что свойства не будут добавленны, удалены или модифицированны",
                    desc: "Замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "быть уверенным что свойства не будут добавленны",
                    desc: "Предотврашает расширение объекта. По прежнему можно удалять свойства, но нельзя добавить ни одно.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "строковое представление объекта.",
                    desc: "Метод <code>toString()</code> возвращает строку, представляющую объект.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "локализованное строковое представление объекта.",
                    desc: "Метод <code>toLocaleString()</code> возвращает строку, представляющую объект. Этот метод предназначен для переопределения унаследованными объектами в целях поддержки зависимости от локали.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "информацию о свойстве объекта",
                        desc: "Метод возвращает дескриптор свойства для собственного свойства переданного объекта",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "информацию о всех свойствах объекта",
                        desc: "Возвращает объект, содержащий все собственные дескрипторы свойств для объекта.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "можно ли обойти содержимое свойства при помоши цикла for...in",
                        desc: "Возврашает логичское значение идентифицируешее что выставлен внутренний атрибут (ECMAScript) [[Enumerable]]. Этот атрибут можно использовать, чтобы определить, является ли свойство объекта встроенным или методом определенным пользователем, так как встроенные свойства, как правило, не могут быть перечисляемыми.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "что свойство существует как непосредственное свойство объекта",
                        desc: "Возврашет логическое значение, указывающее, содержит ли объект указанное свойство и не наследует данное свойство через цепочку прототипов.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "ключей",
                        desc: "Возврашает массив из собственных перечисляемых свойств объекта, в том же порядке, в котором они бы обходились циклом for...in.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "значений",
                        desc: "Возврашает массив из значений собственных перечисляемых свойств объекта, в том же порядке, в котором они бы обходились циклом for...in.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "ключей и значений",
                        desc: "Возвращает вложенный массив, содержащий имена всех пар собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "keys, even if you can't loop through them",
                        desc: "Возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет), найденными непосредственно в переданном объекте. такое же извлечение ключей в объект, что и <code>Object.keys()</code>, но <code>getOwnPropertyNames()</code> будет включать не перечисляемые свойства.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "получить прототип объекта.",
                    desc: "Возвращает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "установить прототип объекта.",
                    desc: "Внимание: этот метод ужасно медленный. Используйте с осторожностью, или замените на <code>Object.create()</code>. Задает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "определить, входит ли объект в цепочку прототипов другого объекта.",
                    desc: "Возврашает логическое значение, указывающее, входит ли объект, вызываемый этим методом, в цепочку прототипов указанного объекта.",
                    example: "function Rect() {}<br>\n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }, uzJs: function (e, n) {
    }, vdRI: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var t = s("7+uW"), o = s("NYxO"), a = s("kmDT"), r = s("I9nf"), p = s("cACW"), b = s("WbDD"), i = s("vsdj"),
            c = s("lx7K"), l = s("mfqg"), d = s("oBQB"), u = s("tprR"), h = s("g1hL"), m = s("059H"), j = s("DbhP"),
            g = s("YsDL"), v = s("BKTo");
        const f = (e => {
            let n = e.keys(), s = n.map(e);
            let t = {};
            return n.filter((e, n) => e.endsWith("json")).forEach(e => {
                const o = n.indexOf(e), a = s[o];
                t[a.short] = {long: a.long}
            }), t
        })(s("DERJ"));
        t.a.use(o.a);
        const y = {
            selectionMethod(e, n) {
                e.selectedMethod = n
            }, resetSelection(e) {
                e.selectedMethod = ""
            }, changeLanguage(e, n) {
                console.log(n), e.curLanguage = n, t.a.i18n.set(n)
            }
        }, O = new o.a.Store({
            modules: {
                en: p.default,
                bg: b.default,
                cz: i.default,
                de: r.default,
                es: c.default,
                it: l.default,
                nl: d.default,
                ru: u.default,
                pt_pt: h.default,
                zh_cn: m.default,
                fr: g.default,
                id: v.default,
                zh_hk: j.default,
                fr: g.default
            }, state: {selectedMethod: void 0, curLanguage: "en", languages: f}, mutations: y
        });
        n.store = O, t.a.use(a.a.plugin, O), t.a.i18n.add("bg", {
            firstMethod: "Имам обект, бих искал да",
            infoPropMethod: "Искам да взема",
            methodOptions: "Искам да",
            methodTypes: {
                create: "създам",
                determine: "определя",
                "return a": "върна",
                "find out": "намеря",
                "get an array of all of the": "получа масив от всички"
            },
            details: "допълнителна информация за свойството",
            list: "списък от всички ключове и/или стойности",
            primaryOptions: ["създам обект", "създам свойства", "получа информация за обект", "получа информация за свойства", "огранича промени по обект", "създам низ от даден обект", "управлявам прототипите"]
        }), t.a.i18n.add("de", {
            firstMethod: "Ich habe ein Objekt und würde gerne",
            infoPropMethod: "Ich benötige",
            methodOptions: "Ich möchte",
            methodTypes: {
                create: "hinzufügen",
                determine: "feststellen",
                "return a": "zurückgeben",
                "find out": "herausfinden",
                "get an array of all of the": "ein Array mit allen"
            },
            details: "Details über eine Eigenschaft",
            list: "eine Liste aller Eigenschaften und/oder Werte",
            primaryOptions: ["ein Objekt erstellen", "Eigenschaften erstellen", "Informationen über ein Objekt erhalten", "Informationen über Eigenschaften erhalten", "Änderungensmöglichkeiten einschränken", "einen String von einem Objekt erstellen", "Eigenschaften verwalten"]
        }), t.a.i18n.add("en", {
            firstMethod: "I have an object, I would like to",
            infoPropMethod: "I need to get",
            methodOptions: "I need to",
            methodTypes: {
                create: "create",
                determine: "determine",
                "return a": "return a",
                "find out": "find out",
                "get an array of all of the": "get an array of all of the"
            },
            details: "details about the property",
            list: "a list of all of the keys and/or values",
            primaryOptions: ["create an object", "create properties", "get information about an object", "get information about properties", "restrict changes to an object", "create a string from an object", "manage prototypes"]
        }), t.a.i18n.add("cz", {
            firstMethod: "Maám objekt a chci",
            infoPropMethod: "Potřebuji získat",
            methodOptions: "Potřebuji",
            methodTypes: {
                create: "vytvořit",
                determine: "zjistit",
                "return a": "vrátit",
                "find out": "zjistit",
                "get an array of all of the": "získat pole všech"
            },
            details: "podrobnosti o vlastnosti",
            list: "seznam všech klíčů anebo hodnot",
            primaryOptions: ["vytvořit objekt", "vytvořit vlastnost", "získat informaci o objektu", "získat informaci o vlastnosti", "omezit změny pro objekt", "vytvořit řetězec z objektu", "spravovat prototypy"]
        }), t.a.i18n.add("es", {
            firstMethod: "Tengo un objeto, me gustaría",
            infoPropMethod: "Necesito conseguir",
            methodOptions: "Necesito",
            methodTypes: {
                create: "crear",
                determine: "determinar",
                "return a": "devolver un",
                "find out": "averiguar",
                "get an array of all of the": "conseguir un array de todos los"
            },
            details: "detalles de la propiedad",
            list: "una lista de todas las claves y/o valores",
            primaryOptions: ["crear un objeto", "crear propiedades", "obtener informacio de los objetos", "obtener informacion de las propiedades", "restringir cambios en un objeto", "crear una cadena desde un objeto", "manejar prototipos"]
        }), t.a.i18n.add("it", {
            firstMethod: "Ho un oggetto e vorrei",
            infoPropMethod: "Ho bisogno di ottenere",
            methodOptions: "Ho bisogno di",
            methodTypes: {
                create: "creare",
                determine: "sapere se",
                "return a": "generare",
                "find out": "sapere",
                "get an array of all of the": "un array che contenga"
            },
            details: "dettagli riguardo delle proprietà",
            list: "una lista di tutte le chiavi e/o valori",
            primaryOptions: ["crearne uno nuovo", "definire delle proprietà", "ottenere informazioni riguardo ad esso", "ottenere informazioni riguardo le sue proprietà", "proteggerlo da alcuni cambiamenti", "creare una stringa che lo rappresenti", "gestirne il prototipo"]
        }), t.a.i18n.add("nl", {
            firstMethod: "Ik heb een object, ik wil graag",
            infoPropMethod: "Ik heb nodig",
            methodOptions: "Ik moet",
            methodTypes: {
                create: "aanmaken",
                determine: "bepalen",
                "return a": "teruggeven",
                "find out": "er achter komen",
                "get an array of all of the": "een array krijgen van alle"
            },
            details: "details over de property",
            list: "een lijst van alle keys en/of waardes",
            primaryOptions: ["een object aanmaken", "properties aanmaken", "informatie krijgen over een object", "informatie krijgen over properties", "veranderingen aan een object beperken", "van een object een string maken", "prototypes beheren"]
        }), t.a.i18n.add("ru", {
            firstMethod: "У меня есть объект, я хотел бы",
            infoPropMethod: "Мне нужно получить",
            methodOptions: "Мне нужно",
            methodTypes: {
                create: "создать",
                determine: "определить",
                "return a": "вернуть",
                "find out": "узнать",
                "get an array of all of the": "получить массив всех"
            },
            details: "информацию о свойстве",
            list: "список всех ключей и/или значений",
            primaryOptions: ["создать объект", "создать свойство", "получить информацию об объекте", "получить информацию о свойстве", "ограничить возможность изменения объекта", "сформировать строку из объекта", "управлять поведением прототипов"]
        }), t.a.i18n.add("pt-pt", {
            firstMethod: "Eu tenho um objecto e gostaria de",
            infoPropMethod: "Preciso de obter",
            methodOptions: "Preciso de",
            methodTypes: {
                create: "criar",
                determine: "determinar",
                "return a": "retornar",
                "find out": "descobrir",
                "get an array of all of the": "obter uma array de todos os"
            },
            docsLink: "Ver Documentação",
            details: "detalhes sobre a propriadade",
            list: "a lista de todas as keys e/ou valores",
            primaryOptions: ["criar um objecto", "criar propriadades", "receber informações sobre um objecto", "receber informações sobre as propriadades", "restringir mudanças a um objecto", "criar texto aparatir de um objecto", "gerir protótipos"]
        }), t.a.i18n.add("zh_cn", {
            firstMethod: "我有一个对象，我想",
            infoPropMethod: "我需要获得",
            methodOptions: "我需要",
            methodTypes: {
                create: "创建",
                determine: "检查",
                "return a": "返回一个",
                "find out": "知道",
                "get an array of all of the": "一个数组，包含对象的所有"
            },
            details: "关于属性的详细信息",
            list: "所有键和/或值的列表",
            primaryOptions: ["创建一个对象", "创建属性", "获得关于对象的信息", "获得关于属性的信息", "限制对象的改变", "根据一个对象得到字符串", "管理原型"]
        }), t.a.i18n.add("zh_hk", {
            firstMethod: "我有一個物件，我想",
            infoPropMethod: "我需要獲得",
            methodOptions: "我需要",
            methodTypes: {
                create: "建立",
                determine: "檢查",
                "return a": "返回一個",
                "find out": "找出",
                "get an array of all of the": "獲取陣列來自"
            },
            details: "關於屬性的詳情資料",
            list: "所有鍵值和/或值的列表",
            primaryOptions: ["建立一個物件", "建立屬性", "獲取物件的資料", "獲取屬性的資料", "限制對物件作出改變", "由物件建立字串", "管理原型"]
        }), t.a.i18n.add("fr", {
            firstMethod: "J'ai un objet, je veux",
            infoPropMethod: "Je veux obtenir",
            methodOptions: "Je veux",
            methodTypes: {
                create: "créer",
                determine: "déterminer",
                "return a": "obtenir",
                "find out": "trouver",
                "get an array of all of the": "obtenir un array de tous/toutes les"
            },
            details: "des détails sur la propriété",
            list: "une liste de toutes les propriétés et/ou valeurs",
            primaryOptions: ["créer un objet", "créer des propritétés", "obtenir des informations sur un objet", "obtenir des informations sur les propriétés", "restreindre les modifications sur un objet", "créer une chaîne de caractères à partir d'un objet", "gérer les prototypes"]
        }), t.a.i18n.add("id", {
            firstMethod: "Saya mempunyai objek, saya ingin",
            infoPropMethod: "Saya ingin mendapatkan",
            methodOptions: "Saya ingin",
            methodTypes: {
                create: "membuat",
                determine: "menentukan",
                "return a": "mengembalikan sebuah",
                "find out": "menemukan",
                "get an array of all of the": "mendapatkan sebuah array dari semua"
            },
            details: "detil tentang properti",
            list: "daftar dari seluruh kunci dan/atau nilai",
            primaryOptions: ["membuat sebuah objek", "membuat properti", "mendapatkan informasi tentang sebuah objek", "mendapatkan informasi tentang properti", "membatasi perubahan terhadap sebuah objek", "membuat sebuah string dari sebuah objek", "mengatur prototipe"]
        }), t.a.i18n.set(O.state.curLanguage)
    }, vsdj: function (e, n, s) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = {
            state: {
                selectedMethod: "",
                createObj: [{
                    name: "create",
                    shortDesc: "vytvořit nový objekt",
                    desc: "Vytvoří nový objekt s daným objektovým prototypem a vlastnostmi.<br>\n          <br>\n          <strong>Důležitá poznámka pro začátečníky!</strong> Častější je tvorba objektů tak, jako v horním případě, že přiřadíme objekt do proměnné.",
                    example: "const obj2 = Object.create(obj);<br>\n        console.log(obj2);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "assign",
                    shortDesc: "udělat kopii objektu",
                    desc: "Zkopíruje vlastní hodnoty, které lze vyčíst, z jednoho nebo více zdrojových objektů do cílového objektu. Vrácen je cílový objekt.",
                    example: "const copy = Object.assign({}, obj);<br>\n        console.log(copy);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }],
                createProp: [{
                    name: "defineProperty",
                    shortDesc: "novou vlastnost nebo upravit existující vlastnost",
                    desc: "Přidá pojmenovanou vlastnost dle daného deskriptoru.<br>\n          <br>\n          <strong>Důležitá poznámka pro začátečníky!</strong> Častější je použití tečkové notace nebo hranatých závorek pro vytvoření nebo úpravu vlastnosti. Např. <code>obj.a = 1</code> nebo <code>obj[a] = 1</code>. Protože to není zabudovaná metoda, tak to není ukázáno samostatně.",
                    example: "Object.defineProperty(obj, 'd', {<br>\n        <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n        <span>&nbsp;&nbsp;</span>configurable: true,<br>\n        <span>&nbsp;&nbsp;</span>writable: true,<br>\n        <span>&nbsp;&nbsp;</span>value: 4<br>\n        });<br>\n        <br>\n        console.log(obj.d);",
                    output: "4"
                }, {
                    name: "defineProperties",
                    shortDesc: "jednu nebo více vlastností nebo je upravovat",
                    desc: "Přidá jednu nebo více vlastností dle daného deskriptoru<br>\n          <br>\n          <strong>Důležitá poznámka pro začátečníky!</strong> Častější je použití tečkové notace nebo hranatých závorek pro vytvoření nebo úpravu vlastnosti. Např. <code>obj.a = 1</code> nebo <code>obj[a] = 1</code>. Protože to není zabudovaná metoda, tak to není ukázáno samostatně.",
                    example: "Object.defineProperties(obj, {<br>\n        <span>&nbsp;&nbsp;</span>d: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 4,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>},<br>\n        <span>&nbsp;&nbsp;</span>e: {<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>value: 5,<br>\n        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>writable: true<br>\n        <span>&nbsp;&nbsp;</span>}<br>\n        });<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3, d: 4, e: 5}"
                }],
                infoObj: [{
                    name: "isExtensible",
                    shortDesc: "jestli je možné přidat vlastnosti",
                    desc: "Zjistí jestli je objekt rozšiřitelný.",
                    example: "console.log(Object.isExtensible(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isExtensible(obj));",
                    output: "true<br>\n        false"
                }, {
                    name: "is",
                    shortDesc: "jestli dvě reference odkazují na stejný objekt",
                    desc: "Porovná jestli dvě reference odkazují na stejný objekt. Všechny NaN hodnoty považuje za ekvivalentní, tím se liší od Abstraktního (==) i Přísného (===) Porovnání. Tato funkce je trochu podivná a MDN dokumentace je krapet zavádějící.",
                    example: "let obj2 = {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        };<br>\n        <br>\n        console.log(Object.is(obj, obj2));<br>\n        console.log(Object.is(obj, obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isFrozen",
                    shortDesc: "jestli objekt a jeho vlastnosti jsou neupravitelné",
                    desc: "Zjistí jestli objekt je neměnný (frozen).",
                    example: "console.log(Object.isFrozen(obj));<br>\n        Object.freeze(obj);<br>\n        console.log(Object.isFrozen(obj));",
                    output: "false<br>\n        true"
                }, {
                    name: "isSealed",
                    shortDesc: "jestli objekt je neupravitelný, ale jeho vlastnosti jsou upravitelné",
                    desc: "Zjistí jestli objekt nebo jeho vlastnosti jsou neupravitelné (sealed).",
                    example: "Object.seal(obj);<br>\n        <br>\n        console.log(Object.isSealed(obj));",
                    output: "true"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "jestli je objekt v prototypovém řetězu.",
                    desc: "Vrátí boolean, který říká, jestli je objekt, na kterém je tato metoda volána, v prototypovém řetězu jiného objektu.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true",
                    useExample: "newExample"
                }],
                noChange: [{
                    name: "seal",
                    shortDesc: "zajistit, že vlastnosti nemohou být smazány ani přidány",
                    desc: "Zabrání jinému kódu smazání vlastností objektu. Existující vlastnosti mohou být upraveny.",
                    example: "Object.seal(obj);<br>\n        delete obj.c;<br>\n        <br>\n        console.log(obj);",
                    output: "{a: 1, b: 2, c: 3} // obj.c doesn't get deleted"
                }, {
                    name: "freeze",
                    shortDesc: "zajistit, že vlastnosti nemohou být smazány,přidány ani upravovány",
                    desc: "Zmrazí objekt tak, že jiný kód nemůže změnit nebo upravit jakoukoli vlastnost.",
                    example: "Object.freeze(obj);<br>\n        obj.a = 10;<br>\n        <br>\n        console.log(obj.a);",
                    output: '1 <span class="comment">//the value didn\'t update to 10</span>'
                }, {
                    name: "preventExtensions",
                    shortDesc: "zajistit, že další vlastnosti nemohou být přidány.",
                    desc: "Zabrání všem rozšířením objektu, ale nezabrání jejich smazání.",
                    example: "Object.preventExtensions(obj);<br>\n        obj.d = 4;<br>\n        <br>\n        console.log(obj.d);",
                    output: "undefined"
                }],
                createString: [{
                    name: "toString",
                    shortDesc: "řetězec reprezentující objekt.",
                    desc: "<code>toString()</code> metoda vrací řetězec reprezentující objekt.",
                    example: "console.log(obj.toString());<br>\n        console.log(obj.a.toString());",
                    output: '"[object Object]"<br>\n        "1"'
                }, {
                    name: "toLocaleString",
                    shortDesc: "localizovaný řetězec reprezentující objekt.",
                    desc: "<code>toLocaleString()</code> metoda vrací řetězec reprezentující objekt. Tato metoda je navržena tak, aby byla přepsána pro místní potřeby. Lidská verze: pokud máte něco, co má jiná data v závislosti na poloze, např. metody pro datum, tak to vrací jiný formát pro datumy podle místa.",
                    example: "obj.d = new Date();<br>\n        <br>\n        console.log(obj.d);<br>\n        console.log(obj.d.toLocaleString());",
                    output: "Fri Dec 29 2017 20:57:35 GMT-0700 (MST)<br>\n        12/29/2017, 8:57:35 PM"
                }],
                infoProp: {
                    details: [{
                        name: "getOwnPropertyDescriptor",
                        shortDesc: "podrobnosti o vlastnosti",
                        desc: "Vrátí deskriptor vlastnosti pro pojmenovanou vlastnost objektu.",
                        example: "const o = Object.getOwnPropertyDescriptor(obj, 'a');<br>\n          <br>\n          console.log(o);",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span>writable: true<br>\n          }"
                    }, {
                        name: "getOwnPropertyDescriptors",
                        shortDesc: "podrobnosti o všech vlastnostech objektu",
                        desc: "Vrátí objekt obsahující všechny vlastní deskriptory vlastností objektu.",
                        example: "console.log(Object.getOwnPropertyDescriptors(obj))",
                        output: "Object {<br>\n          <span>&nbsp;&nbsp;</span>a: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 1,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>b: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 2,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          <span>&nbsp;&nbsp;</span>c: Object {<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>configurable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>enumerable: true,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>value: 3,<br>\n          <span>&nbsp;&nbsp;</span><span>&nbsp;&nbsp;</span>writable: true<br>\n          <span>&nbsp;&nbsp;</span>},<br>\n          }"
                    }, {
                        name: "propertyIsEnumerable",
                        shortDesc: "jestli se vlastnost dostupná pro for...in cyklus",
                        desc: "Vrací boolean, který říká, jestli je interní ECMAScript [[Enumerable]] atribut nastaven. Tuto funkci lze použít pokud chceme zjistit jestli se jedná o vestavěnou nebo uživatelem definovanou metodu, protože vestavěné metody nemají enumerable nastaveno.",
                        example: "console.log(obj.propertyIsEnumerable('a'));<br>\n          console.log(Math.propertyIsEnumerable('random'));",
                        output: "true<br>\n          false"
                    }, {
                        name: "hasOwnProperty",
                        shortDesc: "jestli vlastnost existuje jako přímá vlastnost objektu",
                        desc: "Vrací boolean, který říká, jestli objekt obsahuje danou vlastnost jako přímou vlastnost, nikoli jako zděděnou z prototypového řetězu.",
                        example: "console.log(obj.hasOwnProperty('a'));<br>\n          delete obj.a;<br>\n          console.log(obj.hasOwnProperty('a'));",
                        output: "true<br>\n          false"
                    }],
                    list: [{
                        name: "keys",
                        shortDesc: "klíčů",
                        desc: "Vrátí pole klíčů obsahující jména všech klíčů objektu, kterými lze projít v cyklech, řazené tak, jak by byly projity v cyklu.",
                        example: "console.log(Object.keys(obj));",
                        output: '["a", "b", "c"]'
                    }, {
                        name: "values",
                        shortDesc: "hodnot",
                        desc: "Vrátí pole hodnot obsahující jména všech hodnot objektu, kterými lze projít v cyklech, řazené tak, jak by byly projity v cyklu.",
                        example: "console.log(Object.values(obj));",
                        output: "[1, 2, 3]"
                    }, {
                        name: "entries",
                        shortDesc: "klíčů a hodnot",
                        desc: "Vrací vnořené (nested) pole obsahující jména všech párů klíč-hodnota objektu, kterými lze projít v cyklech, řazené tak, jak by byly projity v cyklu.",
                        example: "console.log(Object.entries(obj));",
                        output: '[["a", 1], ["b", 2], ["c", 3]]'
                    }, {
                        name: "getOwnPropertyNames",
                        shortDesc: "klíčů, i když přes ně nelze procházet v cyclech",
                        desc: "Vrací pole obsahující jména všech počitatelných (enumerable) i nepočitatelných vlastností. Dělá to stejné jako <code>Object.keys()</code>, ale <code>getOwnPropertyNames()</code> zahrne i ty vlastnosti, které cykly vynechávají.",
                        example: "Object.defineProperty(obj, 'a', {<br>\n          <span>&nbsp;&nbsp;</span>enumerable: false<br>\n          });<br>\n          <br>\n          console.log(Object.keys(obj));<br>\n          console.log(Object.getOwnPropertyNames(obj));",
                        output: '["b", "c"]<br>\n          ["a", "b", "c"]'
                    }]
                },
                prototype: [{
                    name: "getPrototypeOf",
                    shortDesc: "získat prototyp objektu.",
                    desc: "Vrací prototyp daného objektu, hodnotu interní vlastnosti [[Prototype]].",
                    example: "const proto = Object.create(obj);<br>\n        console.log(Object.getPrototypeOf(proto) === obj);",
                    output: "true"
                }, {
                    name: "setPrototypeOf",
                    shortDesc: "nastavit prototyp objektu.",
                    desc: "Varování: Tato metoda je velmi pomalá. Používej tuto opatrně metodu nebo se jí vyhni přes <code>Object.create()</code>. Nastaví prototyp, hodnotu interní vlastnosti [[Prototype]].",
                    example: "const dict = Object.setPrototypeOf({}, obj);<br>\n        <br>\n        console.log(dict);",
                    output: "Object {<br>\n        <span>&nbsp;&nbsp;</span>a: 1,<br>\n        <span>&nbsp;&nbsp;</span>b: 2,<br>\n        <span>&nbsp;&nbsp;</span>c: 3<br>\n        }"
                }, {
                    name: "isPrototypeOf",
                    shortDesc: "zjistit jestli je objekt v prototypovém řetězu.",
                    desc: "Vrací boolean, který říká, jestli je objekt, na kterém je tato metoda volána, v protypovém řetězu daného objektu.",
                    example: "function Rect() {}<br>  \n        <br>\n        var rect = new Rect();<br>\n        <br>\n        console.log(Rect.prototype.isPrototypeOf(rect));",
                    output: "true"
                }]
            }
        }
    }
}, ["NHnr"]);
//# sourceMappingURL=app.f28d0ee30a7b544e38b0.js.map