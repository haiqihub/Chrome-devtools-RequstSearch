// 创建自定义面板，同一个插件可以创建多个自定义面板
// 几个参数依次为：panel标题、图标（其实设置了也没地方显示）、要加载的页面、加载成功后的回调
chrome.devtools.panels.create(
    'RequestSearch',
    'icons/icon-16.png',
    'panel.html',
    function (panel) {
        console.log('自定义面板创建成功！'); // 注意这个log一般看不到
    }
);

chrome.devtools.network.onRequestFinished.addListener(function (request) {
    request.getContent(function (content, encoding) {
        var url = request.request.url;
        if (
            /\.(kuaishou|kwaixiaodian)\.com/.test(url) &&
            !/data-track/.test(url)
        ) {
            chrome.runtime.sendMessage({
                name: 'panel',
                url: url,
                content: content,
                tabId: chrome.devtools.inspectedWindow.tabId,
            });
        }
    });
});
