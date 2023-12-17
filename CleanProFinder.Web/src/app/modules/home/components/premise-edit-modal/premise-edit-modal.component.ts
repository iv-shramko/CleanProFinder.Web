import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'console';
import { CreatePremiseModel } from 'src/app/modules/core/api/models/create-premise.model';
import { Premise } from 'src/app/modules/core/api/models/premise.model';
import { PremiseApiService } from 'src/app/modules/core/api/premise-api.service';

@Component({
  selector: 'app-premise-edit-modal',
  templateUrl: './premise-edit-modal.component.html',
  styleUrls: ['./premise-edit-modal.component.scss'],
})
export class PremiseEditModalComponent implements OnInit {
  @Input() isEdit: boolean = false;
  @Input() premiseId!: string;

  private premise: Premise = {
    square: 0,
    description: '',
    address: '',
    id: '',
  };

  constructor(
    private modal: NgbActiveModal,
    private premiseApiService: PremiseApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this.isEdit);
    console.log(this.premiseId);
    if (this.isEdit && this.premiseId) {
      this.premiseApiService.getById(this.premiseId).subscribe(
        (premise) => {
          this.premise = premise as Premise;
          console.log(premise);
          this.premiseCreateForm.patchValue(premise as Premise);
        },
        (error) => alert('something went wrong')
      );
    }

    console.log(this.premise);
    this.premiseCreateForm = this.formBuilder.group({
      address: new FormControl(this.premise.address, [Validators.required]),
      description: new FormControl(this.premise.description, Validators.required),
      square: new FormControl(this.premise.square, Validators.required),
    });
  }

  public premiseCreateForm!: FormGroup;

  onClose() {
    this.modal.close();
  }

  onSave() {
    if (this.isEdit) {
      this.editPremise().subscribe(
        (ok) => {
          alert('premise edited successfully!');
          this.modal.close();
        },
        (error) => alert('something went wrong')
      );
    } else {
      this.createPremise().subscribe(
        (ok) => {
          alert('premise created successfully!');
          this.modal.close();
        },
        (error) => alert('something went wrong')
      );
    }
  }

  private createPremise() {
    const createModel: CreatePremiseModel = {
      square: this.premiseCreateForm.controls['square'].value,
      description: this.premiseCreateForm.controls['description'].value,
      address: this.premiseCreateForm.controls['address'].value,
    };

    return this.premiseApiService.create(createModel);
  }

  private editPremise() {
    const editModel: Premise = {
      square: this.premiseCreateForm.controls['square'].value,
      description: this.premiseCreateForm.controls['description'].value,
      address: this.premiseCreateForm.controls['address'].value,
      id: this.premiseId,
    };

    return this.premiseApiService.edit(this.premiseId, editModel);
  }
}
