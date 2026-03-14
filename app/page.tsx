import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import Services      from '@/components/Services'
import QuoteBanner   from '@/components/QuoteBanner'
import Portfolio     from '@/components/Portfolio'
import Team          from '@/components/Team'
import Testimonials  from '@/components/Testimonials'
import Blog          from '@/components/Blog'
import FAQ           from '@/components/FAQ'
import CTASection    from '@/components/CTASection'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <main style={{ background: 'rgb(255,255,255)' }}>
      <Navbar />
      <Hero />
      <Services />
      <QuoteBanner />
      <Portfolio />
      <Team />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
