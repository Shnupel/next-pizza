import { FC } from "react";
import styles from "@/styles/pages/main/_productCart.module.scss";
import Button from "@/components/UI/Button";

const ProductCard: FC = () => {
	return (
		<div className={ styles.block } style={ { marginRight: "35px" } }>
			<img
				className={ styles.image }
				src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
				alt="Pizza"
			/>
			<h4 className={ styles.title }>Чизбургер-пицца</h4>
			<div className={ styles.selector }>
				<ul>
					<li className={ styles.active }>тонкое</li>
					<li>традиционное</li>
				</ul>
				<ul>
					<li className={ styles.active }>26 см.</li>
					<li>30 см.</li>
					<li>40 см.</li>
				</ul>
			</div>
			<div className={ styles.bottom }>
				<div className={ styles.price }>от 395 ₽</div>
				<Button styles={ styles.button }>
					<svg width={ 12 } height={ 12 } viewBox={ "0 0 12 12" } fill={ "none" }
					     xmlns={ "http://www.w3.org/2000/svg" }>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"/>
					</svg>
					<span>Добавить</span>
					<i>2</i>
				</Button>
			</div>
		</div>
	)
}

export default ProductCard;