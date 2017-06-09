import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';
import { LexiconComponent } from '../lexicon/lexicon.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },           
            { path: 'lexicon', component: LexiconComponent },
            { path: '**', component: ErrorComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}