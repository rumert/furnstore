import SearchBar from '@/components/SearchBar'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'
import Categories from '@/components/Categories';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 md:gap-8'>
      <SearchBar />
      <Slider />
      <Categories />
      <Footer />
    </div>
  );
}
