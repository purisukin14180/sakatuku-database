let players=[]

let filters={
policy:[],
position:[],
style:[]
}

fetch("players.json")
.then(r=>r.json())
.then(data=>{
players=data
render(players)
})

function toggleSection(id){

let el=document.getElementById(id)

if(el.style.display==="block"){
el.style.display="none"
}else{
el.style.display="block"
}

}

function toggleFilter(type,value){

let arr=filters[type]

if(arr.includes(value)){
filters[type]=arr.filter(v=>v!==value)
}else{
arr.push(value)
}

updateButtons()
search()

}

function updateButtons(){

document.querySelectorAll("[data-filter]").forEach(btn=>{

let type=btn.dataset.type
let value=btn.dataset.value

if(filters[type].includes(value)){
btn.classList.add("active")
}else{
btn.classList.remove("active")
}

})

document.getElementById("policySelected").innerText=
filters.policy.length>0?"("+filters.policy.join(",")+")":""

document.getElementById("positionSelected").innerText=
filters.position.length>0?"("+filters.position.join(",")+")":""

document.getElementById("styleSelected").innerText=
filters.style.length>0?"("+filters.style.length+"選択)":""

}

function search(){

let name=document
.getElementById("nameSearch")
.value.toLowerCase()

let result=players.filter(p=>{

if(name && !p.name.toLowerCase().includes(name)) return false

if(filters.policy.length>0){
if(!filters.policy.includes(p.policy)) return false
}

if(filters.style.length>0){
if(!filters.style.includes(p.style)) return false
}

if(filters.position.length>0){
if(!filters.position.includes(p.position)) return false
}

return true

})

render(result)

}

function render(list){

let html=""

list.forEach(p=>{

html+=`
<tr>
<td>${p.name}</td>
<td>${p.position}</td>
<td>${p.policy}</td>
<td>${p.style}</td>
</tr>
`

})

document.getElementById("results").innerHTML=html

}