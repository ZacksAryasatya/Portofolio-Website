import image1 from '@/assets/images/image1.png'
import image2 from '@/assets/images/image2.png'
import image3 from '@/assets/images/image3.png'
import image4 from '@/assets/images/image4.png'
import image5 from '@/assets/images/image5.png'
import image6 from '@/assets/images/image6.png'
import image7 from '@/assets/images/image7.png'
import image8 from '@/assets/images/image8.png'
import image9 from '@/assets/images/image9.png'
import image10 from '@/assets/images/image10.png'
import image11 from '@/assets/images/image11.png'
import image12 from '@/assets/images/image12.png'
import image13 from '@/assets/images/image13.png'
import image14 from '@/assets/images/image14.png'
import image15 from '@/assets/images/image15.png'

import wiaImage1 from '@/assets/images/WIA/image1.png'
import wiaImage2 from '@/assets/images/WIA/image2.png'
import wiaImage3 from '@/assets/images/WIA/image3.png'
import wiaImage4 from '@/assets/images/WIA/image4.png'
import wiaImage5 from '@/assets/images/WIA/image5.png'
import wiaImage6 from '@/assets/images/WIA/image6.png'

export interface Project {
  slug: string
  title: string
  shortDescription: string
  description: string
  techStack: string[]
  liveUrl?: string
  repoUrl?: string
  imageUrl: string
  gallery?: string[]
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: 'ecommerce-dashboard',
    title: 'GO-BAROKAH: Integrated ERP, POS & E-Commerce System',
    shortDescription: 'A comprehensive web application unifying Customer E-Commerce, Admin POS, and Owner ERP into one platform.',
    description: 'Built with React and Tailwind CSS, this system digitalizes daily store operations through three dedicated portals. Customers can easily browse products, manage their cart, and checkout. Admins are provided with a Point of Sales (POS) interface to seamlessly manage incoming orders and track inventory. Finally, the Owner portal acts as a mini ERP, featuring an interactive financial dashboard to monitor revenue, net profit, cash flow, and operational expenses. It is a complete end-to-end solution for modernizing MSME businesses.',
    techStack: ['React.js', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/ecommerce-dashboard',
    imageUrl: image6,
    gallery: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15
    ]
  },
  {
    slug: 'wia-mia-umkm',
    title: 'GrowUMKM: Website Promosi UMKM',
    shortDescription: 'A promotional web platform for local MSMEs, built for the Web In Action (Multimedia In Action 2025: Empowering Visionaries, Impacting Industries by KSM Multimedia UPNVJ) competition.',
    description: 'A dedicated web platform designed to promote local Micro, Small, and Medium Enterprises (MSMEs). Developed specifically for the Web In Action (Multimedia In Action 2025: Empowering Visionaries, Impacting Industries by KSM Multimedia UPNVJ) competition, this project focuses on creating an engaging, accessible, and visually appealing digital storefront to help local businesses showcase their products and reach a wider digital audience.',
    techStack: ['React.js', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/example/wia-mia',
    imageUrl: wiaImage1,
    gallery: [
      wiaImage1,
      wiaImage2,
      wiaImage3,
      wiaImage4,
      wiaImage5,
      wiaImage6
    ]
  },
]
