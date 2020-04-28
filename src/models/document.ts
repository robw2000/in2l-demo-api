interface IDocument {
  _id: string;
  docType: string;
}

class Document implements IDocument {
  _id: string;
  docType: string;

  constructor(id: string, docType: string) {
    this._id = id;
    this.docType = docType;
  }
}

export { IDocument, Document };
