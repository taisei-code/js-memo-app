import NotesView from "/js/NotesView.js";
import NotesAPI from "/js/NotesAPI.js";

// NotesAPI.savaNote({
//   id: 123456,
//   title: "更新した2回目のメモです",
//   body: "作成中",
// });

// インスタンス化 （NotesView）
const app  = document.getElementById("app");
const view = new NotesView(app, {
  onNoteSelect() {
    console.log("ノートが選択されました");
  }
});

console.log(NotesAPI.getAllNotes());