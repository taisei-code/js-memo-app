import NotesView from "/js/NotesView.js";
import NotesAPI from "/js/NotesAPI.js";

// NotesAPI.savaNote({
//   id: 123456,
//   title: "更新した2回目のメモです",
//   body: "作成中",
// });

const app = document.getElementById("app");

// インスタンス化 （NotesView）
const view = new NotesView(app, {
  onNoteSelect(id) {
    console.log(id + "のノートが選択されました");
  },
  onNoteAdd() {
     console.log("ノートが追加されました");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
  onNoteDelete(id) {
    console.log(id + "のノートが削除されました");
  }
});

console.log(NotesAPI.getAllNotes());

const notes = NotesAPI.getAllNotes();

/* サイドバーにメモを全て表示 */
view.updateNoteList(notes);

/* プレビュー欄にメモの内容を表示する */
view.updateActiveNote(notes[0]);
