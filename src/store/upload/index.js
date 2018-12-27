import mutations from './mutations';
import actions from './actions';
const state = {
    uploadId: 'afeirew21j321',
    chooseTab: 'upload', // 选项卡当前选中的选项
    fileList: [],//上传列表
    uploadPars: { // 上传参数
        messageId: '', // 一级类型
        fileType: ''    // 二级类型
    }, 
    gridData: [], // 文件上传table列表
    limit: 5,
    currentPage: 1,
    total: 100,
    dialogUploadVisible: false
}
const list = {
    state,
    mutations,
    actions
}
export default list