<template>
    <a-table
      :data-source="dataSource"
      :columns="columns"
      :pagination="pagination"
      :loading="loading"
      :table-layout="'auto'"
      :ellipsis="true"
      :row-selection="useRowSelection ? rowSelection : null"
      :row-key="setRowKey"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, record, text }">
        <template v-for="n in totalColumn">
          <slot
            v-if="column.key == n - 1"
            :name="`slot-column-${n - 1}`"
            :row-data="record"
            :column-data="text"
          ></slot>
        </template>
      </template>
    </a-table>
  </template>
  <script>
  import Table from "ant-design-vue/lib/table"; // for js
  import "ant-design-vue/lib/table/style/css"; // for css
  import { usePagination } from "vue-request";
  import { computed, toRef, onMounted, unref, ref } from "vue";
  import { httpClientBot } from "@/libraries";
  import debounce from "lodash/debounce";
  import isEmpty from "lodash/isEmpty";
  import axios from "axios";
  export default {
    name: "BaseTable",
    components: {
      ATable: Table,
    },
    props: {
      columns: {
        type: Array,
        required: true,
      },
      moduleType: {
        type: String,
        default: "omni",
      },
      url: {
        type: String,
        required: true,
      },
      method: {
        type: String,
        default: "get",
      },
      useRowSelection: {
        type: Boolean,
        default: true,
      },
      perPage: {
        type: Number,
        default: 10,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
      // cache: {
      //   type: Boolean,
      //   default: false,
      // },
    },
    setup(props, { emit }) {
      const column = toRef(props, "columns");
      const moduleType = toRef(props, "moduleType");
      const url = toRef(props, "url");
      const method = toRef(props, "method");
    //   const emitter = inject("emitter");
    //   const perPage = toRef(props, "perPage");
      const currentPage = toRef(props, "currentPage");
      const totalColumn = 15;
      var params = {};
      var paging = ref(0);
      const queryData = (params) => {
        console.log("param data", params);
        console.log("initiate param", currentPage.value);
        if (moduleType.value == "omni") {
          if (method.value == "post") {
            return axios.post("http://127.0.0.1:8000/api" + url.value, {
              ...params,
            });
          } else if (currentPage.value.length > 0) {
            return axios.get("http://127.0.0.1:8000/api" + url.value, {
              params: {
                ...params,
                page: currentPage.value,
              },
            });
          } else {
            // console.log("payload params", params);
            return axios.get("http://127.0.0.1:8000/api" + url.value, {
              params: {
                ...params,
                // per_page: perPage.value,
              },
            });
          }
        } else {
          if (method.value == "post") {
            return httpClientBot.post("http://127.0.0.1:8000/api" + url.value, {
              ...params,
            });
          } else {
            return httpClientBot.get("http://127.0.0.1:8000/api" + url.value, {
              params,
            });
          }
        }
      };
      const {
        data: dataSource,
        run,
        loading,
        current,
        pageSize,
      } = usePagination(queryData, {
        formatResult: (res) => {
          paging.value = res.data.total;
          return res.data.data;
        },
        pagination: {
          currentKey: "page",
          pageSizeKey: "per_page",
          totalKey: "data.total",
        },
      });
      const pagination = computed(() => ({
        total: paging.value,
        current: current.value,
        pageSize: pageSize.value,
        // pageSize: perPage.value,
      }));
      const handleTableChange = (pag, filters, sorter) => {
        console.log("sorter", sorter);
        if (pag) {
          params.per_page = pag.pageSize;
          params.page = pag?.current;
        }
        if (filters) {
          params = { ...params, ...filters };
        }
        if (sorter && !isEmpty(sorter)) {
          params.sort = sorter.field + "|" + sorter.order.slice(0, -3);
        }
        // if (ex) {
        //   params.export = ex;
        // }
        // debounce(() => {
        //   run(params);
        // }, 500);
        console.log("get data page:");
        console.log(pag.current);
        console.log(filters);
        emit("currentPage", pag.current);
        onRun(params);
      };
      const onRun = debounce((v) => {
        run(v);
      }, 800);
      //  for checkbox
      // const state = reactive({
      //   selectedRowKeys: [],
      // });
      const selectedRowKeys = ref([]);
      const onSelectChange = (changableRowKeys) => {
        selectedRowKeys.value = changableRowKeys;
        emit("selectedData", changableRowKeys);
      };
      const rowSelection = computed(() => {
        console.log("get all data:");
        console.log(dataSource.value);
        return {
          selectedRowKeys: unref(selectedRowKeys),
          hideDefaultSelections: true,
          preserveSelectedRowKeys: false,
          onChange: onSelectChange,
        };
      });
      const setRowKey = (record) => {
        return record.hashed_id ? record.hashed_id : record.id;
      };
    //   const onFilter = debounce((val) => {
    //     handleTableChange(
    //       {
    //         current: 1,
    //       },
    //       val
    //     );
    //   }, 500);
    //   const onCustom = debounce((val) => {
    //     handleTableChange(
    //       {
    //         per_page: pageSize.value,
    //         current: val.page,
    //       },
    //       val.filter
    //     );
    //   }, 500);
    //   const onRefresh = debounce(() => {
    //     handleTableChange({
    //       pageSize: perPage.value,
    //       current: 1,
    //       // current: currentPage.value,
    //     });
    //   }, 500);
    //   const onSort = debounce((sort) => {
    //     handleTableChange(null, null, sort);
    //   }, 500);
      onMounted(() => {
        // emitter.on("table::onTableSearch", (val) => {
        //   handleTableChange(null, val);
        // });
        // emitter.on("table::onCustom", (val) => {
        //   onCustom(val);
        // });
        // emitter.on("table::onFilter", (val) => {
        //   onFilter(val);
        // });
        // emitter.on("table::onRefresh", () => {
        //   selectedRowKeys.value = false; // uncheck checkbox
        //   onRefresh();
        // });
        // emitter.on("table::onSort", (val) => {
        //   onSort(val);
        // });
      });
      return {
        dataSource,
        pagination,
        loading,
        column,
        handleTableChange,
        totalColumn,
        rowSelection,
        selectedRowKeys,
        setRowKey,
      };
    },
  };
  </script>
  <style lang="scss">
  .ant-table-cell-ellipsis {
    overflow-x: auto;
  }
  .ant-table-pagination.ant-pagination {
    margin: 16px;
  }
  .ant-table-thead,
  .ant-table-tbody {
    font-family: "Poppins", sans-serif;
  }
  </style>
  