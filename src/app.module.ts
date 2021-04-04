import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    RestaurantModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// appModule은 main으로 import되는 유일한 모듈
// forRoot ? root module을 설정하는 거야
// 이경우에는 GraphQL이 forRoot에 해당

// schema ? 우리는 GraphQL 파일을 작성할 건데
// code first
