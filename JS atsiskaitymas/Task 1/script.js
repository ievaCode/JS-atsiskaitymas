/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form")
  .addEventListener ('submit' , (e) => {
    e.preventDefault();
    let inKg = document.querySelector("#search").value;
    let inLb = inKg * 2.2046;
    let inGr = inKg / 0.0010000;
    let inOz = inKg * 35.274;
    const paragraph = document.createElement("p");
    const resultTextNode = document.createTextNode(`This is equal to: ${inLb}lb, ${inGr}gr, ${inOz}oz`);
    paragraph.append(resultTextNode);
    document.querySelector("#output").append(paragraph);
  })
