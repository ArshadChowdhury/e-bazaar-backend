export class CreateProductDto {
  readonly imageUrl: string;
  readonly name: string;
  readonly price: string;
  readonly slug: string;
  readonly discount_startDate: string;
  readonly discount_endDate: string;
}
