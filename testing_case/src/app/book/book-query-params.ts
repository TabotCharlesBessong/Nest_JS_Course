import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class BookQueryParams {
  @IsOptional()
  @Type(() => String)
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit: number = 10;

  @IsOptional()
  @Type(() => String)
  @IsString()
  sortBy: string | null = 'title';

  @IsOptional()
  @Type(() => String)
  @IsString()
  sortOrder: 'asc' | 'desc' = 'asc';
}
