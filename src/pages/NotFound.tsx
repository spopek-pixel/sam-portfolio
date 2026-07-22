import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl">404</h1>
      <Link to="/" className="text-violet-tint underline">
        Back home
      </Link>
    </div>
  )
}
