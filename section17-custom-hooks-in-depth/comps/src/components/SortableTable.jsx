/* eslint-disable react/prop-types */
import useSort from "../hooks/use-sort";
import Table from "./Table";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

const SortableTable = (props) => {
  const { data, config } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort({
    data,
    config,
  });

  const getIcons = (label, sortBy, sortOrder) => {
    const upDownIcon = (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );

    if (label !== sortBy) return upDownIcon;

    switch (sortOrder) {
      case null:
        return upDownIcon;
      case "asc":
        return <GoArrowSmallUp />;
      case "desc":
        return <GoArrowSmallDown />;
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
};

export default SortableTable;
