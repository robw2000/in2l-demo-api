import { IDocument, Document } from './document';

interface IProfile extends IDocument {
  userId: string;
  firstName: string;
  lastName: string;
  roles: string[];
  password: string;
}

const PROFILE_DOC_TYPE = 'profile';

class Profile extends Document implements IProfile {
  id: string;
  docType: string;
  userId: string;
  firstName: string;
  lastName: string;
  roles: string[];
  password: string;

  constructor(data: IProfile) {
    super(data.id, PROFILE_DOC_TYPE);
    this.userId = data.userId || '';
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.roles = data.roles || [];
    this.password = data.password || '';
  }
}

export { IProfile, PROFILE_DOC_TYPE, Profile };
