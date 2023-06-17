import { InitiateTalkType, RemoveTalkType, AddAttendeeToTalk } from "./type";
import { apiRequest } from "@/utils/apiRequest";
export const intiateTalk = (data: InitiateTalkType) =>
  apiRequest("/talk", "POST", data);

export const removeTalk = ({ id }: RemoveTalkType) =>
  apiRequest(`/talk/${id}`, "DELETE");

export const getAllTalks = () => apiRequest("/talk", "GET");

export const addAttendeeToTalk = ({
  id,
  title,
  attendee,
}: AddAttendeeToTalk) => {
  const data = {
    title,
    attendee,
  };
  return apiRequest(`/talk/${id}/attendee`, "PUT", data);
};
