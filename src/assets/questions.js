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