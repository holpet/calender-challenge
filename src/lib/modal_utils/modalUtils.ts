import { EventInput } from "@fullcalendar/core/index.js";
import { v4 as uuidv4 } from "uuid";

export const INIT_MODAL_DATA = {
  title: "",
  color: "purple",
  font: "text-global",
};

export function createNewEvent(start: Date, end: Date) {
  return {
    id: uuidv4(),
    title: "",
    start: start,
    end: end,
    color: "purple",
    font: "text-global",
  };
}

export function populateModal(event: EventInput) {}

export const LEGEND_COLORS = {
  orange: {
    name: "orange",
    meaning: "High Priority",
    colorClass: "bg-orange",
    colorBgClass: "bg-orange-300",
    colorTextClass: "text-orange",
  },
  green: {
    name: "green",
    meaning: "Mid Priority",
    colorClass: "bg-green",
    colorBgClass: "bg-green-300",
    colorTextClass: "text-green",
  },
  pink: {
    name: "pink",
    meaning: "Special Event",
    colorClass: "bg-pink",
    colorBgClass: "bg-pink-300",
    colorTextClass: "text-pink",
  },
  purple: {
    name: "purple",
    meaning: "Standard Event",
    colorClass: "bg-purple",
    colorBgClass: "bg-purple-300",
    colorTextClass: "text-purple",
  },
  white: {
    name: "white",
    meaning: "?",
    colorClass: "bg-white border border-light-gray",
    colorBgClass: "bg-white",
    colorTextClass: "text-white",
  },
};