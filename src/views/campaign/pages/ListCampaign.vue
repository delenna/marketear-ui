<template>
    <div class="py-4 container-fluid">
        <div class="mt-4 row">
            <div class="col-12">
                <div class="card">
                    <!-- Card header -->
                    <div class="card-header">
                        <h5 class="mb-0">Campaign List</h5>
                        <div class="row">
                            <div class="col my-2">
                                <argon-button @click="showModal">Create Campaign</argon-button>
                                <!-- <button class="btn btn-primary"></button> -->
                            </div>
                        </div>
                        <div class="table-responsive">
                            <!-- <a-table :data-source="dataSource" :columns="columns">
                                <template #bodyCell="{ column }">
                                    <template v-if="column.key == 'action'">
                                        <router-link class="btn btn-primary" :to="{ name: 'Campaign Detail'}">Detail</router-link>
                                    </template>
                                </template>
                            </a-table> -->
                            <MyTable
                                :columns="columns"
                                :use-row-selection="false"
                                :url="'/campaign'"
                            >
                                <template #slot-column-4="{ rowData }">
                                    <router-link class="btn btn-primary" :to="{ name: 'Campaign Detail', params: { campaignId: rowData.id }}">Detail</router-link>
                                </template>
                            </MyTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MDBModal
        id="exampleModal"
        v-model="visible"
        tabindex="-1"
        labelledby="exampleModalLabel"
    >
        <MDBModalHeader>
        <MDBModalTitle id="exampleModalLabel"> Create Campaign </MDBModalTitle>
        </MDBModalHeader>
        <MDBModalBody>
            <!-- Email input -->
            <MDBInput
                type="text"
                label="Name"
                wrapper-class="mb-4"
                v-model="form.title"
            />
            <!-- Password input -->
            <MDBInput
                v-for="(u, key) in form.url"
                :key="key"
                v-model="u.value"
                type="text"
                label="URL"
                wrapper-class="mb-4"
            />

            <MDBBtn color="primary" @click="addUrl">+</MDBBtn>
        </MDBModalBody>
        <MDBModalFooter>
        <MDBBtn color="secondary">Close</MDBBtn>
        <MDBBtn color="primary" @click="submitCampaign">Save changes</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
</template>
<script>
// import Table from "ant-design-vue/lib/table"; // for js
// import "ant-design-vue/lib/table/style/css"; // for css
import ArgonButton from "@/components/ArgonButton.vue";
import { ref, defineComponent } from "vue";
import {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
    MDBInput
  } from 'mdb-vue-ui-kit';
import MyTable from "../../../components/MyTable.vue";

// import axios from "axios";

export default defineComponent ({
    components: {
        // ATable: Table,
        ArgonButton,
        MDBModal,
        MDBModalHeader,
        MDBModalTitle,
        MDBModalBody,
        MDBModalFooter,
        MDBBtn,
        MDBInput,
        MyTable
    },
    setup() {
        const visible = ref(false);
        const form = ref({
            title: null,
            url: []
        });
        
        //Modal 
        const addUrl = () => {
            form.value.url.push("");
        };
        const showModal = () => {
            visible.value = true;
            console.log("clicked", visible.value)
        };
        
        const submitCampaign = async () => {
            console.log("submited", form.value);
            return;
            // try {
            //     const response = await axios.post("http://127.0.0.1:8000/api/tiktok/scrape", form.value);
            //     console.log("respone", response);
            // } catch (err) {
            //     console.log("err", err);
            // }
        };

        return {
            submitCampaign,
            addUrl,
            form,
            visible,
            showModal,
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
                    dataIndex: 'title',
                    key: 1,
                },
                {
                    title: 'Date',
                    dataIndex: 'created_at',
                    key: 2,
                },
                {
                    title: 'Total Post',
                    dataIndex: 'source',
                    key: 3,
                },
                {
                    title: 'Action',
                    key: 4,
                },
            ],
        };
    }
});
</script>