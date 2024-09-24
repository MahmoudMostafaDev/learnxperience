import Subscriber from "../models/subscriberModel.js";

export const newsletterController = {
    addSubscriber: async(req, res) => {
        const { email } = req.body;

  try {
    // Save the subscriber's email to the database
    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'You are already subscribed!' });
    } else {
      res.status(500).json({ message: 'Failed to subscribe!' });
    }
  }
    }
} 