<template>
  <div>
    <h1>Home2</h1>
    <el-button
      type="text"
      size="small"
      @click="submitUpload('009deb17-2c97-41c0-a6ff-0cf0f3aef3e8', 'anlkgl')"
    >点击弹窗</el-button>
    <div class="header__logo">
      <a href="#">SegmentFault</a>
    </div>
    <upload-dialog ref="uploadialog"></upload-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState(["upload"])
  },
  data() {
    return {
      a: "b"
    };
  },
  methods: {
    submitUpload(fileId, fileType) {
      this.$refs.uploadialog.openDialog(fileId, fileType);
    }
  },
  mounted() {
   
// axios测试样例
    axios
      .get("/gov/tbEntRecordAccidentData/selectByQryPage", {
        page: 1, //当前第几页
        rows: 10, //每页显示多少条
        materialname: "",
        fkEntid: ""
      })
      .then(data => {
        console.log(data);
      });
    console.log("111");
  }
};
</script>




