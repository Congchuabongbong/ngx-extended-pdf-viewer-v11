import { Component, Input, NgZone } from '@angular/core';
import { take } from 'rxjs/operators';
import { ScrollModeType } from '../../options/pdf-viewer';
import { IPDFViewerApplication } from '../../options/pdf-viewer-application';
import { SpreadType } from '../../options/spread-type';
import { PDFNotificationService } from '../../pdf-notification-service';
import { ResponsiveVisibility } from '../../responsive-visibility.pipe';

@Component({
  selector: 'pdf-odd-spread',
  templateUrl: './pdf-odd-spread.component.html',
  styleUrls: ['./pdf-odd-spread.component.css'],
})
export class PdfOddSpreadComponent {
  @Input()
  public show: ResponsiveVisibility = true;

  @Input()
  public scrollMode: ScrollModeType;

  public spread: SpreadType = 'off';

  constructor(private notificationService: PDFNotificationService, private ngZone: NgZone) {
    this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
      this.onPdfJsInit();
    });
  }

  public onPdfJsInit(): void {
    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
    PDFViewerApplication.eventBus.on('spreadmodechanged', (event) => {
      this.ngZone.run(() => {
        const modes = ['off', 'odd', 'even'] as Array<SpreadType>;
        this.spread = modes[event.mode];
      });
    });
  }

  public onClick(): void {
    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
    PDFViewerApplication.pdfViewer.spreadMode = 1;
  }
}
