/*

1. if ticket number is less then 100, par ticket price: 100.
2. if ticket number is more then 100, but less then 200, first 100 tickets will be 100/ticket.
Rest tickets will be 90 taka par piece.
    first 100 ----> 100tk
    rest ------> 90tk
3. if you will purchase more then 200 tickets
    first 100 ----> 100 tk
    100 - 200 ----> 90 tk
    200 + -----> 70 tk

*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(120);
console.log('Ticket price: ', price);