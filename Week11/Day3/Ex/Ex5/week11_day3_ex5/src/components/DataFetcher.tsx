import React, { useState, useEffect } from 'react';

// Определите тип данных, которые вы ожидаете получить
interface Post {
  title: string;
  body: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Использование переменной error

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
    </div>
  );
};

export default DataFetcher;
