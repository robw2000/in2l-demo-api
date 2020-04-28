import { IProfile, PROFILE_DOC_TYPE, Profile } from './profile';
import { IWidget, Widget, WIDGET_DOC_TYPE } from './widget';

type DocTypeInterface = IProfile | IWidget;
type DocTypeClass = Profile | Widget;

class ModelFactory {
  static create(data?: DocTypeInterface): DocTypeClass {
    if (!data || !data.docType) {
      return undefined;
    }

    if (data.docType === PROFILE_DOC_TYPE) {
      return new Profile(<IProfile>data);
    }

    if (data.docType === WIDGET_DOC_TYPE) {
      return new Widget(<IWidget>data);
    }

    return undefined;
  }
}

export { ModelFactory };
