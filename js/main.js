import NotesAPI from "/js/NotesAPI.js";

NotesAPI.savaNote({
  id: 123456,
  title: "更新した2回目のメモです",
  body: "作成中",
});

console.log(NotesAPI.getAllNotes());