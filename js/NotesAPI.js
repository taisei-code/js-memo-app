export default class NotesAPI {
  
  // 全てのメモを取得するAPI
  static getAllNotes() {
    
  }
  // メモを保存するAPI
  static savaNote(noteToSave) {

    const notes = [];

    noteToSave.id      = Math.floor(Math.random() * 1000000);
    noteToSave.updated = new Date().toISOString();

    notes.push(noteToSave);

    // ローカルストレージに保存
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  // メモを削除するAPI
  static deleteNote () {

  }

}