import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    template: `
        <div class="row">
            <div class="col-md-10">
                <div class="navbox">
                    <ul class="nav nav-pills">
                        <li role="presentation"><a [routerLink]="['']">Home</a></li>
                        <li role="presentation"><a [routerLink]="['./lexicon']">Lexicon</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent {}