export default function Custom500() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">500 - Server Error</h1>
      <p className="mt-4">Sorry, something went wrong on our server.</p>
      <a href="/" className="mt-8 underline">Go back home</a>
    </div>
  )
} 