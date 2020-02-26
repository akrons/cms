import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Input, ComponentRef } from '@angular/core';
import { IPayload } from '../../payload';
import { ElementManagerService } from '../../services/element-manager.service';
import { IElementComponent } from '../../element-component';

@Component({
  selector: 'cms-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @ViewChild('placeholder', { read: ViewContainerRef, static: true }) placeholder: ViewContainerRef;
  @Input() payload: IPayload;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementManagerService: ElementManagerService,
  ) { }

  ngOnInit(): void {
    this.placeholder.clear();
    const componentRef = this.elementManagerService.getElement(this.payload.selector);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentRef);
    const componentInstance: ComponentRef<IElementComponent<object>> = this.placeholder.createComponent(componentFactory);
    componentInstance.instance.data = this.payload.data;
  }

}
