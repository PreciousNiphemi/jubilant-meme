export type InitiateTalkType = {
  title: string;
  attendee: string;
};

export type RemoveTalkType = {
  id: string;
};

export type AddAttendeeToTalk = {
  id: string;
  title: string;
  attendee: string;
};
