import EbookCard from "./EbookCard";
import style from "./EbookStyle.module.css";
import { useEffect, useState } from "react";

export default function Ebooks() {
  const [ebooks, setEbooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book&fbclid=IwAR0QhVDyt8md6ttQmT4PG5tmcw-dRX56qJlZppOf76TPaTk2yvzjI7xQ-OI')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(resp => {
        setEbooks(resp.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred while fetching ebooks.</div>;
    

  return (
    <>
    <h1>EXPLORE OUR E-BOOKS</h1>
    <div className={style.container}>
    <div>
      {ebooks.map((ebook) => (
        <EbookCard
          key={ebook.id}
          title={ebook.attributes.book.title}
          image_url={ebook.attributes.book.image_url}
          id={ebook.id}
          price={ebook.attributes.price}
        />
      ))}
    </div>
    </div>
    </>
  )
}
