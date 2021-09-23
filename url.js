//开发
var version = "v0.01";
//正式
//const IP='www.bmpro.one';
// 测试
// const IP='192.168.124.22:8082'
// const IP='47.244.119.103'
const IP = 'testecsmart.xyz'
//登录帐号18674006013 
//正式
//const IP='www.mcex.one';
var ISHTTPS = true;
const webUrl = (ISHTTPS ? 'https://' : 'http://') + IP;
const websocketUrl = (ISHTTPS ? 'wss://' : 'ws://') + IP;
const slideURL = webUrl + "/search/downloadSlide?id=";
const currnecyURL = webUrl + "/search/currencyById?id=";
const currnecyNameURL = webUrl + "/search/currencyByName?name=";
const basePthURL = webUrl + "/search/download?path=";
export default {
    webUrl: webUrl,
    websocketUrl: websocketUrl,
    slideURL: slideURL,
    currnecyURL: currnecyURL,
    currnecyNameURL: currnecyNameURL,
    basePthURL: basePthURL,
    version: version
}