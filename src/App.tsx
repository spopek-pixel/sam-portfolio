import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { RootLayout } from '@/components/layout/RootLayout'
import { lazyWithRetry } from '@/lib/lazyWithRetry'

const Home = lazyWithRetry(() => import('@/pages/Home'))
const Work = lazyWithRetry(() => import('@/pages/Work'))
const ProjectDetail = lazyWithRetry(() => import('@/pages/ProjectDetail'))
const About = lazyWithRetry(() => import('@/pages/About'))
const Contact = lazyWithRetry(() => import('@/pages/Contact'))
const NotFound = lazyWithRetry(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}
