import { apiConfig } from '../config';
import { IWidget } from '../models/widget';
import { IProfile } from '../models/profile';

export class CouchbaseService {
  constuctor() {}

  get(id: string): Promise<IProfile | IWidget> {
    return new Promise((resolve, reject) => {
      const item = apiConfig.testData.find(item => item._id === id);

      item ? resolve(item) : reject(new Error('Not Found'));
    });
  }

  getAllByType(docType: string): Promise<(IProfile | IWidget)[]> {
    return new Promise((resolve, reject) => {
      const items = apiConfig.testData.filter(item => item.docType === docType);

      items ? resolve(items) : reject(new Error('Not Found'));
    });
  }
}
