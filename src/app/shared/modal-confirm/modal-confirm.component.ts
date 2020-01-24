import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalConfirmComponent implements OnInit, OnDestroy {

  @Input() modalMessage: string;
  @Input() modalTitle: string;
  @Output() closeModal = new EventEmitter<void>();
  @Output() modalSubmit = new EventEmitter<boolean>();
  @Output() modalCancel = new EventEmitter<boolean>();

  constructor(
      @Inject(DOCUMENT) private document: Document,
      private renderer: Renderer2,
  ) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(this.document.body, 'overflow');
  }

  public onCloseModal(): void {
    this.closeModal.emit();
  }

  public onSubmit(): void {
    this.modalSubmit.emit(true);
  }

  public onCancel(): void {
    this.modalCancel.emit(false);
  }


}
