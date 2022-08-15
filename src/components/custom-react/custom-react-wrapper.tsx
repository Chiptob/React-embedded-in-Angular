// Angular imports
import {
    AfterViewInit,
    Component,
    ElementRef,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
  } from '@angular/core';
  
  import { CustomReact, WeatherInterface, AngularButtonTest } from "src/components/custom-react/custom-react";

  // React imports
  import * as React from 'react';
  import * as ReactDOM from 'react-dom';
  
  const containerElement = 'customReactContainer';
  
  @Component({
    selector: 'app-my-custom-component',
    template: `<span #${containerElement}></span>`,
    styleUrls: ['./custom-react.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
  })


  export class CustomReactWrapper implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElement, {static: false}) containerRef: ElementRef;
  
    weather: WeatherInterface = {
      city: "Frankfurt am Main",
      country: "Deutschland",
      date: new Date(),
      temperature: 5,
      description: "Sonnig",
  };

    constructor() {}

    static angularClickEvent() {
      console.log("Wrapper");
      AngularButtonTest();
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.render();
    }
  
    ngAfterViewInit() {
      this.render();
    }
  
    ngOnDestroy() {
      ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
    }
   
    private render() {
      ReactDOM.render(
        <div className={'custom-react-component'}>
          <CustomReact  props={this.weather} />
        </div>, this.containerRef.nativeElement);
    }

    
  }
  