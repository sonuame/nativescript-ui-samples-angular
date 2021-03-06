import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { PersonBase } from "../../data-services/person";
import { DataFormFontStyle, PropertyEditor } from "nativescript-ui-dataform";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { Color } from "tns-core-modules/color";

@Component({
    moduleId: module.id,
    selector: "tk-dataform-editor-style",
    templateUrl: "dataform-editor-style.component.html",
    styleUrls: ['dataform-editor-style.component.css']
})
export class DataformEditorStyleComponent implements OnInit, AfterViewInit {
    private _person: PersonBase;
    private _nameEditor: PropertyEditor;
    private _ageEditor: PropertyEditor;
    private _birthDateEditor: PropertyEditor;

    constructor() {
    }

    @ViewChild("myDataForm") dataFormComponent: RadDataFormComponent;

    ngOnInit() {
        this._person = new PersonBase("John", 23, "1993-05-16");
    }

    ngAfterViewInit() {
        this._nameEditor = this.dataFormComponent.dataForm.getPropertyByName("name").editor as PropertyEditor;
        this._ageEditor = this.dataFormComponent.dataForm.getPropertyByName("age").editor as PropertyEditor;
        this._birthDateEditor = this.dataFormComponent.dataForm.getPropertyByName("birthDate").editor as PropertyEditor;
    }

    get person(): PersonBase {
        return this._person;
    }

    public onSet(args) {
        this._nameEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;
        this._ageEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;
        this._birthDateEditor.propertyEditorStyle.labelFontStyle = DataFormFontStyle.BoldItalic;

        this._nameEditor.propertyEditorStyle.labelFontName = "Times New Roman";
        this._ageEditor.propertyEditorStyle.labelFontName = "Times New Roman";
        this._birthDateEditor.propertyEditorStyle.labelFontName = "Times New Roman";

        this._nameEditor.propertyEditorStyle.labelTextSize = 20;
        this._ageEditor.propertyEditorStyle.labelTextSize = 20;
        this._birthDateEditor.propertyEditorStyle.labelTextSize = 20;

        this._nameEditor.propertyEditorStyle.labelTextColor = new Color("orange");
        this._ageEditor.propertyEditorStyle.labelTextColor = new Color("purple");
        this._birthDateEditor.propertyEditorStyle.labelTextColor = new Color("lime");
    }
}