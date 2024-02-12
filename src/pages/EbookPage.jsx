import { useEffect, useState } from "react";

export default function EbookPage() {
    const [ebook, setEbook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      fetch('http://3.65.32.166/api/v2/storefront/products/38')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(resp => {
          setEbook(resp.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
          setError(true);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error occurred while fetching ebook.</div>;

  return (
    <>
    <h1>EbookPage</h1>
    <h1>
      E-Book Title: 
      {ebook.attributes.book.title}
    </h1>
    <h2>
    number of Pages :
      {ebook.attributes.book.num_of_pages}
    </h2>
    <h2>
    number of chapters :
      {ebook.attributes.book.num_of_chapters}
    </h2>
    </>
  )
}
