import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageHelper } from 'src/app/Common/helper/messageHelper';
import { Books } from 'src/app/Models/Books';
import { BorrowedBooks } from 'src/app/Models/BorrowedBooks';
import { Members } from 'src/app/Models/Members';
import { BookService } from 'src/app/Services/book.service';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-borrowed-list',
  templateUrl: './borrowed-list.component.html',
  styleUrls: ['./borrowed-list.component.css']
})
export class BorrowedListComponent implements OnInit {

  @ViewChild('borrowedAddTemplate', { read: TemplateRef }) bookAddTemplate: TemplateRef<any>;
  @ViewChild('DeleteConfirmationModal', { read: TemplateRef }) DeleteConfirmationModal: TemplateRef<any>;
  objBorrowed: BorrowedBooks = new BorrowedBooks();
  lstBorrowed: BorrowedBooks[] = [];
  modalRef?: BsModalRef;
  search: any;
  lstBook: Books[] = [];
  lstMember: Members[] = [];

  constructor(
    private bookService: BookService,
    private memberService: MemberService,
    private modalService: BsModalService,
    private messageHelper: MessageHelper,
  ) { }

  ngOnInit(): void {
    this.getAllBorrowedBook();
  }

  getAllBorrowedBook() {
    this.bookService.getAllBorrowedBooksRecord().subscribe((res: any) => {
      this.lstBorrowed = res.responseObj;
    });
  }

  addBorrowed() {
    this.getAllBook();
    this.getAllMember();
    this.objBorrowed = new BorrowedBooks();
    this.modalRef = this.modalService.show(this.bookAddTemplate);
  }

  getAllBook(){
    this.bookService.getAllBook(this.search).subscribe((res: any) => {
      this.lstBook = res.responseObj;
    });
  }

  getAllMember(){
    this.memberService.getAllMember(this.search).subscribe((res: any) => {
      this.lstMember = res.responseObj;
    });
  }

  saveBorrowed() {
    this.bookService.saveBorrowedBookRecord(this.objBorrowed).subscribe((res: any) => {
      if (res.statusCode == 1) {
        this.getAllBorrowedBook();
      }
      this.messageHelper.showMessage(res.statusCode, res.message);
    });
    this.modalRef?.hide();
    this.objBorrowed = new BorrowedBooks();
  }

  formatDateForInput(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${d.getFullYear()}-${month}-${day}`;
  }
  
  calculateDaysBetween(date1: any, date2: any): number {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diff = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  calculateOverdueStatus(date1: any, date2: any): string {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    if (d1 > d2) {
      return 'Overdue';
    }
    return 'Not Overdue';
  }

  markAsReturned(obj: BorrowedBooks) {
    this.bookService.markAsReturned(obj.borrowID).subscribe((res: any) => {
      if (res.statusCode == 1) {
        this.getAllBorrowedBook();
      }
    });
  }

  onDeleteBorrowed(obj: BorrowedBooks) {
    this.objBorrowed = obj;
    this.modalRef = this.modalService.show(this.DeleteConfirmationModal);
  }

  deleteRecord(){
    this.bookService.deleteBorrowedBookRecord(this.objBorrowed.borrowID).subscribe((res: any) => {
      if (res.statusCode == 1) {
        this.getAllBorrowedBook();
      }
      this.messageHelper.showMessage(res.statusCode, res.message);
    });
    this.modalRef?.hide();
    this.objBorrowed = new BorrowedBooks();
  }
}
