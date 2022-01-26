
async function Task1() {
  const items = ["Dagens", "Vegetar", "Halal"];
  const prices = [53.9, 42.5, 59.9];
  let meal_sum = 0;
  let total_sum = 0;
  let question;

  const conversation = `What would you like today? (type 'how is business?' to attempt small talk, or 'not hungry' to stop). By the way, enter your answer in the input box or this won't work`;
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h2.textContent = question;
  const h1Text = document.createTextNode("Hello Welcome to the cafe");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.textContent = "submit";

  form.addEventListener("submit", cafeteria);

  div.className = "main";
  h1.appendChild(h1Text);
  document.body.appendChild(div);
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(form);
  form.appendChild(input);
  form.appendChild(button);

  const sell = (item) => {
    if (item === "Dagens") {
      meal_sum += prices[0];
      total_sum += prices[0];

      console.log("Dagens, here you go.");
    } else if (item === "Vegetar") {
      meal_sum += prices[1];
      total_sum += prices[1];

      console.log("Vegetar, here you go.");
    } else if (item == "Halal") {
      meal_sum += prices[2];
      total_sum += prices[0];

      console.log("Halal, here you go.");
    } else {
      console.log(`${item} is not on the menu!`);
    }
  };

  const empty_cash_registry = () => {
    meal_sum = 0;
    console.log("Cash registry emptied. Thieves be warned!");
  };

  function cafeteria(e) {
    if (e) {
      e.preventDefault();
    }
    const user_input = input.value;

    if (user_input === 'not hungry') {
        console.log('Welcome back later')
        return
    }
    do {
      let question = 0;
      if (user_input == "how is business?") {
        question = 1;
        if (total_sum === 0) {
          console.log("Not good so far. No one seems to be hungry today!");
          return;
        } else if (total_sum > 0 && total_sum <= 500) {
          //this is my # FIXME
          console.log("Alright. Could have been better");
          return;
        } else {
          console.log("Excellent! Lots of hungry students around today.");
          return;
        }
      }
      if (question === 0 && user_input !== "") {
          if(user_input !== "not hungry"){
            sell(user_input);

          }
      }
      if (meal_sum > 200) {
        empty_cash_registry();
      }
      console.log(conversation);
      return;
    } while (user_input === "not hungry");
  }

  cafeteria();
  
}

export default Task1;
