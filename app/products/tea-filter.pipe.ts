import { Pipe, PipeTransform } from '@angular/core';
import { ITea } from './tea';

@Pipe({
	name:'teaFilter'
})
export class TeaFilterPipe implements PipeTransform {

	transform(value: ITea[], filterBy: string): ITea[] {
		filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
		return filterBy ? value.filter((tea: ITea) =>
				tea.teaName.toLocaleLowerCase().indexOf(filterBy) != -1 ||
				tea.teaType.toLocaleLowerCase().indexOf(filterBy) != -1 ||
				tea.teaDescription.toLocaleLowerCase().indexOf(filterBy) != -1
			) : value;
	}
}