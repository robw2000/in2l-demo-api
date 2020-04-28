import { IDocument, Document } from './document';

interface IWidget extends IDocument {
  name: string;
  price: number;
  availableStock: number;
}

const WIDGET_DOC_TYPE = 'widget';

class Widget extends Document implements IWidget {
  id: string;
  docType: string;
  name: string;
  price: number;
  availableStock: number;

  constructor(data: IWidget) {
    super(data.id, WIDGET_DOC_TYPE);
    this.name = data.name || '';
    this.price = data.price || 0;
    this.availableStock = data.availableStock || 0;
  }
}

export { IWidget, WIDGET_DOC_TYPE, Widget };
