import SortBar from "@/components/pages/main/SortBar";
import ProductCard from "@/components/pages/main/ProductCard";

import styles from "@/styles/pages/main/_main.module.scss";

export default function Home() {
	return (
		<>
			<div className={ styles.content }>
				<div className="container">
					<SortBar/>
					<h2 className={ styles.title }>Все пиццы</h2>
					<div className={ styles.cards }>
						<ProductCard/>
						<ProductCard/>
						<ProductCard/>
						<ProductCard/>
						<ProductCard/>
						<ProductCard/>
					</div>
				</div>
			</div>
		</>
	);
}
