// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  document.querySelector("#submit").addEventListener('click', async function(e){
    e.preventDefault();
    const value = document.querySelector('#ca').value
    let result = await fetch('/api/burgers', {headers: { 'Content-Type': 'application/json' }, method:'post', body:JSON.stringify({value: value})})
    // let res = result.json()
    // console.log(res.message)
    location.reload()
  })


  // function showAll(){
  //   document.querySelector('#eaten').innerHTML = ""
  //   document.querySelector('#burger').innerHTML = ""
  //   const list = fetchAll();
  //   const devouredList = list.filter(el=> el.eaten===true);
  //   const burgerList = list.filter(el=>el.eaten===false);
  //   const d = devouredList.map(el=>`<li>${el.burgername}</li>`)
  //   document.querySelector('#eaten').append(d)
  //   const b = burgerList.map(el=>`<li>${el.burgername}<button id = "devour">Devour</button></li>`)
  //   document.querySelector('#burger').append(b)
  // }

  document.querySelector(".devoured").addEventListener('click',async function(e){
    console.log("devoured")
    const id = $(this).data("id");
    console.log(id)
    const result = await fetch(`/api/burgers/${id}`, {method:'put'});
    location.reload()
  })
 })