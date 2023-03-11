<template>
    <div class="table-responsive">
        <a-table :data-source="dataSource" :columns="columns">
            <template #bodyCell="{ column }">
                <template v-if="column.key == 'action'">
                    <router-link class="btn btn-primary" :to="{ name: 'Campaign Detail'}">Detail</router-link>
                    <!-- <button class="btn btn-primary">Detail</button> -->
                </template>
            </template>
        </a-table>
    </div>
</template>
<script>
import Table from "ant-design-vue/lib/table"; // for js
import "ant-design-vue/lib/table/style/css"; // for css
import { defineComponent } from "vue";

export default defineComponent ({
    components: {
        ATable: Table,
    },
    setup() {
        return {
            dataSource: [
                {
                    key: '1',
                    name: 'Campaign Tolak Angin',
                    date: "10 Januari 2023",
                    total: '10',
                },
                {
                    key: '2',
                    name: 'Campaign Masuk angin',
                    date: "11 Januari 2023",
                    total: '3',
                },
                ],

                columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: 'Date',
                    dataIndex: 'date',
                    key: 'date',
                },
                {
                    title: 'Total Post',
                    dataIndex: 'total',
                    key: 'total',
                },
                {
                    title: 'Action',
                    key: 'action',
                },
            ],
        };
    }
})
</script>