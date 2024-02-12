import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function EbookCard({image_url, title, id, price}) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '1rem', marginBottom: '1rem' }}>
       <Link to="/ebook">
    <img src={image_url} alt={title} style={{ width: '100%', height: 'auto' }} />
    <h2 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
      <a href={`/products/${id}`} style={{ textDecoration: 'none', color: '#000' }}>{title}</a>
    </h2>
    </Link>
    <h2 style={{ marginBottom: '1rem' }}>Price: ${price}</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button style={{ backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', padding: '0.5rem  1rem' }}>Pay Now</button>
      <button style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', padding: '0.5rem  1rem' }}>Add to Cart</button>
    </div>
  </div>
  )
}
