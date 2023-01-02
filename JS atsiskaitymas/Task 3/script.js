/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


document.querySelector("#btn")
  .addEventListener("click", (e) => {
    document.querySelector("#message").remove();
    fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(data => {
      data.forEach(user => {      
        let newUser = new User(user.avatar_url, user.login);
        document.querySelector("#output").append(newUser);
      })
    });
  })

  
    class User{
      constructor(url, login){
        this.url = url;
        this.login = login;
        return this.render();
      }
      render = () => {
        this.card = document.createElement('div');
        this.card.classList.add('card');

        this.imageWrap = document.createElement('div');
        this.imageWrap.classList.add('imageWrap');
        this.card.append(this.imageWrap);

        this.avatar = document.createElement('img');
        this.avatar.classList.add('avatar');
        this.avatar.src = this.url;
        this.avatar.alt = "user avatar";
        this.imageWrap.append(this.avatar);

        this.userLogin = document.createElement("p");
        this.userLogin.classList.add('login');
        this.loginTextNode = document.createTextNode(`User login: ${this.login}`);
        this.userLogin.append(this.loginTextNode);
        this.card.append(this.userLogin);
      
        return this.card;
      }
    }
    


