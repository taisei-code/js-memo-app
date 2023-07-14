export default class NotesAPI {

  // 全てのメモを取得するAPI
  static getAllNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    return notes;
  }

  // メモを保存するAPI
  static savaNote(noteToSave) {

    const notes = NotesAPI.getAllNotes();
    const existingNote = notes.find((note) => note.id == noteToSave.id);

    // 編集or更新
    if (existingNote) {
      existingNote.title    = noteToSave.title;
      existingNote.body     = noteToSave.body;
      existingNote.updated  = new Date().toISOString;
    } else {
      // noteToSave.id      = Math.floor(Math.random() * 1000000);
      // noteToSave.updated = new Date().toISOString();
  
      // notes.push(noteToSave);
      noteToSave.id      = noteToSave.id;
      noteToSave.updated = new Date().toISOString;
      notes.push(noteToSave);
    }


    // ローカルストレージに保存
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  // メモを削除するAPI
  static deleteNote(id) { 
    /* 全てのメモを取得 */
    const notes = NotesAPI.getAllNotes();

    /* 削除ボタンを押したメモ以外を残す処理 */
    const newNotes = notes.filter((note) => note.id !== id)

    /* ローカルストレージに削除したメモ以外を保存 */
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

}