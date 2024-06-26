import { Component, Input } from '@angular/core';
import { ResponsiveVisibility } from '../../responsive-visibility.pipe';

@Component({
  selector: 'pdf-print',
  templateUrl: './pdf-print.component.html',
  styleUrls: ['./pdf-print.component.css'],
})
export class PdfPrintComponent {
  @Input()
  public showPrintButton: ResponsiveVisibility = true;
}
