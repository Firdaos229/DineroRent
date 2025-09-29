"use client";

import { useState } from "react";

export function useDeleteHandler<T extends { id: string | number }>(initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);

  const handleDelete = (item: T) => {
    const confirmDelete = confirm(`Are you sure you want to delete "${(item as any).name || "this item"}"?`);
    if (!confirmDelete) return;

    setData((prev) => prev.filter((el) => el.id !== item.id));
  };

  return {
    data,
    handleDelete,
    setData, 
  };
}
