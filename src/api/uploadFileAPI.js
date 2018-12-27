import axios from 'axios';

const uploadFileAPI = {
    getDataList(params) {
        return axios.get('common/file/findFileByPK', {
            params
        })
    },
    deleteFile(params){
        return axios.delete('common/file/deleteFile', {
            params: {
                filePath: params.filepath
            }
        })
    }
};

export default uploadFileAPI;