import { useState } from "react";

const useSort = ({ data, config }) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
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
        break;
    }
  };

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

  return { sortBy, sortOrder, sortedData, setSortColumn };
};

export default useSort;
