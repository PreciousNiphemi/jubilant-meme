type AttendeeType = {
  dateCreated: string;
  email: string;
  name: string;
  __v?: number;
  _id?: string;
};

type SenderType = {
  dateCreated: string;
  email: string;
  name: string;
  __v?: number;
  _id?: string;
};

type ChatType = {
  dateCreated: string;
  email: string;
  message: string;
  __v?: number;
  _id?: string;
};

export type EachTalkTypeProps = {
  attendees?: AttendeeType[];
  chats?: ChatType[];
  id: string;
  title: string;
};
