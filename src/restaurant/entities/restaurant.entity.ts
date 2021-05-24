// entities ? 데이터베이스에 있는 모델
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true }) // InputType이 스키마에 포함되지 않길 원함
@ObjectType()
@Entity()
export class Restaurant {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(() => Boolean, { nullable: true })
  @Column()
  @IsBoolean()
  @IsOptional()
  isVegan?: boolean;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;

  @Field(() => String)
  @Column()
  @IsString()
  ownerName: string;

  @Field(() => String)
  @Column()
  @IsString()
  categoryName: string;
}

// Restaurant에 대한 object type을 만들어줘
// 그래프큐엘 스키마와 db에 저장되는 실제 데이터의 형식을 만들수있다. 데코레이터를 사용해서

//nestjs + typeorm repository 사용가능 어디서든지 접근 가능, 테스트에도 접근 가능
