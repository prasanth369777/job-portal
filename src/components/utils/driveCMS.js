
import { useState, useEffect } from 'react';

export const useDriveCMS = (sheetUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!sheetUrl || !window.Papa) return;

    const fetchData = async () => {
      try {
        const response = await fetch(sheetUrl);
        const csvText = await response.text();

        window.Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data);
            setLoading(false);
          },
        });
      } catch (error) {
        console.error("CMS Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [sheetUrl]);

  return { data, loading };
};