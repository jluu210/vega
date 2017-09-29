import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    ngOnInit(): void {
        $(function () {
            $("h2").addClass("beautify");
        });

        $("#firstBtn").dblclick(function () {

            $("#statement").hide();
        });
    }

   
    
}
