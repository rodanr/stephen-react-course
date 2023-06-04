/* eslint-disable react/prop-types */
import Table from "./Table";
import { useState } from "react";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

const SortableTable = (props) => {
  const { data, config } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    setSortBy(label);

    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        break;
      case "asc":
        setSortOrder("desc");
        break;
      case "desc":
        setSortOrder(null);
        setSortBy(null);
    }
  };

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
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label} IS SORTABLE
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string")
        return valueA.localeCompare(valueB) * reverseOrder;
      else return (valueA - valueB) * reverseOrder;
    });
  }

  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
};

export default SortableTable;
