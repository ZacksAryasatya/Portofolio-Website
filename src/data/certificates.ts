import cert1 from '@/assets/images/Sertifikat/Belajar AI dicoding1.jpg'
import cert2 from '@/assets/images/Sertifikat/Belajar AI dicoding2.png'
import cert3 from '@/assets/images/Sertifikat/WIA.jpg'
import cert4 from '@/assets/images/Sertifikat/dicoding pemograman.jpg'
import cert5 from '@/assets/images/Sertifikat/dinacom.jpg'
import cert6 from '@/assets/images/Sertifikat/timedoor.jpg'

export interface Certificate {
  id: string
  title: string
  issuer: string
  category: string
  imageUrl: string
  galleryImageUrls?: string[]
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'wia-2025',
    title: 'Web In Action (Multimedia In Action 2025)',
    issuer: 'KSM Multimedia UPNVJ',
    category: 'Competition',
    imageUrl: cert3,
  },
  {
    id: 'dinacom',
    title: 'DINACOM Competition Certificate',
    issuer: 'DINACOM',
    category: 'Competition',
    imageUrl: cert5,
  },
  {
    id: 'dicoding-pemrograman',
    title: 'Dasar Pemrograman Certificate',
    issuer: 'Dicoding Indonesia',
    category: 'Course',
    imageUrl: cert4,
  },
  {
    id: 'dicoding-ai',
    title: 'Belajar AI & Data',
    issuer: 'Dicoding Indonesia',
    category: 'Course',
    imageUrl: cert1,
    galleryImageUrls: [cert1, cert2],
  },
  {
    id: 'timedoor',
    title: 'Timedoor Academy Certificate',
    issuer: 'Timedoor Academy',
    category: 'Course',
    imageUrl: cert6,
  },
]
