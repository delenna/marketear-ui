<template>
    <div class="table-responsive">
        <MyTable
            :columns="columns"
            :use-row-selection="false"
            :url="'/campaign/'+$route.params.campaignId"
        >
            <template #slot-column-1="{ rowData }">
                <img :src="rowData.thumbnail" >
            </template>
        </MyTable>
    </div>
</template>
<script>
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
                    title: 'Thumbnail',
                    key: 1,
                },
                {
                    title: 'Creator',
                    dataIndex: 'username',
                    key: 2,
                },
                {
                    title: 'Views',
                    dataIndex: 'comment_count',
                    key: 3,
                },
                {
                    title: 'Comments',
                    dataIndex: 'collect_count',
                    key: 4
                },
            ],
        };
    }
})
</script>