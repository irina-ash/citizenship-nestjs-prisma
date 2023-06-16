import { ReturnCityDto } from 'src/city/city.dto';

export class RegionReturnDto {
  id: number;
  value?: string;
  title?: string;
  name?: string;
  cities?: ReturnCityDto[];
}
