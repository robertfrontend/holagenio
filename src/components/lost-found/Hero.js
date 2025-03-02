const Hero = () => {
  return (
    <section className="px-4 py-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Boston&apos;s Lost & Found Central 🏙️🔍
      </h1>
      <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
        Reconnect with your lost belongings in Boston
      </p>
      <div className="max-w-xl mx-auto">
        <ul className="list-none space-y-2 text-center">
          <li>🐾 Reunite lost pets with their owners</li>
          <li>🔍 Search for misplaced personal items</li>
          <li>🦸 Be a hero - report items you&apos;ve found</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero