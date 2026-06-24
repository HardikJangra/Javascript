const codingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
codingLanguages.forEach(language => {
  console.log(`I love coding in ${language}!`);
});

const myCoding=[
    {language: 'JavaScript', experience: 'Intermediate'},
    {language: 'Python', experience: 'Advanced'},
    {language: 'Java', experience: 'Intermediate'}
]
myCoding.forEach(item => {
  console.log(`I have ${item.experience} experience in ${item.language}.`);
});