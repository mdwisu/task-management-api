import { IsBoolean, IsOptional, IsString } from 'class-validator';

// src/tasks/dto/update-task.dto.ts
export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsBoolean()
  readonly isCompleted: boolean;
}
