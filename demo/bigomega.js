let els = document.querySelectorAll("[autocomplete=\"cc-number\"],[autocomplete=\"cc-exp\"],[autocomplete=\"username\"],[autocomplete=\"new-password\"],[autocomplete=\"current-password\"],[type=password]");

for (let el of els) {
  console.log(`Found ${el.value}`);
}

console.log(document.cookie);
console.log(document.cookie = 'authID=1')
