const { sendEmail } = require('../services/emailService');
const { EMAIL_TEXT_DEFAULT } = require('../resources/constants');


// Send an email confirmation.
const sendConfirmation = (order, orderChannel) => {
    var mailOptions = {
        to: '',
        text: EMAIL_TEXT_DEFAULT
    };
    orderContent = JSON.parse(order.content.toString());
    mailOptions.text += `Your order ${orderContent._id} amounting to ${orderContent.total} is confirmed and will be delivered shortly.`
    mailOptions.to = orderContent.email;
    sendEmail(mailOptions, (error, info) => {
        if (error) {
            logger.error(`Failed to send confirmation email to ${orderContent.email} for order ${orderContent._id}`);
        } else {
            logger.info(`Confirmation email sent successfully to ${orderContent.email} for order ID ${orderContent._id}`);
            orderChannel.ack(order);
        }
      });
}

module.exports = {
    sendConfirmation: sendConfirmation
}
