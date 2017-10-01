import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-modal';

import { TeaListComponent } from './tea-list.component';
import { TeaDetailComponent } from './tea-detail.component';
//import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { TeaGuardService } from './tea-guard.service';
import { TeaService } from './tea.service';
import { TeaFilterPipe } from './tea-filter.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'teas', component: TeaListComponent },
			{ path: 'teas/:id',
				canActivate: [ TeaGuardService ],
				component: TeaDetailComponent },
		]),
		SharedModule,
		ModalModule
	],
	declarations: [
		TeaListComponent,
		TeaDetailComponent,
		TeaFilterPipe,
	],
	providers: [
		TeaService,
		TeaGuardService
	]
})
export class TeaModule { }