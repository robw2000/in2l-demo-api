import { IProfile, PROFILE_DOC_TYPE } from './models/profile';
import { IWidget, WIDGET_DOC_TYPE } from './models/widget';

interface IApiConfig {
  testData: (IProfile | IWidget)[];
}
const apiConfig: IApiConfig = {
  testData: [
    {
      _id: 'profile1',
      docType: PROFILE_DOC_TYPE,
      userId: 'user1',
      firstName: 'John',
      lastName: 'Smith'
    },
    {
      _id: 'profile2',
      docType: PROFILE_DOC_TYPE,
      userId: 'user2',
      firstName: 'Susan',
      lastName: 'Kranst'
    },
    {
      _id: 'widget1',
      docType: WIDGET_DOC_TYPE,
      name: 'Surface Saver Supreme',
      price: 999.99,
      availableStock: 104
    },
    {
      _id: 'widget2',
      docType: WIDGET_DOC_TYPE,
      name: 'Perfect Paint Polisher',
      price: 24.99,
      availableStock: 539
    }
  ]
};

export { IApiConfig, apiConfig };
