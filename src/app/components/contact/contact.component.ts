import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicService } from 'src/app/services/public.service';
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public load_btn: boolean = false;

  constructor(private publicService: PublicService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  myForm: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    subject: [, [Validators.required]],
    message: [, [Validators.required]],
  });

  send_email(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.load_btn = true;
    this.publicService.send_message(this.myForm.value).subscribe({
      next: (res) => {
        $('#contact-modal').modal('hide');
        $('#thanks-modal').modal('show');
        this.load_btn = false;
        this.myForm.reset();
      },
      error: (error) => {
        this.load_btn = false;
        console.log(error);
      },
    });
  }

  validators(name: string) {
    const input = this.myForm.controls[name];
    return input.errors && input.touched;
  }

  closeModal() {
    this.myForm.reset();
  }
}
