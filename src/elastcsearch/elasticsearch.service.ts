import { Inject, Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  constructor(
    @Inject('ELASTICSEARCH_CLIENT')
    private readonly client: Client,
  ) {}

  async search(index: string, query: any) {
    // const { body } = await this.client.search({
    //   index,
    //   body: query,
    // });
    // return body;
  }
}
