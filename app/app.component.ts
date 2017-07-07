import { Component } from "@angular/core";
import { TeaService } from './products/product.service';

@Component({
	selector: 'pm-app',
	template: `<div class="outer-shell">
					<h1>
						{{pageTitle}}
						<img src="app/assets/images/happy-tea-friends.jpg" style="width:128px;height:128px">
					</h1>
					<pm-products></pm-products>
				</div>`,
	providers: [TeaService]

})

export class AppComponent {
	pageTitle: string = 'Happy Tea Time with Happy Tea Friends';
}