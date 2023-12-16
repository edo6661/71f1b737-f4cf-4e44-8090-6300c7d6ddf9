
import HydratedCategories from '../ui/categories/HydratedCategories';
import HydratedProducts from '../ui/products/HydratedProducts';


export default function Home() {

  return (
    <main>
      {/* <SearchBar /> */}
      <section className='scrollerContainer bg-white'>
        <HydratedCategories />
      </section>
      <section className='baseContainer py-4'>
        <HydratedProducts />
      </section>
    </main>
  )
}
