//注入标识
console.log(
    `%c RequestSearch %c cs注入 %c `,
    'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
);

function logGreen(key, value) {
    console.log(
        `%c RequestSearch %c ${key}: %c %o`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent',
        value
    );
}
/**
 *
 * @param {*} key
 * @param {*} value  一般为object 仅为查找需要 所以转为json 默认展开可以搜索
 */
function logPurple(key, value) {
    console.log(
        `%c RequestSearch %c ${key}: %c %o`,
        'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
        'background:#ea81e3 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
        'background:transparent',
        value && JSON.stringify(value)
    );
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.type === 'sendRequestData') {
        logGreen('url', message.url);
        logPurple('response', message.data);

        // document.getElementById('url').innerHTML = message.url;
        // document.getElementById('response').innerHTML = JSON.parse(
        //     message.data
        // );

        // // 创建一个新的div元素
        // const div = document.createElement('div');

        // // 将文本节点添加到div元素中
        // div.innerHTML = message.url;

        // // 将div元素添加到文档中
        // document.body.appendChild(div);

        // sendResponse({ result: 'success' });
    }
});
