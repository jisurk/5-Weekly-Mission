import { useCallback, useEffect, useState } from "react";

export function useFetch<T>(url: string): T | null {
  const [data, setData] = useState<T | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: T = await response.json();
        setData(data);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error("fetch에 실패했습니다.");
      setData(null);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return data;
}
