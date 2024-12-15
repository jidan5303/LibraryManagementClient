import { Injectable } from '@angular/core';
import { HttpHelper } from '../Common/helper/httpHelper';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
		private httpHelper: HttpHelper
	) { }

  getAllMember(obj: any) {
    const url = 'api/Member/getAllMember';
    return this.httpHelper.postHelper(url, obj)
  }

  saveMember(obj: any) {
    const url = 'api/Member/SaveMember';
    return this.httpHelper.postHelper(url, obj)
  }

  deleteMember(obj: any) {
    const url = 'api/Member/DeleteMember';
    return this.httpHelper.postHelper(url, obj)
  }
}
