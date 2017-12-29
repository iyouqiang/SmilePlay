import config from './ECNetwork/config';
import request from './ECNetwork/ecRequest';

// 这句话的意思：把当前文件作为一个模块导出，模块里面有这些子组件
// 以后导入这个模块的时候，就能获取了这个模块里面的东西.
module.exports = {
    config,
    request,
};
