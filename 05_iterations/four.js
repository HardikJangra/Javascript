const object={
  name: "John",
  age: 30,
  city: "New York"
};

for (const key in object) {
  console.log(key + ": " + object[key]);
}

const programmingLanguages = ["JavaScript", "Python", "Java", "C++"];

for (const language in programmingLanguages) {
    console.log(language + ": " + programmingLanguages[language]);
}