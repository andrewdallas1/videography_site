function showText(obj) {
  let text1 = "Card 1. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.";
  let text2 = "Card 2. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.";
  let text3 = "Card 3. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.";
  let text4 = "Card 4. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.";
  let text5 = "Card 5. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.";
  let text6 = "Card 6. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.";

  obj.className = "text";

  switch(obj.id) {
    case "card1":
      obj.innerHTML = text1;
      break;
    case "card2":
      obj.innerHTML = text2;
      break;
    case "card3":
      obj.innerHTML = text3;
      break;
    case "card4":
      obj.innerHTML = text4;
      break;
    case "card5":
      obj.innerHTML = text5;
      break;
    case "card6":
      obj.innerHTML = text6;
      break;
  }

}

function hideText(obj) {
  obj.className = "cards";
  obj.innerHTML = "";
}
