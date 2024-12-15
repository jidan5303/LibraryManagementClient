import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageHelper } from 'src/app/Common/helper/messageHelper';
import { Books } from 'src/app/Models/Books';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  searchBook: any;
  objBook: Books = new Books();
  lstBook: Books[] = [];
  modalRef?: BsModalRef;

  @ViewChild('bookAddTemplate', { read: TemplateRef }) bookAddTemplate: TemplateRef<any>;
  @ViewChild('DeleteConfirmationModal', { read: TemplateRef }) DeleteConfirmationModal: TemplateRef<any>;


  constructor(
    private bookService: BookService,
    private modalService: BsModalService,
    private messageHelper: MessageHelper,
  ) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBook(this.searchBook).subscribe((res: any) => {
      this.lstBook = res.responseObj;
    });
  }

  obDeleteBook(obj: Books) {
    this.objBook = obj;
    this.modalRef = this.modalService.show(this.DeleteConfirmationModal);
  }

  deleteBook() {
    this.bookService.deleteBook(this.objBook.bookID).subscribe((res: any) => {
      if (res.statusCode == 1) {
        this.getAllBook();
      }
      this.modalRef?.hide();
      this.messageHelper.showMessage(res.statusCode, res.message);
    });
  }

  addBook() {
    this.objBook = new Books();
    this.modalRef = this.modalService.show(this.bookAddTemplate);
  }

  editBook(obj: Books) {
    this.objBook = obj;
    this.modalRef = this.modalService.show(this.bookAddTemplate);
  }

  saveBook() {
    this.bookService.saveBook(this.objBook).subscribe((res: any) => {
      if (res.statusCode == 1) {
        this.getAllBook();
      }
      this.modalRef?.hide();
      this.messageHelper.showMessage(res.statusCode, res.message);
    });
  }

}
