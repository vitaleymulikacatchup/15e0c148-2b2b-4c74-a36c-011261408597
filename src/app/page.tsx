"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { id: 'hero-image', url: 'https://images.pexels.com/photos/34239106/pexels-photo-34239106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'modern office workspace - Photo by Jakub Zerdzicki' },
  { id: 'about-image', url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Top view of a diverse team collaborating in an office setting with laptops and tablets, promoting cooperation.' },
  { id: 'testimonial-image', url: 'https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A man enjoying a hair wash with his eyes closed, experiencing relaxation at a barber shop.' },
  { id: 'contact-image', url: 'https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A woman working at a desk using a laptop and smartphone, exemplifying remote work.' }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: 'About', id: 'about' },
            { name: 'Features', id: 'features' },
            { name: 'Pricing', id: 'pricing' },
            { name: 'Contact', id: 'contact' }
          ]}
          brandName="SaaS Brand"
          buttonText="Join Now"
          buttonVariant="text-stagger"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Build Better Products"
            description="Create exceptional user experiences with our design system"
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[
              { text: 'Start Building', href: 'https://example.com' },
              { text: 'View Demo', href: 'demo' }
            ]}
            imagePosition="left"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "We're a team passionate about creating exceptional digital experiences.",
              "Our mission is to empower designers and developers."
            ]}
            buttons={[{ text: 'Learn More', href: 'about' }]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              { title: 'Advanced Analytics', description: 'Get insights into your business performance', imageSrc: assetMap.find(a => a.id === 'hero-image')?.url },
              { title: 'Seamless Integration', description: 'Connect effortlessly with other tools', imageSrc: assetMap.find(a => a.id === 'about-image')?.url }
            ]}
            title="Our Features"
          />
        </div>
      </div>
      <div id="pricing" data-section="pricing" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <PricingCardOne
            plans={[
              { id: 'basic', price: '$29/mo', subtitle: 'Great for small teams', features: ['5 users', 'Basic support'], badge: 'Basic', badgeIcon: '' },
              { id: 'pro', price: '$99/mo', subtitle: 'For growing businesses', features: ['10 users', 'Premium support'], badge: 'Pro', badgeIcon: '' }
            ]}
            title="Choose Your Plan"
          />
        </div>
      </div>
      <div id="testimonials" data-section="testimonials" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              { id: '1', name: 'Sarah Mitchell', role: 'Director of Operations', testimonial: 'The attention to detail and commitment to excellence was outstanding.', icon: 'Quote' }
            ]}
            title="Customer Reviews"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay updated with our latest news"
            description="Subscribe to our newsletter for weekly updates and exclusive content."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: 'Product', items: [{ label: 'Features', href: 'features' }, { label: 'Pricing', href: 'pricing' }] },
              { title: 'Company', items: [{ label: 'About Us', href: 'about' }, { label: 'Contact', href: 'contact' }] }
            ]}
            copyrightText="© 2025 | SaaS Brand"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
