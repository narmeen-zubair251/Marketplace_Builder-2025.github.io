import {  groq } from "next-sanity";

export const allFood =groq`*[_type =="food"][0..7]`;

    export const Chef =groq`
        *[_type =="chef"] {
        _id,
        name,
        position,
        experience,
        speciality,
        "imageUrl": image.asset->url
        }
        `