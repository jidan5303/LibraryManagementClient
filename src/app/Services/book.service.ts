import { Injectable } from '@angular/core';
import { HttpHelper } from '../Common/helper/httpHelper';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
		private httpHelper: HttpHelper
	) { }

  getAllBook(obj: any) {
    const url = 'api/Book/getAllBook';
    return this.httpHelper.postHelper(url, obj)
  }

  saveBook(obj: any) {
    const url = 'api/Book/SaveBook';
    return this.httpHelper.postHelper(url, obj)
  }

  deleteBook(obj: any) {
    const url = 'api/Book/DeleteBook';
    return this.httpHelper.postHelper(url, obj)
  }

  
  getAllBorrowedBooksRecord() {
    const url = 'api/Book/GetAllBorrowedBooksRecord';
    return this.httpHelper.postHelper(url)
  }

  saveBorrowedBookRecord(obj: any) {
    const url = 'api/Book/SaveBorrowedBookRecord';
    return this.httpHelper.postHelper(url, obj)
  }

  markAsReturned(obj: any) {
    const url = 'api/Book/MarkAsReturn';
    return this.httpHelper.postHelper(url, obj)
  }

  deleteBorrowedBookRecord(obj: any) {
    const url = 'api/Book/DeleteBorrowedBookRecord';
    return this.httpHelper.postHelper(url, obj)
  }
}
