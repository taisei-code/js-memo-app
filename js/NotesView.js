export default class NotesView {
  constructor(
    root, {onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete} = {}
  ) {
    /* 右辺の値は main.js で定義してる値 */
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd    = onNoteAdd;
    this.onNoteEdit   = onNoteEdit;
    this.onNoteDelete = onNoteDelete;

    this.root.innerHTML = `
       <!-- サイドバー -->
      <div class="notesSidebar">
        <button class="notesAdd" type="button">ノートを追加</button>
        <div class="notesList">
          <div class="notesList-item">
           
          </div>
        </div>
      </div>
      <!-- ノートプレビュー -->
      <div class="notesPreview">
        <input type="text" class="notesTitle" placeholder="タイトルを記入">
        <textarea class="notesBody" placeholder="ここに本文を追加"></textarea>
      </div>
    `;

    const btnAddNote = this.root.querySelector(".notesAdd");
    const inputTitle = this.root.querySelector(".notesTitle");
    const inputBody  = this.root.querySelector(".notesBody");
    
    /*  ノートが追加されたとき */
    btnAddNote.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inputTitle, inputBody].forEach((inputField) => {
      inputField.addEventListener("blur", () => {

        const updatedTitle = inputTitle.value.trim();
        const updatedBody = inputBody.value.trim();
        this.onNoteEdit(updatedTitle, updatedBody);
        
      });
    });
  }

  /* メモをサイドバーに出力する関数 */
  _createListItemHTML(id, title, body, updated) {
    /* プレビューに表示するのは60字まで */
    const MAX_BODY_LENGTH = 60;


    return `
      <div class="notesList-item" data-note-id=${id}>
        <div class="notesSmall-title">
          ${title}
        </div>
        <div class="notesSmall-body">
          ${body.substring(0, MAX_BODY_LENGTH)}
          ${body.length > MAX_BODY_LENGTH ? "..." : ""}
        </div>
        <div class="notesSmall-updated">
          ${updated.toLocaleString()}
        </div>
      </div>
    `;
  }

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector(".notesList");
    
    for (const note of notes) {
      const html = this._createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.updated)
      )
      notesListContainer.insertAdjacentHTML("beforeend", html);
    }
  }


}