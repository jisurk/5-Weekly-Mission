import { useEffect, useState, useCallback } from "react";

interface UseSelectFolderProps {
  url: string;
}

/** 폴더리스트에서 url을 받아서 데이터를 리턴하는 함수 */
function useSelectFolder<T>({ url }: UseSelectFolderProps): T | null {
  const [data, setData] = useState<T | null>(null);

  const getLinkData = useCallback(async (): Promise<T | undefined> => {
    try {
      const response = await fetch(`${url}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("내용 불러오기 실패!");
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    async function fetchData() {
      const result = await getLinkData();
      setData(result || null);
    }
    fetchData();
  }, [getLinkData]);

  return data;
}

export default useSelectFolder;
