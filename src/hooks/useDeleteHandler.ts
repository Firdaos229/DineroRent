"use client";

import { useState } from "react";

export function useDeleteHandler<T extends { id: string | number }>(initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);

  const handleDelete = (item: T) => {
    // Use type guard to check if `name` exists
    const itemName = typeof (item as { name?: string }).name === 'string' 
      ? (item as { name?: string }).name 
      : "this item";

    const confirmDelete = confirm(`Are you sure you want to delete "${itemName}"?`);
    if (!confirmDelete) return;

    setData((prev) => prev.filter((el) => el.id !== item.id));
  };

  return {
    data,
    handleDelete,
    setData,
  };
}
