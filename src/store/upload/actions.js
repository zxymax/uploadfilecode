import types from './mutation-types';
import uploadFileAPI from '../../api/uploadFileAPI';

export default {
    openDialog({commit}, payload={}){
        commit(types.OPEN_DIALOG, payload)
        uploadFileAPI.getDataList(payload).then(data=>{
            console.log(data,'---------------data')
            data.page = payload.page;
            commit(types.INIT_GRIDTABLE, data.data);
        })
    },
    closeDialog({commit}){
        commit(types.CLOSE_DIALOG)
    },
    updateLimit({commit}, payload={}){
        commit(types.UPDATELIMIT, payload);
        payload.fileType = this.state.upload.uploadPars.fileType;
        payload.messageId = this.state.upload.uploadPars.messageId;
        payload.rows = this.state.upload.limit;
        payload.page = this.state.upload.currentPage;
        uploadFileAPI.getDataList(payload).then(data=>{
            data.page = state.upload.currentPage;
            commit(types.INIT_GRIDTABLE, data)
        })
    },
    deleteFile({commit}, payload={}){
        uploadFileAPI.deleteFile(payload).then(()=>{
            payload.fileType = this.state.upload.uploadPars.fileType;
            payload.messageId = this.state.upload.uploadPars.messageId;
            payload.rows = this.state.upload.limit;
            payload.page = this.state.upload.currentPage;
            uploadFileAPI.getDataList(payload).then(data=>{
                data.page = state.upload.currentPage;
                commit(types.INIT_GRIDTABLE, data)
            })
        })
    }

}