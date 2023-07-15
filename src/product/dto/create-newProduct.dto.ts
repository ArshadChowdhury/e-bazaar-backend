export class CreateProductDto {
  readonly imageUrl: string;
  readonly name: string;
  readonly price: number;
  readonly slug: string;
  readonly discount_startDate: number;
  readonly discount_endDate: number;
}
