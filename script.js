const input = document.getElementById('textInput');
const output = document.getElementById('output');

const fruits = [
	"Abricot",
	"Acérola",
	"Ananas",
	"Avocat",
	"Banane",
	"Bergamote",
	"Carambole",
	"Cassis",
	"Cerise",
	"Citron",
	"Clémentine",
	"Datte",
	"Durian",
	"Figue",
	"Fraise",
	"Framboise",
	"Grenade",
	"Groseille",
	"Kaki",
	"Kiwi",
	"Kumquat",
	"Lime",
	"Litchi",
	"Mangue",
	"Melon",
	"Mirabelle",
	"Mûre",
	"Myrtille",
	"Nectarine",
	"Noix de coco",
	"Olive",
	"Orange",
	"Pamplemousse",
	"Papaye",
	"Pastèque",
	"Pêche",
	"Poire",
	"Pomme",
	"Prune",
	"Ramboutan",
	"Raisin",
	"zevi"
];

input.addEventListener('input',()=>{
	output.textContent = "";
	const inputText = input.value.trim().toLowerCase();
	if(inputText){
		const result = fruits.filter(el=> el.toLowerCase().includes(inputText));
		if(result.length > 0){
			result.forEach(fruit => {
				displayFruit(fruit,inputText);
				output.classList.remove('red');
			})
		}else{
			output.textContent = "Résultat introuvable";
			output.classList.add('red');
		}
	}
});

function displayFruit(fruit,inputText){
	const li = document.createElement('li');
	const index = fruit.toLowerCase().indexOf(inputText);
	const avant = fruit.slice(0,index);
	const match = fruit.slice(index, index+inputText.length);
	const apres = fruit.slice(index+inputText.length);
	li.innerHTML = `${avant}<span class="match">${match}</span>${apres}`;
	output.appendChild(li);
}