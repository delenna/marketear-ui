<template>
    <div class="table-responsive">
        <MyTable
            :columns="columns"
            :use-row-selection="false"
            :url="'/campaign/'+$route.params.campaignId+'/intent'"
        >
            <template #slot-column-3="{ rowData }">
                <select :value="rowData.sentiment" class="form-control">
                    <option>Negative</option>
                    <option>Neutral</option>
                    <option>Positive</option>
                </select>
            </template>
        </MyTable>
    </div>
</template>
<script>
// import Table from "ant-design-vue/lib/table"; // for js
// import "ant-design-vue/lib/table/style/css"; // for css
import { defineComponent } from "vue";
import MyTable from "../../../components/MyTable.vue";

export default defineComponent ({
    components: {
        MyTable,
    },
    setup() {
        return {
            columns: [
                {
                    title: 'Comment',
                    dataIndex: 'text',
                    key: 1,
                },
                {
                    title: 'Comment At',
                    dataIndex: 'comment_at',
                    key: 2,
                },
                {
                    title: 'Sentiment',
                    dataIndex: 'sentiment',
                    key: 3,
                },
            ],
        };
    }
})
</script>