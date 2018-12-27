<template>
  <el-dialog title="文件上传" :visible="dialogUploadVisible" @close="closeDialog" width="50%">
      <el-row>
        <el-tabs type="border-card" :value="chooseTab" @tab-click="handleClick">
            <el-tab-pane label="上传" name="upload">
                <el-upload
                        class="upload-demo"
                        ref="upload"
                        :action="uploadurl"
                        :on-success="onsuccess"
                        :on-error="onerror"
                        :file-list="fileList"
                        :data="uploadPars"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-tab-pane>
            <el-tab-pane label="已上传文件" name="uploadList">
                <el-table :data="gridData">
                    <el-table-column property="attachname" label="附件名称" width="280"></el-table-column>
                    <el-table-column property="attachsize" label="附件大小" width="240"></el-table-column>
                    <el-table-column property="attachsuffix" label="文件类型" width="150"></el-table-column>
                    <el-table-column label="操作" width="200" align="center">
                        <template slot-scope="scope">
                            <el-button
                            type="danger"
                            size="mini"
                            @click="del(scope.$index, scope.row)"
                            >刪除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-row type="flex" justify="end" style="padding-top:20px" >
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[5, 10, 20, 30]"
                            :page-size="limit"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total">
                    </el-pagination>
                </el-row>
            </el-tab-pane>
        </el-tabs>
      </el-row>
  </el-dialog>
</template>
<script>
import {mapState} from 'vuex'
import apiServerPath from "../config"
export default {
  computed: {
      ...mapState({
          chooseTab: state => state.upload.chooseTab,
          fileList: state => state.upload.fileList,
          uploadPars: state => state.upload.uploadPars,
          gridData: state => state.upload.gridData,
          limit: state => state.upload.limit,
          currentPage: state => state.upload.currentPage,
          total: state => state.upload.total,
          dialogUploadVisible: state => state.upload.dialogUploadVisible
      })
      
  },
  data: () => ({
    activeName: '',
    uploadurl: apiServerPath + "/common/file/uploadFile"
  }),
  methods: {
    handleClick() {},
    openDialog(fileId, fileType){
        console.log(fileId, fileType)
        this.$store.dispatch("openDialog", {
            messageId: fileId,
            fileType,
            rows: this.limit,
            page: this.uploadPars.fileType === fileType ? this.currentPage : 1
        })
    },
    closeDialog() {
      //关闭上传窗口
      this.$store.dispatch("closeDialog");
    },
    del(index, row) {
        this.$confirm('是否刪除', '提示', {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
        }).then(()=>{
            this.$store.dispatch('deleteFile', {
                filepath: row.filepath
            })
        })
    },
    submitUpload(){
        // 点击上传
        this.$refs.upload.submit()
    },
    onsuccess(response, file) {
        // 上传成功
        this.$message({
            message: `${file.name}上传成功`,
            type: 'success',
            duration: 1000
        })
    },
    onerror() {
        this.$message.error('上传失败')
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    }
  },
  mounted(){
      console.log(this.$store)
      
  }
};
</script>
<style scoped>
.has-gutter th {
  background-color: #2884ff;
}
.el-dialog {
  padding: 10px 0;
}
div > .el-card.is-always-shadow {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  min-height: 100%;
}
div.el-card {
  border: 0;
}
.save-box {
  text-align: center;
  padding-bottom: 60px;
}
.save {
  margin-right: 20px;
  height: 30px;
  line-height: 6px;
}
.page {
  margin-right: 20px;
}
.model {
  padding-top: 0 20px;
}
.list {
  display: flex;
  margin-bottom: 15px;
}
.model label {
  width: 140px;
  height: 40px;
  line-height: 40px;
  display: block;
  font-size: 14px;
  text-align: right;
  padding-right: 10px;
}
.submit {
  text-align: center;
}
.el-icon-edit {
  font-size: 18px;
  margin-right: 20px;
  color: #2884ff;
  cursor: pointer;
}
.el-icon-delete {
  font-size: 18px;
  color: #fd3f45;
  cursor: pointer;
}
.el-icon-download {
  font-size: 18px;
  cursor: pointer;
}
.el-form-item {
  width: 100%;
}
.el-form-item .el-row {
  display: flex;
}
.f-ipt {
  flex: 1;
}
.el-form-item__content {
  height: 45px;
}
.list .el-row {
  margin-bottom: 0;
}
</style>


