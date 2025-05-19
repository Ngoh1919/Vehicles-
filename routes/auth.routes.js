import { Router } from 'express';

const authRouter = Router();

authRouter.get('/', (req, res) => {
    res.send('Auction list');
});

authRouter.get('/:auctionId', (req, res) => {
    const { auctionId } = req.params;
    res.send(`Auction ID: ${auctionId}`);
});
authRouter.post('/:auctionId/bid', (req, res) => {
    const { auctionId } = req.params;
    const { bidAmount } = req.body;
    res.send(`Bid of ${bidAmount} placed on auction ID: ${auctionId}`);
});
authRouter.get('/:auctionId/bids', (req, res) => {
    const { auctionId } = req.params;
    res.send(`Bids for auction ID: ${auctionId}`);
}); 
authRouter.post('/auctionID', (req, res) => {
    const { auctionItem } = req.body;
    res.send(`Auction item created: ${auctionItem}`);
});

export default authRouter;