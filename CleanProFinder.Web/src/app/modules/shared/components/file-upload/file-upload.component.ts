import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FileUploadComponentParams } from 'src/app/modules/shared/components/file-upload/models';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  constructor() {}

  public fileName: string = '';

  @Input() params!: FileUploadComponentParams;
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;

  public ngOnInit(): void {}

  public onFileInput(event: Event) {
    this.fileName = this.inputRef?.nativeElement?.value.split('\\').pop() || '';
  }
}
