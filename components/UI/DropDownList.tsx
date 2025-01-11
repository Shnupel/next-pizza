'use client'

import { FC, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import styles from "@/styles/components/UI/_dropDownList.module.scss";

interface Option {
	value: string
	label: string
}

interface Props {
	options: Option[]
	onChange?: (value: Option) => void
	listTitle: ReactNode
	styles?: string
}

const DropDownList: FC<Props> = ({ options, onChange, listTitle }) => {
	const [selectedOption, setSelect] = useState<Option>(options[0]);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleChange = (option: Option) => {
		setSelect(option);
		setIsOpen(false);
		if (onChange) {
			onChange(option);
		}
	}

	const dropdownVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.05
			}
		}
	}

	const optionVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: { opacity: 1, x: 0 }
	}

	return (
		<div className={ `${ styles.dropDownList } ${ styles || "" }` }>
			<motion.div
				onClick={ () => setIsOpen(!isOpen) }
				whileTap={ { scale: 0.98 } }
			>
				<div className={ styles.title }>{ listTitle }</div>
			</motion.div>
			<AnimatePresence>
				{ isOpen && (
					<motion.ul
						className={ styles.ul }
						variants={ dropdownVariants }
						initial="hidden"
						animate="visible"
						exit="hidden"
					>
						{ options.map((option) => (
							<motion.li
								key={ option.value }
								variants={ optionVariants }
								className="px-4 py-2 cursor-pointer hover:bg-gray-100"
								onClick={ () => handleChange(option) }
								whileHover={ { backgroundColor: '#f3f4f6' } }
								whileTap={ { scale: 0.98 } }
							>
								{ option.label }
							</motion.li>
						)) }
					</motion.ul>
				) }
			</AnimatePresence>
		</div>
	)
}

export default DropDownList;