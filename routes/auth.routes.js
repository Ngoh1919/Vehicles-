import { Router } from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => {
    res.send({title: 'Get list for cars in auction'});
});

authRouter.get('/:auctionId', (req, res) => {
    res.send(`Get a particular auction item with id}`);
});

authRouter.post('/:auctionId', (req, res) => {
    res.send({title: 'Add a new auction item'});
});

authRouter.post('/:auctionId/bid', (req, res) => {
    res.send({title: 'place a bid for a particular auction item'});
});
authRouter.get('/:auctionId/bids', (req, res) => {    
    res.send({title: 'Get all bids for a particular auction'});
}); 
authRouter.post('/:auctionId/member', (req, res) => {
    res.send({title: 'Add a new auction member'});
});

export default authRouter;

// auth == auc :)