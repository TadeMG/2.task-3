import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState("")
	const [operator, setOperator] = useState("")
	const [operand2, setOperand2] = useState("")
	const [result, setResult] = useState("")

	const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

	const operandHandler = (number) => {
		setResult("")

		if (operand1.length === 19 || operand2.length === 19) {
			return
		}

		if (!operator) {
			setOperand1(prev => {
				if(prev === '0'){
					return number
				}

				return prev + number
			})
		} else {
			setOperand2(prev => {
				if(prev === '0'){
					return number
				}

				return prev + number
			})
		}
	}

	const operatorHandler = (clickedOperator) => {
		if (operand2) {
			const result = operator === "+"
				? String(Number(operand1) + Number(operand2))
				: String(Number(operand1) - Number(operand2))

			setOperand1(result)
			setOperator("")
			setOperand2("")
		}

		if (result) {
			setOperand1(result)
			setResult("")
			setOperator(clickedOperator)
		}

		if (operand1) {
			setOperator(clickedOperator)
		}
	}

	const resultHandler = () => {
		if (!operand2) {
			return
		}

		const result = operator === "+"
		? String(Number(operand1) + Number(operand2))
		: String(Number(operand1) - Number(operand2))

		setResult(result)
		setOperand1("")
		setOperator("")
		setOperand2("")
	}

	const getScreenValue = () => {
		if (operator) {
			return operand2 || operand1
		}

		if (result) {
			return result
		}

		return operand1 || "0"
	}

	return (
		<div className={styles.main}>
            <div className={styles["calc-container"]}>
				<p className={styles.screen}>{getScreenValue()}</p>
				<div className={styles["button-container"]}>
					<button className={styles.button + " " + styles['reset-button']} onClick={() => {
						setOperand1("")
						setOperator("")
						setOperand2("")
						setResult("")
					}}>C</button>
					<button className={styles.button} onClick={resultHandler}>=</button>
					<button className={styles.button} onClick={() => operatorHandler("+")}>+</button>
					<button className={styles.button} onClick={() => operatorHandler("-")}>-</button>
					{NUMS.map((num, index) =>
						<button
						className={styles.button}
						key={index}
						onClick={() => operandHandler(num)}
						>{num}</button>)}
				</div>
			</div>
		</div>
	);
};
