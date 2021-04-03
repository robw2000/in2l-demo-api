import { apiConfig } from '../config';
import { IWidget } from '../models/widget';
import { IProfile } from '../models/profile';

export class CouchbaseService {
  constuctor() {}

  get(id: string): Promise<IProfile | IWidget> {
    return new Promise((resolve, reject) => {
      try {
        const item: IProfile | IWidget = apiConfig.testData.find(item => item.id === id);
        if (item) {
          resolve(item);
        } else {
          reject(new Error('Not Found'));
        }
      } catch (err) {
        reject(new Error('Unknown Error'));
      }
    });
  }

  getAllByType(docType: string, filterByField?: string, filterByValue?: string): Promise<(IProfile | IWidget)[]> {
    return new Promise((resolve, reject) => {
      try {
        const items = apiConfig.testData.filter(
          item => {
            if (!filterByField || !filterByValue || !(<any>item)[filterByField]) {
              return item.docType === docType;
            }

            return item.docType === docType && ((<any>item)[filterByField] || '').includes(filterByValue);
          }
        );

        if (items && items.length) {
          resolve(items);
        } else {
          reject(new Error('Not Found'));
        }
      } catch (err) {
        reject(new Error('Unknown Error'));
      }
    });
  }
}
