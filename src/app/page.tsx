
import Link from 'next/link';
import HydratedCategories from '../ui/categories/HydratedCategories';
import HydratedProducts from '../ui/products/HydratedProducts';
import SearchBar from '../ui/search/SearchBar';


export default function Home() {

  return (
    <main>
      <SearchBar />
      <section>
        <Link href="addProduct">addProduct</Link>
        <HydratedCategories />
        <HydratedProducts />
      </section>
    </main>
  )
}
