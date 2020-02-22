import { Type, Component } from '@angular/core';
import { IElementComponent } from './element-component';

export interface IElementDefinition<T extends object> {
    selector: string,
    componentFactory: Type<IElementComponent<T>>,
}
