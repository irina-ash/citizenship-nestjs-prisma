import { ReturnCityDto } from 'src/city/city.dto';

export class CountryReturnDto {
  id: number;
  value?: string;
  title?: string;
  name?: string;
  cities?: ReturnCityDto[];
}
