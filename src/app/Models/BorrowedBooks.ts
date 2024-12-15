import { Books } from "./Books";
import { Members } from "./Members";

export class BorrowedBooks {
    borrowID: number = 0;
    bookID!: number;
    memberID!: number;
    borrowDate!: Date;
    returnDate!: Date;
    isReturned: boolean = false;
    objBook?: Books;
    objMember?: Members;
}