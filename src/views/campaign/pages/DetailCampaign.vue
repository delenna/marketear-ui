<template>
    <div class="py-4 container-fluid">
        <div class="mt-4 row">
            <div class="col-12">
                <div class="card">
                    <!-- Card header -->
                    <div class="card-header">
                        <h5 class="mb-0">Campaign List</h5>
                    </div>
                    <div class="card-body">
                        <MDBTabs v-model="activeTabId1">
                            <!-- Tabs navs -->
                            <MDBTabNav tabsClasses="mb-3">
                            <MDBTabItem tabId="ex1-1" href="ex1-1">Metric</MDBTabItem>
                            <MDBTabItem tabId="ex1-2" href="ex1-2">List</MDBTabItem>
                            <MDBTabItem tabId="ex1-3" href="ex1-3">Intent</MDBTabItem>
                            </MDBTabNav>
                            <!-- Tabs navs -->
                            <!-- Tabs content -->
                            <MDBTabContent>
                            <MDBTabPane tabId="ex1-1">Content #1</MDBTabPane>
                            <MDBTabPane tabId="ex1-2">
                                <ListIntent />
                            </MDBTabPane>
                            <MDBTabPane tabId="ex1-3">
                                <ListUrlVue />
                            </MDBTabPane>
                            </MDBTabContent>
                            <!-- Tabs content -->
                        </MDBTabs>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ListIntent from "../components/ListIntent.vue";
import ListUrlVue from "../components/ListUrl.vue";
import { ref, defineComponent } from "vue";
import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  } from 'mdb-vue-ui-kit';

export default defineComponent ({
    components: {
        MDBTabs,
        MDBTabNav,
        MDBTabContent,
        MDBTabItem,
        MDBTabPane,
        ListIntent,
        ListUrlVue,
    },
    setup() {
        const activeTabId1 = ref('ex1-1');

      return {
        activeTabId1,
      };
    }
});
</script>