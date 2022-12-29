import {thisisfine, h} from './thisisfine.js';

const app = thisisfine(document.getElementById('app'))
const redraw = app.redraw
const ar = app.autoredraw

let counters = [ar({value: 0}), ar({value: 0})]

const Counter = (state) => h`
	<div class="horizontal-box spacing">
		<input type="text" value="${state.value}" class=spacing></input>
		<div class=pure-button-group>
			<button onclick=${() => state.value+=1} class=${['pure-button', 'spacing']}>Up</button>
			<button onclick=${() => state.value-=1} class=${['pure-button', 'spacing']}>Down</button>
		</div>
	</div>
`

const App = () => h`
	<main id="app">
		${counters.map((counter) => Counter(counter))}
		<button onclick=${() => {counters.push(ar({value: 0})); redraw()}} class=spacing style="margin-left: 10px;">Add counter</button>
	</main>
`

app.mount(App)