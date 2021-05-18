import { IProfile, PROFILE_DOC_TYPE } from './models/profile';
import { IWidget, WIDGET_DOC_TYPE } from './models/widget';

interface IApiConfig {
  testData: (IProfile | IWidget)[];
}
const apiConfig: IApiConfig = {
  testData: [
    {
      id: '8',
      docType: WIDGET_DOC_TYPE,
      name: 'Wagging Tail Window Wiper',
      price: 14.99,
      availableStock: 38
    },
    {
      id: '23',
      docType: WIDGET_DOC_TYPE,
      name: 'Squirrel Feeder',
      price: 49.99,
      availableStock: 2
    },
    {
      id: '1',
      docType: PROFILE_DOC_TYPE,
      userId: 'user1',
      firstName: 'John',
      lastName: 'Smith',
      roles: [
        'user'
      ],
      password: ''
    },
    {
      id: '2',
      docType: PROFILE_DOC_TYPE,
      userId: 'user2',
      firstName: 'Susan',
      lastName: 'Kranst',
      roles: [
        'user'
      ],
      password: ''
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
    },
    {
      id: '24',
      docType: WIDGET_DOC_TYPE,
      name: 'Squirrel Proof Bird Feeder',
      price: 74.49,
      availableStock: 56
    },
    {
      id: '25',
      docType: WIDGET_DOC_TYPE,
      name: 'Racoon Feeder',
      price: 74.49,
      availableStock: 56
    },
    {
      id: '26',
      docType: WIDGET_DOC_TYPE,
      name: 'Racoon Trap',
      price: 109.99,
      availableStock: 100
    },
    {
      id: '5',
      docType: PROFILE_DOC_TYPE,
      userId: 'user3',
      firstName: 'John',
      lastName: 'Banner',
      roles: [
        'user'
      ],
      password: ''
    },
    {
      id: '99',
      docType: PROFILE_DOC_TYPE,
      userId: 'user99',
      firstName: 'John',
      lastName: 'Doe',
      roles: [
        'admin',
        'user'
      ],
      password: '$2a$10$dBU1NiPzHNjU/rrWcwRaQOmV8VhWHi0nii9XSbzFpReQLLBjD22U.'
    },
    {
      id: '86',
      docType: PROFILE_DOC_TYPE,
      userId: 'agent86',
      firstName: 'Maxwell',
      lastName: 'Smart',
      roles: [
        'admin',
        'user'
      ],
      password: '$2a$10$dBU1NiPzHNjU/rrWcwRaQOzcz5VXxjA0eSDKWQSzilSiS8K.pGPrq'
    }
  ]
};

export { IApiConfig, apiConfig };
