// 问题都存储在这里
const HTML = "HTML";
const CSS = "CSS";
const JAVASCRIPT = "JavaScript";

const questions = [
    {
        type: HTML,
        question: "src和href的区别？",
        answer: "src和href都是用来引用外部的资源，它们的区别如下 src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。"
    },
    {
        type: HTML,
        question: "对HTML语义化的理解?",
        answer: "语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。语义化的优点如下：对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。常见的语义化标签：</header>  头部 </nav>  导航栏 </section>  区块（有语义化的div）</main>  主要区域 </article>  主要内容 </aside>  侧边栏 </footer>  底部"
    },
    {
        type: HTML,
        question: "DOCTYPE(⽂档类型) 的作⽤?",
        answer: "DOCTYPE是HTML5中一种标准通用标记语言的文档类型声明，它的目的是告诉浏览器（解析器）应该以什么样（html或xhtml）的文档类型定义来解析文档，不同的渲染模式会影响浏览器对 CSS 代码甚⾄ JavaScript 脚本的解析。它必须声明在HTML⽂档的第⼀⾏。浏览器渲染页面的两种模式（可通过document.compatMode获取，比如，语雀官网的文档类型是CSS1Compat）：CSS1Compat：标准模式（Strick mode），默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。BackCompat：怪异模式(混杂模式)(Quick mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。"
    },
    {
        type: HTML,
        question: "script标签中defer和async的区别?",
        answer: "如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析，其区别如下：执行顺序： 多个带async属性的标签，不能保证加载的顺序；多个带defer属性的标签，按照加载顺序执行；脚本是否并行执行：async属性，表示后续文档的加载和执行与js脚本的加载和执行是并行进行的，即异步执行；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。。"
    },
    {
        type: HTML,
        question: "常⽤的meta标签有哪些?",
        answer: ""
    },
    {
        type: HTML,
        question: "",
        answer: ""
    },
    {
        type: CSS,
        question: "CSS选择器及其优先级?",
        answer: "标签选择器、伪元素选择器：1 类选择器、伪类选择器、属性选择器：10 id 选择器：100 内联样式：1000"
    },
    {
        type: JAVASCRIPT,
        question: "JavaScript有哪些数据类型，它们的区别?",
        answer: "JavaScript共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt"
    }
];

export default questions;