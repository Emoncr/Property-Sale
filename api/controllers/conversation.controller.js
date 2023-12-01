import Conversation from "../models/conversation.models.js";
import { throwError } from "../utils/error.js";

// Get Conversation controller
export const getConversation = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(throwError(401, "user is not valid"));

  try {
    const userConversation = await Conversation.find({
      $or: [{ creatorId: req.params.id }, { participantId: req.params.id }],
    });
    res.status(200).json(userConversation);
  } catch (error) {
    next(error);
  }
};

// Post Conversation controller

export const createConversation = async (req, res, next) => {
  if (req.user.id != req.body.creatorId)
    return next(throwError(401, "user is not valid"));

  if (req.body.creatorId === req.body.perticipantId)
    return next(throwError(402, "request error"));

  try {
    // check is new conversation or not
    const conversations = await Conversation.find({
      $or: [
        {
          $and: [
            { creatorId: req.body.creatorId },
            { participantId: req.body.participantId },
          ],
        },
        {
          $and: [
            { creatorId: req.body.participantId },
            { participantId: req.body.creatorId },
          ],
        },
      ],
    });

    if (conversations.length === 0) {
      const newConversation = Conversation(req.body);
      await newConversation.save();
      res.status(201).json("conversation created succesfully");
    } else {
      res.status(403).json("conversation already exist");
    }
  } catch (error) {
    next(error);
  }
};

// ====== Delete Conversations ==========//

export const deleteConversation = async (req, res, next) => {
  const chatId = req.params.chatId;
  try {
    await Conversation.findByIdAndDelete(chatId);
    res.status(204).json("conversation deleted successfully");
  } catch (error) {
    next(error);
  }
};
