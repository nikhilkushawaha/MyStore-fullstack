import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import CarouselComponent from "../components/Carousel";

const categories = [
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpeg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.jpg" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	// { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			
			<div className='relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-5 py-4'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-customTan decoration-white mb-2'>
					Categories
				</h1>
				<p className='text-center text-xl text-costomGold mb-5'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<CarouselComponent/>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
