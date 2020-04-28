interface IDocument {
  id: string;
  docType: string;
}

class Document implements IDocument {
  id: string;
  docType: string;

  constructor(id: string, docType: string) {
    this.id = id;
    this.docType = docType;
  }
}

export { IDocument, Document };
