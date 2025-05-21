import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Learn NestJS',
    required: false,
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  title?: string;

  @ApiProperty({
    description: 'Whether the task is completed or not',
    example: true,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
