const interns = [
  {
    name: "Victor",
    scores: { task_1: 10, task_2: 10, task_3: 10, task_4: 10, task_5: 10 },
  },
  {
    name: "Toby",
    scores: { task_1: 10, task_2: 10, task_3: 10, task_4: 10, task_5: 10 },
  },
  {
    name: "Esther",
    scores: { task_1: 9, task_2: 8, task_3: 7, task_4: 6, task_5: 5 },
  },
  {
    name: "Kaima",
    scores: { task_1: 10, task_2: 8, task_3: 7, task_4: 6, task_5: 8 },
  },
  {
    name: "Joseph",
    scores: { task_1: 10, task_2: 10, task_3: 9, task_4: 10, task_5: 10 },
  },
];

const averageScores = (student) => {
  let scores = Object.values(student.scores);
  let totalScores = scores.reduce((sum, score) => sum + score, 0);
  return totalScores / scores.length;
};

interns.forEach((student) => {
  console.log(
    `${student.name}'s average task score: ${averageScores(student)}`
  );
});
