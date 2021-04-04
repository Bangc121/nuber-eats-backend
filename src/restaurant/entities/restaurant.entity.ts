// entities ? 데이터베이스에 있는 모델

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;
  @Field(() => Boolean, { nullable: true })
  isVegan?: boolean;
  @Field(() => String)
  address: string;
  @Field(() => String)
  ownerName: string;
}

// Restaurant에 대한 object type을 만들어줘
