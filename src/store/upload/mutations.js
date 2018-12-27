import types from './mutation-types';

export default {
    [types.OPEN_DIALOG](state, payload){
        state.dialogUploadVisible = true; // 打开弹窗
        state.uploadPars.messageId = payload.messageId; // 附件id
        state.uploadPars.fileType = payload.fileType; // 附件类型

    },
    [types.CLOSE_DIALOG](state){
        state.dialogUploadVisible = false; // 关闭弹窗
    },
    [types.INIT_GRIDTABLE](state, payload){
        state.gridData = payload.data.rows;
        state.total = payload.data.total;
        state.currentPage = payload.page;
    },
    [types.UPDATELIMIT](state, payload){
        state.limit = payload.limit;
    }
}