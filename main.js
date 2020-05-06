function encodeURIForChinese(url) {

    let chineseArray = url.match(/[^\x00-\xff]+/ig);

    for (let i = chineseArray.length - 1; i >= 0; i--) {

        url = url.replace(chineseArray[i], encodeURIComponent(chineseArray[i]));

    }

    return url;

}
