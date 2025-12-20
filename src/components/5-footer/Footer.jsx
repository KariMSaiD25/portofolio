export default function Footer() {
  return (
    <footer className='flex items-center justify-between flex-wrap gap-4 mb-8 max-[800px]:flex-col max-[800px]:gap-6'>
    <ul className='flex items-center gap-6 text-gray-400 dark:text-gray-600 text-sm font-normal transition-all duration-300'>
      <li className='hover:text-accent-blue dark:hover:text-accent-blue-light hover:font-medium hover:text-base'><a href="">About</a></li>
      <li className='hover:text-accent-blue dark:hover:text-accent-blue-light hover:font-medium hover:text-base'><a href="">Projects</a></li>
      <li className='hover:text-accent-blue dark:hover:text-accent-blue-light hover:font-medium hover:text-base'><a href="">Speakings</a></li>
      <li className='hover:text-accent-blue dark:hover:text-accent-blue-light hover:font-medium hover:text-base'><a href="">Usres</a></li>
      
    </ul>
    <p className='text-zinc-500'> 2023 Karim Said. All rights reseved</p>

    </footer>
  )
}
