import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    //template:'<h1>this is a property card</h1>',
    templateUrl: 'property-card.component.html',
    //styles:['h1{font-weight:normal;}']
    styleUrls:['property-card.component.css']

})
export class PropertyCardComponent{
Property:any={
"Id":1,
"Type":"House",
"Price":1200000,
"Name":"2BHK"
}
}