async function Task2() {
    const menu = [
      {
        item: 1,
        type: "Dagens",
        price: 53.9,
        totalAvailable: 2
      },
      {
        item: 2,
        type: "Vegetar",
        price: 42.5,
        totalAvailable: 2
      },
      {
        item: 3,
        type: "Halal",
        price: 59.9,
        totalAvailable: 0
      },
    ];
  
    let money_in_register = 0;
    let total_sum = 0;
    let question;
  
    const conversation = `What would you like today? (type 'how is business?' to attempt small talk, or 'not hungry' to stop). By the way, enter your answer in the input box or this won't work`;
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h1Text = document.createTextNode("Hello Welcome to the cafe");
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.textContent = "submit";
    button.addEventListener("click", () => respondToCustomer());
  
    div.className = "main";
    h1.appendChild(h1Text);
    document.body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(input);
    div.appendChild(button);
  
    const addIncomingMoney = (price) => {
      if (money_in_register >= 200) {
        empty_cash_register();
      }
      money_in_register += price;
      total_sum += price;
    };



    const removeItemFromInventory =(item)=>{

        const menuItem = menu.find(meal => meal.type === item);
        menuItem.totalAvailable -=1
        const index = menu.indexOf(menuItem)
        menu.splice(index, 1, menuItem)
    }
  
    const sellItem = (itemRequested) => {
      const [result] = menu.filter((item) => item.type === itemRequested);
      console.log('result: ', result);
  
      if (result === undefined) {
        console.log(`${itemRequested} is not on the menu!`);
        return;
      } else {

        if (result.totalAvailable < 1) {
            console.log(`Sorry, no more left of ${itemRequested} today.`)
            return
        }
          console.log(result.totalAvailable)
        const price = result.price;
  
        switch (itemRequested) {
          case "Dagens":
            addIncomingMoney(price);
            removeItemFromInventory(itemRequested)
            console.log("Dagens, here you go.");
            break;
          case "Vegetar":
            addIncomingMoney(price);
            removeItemFromInventory(itemRequested)
            console.log("Vegetar, here you go.");
            break;
          case "Halal":
            addIncomingMoney(price);
            removeItemFromInventory(itemRequested)
            console.log("Halal, here you go.");
            break;
          default:
            return;
        }
      }
    };
  
  
  
    const empty_cash_register = () => {
      meal_sum = 0;
      console.log("Cash registry emptied. Thieves be warned!");
    };
  
    const greetCustomer = () => {
      console.log(conversation);
    };
  
    const giveBusinessUpdate = () => {
      if (total_sum > 500) {
        console.log("Excellent! Lots of hungry students around today.");
      } else if (total_sum != 0) {
        console.log("Alright. Could have been better");
      } else {
        console.log("Not good so far. No one seems to be hungry today!");
      }
    };
  
    const respondToCustomer = () => {
      const user_input = input.value;
      console.log("user_input: ", user_input);
  
      switch (user_input) {
        case "not hungry":
          console.log("Welcome back later");
          break;
        case "how is business?":
          giveBusinessUpdate();
          break;
        default:
          sellItem(user_input);
      }
    };
  
    greetCustomer();
  }
  
  export default Task2;
  
