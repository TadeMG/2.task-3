import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState("")
	const [operator, setOperator] = useState("")
	const [operand2, setOperand2] = useState("")

	const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

	const resultDisplay = () => {
		if (operand2.length !== 0 && operator === "+") {
			setOperand1(Number(operand1) + Number(operand2))
			setOperator("")
			setOperand2("")
		}

		if (operand2.length !== 0 && operator === "-") {
			setOperand1(Number(operand1) - Number(operand2))
			setOperator("")
			setOperand2("")
		}
	}

	return (
		<div className={styles.main}>
            <div className={styles["calc-container"]}>
				<p className={styles.screen}>{operand1} {operator} {operand2}</p>
				<div className={styles["button-container"]}>
					<button className={styles.button + " " + styles['reset-button']} onClick={() => {
						setOperand1("")
						setOperator("")
						setOperand2("")
					}}>C</button>
					<button className={styles.button} onClick={resultDisplay}>=</button>
					<button className={styles.button} onClick={() => {
						if (operand1.length !== 0) {
							setOperator("+")
						}
					}}>+</button>
					<button className={styles.button} onClick={() => {
						if (operand1.length !== 0) {
							setOperator("-")
						}
					}}>-</button>
					{NUMS.map((num, index) => <button
						className={styles.button}
						key={index}
						onClick={() => {
							if (operator.length === 0) {
								if (operand1 === "0") {
									setOperand1("")
								}

								setOperand1(prev => prev + num)
							} else {
								if (operand2 === "0") {
									setOperand2("")
								}
								
								setOperand2(prev => prev + num)
							}
						}}>{num}</button>)}
				</div>
			</div>
		</div>
	);
};
