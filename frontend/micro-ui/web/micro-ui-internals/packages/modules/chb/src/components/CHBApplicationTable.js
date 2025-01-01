import React from "react";
import { Table } from "@nudmcdgnpm/digit-ui-react-components";

const CHBApplicationTable = ({
  t,
  data,
  columns,
  globalSearch,
  onSearch,
  getCellProps,
  pageSizeLimit,
  totalRecords,
  currentPage,
  onNextPage,
  onPrevPage,
  onPageSizeChange,

}) => {
  return (
    <Table
      t={t}
      data={data}
      columns={columns}
      onSearch={onSearch}
      globalSearch={globalSearch}
      manualGlobalFilter={true}
      manualPagination={true}
      pageSizeLimit={pageSizeLimit}
      getCellProps={getCellProps}
      totalRecords={totalRecords}
      currentPage={currentPage}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      onPageSizeChange={onPageSizeChange}

    />
  )
}

export default CHBApplicationTable;