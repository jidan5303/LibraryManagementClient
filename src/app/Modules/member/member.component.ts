import { formatDate } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MessageHelper } from 'src/app/Common/helper/messageHelper';
import { Members } from 'src/app/Models/Members';
import { MemberService } from 'src/app/Services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  objMember: Members = new Members();
  lstMember: Members[] = [];
  searchMember: any;
  modalRef?: BsModalRef;
  
  @ViewChild('MemberAddTemplate', { read: TemplateRef }) MemberAddTemplate: TemplateRef<any>;
  @ViewChild('DeleteConfirmationModal', { read: TemplateRef }) DeleteConfirmationModal: TemplateRef<any>;


  constructor(
    private memberService: MemberService,
    private modalService: BsModalService,
    private messageHelper: MessageHelper,
  ) { }

  ngOnInit(): void {
    this.getAllMember();
  }

  getAllMember(){
    this.memberService.getAllMember(this.searchMember).subscribe((res: any) => {
      this.lstMember = res.responseObj;
    });
  }

  addMember(){
    this.objMember = new Members();
    this.modalRef = this.modalService.show(this.MemberAddTemplate);
  }

  formatDateForInput(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${d.getFullYear()}-${month}-${day}`;
  }
  
  onEditMember(obj: Members) {
    this.objMember = obj;
    this.objMember.dateOfBirth = this.formatDateForInput(this.objMember.dateOfBirth);
    this.modalRef = this.modalService.show(this.MemberAddTemplate);
  }

  saveMember(){
    this.objMember.dateOfBirth = new Date(this.objMember.dateOfBirth);
    this.memberService.saveMember(this.objMember).subscribe((res: any) => {
      if(res.statusCode == 1){
        this.getAllMember();
      }
      this.messageHelper.showMessage(res.statusCode, res.message);
    });
    this.modalRef?.hide();
  }

  onDeleteMember(obj: Members) {
    this.objMember = obj;
    this.modalRef = this.modalService.show(this.DeleteConfirmationModal);
  }

  deleteMember(){
    this.memberService.deleteMember(this.objMember.memberID).subscribe((res: any) => {
      if (res.statusCode == 1) {
        this.getAllMember();
      }
      this.messageHelper.showMessage(res.statusCode, res.message);
    });
    this.modalRef?.hide();
  }
}
