import NotesView from "./NotesView.js";

export default class App {
  constructor(root) {
    this.note = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());
  }

  // 処理群
  _handlers() {
    return {
      onNoteSelect: (noteId) => {
        console.log(noteId + "のノートが選択されました。");
      },
      onNoteAdd: () => {
        console.log("ノートが追加されましt。");
      },
      onNoteEdit: (title, body) => {
        console.log(title);
        console.log(body);
      },
      onNoteDelete: (noteId) => {
        console.log(noteId + "のノートが削除されました。");
      },
    };
  }
}