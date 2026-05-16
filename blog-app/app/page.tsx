import FeaturedPosts from '@/components/home/featured-posts'
import Hero from '@/components/home/home'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import Newsletter from '@/components/layout/newsletter'
import React from 'react'

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedPosts />
      <Newsletter />
      <Footer />
    </main>
  )
}

export default HomePage