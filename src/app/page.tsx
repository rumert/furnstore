import SearchBar from '@/components/SearchBar'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'
import Categories from '@/components/Categories';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 md:gap-8'>
      <SearchBar />
      <Slider />
      <Categories />
      <Reviews />
      <Footer />
    </div>
  );
}
