import { Request, Response, Router } from 'express';
import { ModelFactory } from '../../models/model-factory';
import { Widget, WIDGET_DOC_TYPE } from '../../models/widget';
import { CouchbaseService } from '../../services/couchbase.service';
import HttpStatusCodes from 'http-status-codes';


const widgetRouter: Router = Router();
const service: CouchbaseService = new CouchbaseService();

// @route   GET api/widgets/:name?
// @desc    Get a widget document
widgetRouter.get('/:name?', async (req: Request, res: Response) => {
    const name = req.params.name;
    let items = [];
    try {
        items = await service.getAllByType(WIDGET_DOC_TYPE, 'name', name);
        const widgets: Widget[] = items.map(
            item => <Widget>ModelFactory.create(item)
        );
        res.json(widgets);
    } catch (err) {
        console.error(err.message);
        res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
    }
});

export { widgetRouter };