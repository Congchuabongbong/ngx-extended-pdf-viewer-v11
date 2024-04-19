// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicCssComponent } from './dynamic-css/dynamic-css.component';
import { NgxConsole } from './options/ngx-console';
import { IPDFViewerApplicationOptions } from './options/pdf-viewer-application-options';
import { NegativeResponsiveCSSClassPipe, ResponsiveCSSClassPipe } from './responsive-visibility.pipe';
import { TranslatePipe } from './translate.pipe';
import {
  NgxExtendedPdfViewerComponent, PdfAcroformDefaultThemeComponent, PdfBookModeComponent, PdfContextMenuComponent, PdfDarkThemeComponent, PdfDocumentPropertiesComponent, PdfDocumentPropertiesDialogComponent, PdfDownloadComponent, PdfDrawEditorComponent, PdfEditorComponent, PdfErrorMessageComponent, PdfEvenSpreadComponent, PdfFindButtonComponent, PdfFindbarComponent, PdfFindbarMessageContainerComponent, PdfPageNumberComponent, PdfPagingAreaComponent, PdfPasswordDialogComponent, PdfPreparePrintingDialogComponent, PdfPresentationModeComponent, PdfPreviousPageComponent, PdfPrintComponent, PdfRotatePageComponent, PdfSecondaryToolbarComponent, PdfTextEditorComponent, PdfToggleSecondaryToolbarComponent, PdfToggleSidebarComponent, PdfToolbarComponent, PdfVerticalScrollModeComponent, PdfWrappedScrollModeComponent, PdfZoomDropdownComponent, PdfZoomInComponent, PdfZoomOutComponent, PdfZoomToolbarComponent, PdfSelectToolComponent,
  PdfShyButtonComponent,
  PdfSidebarComponent,
  PdfSidebarContentComponent,
  PdfSidebarToolbarComponent,
  PdfSinglePageModeComponent,
  PdfStampEditorComponent,
  PdfSearchInputFieldComponent, PdfFindEntireWordComponent,
  PdfFindHighlightAllComponent,
  PdfFindInputAreaComponent,
  PdfFindMatchCaseComponent,
  PdfFindNextComponent,
  PdfFindPreviousComponent,
  PdfFindResultsCountComponent,
  PdfFirstPageComponent,
  PdfHandToolComponent,
  PdfHorizontalScrollComponent,
  PdfInfiniteScrollComponent,
  PdfLastPageComponent,
  PdfLightThemeComponent,
  PdfMatchDiacriticsComponent,
  PdfNextPageComponent,
  PdfNoSpreadComponent,
  PdfOddSpreadComponent,
  PdfOpenFileComponent,
} from '../public-api';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';


if (new Date().getTime() === 0) {
  new NgxConsole().log('');
}

if (!Promise['allSettled']) {
  if (!!window['Zone'] && !window['__zone_symbol__Promise.allSettled']) {
    console.error(
      "Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version."
    );
  }
}

function isKeyIgnored(cmd: number, keycode: number | 'WHEEL'): boolean {
  const PDFViewerApplicationOptions: IPDFViewerApplicationOptions = (window as any).PDFViewerApplicationOptions;

  const ignoreKeys: Array<string> = PDFViewerApplicationOptions.get('ignoreKeys');
  const acceptKeys: Array<string> = PDFViewerApplicationOptions.get('acceptKeys');
  if (keycode === 'WHEEL') {
    if (!!ignoreKeys && isKeyInList(ignoreKeys, cmd, 'WHEEL')) {
      return true;
    }
    if (!!acceptKeys && acceptKeys.length > 0) {
      return !isKeyInList(acceptKeys, cmd, 'WHEEL');
    }

    return false;
  }

  if (keycode === 16 || keycode === 17 || keycode === 18 || keycode === 224) {
    // ignore solitary SHIFT, ALT, CMD, and CTRL because they only make sense as two-key-combinations
    return true;
  }
  // cmd is a bit-array:
  // 1 == CTRL
  // 2 == ALT
  // 4 == SHIFT
  // 8 == META
  const ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
  if (!!ignoreKeyboard) {
    return true;
  }

  if (!!ignoreKeys && ignoreKeys.length > 0) {
    if (isKeyInList(ignoreKeys, cmd, keycode)) {
      return true;
    }
  }

  if (!!acceptKeys && acceptKeys.length > 0) {
    return !isKeyInList(acceptKeys, cmd, keycode);
  }
  return false;
}

function isKeyInList(settings: Array<string>, cmd: number, keycode: number | 'WHEEL'): boolean {
  if (!settings) {
    return true;
  }
  return settings.some((keyDef) => isKey(keyDef, cmd, keycode));
}

function isKey(keyDef: string, cmd: number, keycode: number | 'WHEEL'): boolean {
  let cmdDef = 0;
  let key = 0;
  keyDef = keyDef.toLowerCase();
  // tslint:disable: no-bitwise
  if (keyDef.includes('ctrl+')) {
    cmdDef |= 1;
    keyDef = keyDef.replace('ctrl+', '');
  }
  if (keyDef.includes('cmd+')) {
    cmdDef |= 8;
    keyDef = keyDef.replace('cmd+', '');
  }
  if (keyDef.includes('alt+')) {
    cmdDef |= 2;
    keyDef = keyDef.replace('alt+', '');
  }
  if (keyDef.includes('shift+')) {
    cmdDef |= 4;
    keyDef = keyDef.replace('shift+', '');
  }
  if (keyDef.includes('meta+')) {
    cmdDef |= 8;
    keyDef = keyDef.replace('meta+', '');
  }

  if (keyDef === 'up') {
    key = 38;
  } else if (keyDef === 'down') {
    key = 40;
  } else if (keyDef === '+' || keyDef === '"+"') {
    key = 171;
  } else if (keyDef === '-' || keyDef === '"-"') {
    key = 173;
  } else if (keyDef === 'esc') {
    key = 27;
  } else if (keyDef === 'enter') {
    key = 13;
  } else if (keyDef === 'space') {
    key = 32;
  } else if (keyDef === 'f4') {
    key = 115;
  } else if (keyDef === 'backspace') {
    key = 8;
  } else if (keyDef === 'home') {
    key = 36;
  } else if (keyDef === 'end') {
    key = 35;
  } else if (keyDef === 'left') {
    key = 37;
  } else if (keyDef === 'right') {
    key = 39;
  } else if (keyDef === 'pagedown') {
    key = 34;
  } else if (keyDef === 'pageup') {
    key = 33;
  } else {
    key = keyDef.toUpperCase().charCodeAt(0);
  }
  if (keycode === 'WHEEL') {
    return keyDef === 'wheel' && cmd === cmdDef;
  }
  return key === keycode && cmd === cmdDef;
}

if (typeof window !== 'undefined') {
  (window as any).isKeyIgnored = isKeyIgnored;
}

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DynamicCssComponent,
    NegativeResponsiveCSSClassPipe,
    NgxExtendedPdfViewerComponent,
    PdfAcroformDefaultThemeComponent,
    PdfBookModeComponent,
    PdfContextMenuComponent,
    PdfDarkThemeComponent,
    PdfDrawEditorComponent,
    PdfDocumentPropertiesComponent,
    PdfDocumentPropertiesDialogComponent,
    PdfDownloadComponent,
    PdfDummyComponentsComponent,
    PdfEditorComponent,
    PdfErrorMessageComponent,
    PdfEvenSpreadComponent,
    PdfFindbarComponent,
    PdfFindbarMessageContainerComponent,
    PdfFindButtonComponent,
    PdfFindEntireWordComponent,
    PdfFindHighlightAllComponent,
    PdfFindInputAreaComponent,
    PdfFindMatchCaseComponent,
    PdfFindNextComponent,
    PdfFindPreviousComponent,
    PdfFindResultsCountComponent,
    PdfFirstPageComponent,
    PdfHandToolComponent,
    PdfHorizontalScrollComponent,
    PdfInfiniteScrollComponent,
    PdfLastPageComponent,
    PdfLightThemeComponent,
    PdfMatchDiacriticsComponent,
    PdfNextPageComponent,
    PdfNoSpreadComponent,
    PdfOddSpreadComponent,
    PdfOpenFileComponent,
    PdfPageNumberComponent,
    PdfPagingAreaComponent,
    PdfPasswordDialogComponent,
    PdfPreparePrintingDialogComponent,
    PdfPresentationModeComponent,
    PdfPreviousPageComponent,
    PdfPrintComponent,
    PdfRotatePageComponent,
    PdfSearchInputFieldComponent,
    PdfSecondaryToolbarComponent,
    PdfSelectToolComponent,
    PdfShyButtonComponent,
    PdfSidebarComponent,
    PdfSidebarContentComponent,
    PdfSidebarToolbarComponent,
    PdfSinglePageModeComponent,
    PdfStampEditorComponent,
    PdfTextEditorComponent,
    PdfToggleSecondaryToolbarComponent,
    PdfToggleSidebarComponent,
    PdfToolbarComponent,
    PdfVerticalScrollModeComponent,
    PdfWrappedScrollModeComponent,
    PdfZoomDropdownComponent,
    PdfZoomInComponent,
    PdfZoomOutComponent,
    PdfZoomToolbarComponent,
    ResponsiveCSSClassPipe,
    TranslatePipe,

  ],
  providers: [],
  exports: [

  ],
})
export class NgxExtendedPdfViewerModule { }
