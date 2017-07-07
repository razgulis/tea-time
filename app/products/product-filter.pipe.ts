import { Pipe, PipeTransform } from '@angular/core';
import { ITea } from './product';

@Pipe({
	name:'teaFilter'
})
export class ProductFilterPipe implements PipeTransform {

	transform(value: ITea[], filterBy: string): ITea[] {
		filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
		return filterBy ? value.filter((tea: ITea) =>
				tea.teaName.toLocaleLowerCase().indexOf(filterBy) != -1 ||
				tea.teaType.toLocaleLowerCase().indexOf(filterBy) != -1 ||
				tea.teaDescription.toLocaleLowerCase().indexOf(filterBy) != -1
			) : value;
	}
}