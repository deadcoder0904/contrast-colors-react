import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const randomNumber = (min,max) =>  Math.random() * (max - min) + min

const calc = (x,min,max) => {
	const rand = randomNumber(min,max)
	const xInt = parseInt(x)
	const val = (xInt + rand) % max
	return parseInt(val.toFixed(2))
}

const calcHue = x => calc(x,100,255)

const calcSatAndLig = x => calc(x,50,100)

const calcOpa = () => {
	return parseFloat(randomNumber(0.5,1).toFixed(2))
}

class ContrastColors extends Component {
	constructor() {
		super()
		this.state = {
			style: {
				bgHue: 60,
				bgSat: 74,
				bgLig: 44,
				bgOpa: 1,
				fgHue: 251,
				fgSat: 100,
				fgLig: 55,
				fgOpa: 0.7,
				backgroundColor: 'hsla(60, 74%, 44%, 1)',
				color: 'hsla(251, 100%, 55%, 0.7)'
			}
		}
		this.randomColor = this.randomColor.bind(this)
	}

	randomColor() {
		const [ bgHue, bgSat, bgLig, bgOpa ] = [ calcHue(this.state.style.bgHue), calcSatAndLig(this.state.style.bgSat), calcSatAndLig(this.state.style.bgLig), calcOpa()]
		const [ fgHue, fgSat, fgLig, fgOpa ] = [ calcHue(this.state.style.fgHue), calcSatAndLig(this.state.style.fgSat), calcSatAndLig(this.state.style.fgLig), calcOpa()]
		this.setState({
			style: {
				bgHue,
				bgSat,
				bgLig,
				bgOpa,
				fgHue,
				fgSat,
				fgLig,
				fgOpa,
				backgroundColor: `hsla(${bgHue}, ${bgSat}%, ${bgLig}%, ${bgOpa})`,
				color: `hsla(${fgHue}, ${fgSat}%, ${fgLig}%, ${fgOpa})`
			}
		})
	}

	render() {
		const backgroundColor = this.state.style.backgroundColor
		const color = this.state.style.color
		return (
				<div id="react-app" style={{backgroundColor}}>
					<h1 style={{color}}>Contrast Colors React</h1>
					<h3>Background Color : <span className="color">{backgroundColor}</span></h3>
					<button id="btn" onClick={this.randomColor}>Random Color</button>
					<h3>Foreground Color : <span className="color">{color}</span></h3>
				</div>
			)
	}
}

ReactDOM.render(<ContrastColors />, document.getElementById('app'));
