import { IDocument, Document } from './document';

interface IProfile extends IDocument {
  userId: string;
  firstName: string;
  lastName: string;
}

const PROFILE_DOC_TYPE = 'profile';

class Profile extends Document implements IProfile {
  _id: string;
  docType: string;
  userId: string;
  firstName: string;
  lastName: string;

  constructor(data: IProfile) {
    super(data._id, PROFILE_DOC_TYPE);
    this.userId = data.userId || '';
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
  }
}

export { IProfile, PROFILE_DOC_TYPE, Profile };
