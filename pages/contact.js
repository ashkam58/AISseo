
import { SEO } from '@/components/SEO'
import { siteConfig } from '@/site.config'

export default function Contact(){
  return (
    <>
      <SEO title="Contact" description="Book a free demo or ask anything. Fast replies on WhatsApp." />
      <section className="section">
        <div className="container">
          <h1>Contact</h1>
          <p>Fastest: <a className="btn" href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20Ashkam%2C%20I%20want%20a%20FREE%20demo!`}>Chat on WhatsApp</a></p>
          <div className="card" style={{marginTop:16}}>
            <h3>Message form</h3>
            <form method="POST" action="https://formsubmit.co/your@email.com">
              <div style={{display:'grid',gap:'8px',maxWidth:520}}>
                <input required name="name" placeholder="Your Name" style={{padding:'10px',borderRadius:12,border:'1px solid #eee'}}/>
                <input required type="email" name="email" placeholder="Email" style={{padding:'10px',borderRadius:12,border:'1px solid #eee'}}/>
                <textarea required name="message" placeholder="Your message" rows={5} style={{padding:'10px',borderRadius:12,border:'1px solid #eee'}}/>
                <button className="btn" type="submit">Send</button>
              </div>
            </form>
            <p className="small" style={{marginTop:8}}>Or email us: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          </div>
        </div>
      </section>
    </>
  )
}
