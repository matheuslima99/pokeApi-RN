import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useRequest<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function loadData() {
      const response = await api.get(url);
      setData(response.data);
    }

    loadData();
  }, []);

  return { data };
}
