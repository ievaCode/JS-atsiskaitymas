/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';


fetch("./cars.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(brand => {
      let newManufacturer = new Manufacturer(brand.brand, brand.models);
      document.querySelector("#output").append(newManufacturer);
    })    
  });

  class Manufacturer{
    constructor(brand, models){
      this.brand = brand;
      this.models = models;
      return this.render();
    }
    render = () => {
      this.card = document.createElement('div');
      this.card.classList.add('card');

      this.paragraph1 = document.createElement("p");
      this.paragraph1.classList.add('brand');
      this.brandTextNode = document.createTextNode(`Brand: ${this.brand}`);
      this.paragraph1.append(this.brandTextNode);

      this.paragraph2 = document.createElement("p");
      this.paragraph2.classList.add('explanatoryText');
      this.explanatoryTextNode = document.createTextNode(`Models:`);
      this.paragraph2.append(this.explanatoryTextNode);

      this.listOfModels = document.createElement("ul");
      this.listOfModels.classList.add('listOfModels');
      this.models.forEach(model => {
        this.li = document.createElement("li");
        this.li.classList.add("modelName");
        const modelTextNode = document.createTextNode(model);
        this.li.append(modelTextNode);
        this.listOfModels.append(this.li);
      })
      this.card.append(this.paragraph1, this.paragraph2, this.listOfModels);
    
      return this.card;
    }
  }
