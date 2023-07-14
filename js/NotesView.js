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
}