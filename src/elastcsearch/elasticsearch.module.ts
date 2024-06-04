import { Global, Module } from '@nestjs/common';
import { ElasticsearchService } from './elasticsearch.service';
import { Client } from '@elastic/elasticsearch';

@Global()
@Module({
  providers: [
    {
      provide: 'ELASTICSEARCH_CLIENT',
      useFactory: async () => {
        const client = new Client({
          node: 'http://localhost:9200',
        });
        return client;
      },
    },
    ElasticsearchService,
  ],
  exports: ['ELASTICSEARCH_CLIENT', ElasticsearchService],
})
export class ElasticsearchModule {}
