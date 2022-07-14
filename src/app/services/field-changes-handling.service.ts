import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FieldTypes } from '../models/constants/FieldStyleTypes';
import { IBorderControl } from '../models/interfaces/IBorderControl';
import { IFieldStylingState } from '../models/interfaces/IFieldStylingState';
import { changeBackgroundColor, changeBorderColor, changeBorderControl, changeBorderStyle, changeBorderWidth, changeCheckboxStyle, changeFontSize, changeFontWeight, changeHeight, changeLabelText, changePlaceholderText, changeTextColor, changeWidth, toggleIsRequired } from '../reducers/drop/drop.section.actions';

@Injectable({
  providedIn: 'root'
})
export class FieldChangesHandlingService {

  constructor(private store$: Store<IFieldStylingState>) { }


  handleChanges(formType: string, value: any, elementId: number): void {
    switch (formType) {
      case FieldTypes.placeholderText:
        this.changePlaceholderText(elementId, value);
        break;
      case FieldTypes.width:
        this.changeWidth(elementId, value);
        break;
      case FieldTypes.height:
        this.changeHeight(elementId, value);
        break;
      case FieldTypes.fontSize:
        this.changeFontSize(elementId, value);
        break;
      case FieldTypes.fontWeight:
        this.changeFontWeight(elementId, value);
        break;
      case FieldTypes.borderStyle:
        this.changeBorderStyle(elementId, value);
        break;
      case FieldTypes.borderColor:
        this.changeBorderColor(elementId, value);
        break;
      case FieldTypes.borderWidth:
        this.changeBorderWidth(elementId, value);
        break;

      case FieldTypes.color:
        this.changeTextColor(elementId, value);
        break;

      case FieldTypes.backgroundColor:
        this.changeBackgroundColor(elementId, value)
        break;

      case FieldTypes.labelText:
        this.changeLabelText(elementId, value)
        break;

      case FieldTypes.borderControl:
        this.changeBorderControl(elementId, value)
        break;
      case FieldTypes.checkboxStyle:
        this.changecheckboxStyle(elementId, value)
        break;
      case FieldTypes.required:
        this.toggleIsRequired(elementId, value)
        break;
    }

  }

  private changePlaceholderText(elementID: number, newText: string) {
    this.store$.dispatch(changePlaceholderText({ elementID, newText }))
  }


  private changeWidth(elementID: number, width: string) {
    this.store$.dispatch(changeWidth({ elementID, width }))
  }

  private changeHeight(elementID: number, height: string) {
    this.store$.dispatch(changeHeight({ elementID, height }))
  }

  private changeFontSize(elementID: number, fontSize: string) {
    this.store$.dispatch(changeFontSize({ elementID, fontSize }))
  }

  private changeFontWeight(elementID: number, weight: string) {
    this.store$.dispatch(changeFontWeight({ elementID, weight }))
  }

  private changeBorderStyle(elementID: number, borderStyle: string) {
    this.store$.dispatch(changeBorderStyle({ elementID, borderStyle }));
  }

  private changeBorderColor(elementID: number, color: string) {
    this.store$.dispatch(changeBorderColor({ elementID, color }))
  }

  private changeBorderWidth(elementID: number, width: string) {
    this.store$.dispatch(changeBorderWidth({ elementID, width }))
  }

  private toggleIsRequired(elementID: number, required: boolean) {
    this.store$.dispatch(toggleIsRequired({ elementID, required }))
  }

  private changeTextColor(elementID: number, color: string) {
    this.store$.dispatch(changeTextColor({ elementID, color }));
  }

  private changeBackgroundColor(elementID: number, color: string) {
    this.store$.dispatch(changeBackgroundColor({ elementID, color }));
  }

  private changeBorderControl(elementID: number, borderControl: IBorderControl) {
    this.store$.dispatch(changeBorderControl({ elementID, borderControl }));
  }

  private changecheckboxStyle(elementID: number, style: string) {
    this.store$.dispatch(changeCheckboxStyle({ elementID, style }));
  }

  private changeLabelText(elementID: number, labelText: string) {
    this.store$.dispatch(changeLabelText({ elementID, labelText }));
  }
}


