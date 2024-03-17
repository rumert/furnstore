import Slider from '@/components/homePage/Slider'
import Footer from '@/components/common/Footer'
import Categories from '@/components/homePage/Categories';
import Reviews from '@/components/homePage/Reviews';

export default function Home() {
  return (
    <div className='flex flex-col gap-4 md:gap-8'>
      <Slider />
      <Categories />
      <Reviews />
      <Footer />
    </div>
  );
}
