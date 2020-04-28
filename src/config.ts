import { IProfile, PROFILE_DOC_TYPE } from './models/profile';
import { IWidget, WIDGET_DOC_TYPE } from './models/widget';

interface IApiConfig {
  testData: (IProfile | IWidget)[];
}
const apiConfig: IApiConfig = {
  testData: [
    {
      id: '1',
      docType: PROFILE_DOC_TYPE,
      userId: 'user1',
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      id: '2',
      docType: PROFILE_DOC_TYPE,
      userId: 'user2',
      firstName: 'Susan',
      lastName: 'Kranst'
    },
    {
      id: '3',
      docType: WIDGET_DOC_TYPE,
      name: 'Surface Saver Supreme',
      price: 999.99,
      availableStock: 104
    },
    {
      id: '4',
      docType: WIDGET_DOC_TYPE,
      name: 'Perfect Paint Polisher',
      price: 24.99,
      availableStock: 539
    }
  ]
};

export { IApiConfig, apiConfig };
