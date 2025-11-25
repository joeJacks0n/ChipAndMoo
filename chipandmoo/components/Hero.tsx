export default function Hero() {
    return (
      <section className="max-w-3xl w-full text-center">
        <div className="flex justify-center mb-6">
          <img src="/images/logo.svg" alt="ChipAndMoo" className="w-28 h-28 animate-float" />
        </div>
  
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">ChipAndMoo</h1>
        <p className="text-lg md:text-xl text-slate-700 mb-8">Unique, beautifully styled dance bags for little girls</p>
  
        <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 inline-block animate-appear">
          <p className="mb-4">Our website is launching soon ✨</p>
        </div>
  
      </section>
    )
  }