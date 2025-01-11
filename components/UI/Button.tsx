import { ReactNode } from "react";
import buttonStyles from "@/styles/components/UI/_button.module.scss"

const Button: React.FC<{ children: ReactNode, styles?: string }> = ({ children, styles = "" }) =>
	<button className={ `${ styles } ${ buttonStyles.button }` }> { children } </button>;

export default Button;