import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'app/@core/services/apis/Staff.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class StaffAddComponent implements OnInit {
  isVal: boolean = false;
  addForm!: FormGroup;
  dataStaff: any[] = [];

  constructor(private staffService: StaffService, private router: Router) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
    });
    this.getStaff();
  }

  getStaff() {
    this.staffService.getStaff().subscribe(
      (res) => {
        console.log('Dữ liệu nhân viên:', res.data);
        this.dataStaff = res.data;
      },
      (err) => {
        console.error('Lỗi khi lấy dữ liệu nhân viên:', err);
      }
    );
  }

  onSubmit(): void {
    this.isVal = true;
    if (this.addForm.valid) {
      this.staffService.createStaff(this.addForm.value).subscribe(
        (response) => {
          console.log('Thêm nhân viên thành công', response);
          this.router.navigate(['/pages/staff']);
        },
        (error) => {
          console.error('Có lỗi xảy ra khi thêm nhân viên', error);
        }
      );
    } else {
      console.log('Form chưa hợp lệ!');
    }
  }
}
