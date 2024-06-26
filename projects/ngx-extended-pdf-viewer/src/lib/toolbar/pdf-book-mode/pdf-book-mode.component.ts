import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageViewModeType, ScrollModeType } from '../../options/pdf-viewer';
import { ResponsiveVisibility } from '../../responsive-visibility.pipe';

@Component({
  selector: 'pdf-book-mode',
  templateUrl: './pdf-book-mode.component.html',
  styleUrls: ['./pdf-book-mode.component.css'],
})
export class PdfBookModeComponent {
  @Input()
  public show: ResponsiveVisibility = true;

  @Input()
  public pageViewMode: PageViewModeType;

  @Input()
  public scrollMode: ScrollModeType;

  @Output()
  public pageViewModeChange = new EventEmitter<PageViewModeType>();

  public onClick: () => void;

  constructor() {
    const emitter = this.pageViewModeChange;
    this.onClick = () => {
      setTimeout(() => {
        emitter.emit('book');
      });
    };
  }
}
