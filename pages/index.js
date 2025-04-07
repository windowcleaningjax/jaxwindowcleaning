
export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: '#eef6ff', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#1a73e8' }}>Jax Window Cleaning</h1>
      <p style={{ fontSize: '20px', marginBottom: '30px' }}>Affordable. Reliable. Honest. Streak-Free.</p>
      <section>
        <h2>Our Services</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', margin: '20px 0' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px 20px', backgroundColor: '#fff' }}>Exterior & Interior Window Cleaning</div>
          <div style={{ border: '1px solid #ccc', padding: '10px 20px', backgroundColor: '#fff' }}>Screen Cleaning</div>
          <div style={{ border: '1px solid #ccc', padding: '10px 20px', backgroundColor: '#fff' }}>Track Cleaning</div>
          <div style={{ border: '1px solid #ccc', padding: '10px 20px', backgroundColor: '#fff' }}>Seal Cleaning</div>
          <div style={{ border: '1px solid #ccc', padding: '10px 20px', backgroundColor: '#fff' }}>Gutter Cleaning</div>
        </div>
      </section>
      <section style={{ marginTop: '40px' }}>
        <h2>Request a Free Quote</h2>
        <form name="quote" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="quote" />
          <input type="text" name="name" placeholder="Your Name" required /><br />
          <input type="text" name="phone" placeholder="Phone Number" required /><br />
          <input type="text" name="zip" placeholder="ZIP Code" required /><br />
          <button type="submit">Submit</button>
        </form>
      </section>
      <footer style={{ marginTop: '60px', fontSize: '14px' }}>
        <p>Contact: 904-549-3825 | jaxwindowcleaningllc@gmail.com</p>
      </footer>
    </main>
  );
}
