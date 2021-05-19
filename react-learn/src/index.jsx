import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// const h1 = (
//     <>
//         <h1> hello world < span > span元素 </span></h1>
//         <p>sdfsdf</p>
//     </>
// );

// ReactDOM.render(h1, document.getElementById("root"));

// const img = (
//     <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qnong.com.cn%2Fuploadfile%2F2016%2F1210%2F20161210035738853.jpg&refer=http%3A%2F%2Fwww.qnong.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624029671&t=a5b73c07422c36a0289954d0cc103a6e" alt=""/>
// );

// const a = 1234, b = 4321;

// const obj={
//     a:1,
//     b:2,
// }

// const numbers = new Array(30);
// numbers.fill(0);
// const lis = numbers.map((item,i)=>{
//     return (<li key={i}>{i}</li>)
// })

// const arr = [1,2,34,4,4545,5]

// const div = (
//     <h1>
//         { a} * { b} = {a * b}
//         <p>
//             {null}
//             {undefined}
//             {false}
//             {0}
//         </p>
//         <p>
//             {/* {obj} */}
//             {arr}
//         </p>
//         <ul>
//             {lis}
//         </ul>
//     </h1>

// );

// const url = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.qnong.com.cn%2Fuploadfile%2F2016%2F1210%2F20161210035738853.jpg&refer=http%3A%2F%2Fwww.qnong.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624029671&t=a5b73c07422c36a0289954d0cc103a6e"
// const classname = "image"
// const div = (
//     <div>
//         <img src={url} className={classname} style={
//             {
//                 marginLeft: "50px",
//                 width: "200px"
//             }
//         } alt="" />


//     </div>
// );

const content = "<h1>afasfasfd</h1><p>阿斯顿法定发送</p>";

const div = (
    <div dangerouslySetInnerHTML={{ __html: content }}>

    </div>
    // <div>
    //     {content}
    // </div>
);

ReactDOM.render(div, document.getElementById("root"));

// let num = 1;


// setInterval(() => {
//     num++;
//     const div = (
//         <div>
//             {num}
//         </div>
//     );
//     ReactDOM.render(div, document.getElementById("root"));
// }, 1000)