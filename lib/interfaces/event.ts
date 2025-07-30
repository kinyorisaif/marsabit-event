export interface Event {
    "id": string,
    "title": string,
    "description": string,
    "category": EventCategory,
    "venue": string,
    "address": string,
    "latitude": string,
    "start_date": Date,
    "end_date": Date,
    "organizer_name": string,
    "organizer_email": string,
    "organizer_phone": string,
    "images_url": string[],
    "tags": string[],
}

export enum EventCategory {
    CULTURAL = "Cultural",
    SPORTS = "Sports",
    MUSIC = "Music",
    ART = "Art",
    TECHNOLOGY = "Technology"
}